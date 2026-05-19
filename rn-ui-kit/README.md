# @otaga/rn-ui-kit

A premium, editorial-style UI Kit for React Native and Expo. Built with a focus on high-end interactions, smooth animations, and minimalist aesthetics.

## Features

- **Sidebar**: Animated, themed drawer component.
- **BottomBar**: Floating, pill-shaped navigation with active-state transitions.
- **CartButton**: Advanced "Swipe-to-Add" morphing interaction.
- **BuyButton**: Sleek "Swipe-to-Buy" slider with visual feedback.
- **BottomSheet**: Versatile container with snap points and gesture support.
- **SegmentedControl**: Pill-shaped multi-select controls.

## Installation

```bash
npm install @otaga/rn-ui-kit @otaga/shared-utils expo-linear-gradient expo-symbols
```

## Component Documentation

### 🛒 Cart Button
An interactive button that morphs into a checkmark when swiped.

```jsx
import { CartButton } from '@otaga/rn-ui-kit';

<CartButton 
  label="Add to Bag"
  color="#000"
  onAddToCart={() => console.log('Added to cart!')}
  onBagPress={() => console.log('Opening bag...')}
/>
```

| Prop | Type | Description |
| :--- | :--- | :--- |
| `label` | `string` | Text displayed on the button. |
| `color` | `string` | Background color of the button. |
| `onAddToCart` | `function` | Callback triggered after a successful swipe. |
| `onBagPress` | `function` | Callback for clicking the secondary bag icon. |

---

### 💳 Buy Button
A "Swipe-to-Buy" slider designed for high-conversion checkout flows.

```jsx
import { BuyButton } from '@otaga/rn-ui-kit';

<BuyButton 
  label="Slide to Purchase"
  color="#1a1a1a"
  onBuy={() => console.log('Purchase successful!')}
/>
```

| Prop | Type | Description |
| :--- | :--- | :--- |
| `onBuy` | `function` | Triggered when the slider reaches the end. |
| `label` | `string` | Prompt text for the slider. |
| `height` | `number` | Custom vertical size (default: 62). |

---

### 📥 Bottom Sheet
A gesture-driven sheet with support for multiple snap points and persistent display.

```jsx
import { BottomSheet } from '@otaga/rn-ui-kit';

// Standard Modal Sheet
<BottomSheet 
  visible={isOpen} 
  onClose={() => setIsOpen(false)}
  snapPoints={[300, 600, 800]} // Define custom heights
>
  <YourContent />
</BottomSheet>

// Persistent "Always Visible" Sheet
<BottomSheet 
  persistent
  snapPoints={[100, 500]}
>
  <View><Text>Mini Player or Quick Actions</Text></View>
</BottomSheet>
```

| Prop | Type | Description |
| :--- | :--- | :--- |
| `snapPoints` | `number[]` | Array of heights (in pixels) the sheet can snap to. |
| `persistent` | `boolean` | If true, the sheet stays visible at its minimum snap point. |
| `visible` | `boolean` | Controls visibility for non-persistent sheets. |
| `onClose` | `function` | Triggered when the sheet is swiped down to 0. |

---

### 📱 Bottom Bar
A floating, pill-shaped navigation bar with smooth active-state transitions. Perfect for use as a custom tab bar in Expo Router or React Navigation.

```jsx
import { BottomBar } from '@otaga/rn-ui-kit';

<BottomBar
  tabs={[
    { id: 'index', icon: 'house.fill', label: 'Home' },
    { id: 'explore', icon: 'magnifyingglass', label: 'Explore' },
    { id: 'profile', icon: 'person.fill', label: 'Profile' },
  ]}
  activeTab={activeTabId}
  onTabPress={(id) => handleNavigation(id)}
/>
```

| Prop | Type | Description |
| :--- | :--- | :--- |
| `tabs` | `BottomBarTab[]` | Array of objects: `{ id, icon, label }`. |
| `activeTab` | `string` | The ID of the currently active tab. |
| `onTabPress` | `(id: string) => void` | Callback triggered when a tab is pressed. |
| `backgroundColor` | `string` | Custom background color for the bar. |
| `activeBackgroundColor`| `string` | Background color of the active pill (Default: #000). |
| `activeTintColor` | `string` | Color of the icon/text when active (Default: #FFF). |
| `inactiveTintColor` | `string` | Color of the icon when inactive. |

---

## License

MIT
