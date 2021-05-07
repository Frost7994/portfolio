import { useState, useContext } from "react";
import { ThemeContext } from "theme";
import { ColorContext } from "context/ColorContext";

import CustomColorPicker from "./CustomColorPicker";
import { rgb2hex } from "utils/Rgb2Hex";

import {
    Wrapper,
    InnerWrapper,
    Container,
    ColorWrapper,
    ColorBall,
    Toggle,
} from "./Styles";

const ColorPicker = () => {
    const { toggleTheme, themeMode } = useContext(ThemeContext);
    const {
        primaryColor,
        setPrimaryColor,
        resetColor,
        customColors,
        setCustomColors,
    } = useContext(ColorContext);

    const [color, setColor] = useState(primaryColor);

    const handleChange = (color) => {
        setColor(color.hex);
    };

    const handleToggleChange = () => {
        toggleTheme();
    };

    const handleColorSave = (color) => {
        if (customColors.length >= 7) {
            const newColors = [...customColors];
            newColors.shift();
            setCustomColors([...newColors, color]);
        } else {
            setCustomColors([...customColors, color]);
        }
    };

    const changePrimary = (e) => {
        const newPrimary = rgb2hex(e.target.style.backgroundColor);
        setPrimaryColor(newPrimary);
    };

    const handleReset = () => {
        setCustomColors([]);
        setColor("#ffc000");
        resetColor();
    };

    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    <Container>
                        <div
                            style={{
                                height: "calc(100% - 2rem)",
                                display: "flex",
                            }}>
                            <ColorWrapper>
                                {customColors.map((color, index) => (
                                    <ColorBall
                                        key={index}
                                        color={color}
                                        style={{ backgroundColor: color }}
                                        onClick={changePrimary}
                                    />
                                ))}
                            </ColorWrapper>

                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    position: "relative",
                                }}>
                                <CustomColorPicker
                                    color={color}
                                    onChange={handleChange}
                                />
                                <div>
                                    <button
                                        style={{
                                            alignSelf: "flex-start",
                                            marginRight: "0.2rem",
                                            backgroundColor: primaryColor,
                                            border: "2px solid",
                                            borderColor: primaryColor,
                                            padding: "0.2rem",
                                            borderRadius: "0.2rem",
                                            fontSize: "0.9rem",
                                            fontWeight: "500",
                                            color: "#f2f2f2",
                                        }}
                                        onClick={() => {
                                            handleColorSave(color);
                                        }}>
                                        Save Color
                                    </button>
                                    <button
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "2px solid",
                                            borderColor: primaryColor,
                                            padding: "0.2rem",
                                            borderRadius: "0.2rem",
                                            fontSize: "0.9rem",
                                            fontWeight: "400",
                                            color: primaryColor,
                                        }}
                                        onClick={handleReset}>
                                        Reset
                                    </button>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        position: "absolute",
                                        bottom: "0",
                                        right: "0",
                                    }}>
                                    <p>Dark Mode</p>
                                    <Toggle
                                        primaryColor={primaryColor}
                                        type="checkbox"
                                        onChange={handleToggleChange}
                                        checked={
                                            themeMode === "darkTheme"
                                                ? true
                                                : false
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </InnerWrapper>
            </Wrapper>
        </>
    );
};

export default ColorPicker;
