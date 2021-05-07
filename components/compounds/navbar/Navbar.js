import { useContext } from "react";
import { ColorContext } from "context/ColorContext";
import { OpenContext } from "context/OpenContext";

import useWindowSize from "utils/useWindowSize";

import styled from "styled-components";
import css from "@styled-system/css";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import { Container } from "components/elements";
import {
    FaPaintRoller as Paintbrush,
    FaAlignRight as Open,
    FaTimes as Close,
} from "react-icons/fa";

// Sub Components
const Wrapper = styled("div")(
    css({
        position: "fixed",
        top: "0",
        height: "5rem",
        width: "100%",
    })
);

const WrapperInner = styled("div")(
    css({
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "100",
    })
);

const Logo = styled("img")(
    css({
        height: "3rem",
    })
);

const Nav = styled("nav")(({ mobile }) =>
    css({
        display: mobile ? "flex" : ["none", "none", "block"],
    })
);

const List = styled("ul")(({ mobile }) =>
    css({
        listStyle: "none",
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        alignItems: "center",
    })
);

const ListItem = styled("li")(({ theme, mobile }) =>
    css({
        borderRadius: "0.2rem",
        padding: mobile ? "0.5rem 1rem" : "0.3rem 0.5rem",
        margin: " 0.2rem",
        cursor: "pointer",
        fontSize: mobile ? "1.2rem" : "1rem",
        ":hover": {
            backgroundColor: theme.backgroundColor.primary,
        },
    })
);

const StyledLink = styled("a")(({ theme }) =>
    css({
        textDecoration: "none",
        color: theme.textColor.primary,
    })
);

const ThemeButton = styled("button")(({ primaryColor, theme }) =>
    css({
        backgroundColor: "transparent",
        color: primaryColor,
        fontSize: "1rem",
        padding: "0.2rem 0.5rem",
        border: "2px solid",
        borderColor: primaryColor,
        borderRadius: "0.2rem",
        display: ["none", "none", "block"],
        cursor: "pointer",
        transition: "all 0.2s ease",
        ":hover": {
            backgroundColor: primaryColor,
            color: theme.button.color.primary,
        },
        ":active": {
            outline: "none",
        },
        ":focus": {
            outline: "none",
        },
    })
);

const MobileButton = styled("button")(({ primaryColor, theme }) =>
    css({
        display: ["flex", "flex", "none"],
        backgroundColor: "transparent",
        color: primaryColor,
        border: "2px solid",
        borderColor: primaryColor,
        borderRadius: "0.2rem",
        height: "3rem",
        width: "3rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontSize: "1.2rem",
        justifyContent: "center",
        alignItems: "center",

        ":hover": {
            backgroundColor: primaryColor,
            color: theme.button.color.primary,
        },
        ":active": {
            outline: "none",
        },
        ":focus": {
            outline: "none",
        },
    })
);

const MobileBackground = styled(motion.div)(({ theme }) =>
    css({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        backgroundColor: theme.backgroundColor.primary,
        display: ["flex", "flex", "none"],
        zIndex: "99",
    })
);

const MobileInner = styled(motion.div)(
    css({
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })
);

// Component
const Navbar = () => {
    const { primaryColor } = useContext(ColorContext);
    const { open, toggleOpen } = useContext(OpenContext);

    // Theme Selector
    const themeClick = () => {
        console.log("clicked");
    };

    // Get window
    const size = useWindowSize();

    // This will automatcially close the navmenu on screen resize
    if (size.width > 639) {
        if (open === true) {
            setTimeout(function () {
                setOpen(false);
            }, 100);
        }
    }

    // Mobile bg variants
    const bgVariant = {
        invisible: {
            height: "0px",
        },
        visible: {
            height: "400px",
        },
    };

    const innerVariant = {
        invisible: {
            opacity: 0,
            transition: {
                duration: 0.1,
                delay: 0.1,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.1,
                delay: 0.1,
            },
        },
    };

    const links = [
        { tag: "Home", link: "/" },
        { tag: "About", link: "/about" },
        { tag: "Portfolio", link: "/portfolio" },
        { tag: "Contact", link: "/contact" },
    ];

    return (
        <>
            <Wrapper>
                <Container>
                    <WrapperInner>
                        <Logo src="/logo.svg" alt="logo" />
                        <Nav>
                            <List>
                                {links.map((link, index) => (
                                    <ListItem key={index}>
                                        <Link href={link.link}>
                                            <StyledLink>{link.tag}</StyledLink>
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Nav>
                        <ThemeButton
                            onClick={themeClick}
                            primaryColor={primaryColor}
                            aria-label="theme toggler">
                            <Paintbrush style={{ marginRight: "0.2rem" }} />
                            Theme
                        </ThemeButton>
                        <MobileButton
                            onClick={toggleOpen}
                            primaryColor={primaryColor}
                            aria-label="open mobile">
                            {open ? <Close /> : <Open />}
                        </MobileButton>
                    </WrapperInner>
                    <AnimatePresence exitBeforeEnter>
                        {open && (
                            <MobileBackground
                                variants={bgVariant}
                                initial="invisible"
                                animate="visible"
                                exit="invisible"
                                transition={{
                                    duration: 0.3,
                                }}>
                                <MobileInner
                                    variants={innerVariant}
                                    initial="invisible"
                                    animate="visible"
                                    exit="invisible">
                                    <Nav mobile>
                                        <List mobile>
                                            {links.map((link, index) => (
                                                <ListItem key={index} mobile>
                                                    <Link href={link.link}>
                                                        <StyledLink>
                                                            {link.tag}
                                                        </StyledLink>
                                                    </Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Nav>
                                </MobileInner>
                            </MobileBackground>
                        )}
                    </AnimatePresence>
                </Container>
            </Wrapper>
        </>
    );
};

export default Navbar;
