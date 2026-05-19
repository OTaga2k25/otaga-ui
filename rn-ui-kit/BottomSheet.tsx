'use client';
import { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Animated,
  useWindowDimensions,
  PanResponder,
  TouchableWithoutFeedback,
} from 'react-native';
import { useThemeColor } from '@otaga/shared-utils';

export type BottomSheetProps = {
  visible?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  snapPoints?: number[];
  backgroundColor?: string;
  persistent?: boolean;
};

export function BottomSheet({
  visible = true,
  onClose,
  children,
  snapPoints,
  backgroundColor,
  persistent = false,
}: BottomSheetProps) {
  const { height: screenHeight } = useWindowDimensions();
  const screenHeightRef = useRef(screenHeight);
  screenHeightRef.current = screenHeight;

  const defaultSnapPoints = [screenHeight * 0.3, screenHeight * 0.8];
  const points = [...(snapPoints ?? defaultSnapPoints)].sort((a, b) => a - b);
  const minHeight = points[0];
  const maxHeight = points[points.length - 1];

  const themeBgColor = useThemeColor({}, 'background');
  const finalBgColor = backgroundColor || themeBgColor;

  const animatedValue = useRef(
    new Animated.Value(persistent ? screenHeight - minHeight : screenHeight)
  ).current;
  const lastHeight = useRef(persistent ? screenHeight - minHeight : screenHeight);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newOffset = lastHeight.current + gestureState.dy;
        if (newOffset > screenHeightRef.current - maxHeight - 50) {
          animatedValue.setValue(newOffset);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const sh = screenHeightRef.current;
        const currentSheetHeight = sh - (lastHeight.current + gestureState.dy);

        let closest = persistent ? minHeight : 0;
        let minDiff = Math.abs(currentSheetHeight - closest);
        points.forEach((point) => {
          const diff = Math.abs(currentSheetHeight - point);
          if (diff < minDiff) { minDiff = diff; closest = point; }
        });

        if (!persistent && gestureState.vy > 0.5 && gestureState.dy > 50) {
          closest = 0;
        }

        if (closest === 0 && !persistent) {
          Animated.timing(animatedValue, {
            toValue: sh,
            duration: 250,
            useNativeDriver: true,
          }).start(onClose);
        } else {
          lastHeight.current = sh - closest;
          Animated.spring(animatedValue, {
            toValue: lastHeight.current,
            useNativeDriver: true,
            friction: 8,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    const sh = screenHeightRef.current;
    if (persistent) {
      lastHeight.current = sh - minHeight;
      Animated.spring(animatedValue, { toValue: lastHeight.current, useNativeDriver: true }).start();
    } else if (visible) {
      lastHeight.current = sh - minHeight;
      Animated.spring(animatedValue, { toValue: lastHeight.current, useNativeDriver: true, friction: 9 }).start();
    } else {
      Animated.timing(animatedValue, { toValue: sh, duration: 300, useNativeDriver: true }).start();
    }
  }, [visible, persistent]);

  const renderSheet = () => (
    <Animated.View
      style={[
        styles.sheet,
        {
          backgroundColor: finalBgColor,
          height: screenHeight,
          transform: [{ translateY: animatedValue }],
          zIndex: persistent ? 100 : 1,
        },
      ]}
    >
      <View {...panResponder.panHandlers} style={styles.notchContainer}>
        <View style={[styles.notch, { backgroundColor: finalBgColor }]}>
          <View style={styles.handle} />
        </View>
      </View>
      <View style={styles.content}>{children}</View>
    </Animated.View>
  );

  if (persistent) return renderSheet();

  return (
    <Modal transparent visible={visible} onRequestClose={onClose} animationType="none">
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        {renderSheet()}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end' },
  backdrop: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.5)' },
  sheet: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    elevation: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  notchContainer: { width: '100%', alignItems: 'center', marginTop: -1, paddingBottom: 20 },
  notch: {
    width: 100,
    height: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  handle: { width: 40, height: 4, borderRadius: 2, backgroundColor: 'rgba(0,0,0,0.15)' },
  content: { flex: 1 },
});
