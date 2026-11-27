/**
 * Post-build static prerender script.
 * Reads dist/index.html and generates one HTML file per route,
 * each with unique <title>, meta tags, and <noscript> text content.
 * Run after `vite build`: node prerender.mjs
 */
import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist      = path.join(__dirname, 'dist');
const template  = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

/* ── Per-route metadata ── */
const ROUTES = {
  'overview': {
    title: 'Otaga UI — React & React Native Component Library',
    description: 'Premium, production-ready UI components for React and React Native. BuyButton, CartButton, BottomSheet, Sidebar, SignInCard and more.',
    content: 'Otaga UI Kit provides premium, open-source UI components for React (web) and React Native (mobile). Install @otaga/web-ui-kit for React or @otaga/rn-ui-kit for React Native. Components include BuyButton, CartButton, BottomSheet, Sidebar, SegmentedControl, Collapsible, FlipCard, SignInCard, LoginForm and more.',
  },
  'installation': {
    title: 'Installation — Otaga UI',
    description: 'Install @otaga/web-ui-kit for React or @otaga/rn-ui-kit for React Native. Get started in seconds.',
    content: 'Install Otaga UI Kit. For web: npm install @otaga/web-ui-kit. For React Native: npm install @otaga/rn-ui-kit @otaga/shared-utils. Compatible with React 18+, Next.js, and Expo.',
  },

  /* Web */
  'web-buybutton': {
    title: 'BuyButton — Otaga Web UI Kit',
    description: 'Swipe-to-buy animated button for React. Drag-to-confirm interaction prevents accidental purchases.',
    content: 'BuyButton is a swipe-to-buy React component. Users drag a circle to the right to confirm a purchase. Props: label, color, onBuy. Install from @otaga/web-ui-kit.',
  },
  'web-cartbutton': {
    title: 'CartButton — Otaga Web UI Kit',
    description: 'Swipe-to-add-to-cart React button with bag icon and drag gesture confirmation.',
    content: 'CartButton is a swipe gesture React component. Drag right to add an item to cart. Props: label, color, iconColor, onAddToCart, onBagPress. Install from @otaga/web-ui-kit.',
  },
  'web-segmentedcontrol': {
    title: 'SegmentedControl — Otaga Web UI Kit',
    description: 'Tab-style option selector React component with animated active indicator.',
    content: 'SegmentedControl is a React tab selector component. Renders a row of options with an animated sliding active pill. Props: options, selectedOption, onSelect, activeColor. Install from @otaga/web-ui-kit.',
  },
  'web-collapsible': {
    title: 'Collapsible — Otaga Web UI Kit',
    description: 'Accordion-style expand/collapse React component with smooth CSS height transition.',
    content: 'Collapsible is a React accordion component. Click the title to expand or collapse content. Uses CSS height transition for smooth animation. Props: title, children. Install from @otaga/web-ui-kit.',
  },
  'web-themedtext': {
    title: 'ThemedText — Otaga Web UI Kit',
    description: 'Typography React component with variants: title, subtitle, defaultSemiBold, default, link.',
    content: 'ThemedText is a React typography component with built-in variants. Variants: title, subtitle, defaultSemiBold, default, link. Adapts to light and dark mode automatically. Install from @otaga/web-ui-kit.',
  },
  'web-themedview': {
    title: 'ThemedView — Otaga Web UI Kit',
    description: 'React View component with lightColor and darkColor prop for automatic dark mode support.',
    content: 'ThemedView is a React container component. Pass lightColor and darkColor to get automatic dark mode background switching. Install from @otaga/web-ui-kit.',
  },
  'web-bottombar': {
    title: 'BottomBar — Otaga Web UI Kit',
    description: 'Floating tab navigation bar React component with animated active pill indicator.',
    content: 'BottomBar is a floating tab navigation React component. Renders tabs with icons and labels. The active tab shows an animated pill background. Props: tabs, activeTab, onTabPress, activeBackgroundColor. Install from @otaga/web-ui-kit.',
  },
  'web-sidebar': {
    title: 'Sidebar — Otaga Web UI Kit',
    description: 'Slide-in navigation panel React component with backdrop dismiss and keyboard support.',
    content: 'Sidebar is a slide-in navigation drawer React component. Opens from the left with a backdrop overlay. Press Escape or click the backdrop to close. Props: visible, onClose, title, items. Install from @otaga/web-ui-kit.',
  },
  'web-bottomsheet': {
    title: 'BottomSheet — Otaga Web UI Kit',
    description: 'Draggable bottom sheet React component with multi-level snap points and floating notch handle.',
    content: 'BottomSheet is a draggable React component that slides up from the bottom. Supports multiple snap points. Drag the floating notch handle to expand or dismiss. Props: visible, onClose, snapPoints, backgroundColor, persistent. Install from @otaga/web-ui-kit.',
  },
  'web-icons': {
    title: 'Icons — Otaga Web UI Kit',
    description: 'SF Symbols-style icon set React component rendered via CSS masks.',
    content: 'Icon component for React. Renders SF Symbols-style icons using CSS masks. Over 50 icons available. Props: name, size, color. Install from @otaga/web-ui-kit.',
  },
  'web-flipcard': {
    title: 'FlipCard — Otaga Web UI Kit',
    description: '3D flip card React component with front and back faces.',
    content: 'FlipCard is a 3D flip animation React component. Click to flip between front and back content. Props: front, back. Install from @otaga/web-ui-kit.',
  },
  'web-authflipcard': {
    title: 'AuthFlipCard — Otaga Web UI Kit',
    description: 'Authentication flip card React component with sign-in on front and sign-up on back.',
    content: 'AuthFlipCard is a React authentication component. Front shows sign-in form, back shows sign-up form. Click to flip between them. Install from @otaga/web-ui-kit.',
  },
  'web-loginform': {
    title: 'LoginForm — Otaga Web UI Kit',
    description: 'Clean login form React component with gradient button and email/password fields.',
    content: 'LoginForm is a React authentication form component. Includes email and password fields with a gradient submit button. Props: onLogin, onForgotPassword. Install from @otaga/web-ui-kit.',
  },
  'web-subscribecard': {
    title: 'SubscribeCard — Otaga Web UI Kit',
    description: 'Email subscription card React component with animated submit button.',
    content: 'SubscribeCard is a React newsletter subscription component. Includes an email input and animated subscribe button. Props: onSubscribe. Install from @otaga/web-ui-kit.',
  },
  'web-signincard': {
    title: 'SignInCard — Otaga Web UI Kit',
    description: 'Sign-in card React component with email, password, and social login (Google, Apple, X).',
    content: 'SignInCard is a full-featured React authentication card. Includes email/password inputs, forgot password link, sign-in button, and social login buttons for Google, Apple, and X (Twitter). Props: onSignIn, onForgotPassword, onGoogle, onApple, onTwitter. Install from @otaga/web-ui-kit.',
  },
  'web-welcomeback': {
    title: 'WelcomeBackForm — Otaga Web UI Kit',
    description: 'Welcome back authentication React form component.',
    content: 'WelcomeBackForm is a React returning-user authentication form. Displays a welcome message with email and password fields. Install from @otaga/web-ui-kit.',
  },
  'web-darkloginbox': {
    title: 'DarkLoginBox — Otaga Web UI Kit',
    description: 'Dark-themed login box React component with glassmorphism styling.',
    content: 'DarkLoginBox is a dark-mode React authentication component. Uses glassmorphism styling with dark background and blurred backdrop. Install from @otaga/web-ui-kit.',
  },
  'web-purplelogin': {
    title: 'PurpleLoginForm — Otaga Web UI Kit',
    description: 'Purple gradient-themed login form React component.',
    content: 'PurpleLoginForm is a React authentication form with purple gradient styling. Includes email and password fields with a matching gradient button. Install from @otaga/web-ui-kit.',
  },
  'web-doodleflip': {
    title: 'DoodleFlipCard — Otaga Web UI Kit',
    description: 'Doodle-style 3D flip card React component with illustrated design.',
    content: 'DoodleFlipCard is a React flip card component with a playful doodle illustration style. Flips between front and back on click. Install from @otaga/web-ui-kit.',
  },

  /* React Native */
  'rn-buybutton': {
    title: 'BuyButton — Otaga React Native UI Kit',
    description: 'Swipe-to-buy React Native button using PanResponder for gesture confirmation.',
    content: 'BuyButton is a React Native swipe-to-buy component. Uses PanResponder for smooth drag gesture. Props: label, color, onBuy. Install from @otaga/rn-ui-kit.',
  },
  'rn-cartbutton': {
    title: 'CartButton — Otaga React Native UI Kit',
    description: 'Swipe-to-add-to-cart React Native button with drag gesture.',
    content: 'CartButton is a React Native swipe gesture component. Drag to add item to cart. Props: label, color, iconColor, onAddToCart, onBagPress. Install from @otaga/rn-ui-kit.',
  },
  'rn-collapsible': {
    title: 'Collapsible — Otaga React Native UI Kit',
    description: 'Native accordion React Native component with animated height transition.',
    content: 'Collapsible is a React Native accordion component. Tap the title to expand or collapse content with smooth height animation. Props: title, children. Install from @otaga/rn-ui-kit.',
  },
  'rn-bottombar': {
    title: 'BottomBar — Otaga React Native UI Kit',
    description: 'Native floating tab navigation React Native component with animated active pill.',
    content: 'BottomBar is a React Native tab navigation component. Renders floating tabs with icons and labels. Active tab shows an animated pill. Props: tabs, activeTab, onTabPress, activeBackgroundColor. Install from @otaga/rn-ui-kit.',
  },
  'rn-sidebar': {
    title: 'Sidebar — Otaga React Native UI Kit',
    description: 'Native slide-in navigation drawer React Native component with animated overlay.',
    content: 'Sidebar is a React Native slide-in drawer component. Opens from the left with a dark overlay. Tap the backdrop to close. Props: visible, onClose, title, items. Install from @otaga/rn-ui-kit.',
  },
  'rn-bottomsheet': {
    title: 'BottomSheet — Otaga React Native UI Kit',
    description: 'Native draggable bottom sheet React Native component with snap points and floating notch handle.',
    content: 'BottomSheet is a React Native draggable component. Uses PanResponder for drag gesture. Floating notch pill handle above the sheet. Supports persistent mode. Props: visible, onClose, snapPoints, backgroundColor, persistent. Install from @otaga/rn-ui-kit.',
  },
  'rn-iconsymbol': {
    title: 'IconSymbol — Otaga React Native UI Kit',
    description: 'SF Symbols on iOS, Material Icons fallback on Android React Native icon component.',
    content: 'IconSymbol is a React Native icon component. Uses SF Symbols on iOS and Material Icons as fallback on Android. Props: name, size, color. Install from @otaga/rn-ui-kit.',
  },
  'rn-flipcard': {
    title: 'FlipCard — Otaga React Native UI Kit',
    description: 'Native 3D flip card React Native component.',
    content: 'FlipCard is a React Native 3D flip animation component. Tap to flip between front and back content. Install from @otaga/rn-ui-kit.',
  },
  'rn-authflipcard': {
    title: 'AuthFlipCard — Otaga React Native UI Kit',
    description: 'Native authentication flip card React Native component.',
    content: 'AuthFlipCard is a React Native authentication component. Front shows sign-in, back shows sign-up. Tap to flip. Install from @otaga/rn-ui-kit.',
  },
  'rn-loginform': {
    title: 'LoginForm — Otaga React Native UI Kit',
    description: 'Native login form React Native component.',
    content: 'LoginForm is a React Native authentication form. Includes email and password TextInputs with a styled submit button. Install from @otaga/rn-ui-kit.',
  },
  'rn-subscribecard': {
    title: 'SubscribeCard — Otaga React Native UI Kit',
    description: 'Native email subscription card React Native component.',
    content: 'SubscribeCard is a React Native subscription component. Includes email TextInput and animated subscribe button. Install from @otaga/rn-ui-kit.',
  },
  'rn-signincard': {
    title: 'SignInCard — Otaga React Native UI Kit',
    description: 'Native sign-in card React Native component with animated social login buttons.',
    content: 'SignInCard is a full-featured React Native authentication card. Email and password TextInputs, forgot password, sign-in button, and animated social buttons for Google, Apple, and X. Props: onSignIn, onForgotPassword, onGoogle, onApple, onTwitter. Install from @otaga/rn-ui-kit.',
  },
  'rn-welcomeback': {
    title: 'WelcomeBackForm — Otaga React Native UI Kit',
    description: 'Native welcome back authentication React Native form.',
    content: 'WelcomeBackForm is a React Native returning-user form component. Install from @otaga/rn-ui-kit.',
  },
  'rn-darkloginbox': {
    title: 'DarkLoginBox — Otaga React Native UI Kit',
    description: 'Dark-themed native login box React Native component.',
    content: 'DarkLoginBox is a React Native dark-mode authentication component. Install from @otaga/rn-ui-kit.',
  },
  'rn-purplelogin': {
    title: 'PurpleLoginForm — Otaga React Native UI Kit',
    description: 'Purple gradient-themed native login form React Native component.',
    content: 'PurpleLoginForm is a React Native form component with purple gradient styling. Install from @otaga/rn-ui-kit.',
  },
  'rn-doodleflip': {
    title: 'DoodleFlipCard — Otaga React Native UI Kit',
    description: 'Doodle-style native 3D flip card React Native component.',
    content: 'DoodleFlipCard is a React Native flip card with playful doodle illustration style. Install from @otaga/rn-ui-kit.',
  },
};

