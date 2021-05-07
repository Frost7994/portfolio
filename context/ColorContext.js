import { createContext, useState, useEffect } from "react";

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState("#ffc000");

    // Primary Color
    useEffect(() => {
        const primary = localStorage.getItem("primary");

        if (primary) {
            setPrimaryColor(JSON.parse(primary));
        } else {
            setPrimaryColor("#ffc000");
        }
    }, []);

    // Primary Color
    useEffect(() => {
        localStorage.setItem("primary", JSON.stringify(primaryColor));
    }, [primaryColor]);

    const values = {
        primaryColor,
        setPrimaryColor,
    };

    return (
        <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
    );
};

export default ColorProvider;
