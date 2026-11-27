import { useEffect, useRef, useCallback, useState } from "react";
import { useLenis } from "lenis/react";

/* ─────────────────────────────────────────────
   Custom cubic-bezier: (0.76, 0, 0.24, 1)
   Solved per-frame via Newton's method.
   Use this instead of CSS ease — it runs on
   every scroll tick, not on a CSS transition.
───────────────────────────────────────────── */
function cubicBezier(t: number): number {
  const p1x = 0.76, p1y = 0, p2x = 0.24, p2y = 1;
  const cx = 3 * p1x, bx = 3 * (p2x - p1x) - cx, ax = 1 - cx - bx;
  const cy = 3 * p1y, by = 3 * (p2y - p1y) - cy, ay = 1 - cy - by;
  let s = t;
  for (let i = 0; i < 8; i++) {
    const ex = ((ax * s + bx) * s + cx) * s - t;
    const dx = (3 * ax * s + 2 * bx) * s + cx;
    if (Math.abs(dx) < 1e-7) break;
    s -= ex / dx;
  }
  return ((ay * s + by) * s + cy) * s;
}

/* ─────────────────────────────────────────────
   CONFIG — change these for your project
───────────────────────────────────────────── */
const RECT_W = 340;   // initial box width  (px)
const RECT_H = 220;   // initial box height (px)

function hexToRgb(hex: string): string {
  const clean = hex.replace("#", "").trim();
  const length = clean.length;
  if (length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return `${r},${g},${b}`;
  }
  if (length === 6) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return `${r},${g},${b}`;
  }
  return "0,0,0";
}