const BASE_URL = 'https://components.otaga.in';

function buildHTML(routeId, meta) {
  const url    = routeId === 'overview' ? `${BASE_URL}/` : `${BASE_URL}/${routeId}`;
  const html   = template
    // Title
    .replace(
      /<title>.*?<\/title>/,
      `<title>${meta.title}</title>`
    )
    // Primary meta
    .replace(
      '<meta name="title"',
      `<meta name="title" content="${meta.title}" />\n    <meta name="title"`
    )
    .replace(
      /(<meta name="title"[^>]*content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta name="description"[^>]*content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    // Canonical
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${url}$2`
    )
    // OG
    .replace(
      /(<meta property="og:url"\s+content=")[^"]*(")/,
      `$1${url}$2`
    )
    .replace(
      /(<meta property="og:title"\s+content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta property="og:description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    // Twitter
    .replace(
      /(<meta name="twitter:url"\s+content=")[^"]*(")/,
      `$1${url}$2`
    )
    .replace(
      /(<meta name="twitter:title"\s+content=")[^"]*(")/,
      `$1${meta.title}$2`
    )
    .replace(
      /(<meta name="twitter:description"\s+content=")[^"]*(")/,
      `$1${meta.description}$2`
    )
    // Inject noscript with text content for crawlers
    .replace(
      '<div id="root"></div>',
      `<div id="root"></div>\n    <noscript><div style="max-width:800px;margin:40px auto;font-family:sans-serif;padding:0 20px"><h1>${meta.title}</h1><p>${meta.content}</p><p><a href="${BASE_URL}">Back to Otaga UI Docs</a></p></div></noscript>`
    );
  return html;
}

let count = 0;
for (const [routeId, meta] of Object.entries(ROUTES)) {
  const html = buildHTML(routeId, meta);

  if (routeId === 'overview') {
    // Overwrite root index.html
    fs.writeFileSync(path.join(dist, 'index.html'), html);
  } else {
    // Create /route-id/index.html
    const dir = path.join(dist, routeId);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
  }
  count++;
}

console.log(`✓ Prerendered ${count} routes`);
