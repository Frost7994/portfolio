import styled from "styled-components";
import css from "@styled-system/css";
import { motion } from "framer-motion";

// --- CUSTOM PICKER COMPONENTS --- //

export const HueWrapper = styled("div")(
    css({
        width: "100%",
        height: "10px",
        position: "relative",
        marginBottom: "0.2rem",
        alignSelf: "flex-start",
    })
);

export const SaturationWrapper = styled("div")(
    css({
        width: "100%",
        height: "100px",
        position: "relative",
        marginBottom: "0.2rem",
    })
);

export const Swatch = styled("div")(({ hex }) =>
    css({
        width: "20%",
        background: hex,
        marginLeft: "0.2rem",
        borderRadius: "0.2rem",
    })
);

// --- COLOR PICKER COMPONENTS --- //

export const Wrapper = styled(motion.div)(({ theme }) =>
    css({
        height: "300px",
        width: "310px",
        borderRadius: "0.2rem",
        overflow: "hidden",
        backgroundColor: theme.backgroundColor.primary,
        transition: "all 0.2s linear",
    })
);

export const InnerWrapper = styled(motion.div)(
    css({
        height: "100%",
        width: "100%",
        padding: "1rem",
    })
);

export const Container = styled("div")(
    css({
        height: "100%",
        flex: 1,
    })
);

export const ColorWrapper = styled("div")(
    css({
        height: "100%",
        width: "2.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginRight: "1rem",
        flexShrink: "0",
        borderRadius: "0.2rem",
        padding: "0.6rem 0rem",
        boxShadow:
            "inset 1px 1px 2px 0px rgba(0,0,0,0.5), inset -1px -1px 2px 0px rgba(255,255,255,0.5)",
    })
);

export const ColorBall = styled("div")(({ color }) =>
    css({
        height: "1.5rem",
        width: "1.5rem",
        borderRadius: "50%",
        backgroundColor: color,
        marginBottom: "0.5rem",
        boxShadow:
            "4px 4px 4px 0 rgba(255, 255, 255, 0.5) inset,  -2px -2px 4px 0 rgba(0, 0, 0, .25) inset",

        ":last-child": {
            margin: "0rem",
        },
    })
);

export const Toggle = styled("input")`
    margin-left: 0.5rem;
    position: relative;
    width: 40px;
    height: 20px;
    -webkit-appearance: none;
    background-color: #c6c6c6;
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;

    &:checked {
        background-color: ${(props) => props.primaryColor};
    }

    &::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        background-color: #fff;
        transform: scale(1.1);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
    }

    &:checked {
        &::before {
            left: 20px;
        }
    }
`;
