'use client';
import { CSSProperties, useState } from 'react';

export type SubscribeCardProps = {
  onSubmit?: (email: string) => void;
};

export function SubscribeCard({ onSubmit }: SubscribeCardProps) {
  const [email,   setEmail]   = useState('');
  const [focused, setFocused] = useState(false);
  const [hover,   setHover]   = useState(false);

  return (
    /* outer wrapper gives room for the button that overflows below/right */
    <div style={{ position: 'relative', display: 'inline-block', paddingBottom: 24, paddingRight: 10 }}>

      {/* Card */}
      <div style={{
        position: 'relative',
        height: 140,
        width: 240,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 4,
        color: '#333',
        boxShadow: '0px 0px 60px 5px rgba(0,0,0,0.4)',
        fontFamily: 'sans-serif',
      }}>
        <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', letterSpacing: 4, lineHeight: '28px', margin: 0 }}>
          SUBSCRIBE
        </p>

        {/* Triangle accent — mirrors :after pseudo-element */}
        <div style={{
          position: 'absolute',
          right: -10, bottom: 18,
          width: 0, height: 0,
          borderLeft: '0px solid transparent',
          borderRight: '10px solid transparent',
          borderBottom: '10px solid #1a044e',
        }} />

        {/* Email input */}
        <input
          type="email"
          placeholder="Your e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            position: 'absolute',
            bottom: 30,
            left: 20,
            border: 'none',
            borderBottom: `1px solid ${focused ? '#0d095e' : '#d4d4d4'}`,
            padding: 10,
            width: '82%',
            background: 'transparent',
            outline: 'none',
            transition: 'border-color .25s ease',
            fontSize: 14,
            color: '#333',
            fontFamily: focused ? "'Gill Sans', Calibri, sans-serif" : 'inherit',
            boxSizing: 'border-box',
          } as CSSProperties}
        />
      </div>

      {/* Floating submit button */}
      <div
        onClick={() => onSubmit?.(email)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          borderRadius: 30,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          backgroundColor: hover ? '#07013d' : '#0f0092',
          color: '#FFF',
          padding: '12px 25px',
          fontSize: 12,
          fontWeight: 'bold',
          letterSpacing: 5,
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'all .25s ease',
          boxShadow: hover
            ? '-5px 6px 20px 0px rgba(88,88,88,0.569)'
            : '-5px 6px 20px 0px rgba(26,26,26,0.4)',
          fontFamily: 'sans-serif',
        } as CSSProperties}
      >
        SUBMIT
      </div>
    </div>
  );
}
