import styled from "styled-components";
import css from "@styled-system/css";

const Wrapper = styled("div")(
    css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: "1rem",
    })
);

const Dot = styled("div")(
    css({
        height: "2rem",
        width: "2rem",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        ":nth-child(3)": {
            border: "2px solid pink",
        },
    })
);
const DotInner = styled("div")(
    css({
        height: "0.5rem",
        width: "0.5rem",
        borderRadius: "50%",
        backgroundColor: "pink",
    })
);

const Bar = styled("div")(
    css({
        height: "calc(100% - 2rem)",
        width: "0.2rem",
        position: "absolute",
        top: "1rem",
        backgroundColor: "blue",
        zIndex: "0",
    })
);

const Timeline = () => {
    const dots = ["1", "2", "3"];

    return (
        <>
            <Wrapper>
                {dots.map((dot) => (
                    <Dot key={dot}>
                        <DotInner />
                    </Dot>
                ))}
                <Bar />
            </Wrapper>
        </>
    );
};

export default Timeline;
