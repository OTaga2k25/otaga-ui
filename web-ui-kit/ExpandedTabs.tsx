'use client';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

export interface TabItem {
  title: string;
  icon: (props: { style?: CSSProperties }) => ReactNode;
  type?: never;
}

export interface TabSeparator {
  type: 'separator';
  title?: never;
  icon?: never;
}

export type ExpandedTabItem = TabItem | TabSeparator;

export interface ExpandedTabsProps {
  tabs: ExpandedTabItem[];
  style?: CSSProperties;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

export function ExpandedTabs({
  tabs,
  style,
  activeColor = '#22c55e',
  onChange,
}: ExpandedTabsProps) {
  const [selected, setSelected] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSelected(null);
        onChange?.(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onChange]);

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  return (
    <div
      ref={containerRef}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        borderRadius: 9999,
        border: '1px solid rgba(148,163,184,0.25)',
        backgroundColor: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(8px)',
        padding: '4px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        ...style,
      }}
    >
      {tabs.map((tab, index) => {
        if (tab.type === 'separator') {
          return (
            <div
              key={`sep-${index}`}
              style={{
                width: 1,
                height: 24,
                backgroundColor: 'rgba(148,163,184,0.35)',
                flexShrink: 0,
                margin: '0 4px',
              }}
            />
          );
        }

        const isActive = selected === index;
        const Icon = tab.icon;

        return (
          <button
            key={tab.title}
            onClick={() => handleSelect(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isActive ? 6 : 0,
              borderRadius: 9999,
              padding: '8px 14px',
              border: `1px solid ${isActive ? `${activeColor}55` : 'transparent'}`,
              backgroundColor: isActive ? `${activeColor}15` : 'transparent',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
              color: isActive ? '#111827' : '#6b7280',
              transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, gap 0.2s ease',
              outline: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            <Icon style={{ width: 18, height: 18, display: 'block', flexShrink: 0 }} />
            {/* Label expands via max-width */}
            <span
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                maxWidth: isActive ? 100 : 0,
                opacity: isActive ? 1 : 0,
                transition: 'max-width 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease',
                verticalAlign: 'middle',
              }}
            >
              {tab.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
