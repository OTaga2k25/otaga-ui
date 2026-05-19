# @otaga/shared-utils

Core utilities and theme management for the Otaga ecosystem.

## Features

- **Theming**: Lightweight theme system for Light/Dark mode support.
- **Hooks**: `useThemeColor` and `useColorScheme` for easy styling.
- **Constants**: Shared color palettes and design tokens.

## Installation

```bash
npm install @otaga/shared-utils
```

## Usage

### Using Theme Colors
```javascript
import { useThemeColor } from '@otaga/shared-utils';

function MyComponent() {
  const backgroundColor = useThemeColor({ light: '#fff', dark: '#000' }, 'background');
  
  return <View style={{ backgroundColor }} />;
}
```

## License

MIT
