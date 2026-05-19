'use client';
import { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './IconSymbol';
import { useThemeColor } from '@otaga/shared-utils';

export type SidebarItem = {
  id: string;
  label: string;
  icon?: string;
  onPress?: () => void;
};

export type SidebarProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  items: SidebarItem[];
  footer?: React.ReactNode;
};

export function Sidebar({ visible, onClose, title, items, footer }: SidebarProps) {
  const { width: screenWidth } = useWindowDimensions();
  const sidebarWidth = screenWidth * 0.75;

  const slideAnim = useRef(new Animated.Value(-sidebarWidth)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const borderColor = useThemeColor({}, 'icon');
  const bgColor = useThemeColor({}, 'background');

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
        Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, { toValue: -sidebarWidth, duration: 250, useNativeDriver: true }),
        Animated.timing(opacityAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
      ]).start();
    }
  }, [visible, sidebarWidth]);

  return (
    <Modal transparent visible={visible} onRequestClose={onClose} animationType="none">
      <View style={styles.overlay}>
        <Animated.View style={[styles.backdrop, { opacity: opacityAnim }]}>
          <TouchableOpacity style={styles.flex} onPress={onClose} activeOpacity={1} />
        </Animated.View>

        <Animated.View
          style={[
            styles.sidebarContainer,
            {
              width: sidebarWidth,
              transform: [{ translateX: slideAnim }],
              backgroundColor: bgColor,
            },
          ]}
        >
          <View style={styles.flex}>
            <View style={[styles.header, { borderBottomColor: borderColor + '20' }]}>
              <ThemedText type="subtitle">{title || 'Menu'}</ThemedText>
              <TouchableOpacity onPress={onClose}>
                <IconSymbol name="chevron.left" size={24} color={borderColor} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemsContainer}>
              {items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.item}
                  onPress={() => { item.onPress?.(); onClose(); }}
                >
                  {item.icon && (
                    <IconSymbol name={item.icon as any} size={22} color={borderColor} style={styles.itemIcon} />
                  )}
                  <ThemedText type="defaultSemiBold">{item.label}</ThemedText>
                </TouchableOpacity>
              ))}
            </View>

            {footer && <View style={styles.footer}>{footer}</View>}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, flexDirection: 'row' },
  flex: { flex: 1 },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sidebarContainer: {
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
  },
  itemsContainer: { padding: 10 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
  itemIcon: { marginRight: 15 },
  footer: {
    marginTop: 'auto',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
});
