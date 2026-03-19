import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

/**
 * Reads the theme that index.html already applied to <html data-theme="...">.
 * This guarantees React state always matches what's on screen —
 * no flash, no mismatch, even on first load.
 *
 * Priority (same as the inline script in index.html):
 *   1. localStorage  — user manually toggled
 *   2. prefers-color-scheme — OS/browser system preference
 *   3. fallback: "light"
 */
function getInitialTheme() {
  // Read what index.html already set — single source of truth
  const applied = document.documentElement.getAttribute("data-theme");
  if (applied) return applied;

  // Fallback (should never reach here if index.html script ran)
  const saved = localStorage.getItem("theme");
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Keep <html data-theme> and localStorage in sync whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Follow OS changes live — only if user hasn't saved a manual preference
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}