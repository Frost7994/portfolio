import styled from "styled-components";
import css from "@styled-system/css";
import { layout, color } from "styled-system";

const Section = styled("div")(
    css({
        width: "100%",
    }),
    layout,
    color
);

export default Section;
