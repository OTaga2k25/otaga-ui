"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEB_COMPONENTS = exports.RN_COMPONENTS = void 0;
exports.findClosest = findClosest;
function entry(name) {
    const slug = name
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .replace(/^-/, '');
    return { name, slug };
}
exports.RN_COMPONENTS = [
    entry('AuthFlipCard'),
    entry('BottomBar'),
    entry('BottomSheet'),
    entry('BrutalistTaskCard'),
    entry('BuyButton'),
    entry('CardCarousel'),
    entry('CartButton'),
    entry('ChatBotCard'),
    entry('Collapsible'),
    entry('DarkLoginBox'),
    entry('Dock'),
    entry('ExpandedTabs'),
    entry('FlipCard'),
    entry('IconSymbol'),
    entry('ImageCarousel'),
    entry('ImageSwiper'),
    entry('LoginForm'),
    entry('PurpleLoginForm'),
    entry('SegmentedControl'),
    entry('Sidebar'),
    entry('SignInCard'),
    entry('SubscribeCard'),
    entry('ThemedText'),
    entry('ThemedView'),
    entry('WelcomeBackForm'),
];
exports.WEB_COMPONENTS = [
    entry('AuthFlipCard'),
    entry('BottomBar'),
    entry('BottomSheet'),
    entry('BrutalistTaskCard'),
    entry('BuyButton'),
    entry('CardCarousel'),
    entry('CartButton'),
    entry('ChatBotCard'),
    entry('Collapsible'),
    entry('DarkLoginBox'),
    entry('Dock'),
    entry('ExpandedTabs'),
    entry('FileUpload'),
    entry('FlipCard'),
    entry('Icon'),
    entry('ImageCarousel'),
    entry('ImageSwiper'),
    entry('InfiniteGrid'),
    entry('LoginForm'),
    entry('PurpleLoginForm'),
    entry('SegmentedControl'),
    entry('Sidebar'),
    entry('SignInCard'),
    entry('SubscribeCard'),
    entry('ThemedText'),
    entry('ThemedView'),
    entry('WelcomeBackForm'),
];
function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                a[i - 1] === b[j - 1]
                    ? dp[i - 1][j - 1]
                    : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
    }
    return dp[m][n];
}
function findClosest(slug, components) {
    let best = null;
    let bestDist = Infinity;
    for (const c of components) {
        const dist = levenshtein(slug, c.slug);
        if (dist < bestDist) {
            bestDist = dist;
            best = c;
        }
    }
    return bestDist <= 3 ? best : null;
}
