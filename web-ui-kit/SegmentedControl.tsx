'use client';
import { CSSProperties } from 'react';

export type SegmentedControlProps = {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  activeColor?: string;
  style?: CSSProperties;
};

export function SegmentedControl({
  options,
  selectedOption,
  onSelect,
  activeColor = '#000',
  style,
}: SegmentedControlProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#EBE8E2',
        borderRadius: 50,
        padding: 4,
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {options.map((option) => {
        const isActive = selectedOption === option;
        return (
          <button
            key={option}
            onClick={() => onSelect(option)}
            style={{
              flex: 1,
              padding: '10px 0',
              border: 'none',
              borderRadius: 50,
              background: isActive ? '#fff' : 'transparent',
              color: isActive ? activeColor : '#666',
              fontWeight: isActive ? 700 : 400,
              fontSize: 14,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
