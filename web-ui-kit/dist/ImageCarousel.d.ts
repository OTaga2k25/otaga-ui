import { CSSProperties } from 'react';
export interface ImageCarouselPerson {
    name: string;
    title: string;
    img: string;
}
export interface ImageCarouselProps {
    persons: ImageCarouselPerson[];
    height?: number;
    style?: CSSProperties;
}
export declare function ImageCarousel({ persons, height, style }: ImageCarouselProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ImageCarousel.d.ts.map