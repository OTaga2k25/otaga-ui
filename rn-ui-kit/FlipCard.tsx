'use client';
import { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, View, ViewStyle } from 'react-native';

export type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  width?: number;
  height?: number;
  frontStyle?: ViewStyle;
  backStyle?: ViewStyle;
};

export function FlipCard({
  front,
  back,
  width = 190,
  height = 254,
  frontStyle,
  backStyle,
}: FlipCardProps) {
  const flipAnim = useRef(new Animated.Value(0)).current;
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    const toValue = flipped ? 0 : 1;
    Animated.spring(flipAnim, { toValue, friction: 8, useNativeDriver: true }).start();
    setFlipped(f => !f);
  };

  const frontRotate = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '180deg'] });
  const backRotate  = flipAnim.interpolate({ inputRange: [0, 1], outputRange: ['180deg', '360deg'] });

  // Opacity crossfade at 90° — ensures correct face on Android (backfaceVisibility unreliable)
  const frontOpacity = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [1, 1, 0, 0] });
  const backOpacity  = flipAnim.interpolate({ inputRange: [0, 0.5, 0.5, 1], outputRange: [0, 0, 1, 1] });

  return (
    <Pressable onPress={flip} style={{ width, height }}>
      <Animated.View
        style={[
          styles.face,
          styles.front,
          { width, height, opacity: frontOpacity, transform: [{ rotateY: frontRotate }] },
          frontStyle,
        ]}
      >
        <View style={styles.content}>{front}</View>
      </Animated.View>

      <Animated.View
        style={[
          styles.face,
          styles.back,
          { width, height, opacity: backOpacity, transform: [{ rotateY: backRotate }] },
          backStyle,
        ]}
      >
        <View style={styles.content}>{back}</View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  face: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'coral',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 8,
    backfaceVisibility: 'hidden',
  },
  front: {
    backgroundColor: '#FFE4C4', // bisque
  },
  back: {
    backgroundColor: 'coral',
  },
  content: {
    alignItems: 'center',
    gap: 8,
  },
});
