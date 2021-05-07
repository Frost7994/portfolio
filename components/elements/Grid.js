import styled from "styled-components";
import css from "@styled-system/css";

const Grid = styled("div")(
    css({
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
    })
);

export default Grid;
