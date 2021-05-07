import { useContext } from "react";
import { ColorContext } from "context/ColorContext";

import styled from "styled-components";
import css from "@styled-system/css";

import Link from "next/link";

import Facebook from "./svgs/facebook.svg";
import Instagram from "./svgs/instagram.svg";
import Twitter from "./svgs/twitter.svg";
import Linked from "./svgs/linked-in.svg";

const Wrapper = styled("div")(
    css({
        position: "fixed",
        top: "calc(50% - 4rem)",
        right: "1rem",
        height: "10rem",
        width: "2rem",
        display: ["none", "none", "flex"],
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    })
);

const IconWrapper = styled("div")(({ primaryColor, theme }) =>
    css({
        path: {
            ":first-child": {
                stroke: primaryColor,
            },
            ":not(:first-child)": {
                fill: primaryColor,
            },
        },
        ":hover": {
            svg: {
                fill: primaryColor,
            },
            path: {
                ":not(:first-child)": {
                    fill: theme.backgroundColor.primary,
                },
            },
        },
    })
);

const links = [
    { icon: <Facebook />, link: "https://www.facebook.com" },
    { icon: <Instagram />, link: "https://www.instagram.com" },
    { icon: <Twitter />, link: "https://www.twitter.com" },
    { icon: <Linked />, link: "https://www.linkedin.com" },
];

const Socialbar = () => {
    const { primaryColor } = useContext(ColorContext);

    return (
        <>
            <Wrapper>
                {links.map((link, index) => (
                    <Link href={link.link} key={index}>
                        <a href={link.link} target="_blank">
                            <IconWrapper primaryColor={primaryColor}>
                                {link.icon}
                            </IconWrapper>
                        </a>
                    </Link>
                ))}
            </Wrapper>
        </>
    );
};

export default Socialbar;
