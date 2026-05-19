'use client';
import { type ReactNode, useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';

export interface RNTabItem {
  title: string;
  icon: ReactNode;
  type?: never;
}

export interface RNTabSeparator {
  type: 'separator';
  title?: never;
  icon?: never;
}

export type RNExpandedTabItem = RNTabItem | RNTabSeparator;

export interface ExpandedTabsProps {
  tabs: RNExpandedTabItem[];
  activeColor?: string;
  style?: ViewStyle;
  onChange?: (index: number | null) => void;
}

export function ExpandedTabs({
  tabs,
  activeColor = '#22c55e',
  style,
  onChange,
}: ExpandedTabsProps) {
  const [selected, setSelected] = useState<number>(0);

  // Per-tab label width animation
  const labelWidths = useRef<Animated.Value[]>(
    tabs.map((_, i) => new Animated.Value(i === 0 ? 1 : 0))
  ).current;
  const labelOpacities = useRef<Animated.Value[]>(
    tabs.map((_, i) => new Animated.Value(i === 0 ? 1 : 0))
  ).current;

  const handleSelect = (index: number) => {
    // Collapse current
    Animated.parallel([
      Animated.timing(labelWidths[selected],   { toValue: 0, duration: 120, useNativeDriver: false }),
      Animated.timing(labelOpacities[selected], { toValue: 0, duration: 100, useNativeDriver: false }),
    ]).start();

    // Expand new
    Animated.parallel([
      Animated.timing(labelWidths[index],   { toValue: 1, duration: 200, useNativeDriver: false }),
      Animated.timing(labelOpacities[index], { toValue: 1, duration: 200, useNativeDriver: false }),
    ]).start();

    setSelected(index);
    onChange?.(index);
  };

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {tabs.map((tab, index) => {
          if (tab.type === 'separator') {
            return (
              <View
                key={`sep-${index}`}
                style={styles.separator}
              />
            );
          }

          const isActive = selected === index;

          return (
            <TouchableOpacity
              key={tab.title}
              activeOpacity={0.75}
              onPress={() => handleSelect(index)}
              style={[
                styles.tab,
                isActive && {
                  backgroundColor: `${activeColor}20`,
                  borderColor: `${activeColor}60`,
                },
              ]}
            >
              {/* Icon */}
              <View style={styles.iconWrap}>{tab.icon}</View>

              {/* Animated label */}
              <Animated.View style={{
                width: labelWidths[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 80],
                }),
                overflow: 'hidden',
              }}>
                <Animated.Text
                  style={[
                    styles.label,
                    { color: isActive ? '#111' : '#64748b', opacity: labelOpacities[index] },
                  ]}
                  numberOfLines={1}
                >
                  {' '}{tab.title}
                </Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: 'rgba(148,163,184,0.3)',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9999,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  iconWrap: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
  },
  separator: {
    width: 1,
    height: 28,
    backgroundColor: 'rgba(148,163,184,0.3)',
    marginHorizontal: 2,
  },
});
