import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
    const saved = localStorage.getItem("theme")
    if(saved === "light" || saved === "dark") return saved

    return "dark"
}

export function ThemeToggle() {
    const [ theme, setTheme ] = useState<Theme>(() => getInitialTheme())

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const isLight = theme === "light";

    return (
        <button 
        className="theme-toggle"
        type="button"
        onClick={() => setTheme(isLight ? "dark" : "light")}
        aria-label="Toggle theme"
        title="Toggle theme"
        >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
    )
}