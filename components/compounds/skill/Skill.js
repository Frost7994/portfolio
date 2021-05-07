import styled from "styled-components";
import css from "@styled-system/css";

const BarContainer = styled("div")(({ theme }) =>
    css({
        position: "relative",
        height: "1rem",
        width: "100%",
        border: "2px solid",
        borderColor: theme.textColor.primary,
        borderRadius: "0.2rem",
        padding: "2px",
    })
);

const Bar = styled("div")(({ percentage, theme }) =>
    css({
        height: "100%",
        width: percentage,
        borderRadius: "0.2rem",
        backgroundColor: theme.textColor.primary,
    })
);

const Skill = ({ tag, percentage }) => {
    return (
        <div>
            <p>{tag}</p>
            <BarContainer>
                <Bar percentage={percentage} />
            </BarContainer>
        </div>
    );
};

export default Skill;
