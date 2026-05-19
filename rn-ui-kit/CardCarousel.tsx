'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';

export interface CarouselCard {
  id: number;
  imageUrl: string;
  title: string;
}

export interface CardCarouselProps {
  cards: CarouselCard[];
  cardWidth?: number;
  cardHeight?: number;
  autoPlayDelay?: number;
  style?: ViewStyle;
}

export function CardCarousel({
  cards,
  cardWidth  = 220,
  cardHeight = 300,
  autoPlayDelay = 3000,
  style,
}: CardCarouselProps) {
  const initial  = Math.floor(cards.length / 2);
  const [active, setActive] = useState(initial);
  const [paused, setPaused] = useState(false);
  const scrollPos = useRef(new Animated.Value(initial)).current;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStart   = useRef(0);

  const goTo = (index: number) => {
    const safe = ((index % cards.length) + cards.length) % cards.length;
    setActive(safe);
    Animated.spring(scrollPos, {
      toValue: safe,
      useNativeDriver: true,
      damping: 16,
      mass: 0.9,
      stiffness: 120,
    }).start();
  };

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => goTo(active + 1), autoPlayDelay);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, active, autoPlayDelay]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (_, g) => { dragStart.current = g.x0; },
      onPanResponderRelease: (_, g) => {
        const dx = g.moveX - dragStart.current;
        if (Math.abs(dx) > 60) goTo(active + (dx > 0 ? -1 : 1));
      },
    })
  ).current;

  const GAP = cardWidth * 0.55;

  return (
    <View style={[styles.container, style]}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Card track */}
      <View
        {...panResponder.panHandlers}
        style={[styles.track, { height: cardHeight + 20 }]}
      >
        {cards.map((card, i) => {
          const translateX = scrollPos.interpolate({
            inputRange: [i - 2, i - 1, i, i + 1, i + 2],
            outputRange: [-GAP * 2, -GAP, 0, GAP, GAP * 2],
            extrapolate: 'clamp',
          });
          const scale = scrollPos.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });
          const opacity = scrollPos.interpolate({
            inputRange: [i - 1.5, i - 1, i, i + 1, i + 1.5],
            outputRange: [0, 1, 1, 1, 0],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={card.id}
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: cardHeight,
                  opacity,
                  zIndex: cards.length - Math.abs(i - active),
                  elevation: 10 + (cards.length - Math.abs(i - active)),
                  transform: [{ translateX }, { scale }],
                },
              ]}
            >
              <Image
                source={{ uri: card.imageUrl }}
                style={StyleSheet.absoluteFill}
                resizeMode="cover"
              />
              <View style={styles.titleBar}>
                <Text style={styles.titleText} numberOfLines={1}>{card.title}</Text>
              </View>
            </Animated.View>
          );
        })}
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.chevron} onPress={() => goTo(active - 1)} activeOpacity={0.75}>
          <Text style={styles.chevronText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          {cards.map((_, i) => (
            <TouchableOpacity key={i} onPress={() => goTo(i)} activeOpacity={0.75}>
              <View style={[
                styles.dot,
                active === i && styles.dotActive,
              ]} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.chevron} onPress={() => goTo(active + 1)} activeOpacity={0.75}>
          <Text style={styles.chevronText}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%' },
  track: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  card: {
    position: 'absolute',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1e1e1e',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  titleBar: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    padding: 14,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },
  titleText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 12,
  },
  chevron: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: '#f3f4f6',
    borderWidth: 1, borderColor: '#e5e7eb',
    alignItems: 'center', justifyContent: 'center',
  },
  chevronText: { fontSize: 22, color: '#374151', lineHeight: 26 },
  dots: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  dot: {
    width: 8, height: 8, borderRadius: 4,
    backgroundColor: '#d1d5db',
  },
  dotActive: {
    width: 24, backgroundColor: '#f472b6',
  },
});
