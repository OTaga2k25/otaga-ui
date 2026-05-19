'use client';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { ThemedText } from './ThemedText';
import { useThemeColor } from '@otaga/shared-utils';

export type BottomBarTab = {
  id: string;
  icon: string;
  label: string;
};

export type BottomBarProps = {
  tabs: BottomBarTab[];
  activeTab: string;
  onTabPress: (id: string) => void;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  activeTintColor?: string;
  inactiveTintColor?: string;
};

export function BottomBar({
  tabs,
  activeTab,
  onTabPress,
  backgroundColor,
  activeBackgroundColor = '#000000',
  activeTintColor = '#FFFFFF',
  inactiveTintColor,
}: BottomBarProps) {
  const themeBgColor = useThemeColor({}, 'background');
  const themeInactiveColor = useThemeColor({}, 'icon');

  const finalBgColor = backgroundColor || themeBgColor;
  const finalInactiveColor = inactiveTintColor || themeInactiveColor;

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { backgroundColor: finalBgColor, shadowColor: finalInactiveColor }]}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                isActive && { backgroundColor: activeBackgroundColor, borderRadius: 100 },
              ]}
              onPress={() => onTabPress(tab.id)}
              activeOpacity={0.8}
            >
              <IconSymbol
                name={tab.icon as any}
                size={24}
                color={isActive ? activeTintColor : finalInactiveColor}
              />
              {isActive && (
                <ThemedText style={[styles.label, { color: activeTintColor }]}>
                  {tab.label}
                </ThemedText>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    elevation: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 50,
  },
  label: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
