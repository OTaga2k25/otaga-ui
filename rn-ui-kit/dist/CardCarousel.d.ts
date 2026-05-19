import { type ViewStyle } from 'react-native';
export interface CarouselCard {
    id: number;
    imageUrl: string;
    title: string;
}
export interface CardCarouselProps {
    cards: CarouselCard[];
    cardWidth?: number;
    cardHeight?: number;
    autoPlayDelay?: number;
    style?: ViewStyle;
}
export declare function CardCarousel({ cards, cardWidth, cardHeight, autoPlayDelay, style, }: CardCarouselProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CardCarousel.d.ts.map