export type SignInCardProps = {
    onSignIn?: (email: string, password: string) => void;
    onForgotPassword?: () => void;
    onGoogle?: () => void;
    onApple?: () => void;
    onTwitter?: () => void;
    onAgreement?: () => void;
};
export declare function SignInCard({ onSignIn, onForgotPassword, onGoogle, onApple, onTwitter, onAgreement, }: SignInCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SignInCard.d.ts.map