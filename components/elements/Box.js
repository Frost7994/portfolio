import styled from "styled-components";
import css from "@styled-system/css";
import { layout, color, flexbox, space } from "styled-system";

const Box = styled("div")(
    css({
        display: "flex",
    }),
    layout,
    color,
    space,
    flexbox
);

export default Box;
