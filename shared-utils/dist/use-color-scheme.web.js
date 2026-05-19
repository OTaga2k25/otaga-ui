import { useEffect, useState } from 'react';
export function useColorScheme() {
    const [scheme, setScheme] = useState('light');
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        setScheme(mq.matches ? 'dark' : 'light');
        const handler = (e) => setScheme(e.matches ? 'dark' : 'light');
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    return scheme;
}
//# sourceMappingURL=use-color-scheme.web.js.map