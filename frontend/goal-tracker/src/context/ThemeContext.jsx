import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    useEffect(() => {

        if (theme === "dark") {
            document.body.classList.add("bg-gray-900", "text-white");
            document.body.classList.remove("bg-white", "text-black"); 
        } else {
            document.body.classList.add("bg-white", "text-black");
            document.body.classList.remove("bg-gray-900", "text-white");
        }

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
