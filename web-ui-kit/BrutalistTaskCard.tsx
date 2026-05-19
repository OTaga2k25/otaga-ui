'use client';
import { CSSProperties, useState } from 'react';

export interface TaskItem {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

export interface BrutalistTaskCardProps {
  title?: string;
  tasks?: TaskItem[];
  accent?: string;
  style?: CSSProperties;
}

const DEFAULT_TASKS: TaskItem[] = [
  { id: 't1', label: 'Complete project prototype' },
  { id: 't2', label: 'Review client feedback' },
  { id: 't3', label: 'Update documentation' },
  { id: 't4', label: 'Team meeting @ 3PM' },
  { id: 't5', label: 'Fix responsive issues' },
  { id: 't6', label: 'Deploy to staging' },
];

const RIVET_POSITIONS: CSSProperties[] = [
  { top: 10, left: 10 },
  { top: 10, right: 10 },
  { bottom: 10, left: 10 },
  { bottom: 10, right: 10 },
];

const CORNER_STYLES: CSSProperties[] = [
  { top: -10, left: -10,  borderRight: 'none', borderBottom: 'none' },
  { top: -10, right: -10, borderLeft: 'none',  borderBottom: 'none' },
  { bottom: -10, left: -10,  borderRight: 'none', borderTop: 'none' },
  { bottom: -10, right: -10, borderLeft: 'none',  borderTop: 'none' },
];

export function BrutalistTaskCard({
  title  = 'TASKS',
  tasks  = DEFAULT_TASKS,
  accent = 'SYS//TASK_MANAGER',
  style,
}: BrutalistTaskCardProps) {
  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>(
    () => Object.fromEntries(tasks.map(t => [t.id, t.defaultChecked ?? false]))
  );

  const toggle = (id: string) =>
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  const spring = '0.6s cubic-bezier(0.19,1,0.22,1)';
  const bounce = '0.6s cubic-bezier(0.68,-0.55,0.265,1.55)';

  return (
    <div
      style={{ position: 'relative', width: 300, height: hovered ? 300 : 110, transition: `height ${spring}`, cursor: 'pointer', ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slab backgrounds */}
      <div style={{
        position: 'absolute', background: '#04040404', border: '4px solid #f4efef', zIndex: -1,
        top: 18, left: 18,
        width: 264, height: hovered ? 144 : 74,
        transform: hovered ? 'translate(20px,20px) rotate(1deg)' : 'none',
        transition: spring,
      }} />
      <div style={{
        position: 'absolute', background: '#04040404', border: '4px solid #f4efef', zIndex: -1,
        top: 36, left: 36,
        width: 228, height: hovered ? 108 : 38,
        transform: hovered ? 'translate(-10px,30px) rotate(-1deg)' : 'none',
        transition: spring,
      }} />

      {/* Concrete block */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: '#000', border: '8px solid #000',
        boxShadow: hovered ? '12px 12px 0 #333, 24px 24px 0 #666, 36px 36px 0 #999' : 'none',
        transition: spring, overflow: 'hidden',
      }}>
        {/* Concrete texture */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none',
          background: 'repeating-linear-gradient(45deg,#000 0,#000 2px,#111 2px,#111 4px), repeating-linear-gradient(-45deg,transparent 0,transparent 8px,rgba(255,255,255,0.05) 8px,rgba(255,255,255,0.05) 10px)',
        }} />

        {/* Paper texture */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(circle at 20% 50%,transparent 20%,rgba(255,255,255,0.3) 21%,rgba(255,255,255,0.3) 34%,transparent 35%), linear-gradient(0deg,transparent 24%,rgba(255,255,255,0.05) 25%,rgba(255,255,255,0.05) 26%,transparent 27%,transparent 74%,rgba(255,255,255,0.05) 75%,rgba(255,255,255,0.05) 76%,transparent 77%)',
        }} />

        {/* Main content */}
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>

          {/* Title */}
          <div style={{
            color: '#fff', fontSize: 32, fontWeight: 400, letterSpacing: 6,
            textTransform: 'uppercase',
            textShadow: '2px 2px 0 #333, 4px 4px 0 #666',
            opacity: hovered ? 0 : 1,
            transform: hovered ? 'translateY(-40px) rotateX(90deg) scale(0.3)' : 'none',
            filter: hovered ? 'blur(8px)' : 'none',
            transition: `all 0.5s cubic-bezier(0.68,-0.55,0.265,1.55)`,
          }}>
            {title}
          </div>

          {/* Todo grid */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'grid', gridTemplateRows: `repeat(${tasks.length}, 1fr)`,
            gap: 10, padding: '20px 14px 14px',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0) rotateX(0deg) scale(1)' : 'translateY(-1px) rotateX(-100deg) scale(1.3)',
            transition: `all ${bounce}`,
          }}>
            {tasks.map(task => {
              const isChecked = checked[task.id];
              return (
                <div key={task.id} style={{ position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: 5 }}>
                  {/* Custom checkbox */}
                  <div
                    onClick={() => toggle(task.id)}
                    style={{
                      position: 'absolute', left: -15,
                      width: 20, height: 20, flexShrink: 0,
                      border: `4px solid ${isChecked ? '#f9f4f4' : '#d0cbcb'}`,
                      backgroundColor: isChecked ? '#be0202' : 'transparent',
                      cursor: 'crosshair',
                      transition: 'all 0.3s ease',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    {isChecked && (
                      <div style={{
                        width: 8, height: 14,
                        borderRight: '3px solid #faf7f7',
                        borderBottom: '2px solid #faf7f7',
                        transform: 'rotate(45deg) translate(-1px,-2px)',
                      }} />
                    )}
                  </div>

                  {/* Label */}
                  <span
                    onClick={() => toggle(task.id)}
                    style={{
                      color: isChecked ? '#f60101' : '#fbf9f9',
                      fontFamily: 'Arial, monospace',
                      fontSize: 15,
                      letterSpacing: 1,
                      cursor: 'crosshair',
                      paddingLeft: 25,
                      textDecoration: isChecked ? 'line-through' : 'none',
                      transform: isChecked ? 'translateX(-4px)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.68,-0.55,0.265,1.55)',
                    }}
                  >
                    {task.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scan line */}
        <div style={{
          position: 'absolute', top: 0, left: hovered ? '100%' : '-100%',
          width: 4, height: '100%',
          background: 'linear-gradient(180deg, transparent, #fff, transparent)',
          opacity: 0.8, pointerEvents: 'none',
          transition: 'left 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
        }} />

        {/* Rivets */}
        {RIVET_POSITIONS.map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', width: 8, height: 8,
            background: hovered ? '#fff' : '#000',
            borderRadius: '50%', border: '2px solid #333',
            transform: hovered ? 'scale(1.5)' : 'none',
            transition: 'all 0.3s ease',
            ...pos,
          }} />
        ))}
      </div>

      {/* Type accent */}
      <div style={{
        position: 'absolute', top: -30, left: 0,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 12, fontWeight: 700, letterSpacing: 2,
        color: '#000',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'translateY(5px)' : 'none',
        transition: 'all 0.4s ease',
        whiteSpace: 'nowrap',
      }}>
        {accent}
      </div>

      {/* Corner brackets */}
      {CORNER_STYLES.map((pos, i) => (
        <div key={i} style={{
          position: 'absolute', width: 20, height: 20,
          border: '4px solid #000',
          background: hovered ? '#000' : '#fff',
          borderColor: hovered ? '#fff' : '#000',
          transform: hovered ? 'scale(1.5)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.68,-0.55,0.265,1.55)',
          ...pos,
        }} />
      ))}
    </div>
  );
}
