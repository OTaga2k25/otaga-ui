'use client';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export type WelcomeBackFormProps = {
  onLogin?: (email: string, password: string) => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
  onApple?: () => void;
  onGoogle?: () => void;
};

export function WelcomeBackForm({ onLogin, onSignUp, onForgotPassword, onApple, onGoogle }: WelcomeBackFormProps) {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [focused,  setFocused]  = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Email" placeholderTextColor="#c0c0c0"
          keyboardType="email-address" autoCapitalize="none"
          value={email} onChangeText={setEmail}
          onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
          style={[styles.input, focused === 'email' && styles.inputFocused]}
        />
        <TextInput
          placeholder="Password" placeholderTextColor="#c0c0c0"
          secureTextEntry
          value={password} onChangeText={setPassword}
          onFocus={() => setFocused('pwd')} onBlur={() => setFocused('')}
          style={[styles.input, focused === 'pwd' && styles.inputFocused]}
        />
        <TouchableOpacity onPress={onForgotPassword} style={styles.forgotWrap}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} activeOpacity={0.85} onPress={() => onLogin?.(email, password)}>
          <Text style={styles.loginBtnText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        Don't have an account?{' '}
        <Text style={styles.signUpLink} onPress={onSignUp}>Sign up</Text>
      </Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.appleBtn} activeOpacity={0.8} onPress={onApple}>
          <Text style={styles.appleIcon}></Text>
          <Text style={styles.appleBtnText}>Log in with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8} onPress={onGoogle}>
          <Text style={styles.googleIcon}>G</Text>
          <Text style={styles.googleBtnText}>Log in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '800',
    color: '#333',
  },
  form: { gap: 18, marginBottom: 15 },
  input: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    padding: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#333',
  },
  inputFocused: { borderColor: '#999' },
  forgotWrap: { alignItems: 'flex-end' },
  forgotText: { fontSize: 9, fontWeight: '700', color: '#747474', textDecorationLine: 'underline' },
  loginBtn: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'teal',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  loginBtnText: { color: 'white', fontSize: 14 },
  signUpText: { fontSize: 10, color: '#747474' },
  signUpLink: { fontSize: 11, color: 'teal', fontWeight: '800', textDecorationLine: 'underline' },
  socialContainer: { marginTop: 20, gap: 15 },
  appleBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
    borderRadius: 20, padding: 10, paddingHorizontal: 15,
    backgroundColor: '#000', borderWidth: 2, borderColor: '#000',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 3,
  },
  appleIcon: { fontSize: 16, color: '#fff' },
  appleBtnText: { fontSize: 11, color: '#fff' },
  googleBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
    borderRadius: 20, padding: 10, paddingHorizontal: 15,
    backgroundColor: '#fff', borderWidth: 2, borderColor: '#747474',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.16, shadowRadius: 10, elevation: 3,
  },
  googleIcon: { fontSize: 16, fontWeight: '900', color: '#4285F4' },
  googleBtnText: { fontSize: 11, color: '#333' },
});
