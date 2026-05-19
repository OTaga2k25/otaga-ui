import { CSSProperties } from 'react';
export interface InfiniteGridItem {
    id?: number;
    thumb_src: string;
    title?: string;
    full_src?: string;
}
export interface InfiniteDraggableGridProps {
    gallery: InfiniteGridItem[];
    style?: CSSProperties;
}
export interface InfiniteGridProps {
    galleryUrl?: string;
    fallbackGallery?: InfiniteGridItem[];
    style?: CSSProperties;
}
export declare function InfiniteDraggableGrid({ gallery, style }: InfiniteDraggableGridProps): import("react/jsx-runtime").JSX.Element;
export declare function InfiniteGrid({ galleryUrl, fallbackGallery, style, }: InfiniteGridProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=InfiniteGrid.d.ts.map