/* ─────────────────────────────────────────────
   PORTAL COMPONENT
   Props:
     children  — content revealed inside the portal
     bg        — background color (default white)
     lineColor — SVG line color   (default black)
───────────────────────────────────────────── */
export const Portal = ({
  children,
  bg = "white",
  lineColor = "#000",
}: {
  children: React.ReactNode;
  bg?: string;
  lineColor?: string;
}) => {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const bridgeLineRef = useRef<SVGPathElement>(null);
  const portalRectRef = useRef<HTMLDivElement>(null);
  const portalInnerRef= useRef<HTMLDivElement>(null);
  const svgContainerRef= useRef<HTMLDivElement>(null);

  const sectionTopRef  = useRef(0);
  const totalLineLenRef= useRef(0);
  const rafRef         = useRef<number>(0);
  const [ready, setReady]   = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const vwRef = useRef(typeof window !== "undefined" ? window.innerWidth : 1000);
  const vhRef = useRef(typeof window !== "undefined" ? window.innerHeight : 1000);

  /* ── Measure: calculate SVG path + section height ── */
  const measure = useCallback(() => {
    // Only update measurements if width changed (orientation change) or initial
    if (Math.abs(vwRef.current - window.innerWidth) > 10 || !ready) {
      vwRef.current = window.innerWidth;
      vhRef.current = window.innerHeight;
    }

    const vw = vwRef.current;
    const vh = vhRef.current;

    const mobile = vw < 1024;
    setIsMobile(mobile);

    if (sectionRef.current) {
      sectionTopRef.current =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
    }

    let path = "";

    if (!mobile) {
      /*
       * Desktop arc: starts from ≈15% from the left at the TOP of this
       * section (y=0), curves down to the LEFT EDGE of the centered box.
       */
      const scX    = vw / 3000;
      const AX     = 1500 + 1100 * Math.cos(196 * Math.PI / 180);
      const startX = AX * scX;           // ≈ 15% from left
      const endX   = vw / 2 - RECT_W / 2; // left edge of portal box
      const endY   = vh / 2;              // vertical center
      const R_px   = 1100 * scX;          // arc radius in real px
      path = `M ${startX},0 A ${R_px},${R_px} 0 0,0 ${endX},${endY}`;
    } else {
      /* Mobile: straight vertical line from top → box */
      path = `M ${vw / 2},-10 L ${vw / 2},${vh / 2 - RECT_H / 2}`;
    }

    if (bridgeLineRef.current) {
      bridgeLineRef.current.setAttribute("d", path);
      try {
        const len = bridgeLineRef.current.getTotalLength();
        if (len > 0) totalLineLenRef.current = len;
      } catch (_) {}
    }

    /* Section must be tall enough for the full expansion animation */
    if (portalInnerRef.current && sectionRef.current) {
      const innerH   = portalInnerRef.current.scrollHeight;
      const totalH   = vh * 1.2 + innerH;
      sectionRef.current.style.height    = `${totalH}px`;
      sectionRef.current.style.minHeight = `${totalH}px`;
    }

    setReady(true);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => { measure(); setTimeout(measure, 150); });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(rafRef.current);
    };
  }, [measure]);

  /* ── Scroll driver (fires on every Lenis tick) ── */
  useLenis(({ scroll }) => {
    if (!ready) return;
    cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const line   = bridgeLineRef.current;
      const box    = portalRectRef.current;
      const inner  = portalInnerRef.current;
      const svgCont= svgContainerRef.current;
      const totalLen = totalLineLenRef.current;
      if (!box || !inner) return;

      const vh = vhRef.current;
      const vw = vwRef.current;

      /* localScroll: 0 = top of this section, positive = scrolled into it */
      const localScroll = scroll - sectionTopRef.current;

      /* ── Phase 1: SVG line draws toward box ── */
      if (line && svgCont && totalLen > 0) {
        /*
         * drawProgress 0→1 as the section scrolls into view.
         * +vh offset means drawing starts before the section top hits.
         */
        const drawProgress = Math.min(Math.max((localScroll + vh) / vh, 0), 1);
        line.style.strokeDasharray  = `${totalLen}`;
        line.style.strokeDashoffset = `${(totalLen - drawProgress * totalLen).toFixed(1)}`;
      }

      /* Hide box until section is close to entering */
      if (localScroll < -vh * 0.35) {
        box.style.visibility = "hidden";
        box.style.opacity    = "0";
      } else {
        box.style.visibility = "visible";
        box.style.opacity    = "1";
      }

      /* ── Phase 2 & 3: Box expands from RECT_W×RECT_H → full viewport ── */
      if (localScroll <= 0) {
        /* Section not yet reached — box at initial size, absolute */
        box.style.position  = "absolute";
        box.style.top       = "50vh";
        box.style.transform = `translate3d(0,0,0) scale(1,1)`;
        inner.style.transform = `translate3d(0,0,0) scale(1,1)`;
        box.style.overflow  = "hidden";
        if (svgCont) { svgCont.style.position = "absolute"; svgCont.style.top = "0"; }

      } else {
        /*
         * expansionRunway = how many px of scroll the expansion takes.
         * 1.2× vh gives a comfortable 120% viewport of scroll space.
         */
        const expansionRunway    = vh * 1.2;
        const expansionProgress  = Math.min(Math.max(localScroll / expansionRunway, 0), 1);
        const e = cubicBezier(expansionProgress); // eased 0→1

        if (expansionProgress < 1) {
          /* Pinned to viewport center while expanding */
          box.style.position = "fixed";
          box.style.top      = "50%";
          box.style.overflow = "hidden";
          if (svgCont) { svgCont.style.position = "fixed"; svgCont.style.top = "0"; }
        } else {
          /* Expansion done — unpin, sit at absolute final position */
          box.style.position = "absolute";
          box.style.top      = `${expansionRunway + vh / 2}px`;
          box.style.overflow = "visible";
          if (svgCont) { svgCont.style.position = "absolute"; svgCont.style.top = `${expansionRunway}px`; }
        }

        /*
         * Independent X and Y scales so the box fills EXACTLY the viewport
         * regardless of aspect ratio.
         */
        const scaleX = 1 + e * (vw / RECT_W - 1);
        const scaleY = 1 + e * (vh / RECT_H - 1);
        box.style.transform   = `translate3d(0,0,0) scale(${scaleX.toFixed(4)},${scaleY.toFixed(4)})`;

        /*
         * Counter-scale the inner content so it stays full-size
         * and doesn't stretch with the box.
         */
        inner.style.transform = `translate3d(0,0,0) scale(${(1 / scaleX).toFixed(4)},${(1 / scaleY).toFixed(4)})`;

        /* Border fades out as box expands past 50% */
        const borderOpacity = Math.max(0, 1 - e / 0.5);
        box.style.borderWidth = borderOpacity < 0.01 ? "0px" : "2px";
        const rgb = hexToRgb(lineColor);
        box.style.borderColor = `rgba(${rgb},${borderOpacity.toFixed(3)})`;
      }
    });
  });

  return (
    <section
      ref={sectionRef}
      style={{ 
        position: "relative", 
        background: bg, 
        minHeight: "320vh",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        zIndex: 5
      }}
    >
      <div
        ref={svgContainerRef}
        style={{
          position: "absolute", top: 0, left: 0,
          width: "100vw", height: "100vh",
          pointerEvents: "none", zIndex: 10,
          willChange: "transform, top, position",
        }}
      >
        <svg width="100%" height="100%" style={{ overflow: "visible" }}>
          <path
            ref={bridgeLineRef}
            fill="none"
            stroke={lineColor}
            strokeLinecap="round"
            style={{
              strokeWidth: isMobile ? "0.8vw" : "10px",
              strokeDasharray: "99999",
              strokeDashoffset: "99999",
            }}
          />
        </svg>
      </div>

      {/* Portal box — starts small, expands to full screen */}
      <div
        ref={portalRectRef}
        style={{
          position: "absolute",
          top: "50vh", left: "50%",
          width: `${RECT_W}px`, height: `${RECT_H}px`,
          marginLeft: `-${RECT_W / 2}px`,
          marginTop:  `-${RECT_H / 2}px`,
          background: bg,
          border: `2px solid ${lineColor}`,
          visibility: "hidden", opacity: 0,
          zIndex: 50, overflow: "hidden",
          transformOrigin: "center center",
          willChange: "transform",
        }}
      >
        {/* Inner wrapper — counter-scaled to neutralize box stretch */}
        <div
          ref={portalInnerRef}
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            width: "100vw", height: "100vh",
            marginLeft: "-50vw", marginTop: "-50vh",
            display: "flex", alignItems: "center", justifyContent: "center",
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
