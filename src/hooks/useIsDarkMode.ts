import { useEffect, useState } from "react";

export function useIsDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            if (typeof window.matchMedia("(prefers-color-scheme: dark)")) {
                return true;
            } else {
                return false;
            }
        }
    });

    useEffect(() => {
        const controller = new AbortController();

        if (typeof window !== "undefined") {
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
                "change",
                (e) => {
                    setIsDarkMode(e.matches);
                },
                { signal: controller.signal }
            );
        }

        return () => controller.abort();
    }, []);

    return isDarkMode;
}
