import styled from "styled-components";
import css from "@styled-system/css";

const Overlay = styled("div")(({ theme }) =>
    css({
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: theme.backgroundColor.secondary,
        opacity: "0.9",
        zIndex: "98",
    })
);

export default Overlay;
