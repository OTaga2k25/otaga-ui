import { CSSProperties } from 'react';
export interface CarouselCard {
    id: number;
    imageUrl: string;
    title: string;
}
export interface CardCarouselProps {
    cards: CarouselCard[];
    autoPlayDelay?: number;
    maxWidth?: number;
    style?: CSSProperties;
}
export declare function CardCarousel({ cards, autoPlayDelay, maxWidth, style, }: CardCarouselProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CardCarousel.d.ts.map