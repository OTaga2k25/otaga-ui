'use client';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export type PurpleLoginFormProps = {
  onSubmit?: (username: string, password: string) => void;
  onForgotPassword?: () => void;
};

export function PurpleLoginForm({ onSubmit, onForgotPassword }: PurpleLoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [focused,  setFocused]  = useState('');

  return (
    <View style={styles.container}>
      {/* Rotated purple diamond accent — mirrors ::before pseudo */}
      <View style={styles.accent} />

      <Text style={styles.heading}>Login</Text>

      {/* Username */}
      <View style={styles.inputRow}>
        <Text style={styles.icon}>@</Text>
        <TextInput
          placeholder="Username" placeholderTextColor="rgb(80,80,80)"
          autoCapitalize="none"
          value={username} onChangeText={setUsername}
          onFocus={() => setFocused('user')} onBlur={() => setFocused('')}
          style={[styles.input, { borderBottomColor: focused === 'user' ? 'rgb(199,114,255)' : 'rgb(173,173,173)' }]}
        />
      </View>

      {/* Password */}
      <View style={styles.inputRow}>
        <Text style={styles.icon}>🔒</Text>
        <TextInput
          placeholder="Password" placeholderTextColor="rgb(80,80,80)"
          secureTextEntry
          value={password} onChangeText={setPassword}
          onFocus={() => setFocused('pwd')} onBlur={() => setFocused('')}
          style={[styles.input, { borderBottomColor: focused === 'pwd' ? 'rgb(199,114,255)' : 'rgb(173,173,173)' }]}
        />
      </View>

      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => onSubmit?.(username, password)}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onForgotPassword} style={styles.forgotWrap}>
        <Text style={styles.forgotText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.062,
    shadowRadius: 20,
    elevation: 4,
    position: 'relative',
    overflow: 'hidden',
  },
  accent: {
    position: 'absolute',
    width: 300, height: 300,
    backgroundColor: 'rgb(209,193,255)',
    transform: [{ rotate: '45deg' }],
    left: -180, bottom: 30,
    zIndex: 1,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.082,
    shadowRadius: 5,
    elevation: 3,
  },
  heading: {
    fontSize: 32, color: '#2e2e2e', fontWeight: '700',
    marginTop: 5, marginBottom: 10, zIndex: 2,
  },
  inputRow: {
    width: '100%', flexDirection: 'row', alignItems: 'center',
    zIndex: 2, marginVertical: 4,
  },
  icon: { fontSize: 14, color: '#2e2e2e', marginRight: 6, width: 18 },
  input: {
    flex: 1, height: 34,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0,
    fontSize: 13, fontWeight: '500', color: 'black',
    paddingLeft: 4,
  },
  btn: {
    zIndex: 2, width: '100%',
    backgroundColor: 'rgb(162,104,255)',
    height: 30, alignItems: 'center', justifyContent: 'center',
    marginVertical: 10,
  },
  btnText: { color: 'white', fontSize: 13, fontWeight: '500', letterSpacing: 1 },
  forgotWrap: { zIndex: 2, paddingVertical: 8, paddingHorizontal: 15 },
  forgotText: { fontSize: 11, fontWeight: '500', color: 'rgb(44,24,128)' },
});
