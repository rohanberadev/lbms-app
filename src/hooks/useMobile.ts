import { useEffect, useState } from "react";

export function useMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth <= breakpoint;
        }
        return false;
    });

    useEffect(() => {
        const controller = new AbortController();

        if (typeof window !== "undefined") {
            window.addEventListener(
                "resize",
                () => {
                    setIsMobile(window.innerWidth <= breakpoint);
                },
                { signal: controller.signal }
            );
        }

        return () => controller.abort();
    }, [breakpoint]);

    return isMobile;
}
