'use client';
import { CSSProperties, useState } from 'react';

export type DarkLoginBoxProps = {
  onSignIn?: (email: string, password: string) => void;
  onGoogleSignIn?: () => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
};

const W = 315;
const H = Math.round(W * 1.33);

export function DarkLoginBox({ onSignIn, onGoogleSignIn, onSignUp, onForgotPassword }: DarkLoginBoxProps) {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [focused,  setFocused]  = useState('');
  const [hover,    setHover]    = useState('');

  const inputStyle = (key: string): CSSProperties => ({
    width: '100%',
    padding: 10,
    border: focused === key ? '1px solid #fff' : 'none',
    borderRadius: 12,
    backgroundColor: '#3a3a3a',
    color: 'white',
    outline: 'none',
    fontSize: 14,
    boxSizing: 'border-box',
  });

  const btnStyle = (key: string): CSSProperties => ({
    width: '100%',
    height: 40,
    border: 'none',
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    backgroundColor: hover === key ? 'rgba(255,255,255,0.25)' : '#373737',
    color: 'white',
    transition: '0.3s',
    boxShadow: hover === key
      ? 'inset 0px 3px 6px rgba(255,255,255,0.6), inset 0px -3px 6px rgba(0,0,0,0.8), 0px 0px 8px rgba(255,255,255,0.05)'
      : 'inset 0px 3px 6px -4px rgba(255,255,255,0.6), inset 0px -3px 6px -2px rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  });

  const linkStyle = (key: string): CSSProperties => ({
    color: hover === key ? '#fff' : 'rgba(255,255,255,0.5)',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontSize: 12,
  });

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#272727',
      borderRadius: 24,
      width: W + 1,
      height: H + 1,
      zIndex: 8,
      boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.2), 0 0 8px rgba(255,255,255,0.1), 0 0 16px rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Spinning border — animated conic gradient */}
      <style>{`
        @keyframes dlb-spin { 100% { transform: rotate(360deg); } }
        .dlb-spinner {
          position: absolute; inset: -50px; z-index: -2;
          background: conic-gradient(from 45deg, transparent 75%, #fff, transparent 100%);
          animation: dlb-spin 4s ease-in-out infinite;
        }
      `}</style>
      <div className="dlb-spinner" />

      {/* Inner box */}
      <div style={{
        backgroundColor: '#272727',
        borderRadius: 24,
        padding: 28,
        width: W,
        height: H,
        position: 'absolute',
        zIndex: 10,
        boxShadow: 'inset 0 40px 60px -8px rgba(255,255,255,0.12), inset 4px 0 12px -6px rgba(255,255,255,0.12), inset 0 0 12px -4px rgba(255,255,255,0.12)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        boxSizing: 'border-box',
      } as CSSProperties}>

        {/* Logo mark */}
        <div style={{
          width: 65, height: 65,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(0,0,0,0.2))',
          boxShadow: '8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.06)',
          borderRadius: 20,
          border: '2px solid #fff',
          position: 'relative',
          flexShrink: 0,
        }}>
          {/* head circle */}
          <div style={{
            position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
            width: '30%', height: '30%', borderRadius: '50%', border: '2.5px solid #fff',
          }} />
          {/* body arc */}
          <div style={{
            position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
            width: '50%', height: '20%',
            borderTopLeftRadius: 40, borderTopRightRadius: 40,
            borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
            border: '2.5px solid #fff',
          }} />
        </div>

        <span style={{ width: '100%', textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white' }}>
          Welcome Back!
        </span>

        <input
          type="email" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
          style={inputStyle('email')}
        />
        <input
          type="password" placeholder="Password" value={password}
          onChange={e => setPassword(e.target.value)}
          onFocus={() => setFocused('pwd')} onBlur={() => setFocused('')}
          style={inputStyle('pwd')}
        />

        <button
          style={{ ...btnStyle('signin'), marginTop: 5 } as CSSProperties}
          onMouseEnter={() => setHover('signin')}
          onMouseLeave={() => setHover('')}
          onClick={() => onSignIn?.(email, password)}
        >
          Sign In
        </button>

        <button
          style={btnStyle('google') as CSSProperties}
          onMouseEnter={() => setHover('google')}
          onMouseLeave={() => setHover('')}
          onClick={onGoogleSignIn}
        >
          <svg viewBox="-3 0 262 262" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
            <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
            <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
            <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
          </svg>
          <span style={{ color: 'white' }}>Sign in with Google</span>
        </button>

        <p style={{ width: '100%', textAlign: 'left', color: 'rgba(255,255,255,0.5)', fontSize: 12, margin: 0 }}>
          Don't have an account?{' '}
          <span
            style={linkStyle('signup')}
            onMouseEnter={() => setHover('signup')}
            onMouseLeave={() => setHover('')}
            onClick={onSignUp}
          >
            Sign up, it's free!
          </span>
          <br />
          <span
            style={linkStyle('forgot')}
            onMouseEnter={() => setHover('forgot')}
            onMouseLeave={() => setHover('')}
            onClick={onForgotPassword}
          >
            Forgot password?
          </span>
        </p>
      </div>
    </div>
  );
}
