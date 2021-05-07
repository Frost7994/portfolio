import { createContext, useState, useEffect } from "react";

// Theme Provider
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Theme Constants
const Constants = {
    breakpoints: ["440px", "640px", "832px", "1024px"],
    fontSize: {
        h1: "2rem",
        h2: "1.5rem",
        h3: "1.2rem",
        h4: "1rem",
        h5: "0.8rem",
        h6: "0.6rem",
        body: "0.8rem",
    },
    fontWeight: {
        h1: "600",
        h2: "600",
        h3: "500",
        h4: "500",
        h5: "400",
        h6: "400",
        body: "400",
    },
    spacing: {
        1: "0.2rem",
        2: "0.4rem",
        3: "0.6rem",
        4: "0.8rem",
        5: "1rem",
        6: "1.2rem",
        7: "1.4rem",
        8: "1.6rem",
        9: "1.8rem",
        10: "2rem",
        11: "2.2rem",
        12: "2.4rem",
    },
};

// Light Theme
export const lightTheme = {
    scrollbar: {
        track: "#dadedf",
        thumb: "#a7afb2",
        hover: "#8c979a",
    },
    backgroundColor: {
        primary: "#ffffff",
        secondary: "#f2f3f4",
        tertiary: "#dadedf",
        gradient: "#fff",
    },
    tagColor: {
        primary: "#363537",
        secondary: "#363537",
        tertiary: "#363537",
    },
    titleColor: {
        primary: "#363537",
        secondary: "#363537",
        tertiary: "#363537",
    },
    textColor: {
        primary: "#363537",
        secondary: "#363537",
        tertiary: "#363537",
    },
    button: {
        background: {
            primary: "#363537",
            secondary: "#363537",
            tertiary: "#363537",
        },
        color: {
            primary: "#363537",
            secondary: "#363537",
            tertiary: "#363537",
        },
    },
    iconColor: {
        primary: "#2c313a",
    },
    ...Constants,
};

// Dark Theme
export const darkTheme = {
    scrollbar: {
        track: "#596273",
        thumb: "#2c313a",
        hover: "#1A1D23",
    },
    backgroundColor: {
        primary: "#3E4551",
        secondary: "#23272f",
        tertiary: "#596273",
        gradient: "#111317",
    },
    tagColor: {
        primary: "#fff",
        secondary: "#dadedf",
        tertiary: "#dadedf",
    },
    titleColor: {
        primary: "#fff",
        secondary: "#dadedf",
        tertiary: "#dadedf",
    },
    textColor: {
        primary: "#dadedf",
        secondary: "#dadedf",
        tertiary: "#dadedf",
    },

    button: {
        background: {
            primary: "#dadedf",
            secondary: "#dadedf",
            tertiary: "#dadedf",
        },
        color: {
            primary: "#363537",
            secondary: "#dadedf",
            tertiary: "#dadedf",
        },
    },
    icon: {
        primary: "#2c313a",
    },
    ...Constants,
};

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("");

    // Light/dark theme from localStorage
    useEffect(() => {
        const theme = localStorage.getItem("theme");

        if (theme) {
            setThemeMode(JSON.parse(theme));
        } else {
            setThemeMode("lightTheme");
        }
    }, []);

    // Reset the themeMode to localStorage when it changes
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(themeMode));
    }, [themeMode]);

    const customTheme = themeMode === "lightTheme" ? lightTheme : darkTheme;

    // Toggle light and dark mode
    const toggleTheme = () => {
        setThemeMode((prevState) => {
            if (prevState === "lightTheme") {
                return "darkTheme";
            } else {
                return "lightTheme";
            }
        });
    };

    const value = {
        themeMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            <StyledThemeProvider theme={customTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
