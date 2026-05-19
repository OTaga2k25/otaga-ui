import { type ViewStyle } from 'react-native';
export interface ImageSwiperCard {
    id: number;
    imageUrl: string;
    title: string;
}
export interface ImageSwiperProps {
    cards: ImageSwiperCard[];
    cardWidth?: number;
    cardHeight?: number;
    style?: ViewStyle;
}
export declare function ImageSwiper({ cards, cardWidth, cardHeight, style, }: ImageSwiperProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ImageSwiper.d.ts.map