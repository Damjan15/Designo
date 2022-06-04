import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        const scrollRestoration = window.history.scrollRestoration
        if (scrollRestoration) {
            window.history.scrollRestoration = "manual"
        }

        window.scrollTo(0, 0)
    }, [ pathname ])
}