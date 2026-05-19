'use client';
import { useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export type SignInCardProps = {
  onSignIn?: (email: string, password: string) => void;
  onForgotPassword?: () => void;
  onGoogle?: () => void;
  onApple?: () => void;
  onTwitter?: () => void;
  onAgreement?: () => void;
};

function SocialButton({ label, icon, onPress }: { label?: string; icon?: React.ReactNode; onPress?: () => void }) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () =>
    Animated.spring(scale, { toValue: 1.2, useNativeDriver: true, friction: 4 }).start();
  const onPressOut = () =>
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, friction: 4 }).start();

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[styles.socialBtn, { transform: [{ scale }] }]}>
        {icon ? icon : <Text style={styles.socialLabel}>{label}</Text>}
      </Animated.View>
    </Pressable>
  );
}

export function SignInCard({
  onSignIn, onForgotPassword, onGoogle, onApple, onTwitter, onAgreement,
}: SignInCardProps) {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [focused,  setFocused]  = useState('');

  const inputBorder = (key: string) => focused === key ? '#12B1D1' : 'transparent';

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Sign In</Text>

      <View style={styles.inputWrap}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="rgb(170,170,170)"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused('')}
          style={[styles.input, { borderColor: inputBorder('email') }]}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgb(170,170,170)"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onFocus={() => setFocused('pwd')}
          onBlur={() => setFocused('')}
          style={[styles.input, { borderColor: inputBorder('pwd') }]}
        />
      </View>

      <TouchableOpacity onPress={onForgotPassword} style={styles.forgotWrap}>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => onSignIn?.(email, password)}
        style={styles.loginBtnWrap}
      >
        <LinearGradient
          colors={['#1089D3', '#12B1D1', '#06d6a0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loginBtn}
        >
          <Text style={styles.loginBtnText}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.socialSection}>
        <Text style={styles.orText}>Or Sign in with</Text>
        <View style={styles.socialRow}>
          <SocialButton label="G"  onPress={onGoogle}   />
          <SocialButton icon={<Ionicons name="logo-apple" size={18} color="white" />} onPress={onApple} />
          <SocialButton label="𝕏" onPress={onTwitter}  />
        </View>
      </View>

      <TouchableOpacity onPress={onAgreement} style={styles.agreementWrap}>
        <Text style={styles.agreementText}>Learn user licence agreement</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#F4F7FB',
    borderRadius: 40,
    paddingHorizontal: 35,
    paddingVertical: 25,
    borderWidth: 5,
    borderColor: '#fff',
    shadowColor: '#85bdd7',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 8,
  },
  heading: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 30,
    color: 'rgb(16,137,211)',
  },
  inputWrap: { marginTop: 5 },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 15,
    shadowColor: '#cff0ff',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
    fontSize: 14,
    color: '#333',
  },
  forgotWrap: { marginTop: 10, marginLeft: 10 },
  forgotText: { fontSize: 11, color: '#0099ff' },
  loginBtnWrap: {
    width: '100%',
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#85bdd7',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  loginBtn: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  socialSection: { marginTop: 25, alignItems: 'center' },
  orText: { fontSize: 10, color: 'rgb(170,170,170)', textAlign: 'center' },
  socialRow: { flexDirection: 'row', justifyContent: 'center', gap: 15, marginTop: 8 },
  socialBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#85bdd7',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 4,
  },
  socialLabel: { color: 'white', fontWeight: '900', fontSize: 14 },
  agreementWrap: { alignItems: 'center', marginTop: 15 },
  agreementText: { color: '#0099ff', fontSize: 9 },
});
