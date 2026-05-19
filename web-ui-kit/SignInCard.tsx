'use client';
import { CSSProperties, useState } from 'react';

export type SignInCardProps = {
  onSignIn?: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onGoogle?: () => void;
  onApple?: () => void;
  onTwitter?: () => void;
  onAgreement?: () => void;
};

export function SignInCard({
  onSignIn, onForgotPassword, onGoogle, onApple, onTwitter, onAgreement,
}: SignInCardProps) {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [focused,  setFocused]  = useState('');
  const [btnHover, setBtnHover] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [hoverSocial, setHoverSocial] = useState('');

  const inputStyle = (key: string): CSSProperties => ({
    width: '100%',
    background: 'white',
    border: 'none',
    padding: '15px 20px',
    borderRadius: 20,
    marginTop: 15,
    boxShadow: '#cff0ff 0px 10px 10px -5px',
    borderInline: focused === key ? '2px solid #12B1D1' : '2px solid transparent',
    outline: 'none',
    fontSize: 14,
    color: '#333',
    boxSizing: 'border-box',
  } as CSSProperties);

  const socialBtnStyle = (key: string): CSSProperties => ({
    background: 'linear-gradient(45deg, rgb(0,0,0) 0%, rgb(112,112,112) 100%)',
    border: '5px solid white',
    padding: 5,
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'rgba(133,189,215,0.878) 0px 12px 10px -8px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    transform: hoverSocial === key ? 'scale(1.2)' : 'scale(1)',
  });

  return (
    <div style={{
      maxWidth: 350,
      background: 'linear-gradient(0deg, rgb(255,255,255) 0%, rgb(244,247,251) 100%)',
      borderRadius: 40,
      padding: '25px 35px',
      border: '5px solid rgb(255,255,255)',
      boxShadow: 'rgba(133,189,215,0.878) 0px 30px 30px -20px',
      margin: 20,
      fontFamily: 'sans-serif',
    }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', fontWeight: 900, fontSize: 30, color: 'rgb(16,137,211)' }}>
        Sign In
      </div>

      {/* Form */}
      <div style={{ marginTop: 20 }}>
        <input
          type="email" placeholder="E-mail" value={email}
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

        <span style={{ display: 'block', marginTop: 10, marginLeft: 10 }}>
          <a
            href="#" onClick={e => { e.preventDefault(); onForgotPassword?.(); }}
            style={{ fontSize: 11, color: '#0099ff', textDecoration: 'none' }}
          >
            Forgot Password ?
          </a>
        </span>

        <button
          onClick={() => onSignIn?.(email, password)}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => { setBtnHover(false); setBtnActive(false); }}
          onMouseDown={() => setBtnActive(true)}
          onMouseUp={() => setBtnActive(false)}
          style={{
            display: 'block',
            width: '100%',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1089D3 0%, #12B1D1 50%, #06d6a0 100%)',
            color: 'white',
            padding: '15px 0',
            margin: '20px auto',
            borderRadius: 20,
            boxShadow: btnActive
              ? 'rgba(133,189,215,0.878) 0px 15px 10px -10px'
              : btnHover
                ? 'rgba(133,189,215,0.878) 0px 23px 10px -20px'
                : 'rgba(133,189,215,0.878) 0px 20px 10px -15px',
            border: 'none',
            cursor: 'pointer',
            fontSize: 16,
            transform: btnActive ? 'scale(0.95)' : btnHover ? 'scale(1.03)' : 'scale(1)',
            transition: 'all 0.2s ease-in-out',
          } as CSSProperties}
        >
          Sign In
        </button>
      </div>

      {/* Social */}
      <div style={{ marginTop: 25 }}>
        <span style={{ display: 'block', textAlign: 'center', fontSize: 10, color: 'rgb(170,170,170)' }}>
          Or Sign in with
        </span>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 15, marginTop: 5 }}>

          {/* Google */}
          <div style={socialBtnStyle('google')}
            onClick={onGoogle}
            onMouseEnter={() => setHoverSocial('google')}
            onMouseLeave={() => setHoverSocial('')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 488 512" style={{ fill: 'white' }}>
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </div>

          {/* Apple */}
          <div style={socialBtnStyle('apple')}
            onClick={onApple}
            onMouseEnter={() => setHoverSocial('apple')}
            onMouseLeave={() => setHoverSocial('')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 384 512" style={{ fill: 'white' }}>
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
          </div>

          {/* Twitter/X */}
          <div style={socialBtnStyle('twitter')}
            onClick={onTwitter}
            onMouseEnter={() => setHoverSocial('twitter')}
            onMouseLeave={() => setHoverSocial('')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 512 512" style={{ fill: 'white' }}>
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Agreement */}
      <span style={{ display: 'block', textAlign: 'center', marginTop: 15 }}>
        <a
          href="#" onClick={e => { e.preventDefault(); onAgreement?.(); }}
          style={{ textDecoration: 'none', color: '#0099ff', fontSize: 9 }}
        >
          Learn user licence agreement
        </a>
      </span>
    </div>
  );
}
