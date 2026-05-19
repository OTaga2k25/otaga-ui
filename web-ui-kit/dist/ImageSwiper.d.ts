import { CSSProperties } from 'react';
export interface ImageSwiperCard {
    id: number;
    imageUrl: string;
    title: string;
}
export interface ImageSwiperProps {
    cards: ImageSwiperCard[];
    cardWidth?: number;
    cardHeight?: number;
    style?: CSSProperties;
}
export declare function ImageSwiper({ cards, cardWidth, cardHeight, style, }: ImageSwiperProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ImageSwiper.d.ts.map