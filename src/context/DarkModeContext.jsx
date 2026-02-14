import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Dark Mode Context
 * Provides theme state and toggle across the app.
 * Persists preference to localStorage.
 */
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage first, then system preference
        const stored = localStorage.getItem('darkMode');
        if (stored !== null) return JSON.parse(stored);
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export const useDarkMode = () => useContext(DarkModeContext);
