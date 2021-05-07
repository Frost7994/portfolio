import styled from "styled-components";
import css from "@styled-system/css";
import { space } from "styled-system";

const GridItem = styled("div")(
    css({
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "brown",
    }),
    space
);

export default GridItem;
