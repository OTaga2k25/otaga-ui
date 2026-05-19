'use client';
import { CSSProperties, HTMLAttributes } from 'react';
import { Colors, Fonts } from './theme';
import { useColorScheme } from './use-color-scheme';

export type TextType = 'default' | 'title' | 'subtitle' | 'defaultSemiBold' | 'link';

const TYPE_STYLES: Record<TextType, CSSProperties> = {
  default:        { fontSize: 16, lineHeight: '24px' },
  title:          { fontSize: 32, fontWeight: 700, lineHeight: '40px' },
  subtitle:       { fontSize: 20, fontWeight: '600', lineHeight: '28px' },
  defaultSemiBold:{ fontSize: 16, fontWeight: '600', lineHeight: '24px' },
  link:           { fontSize: 16, color: '#0a7ea4', textDecoration: 'underline', cursor: 'pointer' },
};

export type ThemedTextProps = HTMLAttributes<HTMLSpanElement> & {
  type?: TextType;
};

export function ThemedText({ type = 'default', style, children, ...props }: ThemedTextProps) {
  const scheme = useColorScheme();
  const theme = Colors[scheme];

  return (
    <span
      style={{
        fontFamily: Fonts.sans,
        color: theme.text,
        ...TYPE_STYLES[type],
        ...(style as CSSProperties),
      }}
      {...props}
    >
      {children}
    </span>
  );
}
