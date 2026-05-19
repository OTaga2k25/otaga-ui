'use client';
import { CSSProperties, PropsWithChildren, useState } from 'react';
import { Icon } from './Icon';
import { ThemedText } from './ThemedText';
import { useColorScheme } from './use-color-scheme';
import { Colors } from './theme';

export function Collapsible({ title, children }: PropsWithChildren<{ title: string }>) {
  const [open, setOpen] = useState(false);
  const scheme = useColorScheme();
  const iconColor = Colors[scheme].icon;

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          width: '100%',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
        >
          <Icon name="chevron.right" size={18} color={iconColor} />
        </span>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </button>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? 500 : 0,
          transition: 'max-height 0.3s ease',
          marginTop: open ? 6 : 0,
          marginLeft: 24,
        } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
