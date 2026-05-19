'use client';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export type DarkLoginBoxProps = {
  onSignIn?: (email: string, password: string) => void;
  onGoogleSignIn?: () => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
};

export function DarkLoginBox({ onSignIn, onGoogleSignIn, onSignUp, onForgotPassword }: DarkLoginBoxProps) {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [focused,  setFocused]  = useState('');

  return (
    <View style={styles.container}>

      {/* Logo mark */}
      <View style={styles.logo}>
        <View style={styles.logoHead} />
        <View style={styles.logoBody} />
      </View>

      <Text style={styles.header}>Welcome Back!</Text>

      <TextInput
        placeholder="Email" placeholderTextColor="#888"
        keyboardType="email-address" autoCapitalize="none"
        value={email} onChangeText={setEmail}
        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
        style={[styles.input, focused === 'email' && styles.inputFocused]}
      />
      <TextInput
        placeholder="Password" placeholderTextColor="#888"
        secureTextEntry
        value={password} onChangeText={setPassword}
        onFocus={() => setFocused('pwd')} onBlur={() => setFocused('')}
        style={[styles.input, focused === 'pwd' && styles.inputFocused]}
      />

      <TouchableOpacity style={[styles.btn, styles.btnMarginTop]} activeOpacity={0.75} onPress={() => onSignIn?.(email, password)}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} activeOpacity={0.75} onPress={onGoogleSignIn}>
        <Text style={[styles.btnText, { color: '#4285F4', marginRight: 4 }]}>G</Text>
        <Text style={styles.btnText}>Sign in with Google</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text style={styles.footerLink} onPress={onSignUp}>Sign up, it's free!</Text>
        </Text>
        <Text style={styles.footerLink} onPress={onForgotPassword}>Forgot password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 315,
    backgroundColor: '#272727',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  logo: {
    width: 65, height: 65,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    borderWidth: 2, borderColor: '#fff',
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 8, height: 8 }, shadowOpacity: 0.2, shadowRadius: 8,
    elevation: 4,
  },
  logoHead: {
    position: 'absolute', top: 10,
    width: 18, height: 18,
    borderRadius: 9, borderWidth: 2.5, borderColor: '#fff',
  },
  logoBody: {
    position: 'absolute', bottom: 10,
    width: 30, height: 12,
    borderTopLeftRadius: 20, borderTopRightRadius: 20,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
    borderWidth: 2.5, borderColor: '#fff',
  },
  header: { width: '100%', textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white' },
  input: {
    width: '100%', padding: 10,
    borderRadius: 12, borderWidth: 1, borderColor: 'transparent',
    backgroundColor: '#3a3a3a', color: 'white', fontSize: 14,
  },
  inputFocused: { borderColor: '#fff' },
  btn: {
    width: '100%', height: 40,
    borderRadius: 20, backgroundColor: '#373737',
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.4, shadowRadius: 3,
    elevation: 2,
  },
  btnMarginTop: { marginTop: 5 },
  btnText: { color: 'white', fontSize: 14, fontWeight: '600' },
  footer: { width: '100%', gap: 4 },
  footerText: { color: 'rgba(255,255,255,0.5)', fontSize: 12 },
  footerLink: { color: 'rgba(255,255,255,0.5)', fontWeight: '600', fontSize: 12 },
});
