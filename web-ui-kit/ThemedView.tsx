'use client';
import { CSSProperties, HTMLAttributes } from 'react';
import { Colors } from './theme';
import { useColorScheme } from './use-color-scheme';

export type ThemedViewProps = HTMLAttributes<HTMLDivElement> & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ lightColor, darkColor, style, children, ...props }: ThemedViewProps) {
  const scheme = useColorScheme();
  const bg = scheme === 'dark'
    ? (darkColor ?? Colors.dark.background)
    : (lightColor ?? Colors.light.background);

  return (
    <div style={{ backgroundColor: bg, ...(style as CSSProperties) }} {...props}>
      {children}
    </div>
  );
}
