import { useRef, useState, useEffect } from "react";
import { useLenis } from "lenis/react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const [colsVisible, setColsVisible] = useState(false);
  const offsetTopRef = useRef<number>(0);

  // Measure container offsetTop on mount, window resize, and layout shifts
  useEffect(() => {
    if (!containerRef.current) return;
    const measure = () => {
      if (containerRef.current) {
        offsetTopRef.current = containerRef.current.offsetTop;
      }
    };
    measure();
    window.addEventListener("resize", measure);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => measure());
      resizeObserver.observe(document.body);
    }

    return () => {
      window.removeEventListener("resize", measure);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  useLenis(({ scroll }) => {
    if (window.innerWidth < 768) {
      if (innerRef.current) innerRef.current.style.transform = '';
      if (brandRef.current) {
        brandRef.current.style.transform = '';
        brandRef.current.style.opacity = '1';
      }
      setColsVisible(true);
      return;
    }
    const offsetTop = offsetTopRef.current;
    if (!containerRef.current || !innerRef.current || !brandRef.current || offsetTop === 0) return;
    const vh = window.innerHeight;

    // scrollStart = when footer top enters the bottom of the viewport
    const scrollStart = offsetTop - vh;
    // scrollEnd = when footer top reaches the top of the viewport
    const scrollEnd = offsetTop;
    const scrollRange = scrollEnd - scrollStart;

    const rawProgress = (scroll - scrollStart) / scrollRange;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    // Parallax translateY range goes from -50% (underneath) to 0% (fully revealed)
    const translateY = -50 + progress * 50;
    innerRef.current.style.transform = `translate3d(0, ${translateY.toFixed(3)}%, 0)`;

    // Brand scale + opacity scrubbing (0.4 to 0.95 progress)
    const brandStart = 0.4;
    const brandEnd = 0.95;
    const brandRaw = (progress - brandStart) / (brandEnd - brandStart);
    const brandP = Math.min(Math.max(brandRaw, 0), 1);

    const scale = 0.78 + brandP * (1 - 0.78);
    const opacity = brandP;

    brandRef.current.style.transform = `scale(${scale.toFixed(4)})`;
    brandRef.current.style.opacity = opacity.toFixed(4);

    // Staggered column activation
    if (progress >= 0.35) {
      setColsVisible(true);
    } else if (progress < 0.1) {
      setColsVisible(false);
    }

    // Update progress bar
    if (progressFillRef.current) {
      const docH = document.documentElement.scrollHeight;
      const overallProgress = Math.min(scroll / (docH - vh), 1);
      progressFillRef.current.style.transform = `scaleX(${overallProgress})`;
    }
  });

  return (
    <>
      {/* Progress bar */}
      <div id="progress">
        <div ref={progressFillRef} id="progress-fill"></div>
      </div>

      <div ref={containerRef} className="footer-reveal">
        <div ref={innerRef} className="footer-inner">
          <footer className="footer-container">
            {/* Top Grid */}
            <div className="footer-grid">
              <div className={`footer-col ${colsVisible ? "visible" : ""}`} style={{ transitionDelay: "0ms" }}>
                <div className="footer-col-head">Identification</div>
                <div className="footer-col-text">Otaga</div>
                <div className="footer-col-sub">Full Stack Engineer</div>
                <div className="footer-col-sub">Kerala, India</div>
                <div className="footer-col-sub" style={{ marginTop: ".25rem", color: "var(--text-dim)", fontSize: ".6rem", letterSpacing: ".1em" }}>
                  Lat: 9.7 · Long: 76.5
                </div>
              </div>

              <div className={`footer-col ${colsVisible ? "visible" : ""}`} style={{ transitionDelay: "100ms" }}>
                <div className="footer-col-head">Channels</div>
                <a className="footer-col-link" href="mailto:otaga2k25@gmail.com">Email ↗</a>
                <a className="footer-col-link" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className="footer-col-link" href="https://github.com/OTaga2k25" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a className="footer-col-link" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
              </div>

              <div className={`footer-col ${colsVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
                <div className="footer-col-head">Colophon</div>
                <div className="footer-col-sub">Built With: React / GSAP / Framer / Lenis</div>
                <div className="footer-col-sub">Typeface: Inter / Helvetica</div>
                <div className="footer-col-sub">Deployed On: Vercel</div>
                <div className="footer-col-text" style={{ marginTop: "auto", paddingTop: ".75rem", fontSize: ".7rem", color: "var(--text-muted)" }}>
                  2026
                </div>
              </div>
            </div>

            {/* Center Brand Watermark */}
            <div className="footer-brand-wrap">
              <div className="footer-brand-watermark">COMPONENTS</div>
              <div ref={brandRef} className="footer-brand">
                Otaga<sup>®</sup>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="footer-copyright">
              <span>© 2026 Otaga. All rights reserved.</span>
              <span>Built with React &amp; Framer Motion</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
