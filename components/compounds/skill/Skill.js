import styled from "styled-components";
import css from "@styled-system/css";
import { motion } from "framer-motion";

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

const Bar = styled(motion.div)(({ theme }) =>
    css({
        height: "100%",
        borderRadius: "0.2rem",
        backgroundColor: theme.textColor.primary,
    })
);

const Skill = ({ tag, percentage }) => {
    const growVariant = {
        invisible: {
            width: 0,
        },
        visible: (custom) => ({
            width: custom,
            transition: {
                delay: 0.5,
                type: "spring",
                bounce: "0.3",
            },
        }),
    };

    return (
        <div>
            <p>{tag}</p>
            <BarContainer>
                <Bar
                    custom={percentage}
                    variants={growVariant}
                    initial="invisible"
                    animate="visible"
                    exit="invisible"
                />
            </BarContainer>
        </div>
    );
};

export default Skill;
