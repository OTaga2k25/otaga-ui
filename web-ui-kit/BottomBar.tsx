'use client';
import { CSSProperties } from 'react';
import { Icon, IconName } from './Icon';
import { Colors } from './theme';
import { useColorScheme } from './use-color-scheme';

export type BottomBarTab = { id: string; icon: string; label: string };

export type BottomBarProps = {
  tabs: BottomBarTab[];
  activeTab: string;
  onTabPress: (id: string) => void;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  activeTintColor?: string;
  inactiveTintColor?: string;
  style?: CSSProperties;
};

export function BottomBar({
  tabs,
  activeTab,
  onTabPress,
  backgroundColor,
  activeBackgroundColor = '#000',
  activeTintColor = '#fff',
  inactiveTintColor,
  style,
}: BottomBarProps) {
  const scheme = useColorScheme();
  const theme = Colors[scheme];
  const bg = backgroundColor ?? theme.background;
  const inactiveColor = inactiveTintColor ?? theme.icon;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 30,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        paddingInline: 20,
        pointerEvents: 'none',
        zIndex: 100,
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: bg,
          borderRadius: 40,
          height: 70,
          width: '100%',
          maxWidth: 500,
          padding: '0 10px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.12)',
          pointerEvents: 'all',
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabPress(tab.id)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                padding: '12px 20px',
                height: 50,
                border: 'none',
                borderRadius: 100,
                backgroundColor: isActive ? activeBackgroundColor : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Icon
                name={tab.icon as IconName}
                size={24}
                color={isActive ? activeTintColor : inactiveColor}
              />
              {isActive && (
                <span style={{ color: activeTintColor, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>
                  {tab.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
