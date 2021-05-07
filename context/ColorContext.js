import { createContext, useState, useEffect } from "react";

export const ColorContext = createContext();

const ColorProvider = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState("#ffc000");
    const [customColors, setCustomColors] = useState([]);

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

    // Custom color palette
    useEffect(() => {
        const colorPalette = localStorage.getItem("colorPalette");

        if (colorPalette) {
            setCustomColors(JSON.parse(colorPalette));
        } else {
            setCustomColors([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("colorPalette", JSON.stringify(customColors));
    }, [customColors]);

    const resetColor = () => {
        setPrimaryColor("#ffc000");
    };

    const values = {
        primaryColor,
        setPrimaryColor,
        customColors,
        setCustomColors,
        resetColor,
    };

    return (
        <ColorContext.Provider value={values}>{children}</ColorContext.Provider>
    );
};

export default ColorProvider;
