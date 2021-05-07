import styled from "styled-components";
import css from "@styled-system/css";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Wrapper = styled(motion.div)(({ theme }) =>
    css({
        position: "fixed",
        padding: "1rem",
        backgroundColor: theme.backgroundColor.primary,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "200",
        border: "0.2rem",
    })
);

const Overlay = styled(motion.div)(({ theme }) =>
    css({
        position: "fixed",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        backgroundColor: theme.backgroundColor.primary,
        zIndex: "200",
    })
);

const fadeVariant = {
    invisible: {
        opacity: 0,
    },
    visible: (custom) => ({
        opacity: custom ? custom : 1,
    }),
};

const Modal = ({ children, selector, open, toggleOpen }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, [selector]);

    return mounted && open
        ? createPortal(
              <>
                  <Overlay
                      onClick={toggleOpen}
                      custom={0.8}
                      variants={fadeVariant}
                      initial="invisible"
                      animate="visible"
                      exit="invisible"
                  />
                  <Wrapper
                      variants={fadeVariant}
                      initial="invisible"
                      animate="visible"
                      exit="invisible">
                      {children}
                  </Wrapper>
              </>,
              document.getElementById(selector)
          )
        : null;
};

export default Modal;
