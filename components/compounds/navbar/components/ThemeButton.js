import { useContext } from "react";
import { ColorContext } from "context/ColorContext";

import styled from "styled-components";
import css from "@styled-system/css";

import { FaPaintBrush as Paintbrush } from "react-icons/fa";

const ThemeButtonWrapper = styled("button")(({ primaryColor }) =>
    css({
        border: "2px solid",
        borderColor: primaryColor,
        borderRadius: "0.2rem",
    })
);

const ThemeButton = ({ handleClick }) => {
    const { primaryColor } = useContext(ColorContext);

    return (
        <ThemeButtonWrapper onClick={handleClick} primaryColor={primaryColor}>
            <Paintbrush />
            Theme
        </ThemeButtonWrapper>
    );
};

export default ThemeButton;
