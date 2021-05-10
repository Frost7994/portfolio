// Styling
import styled from "styled-components";
import css from "@styled-system/css";

import Link from "next/link";

import Home from "./home.svg";

const Wrapper = styled("div")(
    css({
        height: "4rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "fixed",
    })
);

const Logo = styled("img")(
    css({
        height: "3rem",
        marginRight: "1rem",
        svg: {
            fill: "red",
        },
    })
);

const List = styled("ul")(
    css({
        listStyle: "none",
        display: "flex",
    })
);

const ListItem = styled("li")(({ theme }) =>
    css({
        padding: "0.3rem 0.5rem",
        borderRadius: "0.2rem",
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontSize: "1rem",
        fontWeight: "500",

        ":nth-child(2)": {
            margin: "0rem 0.5rem",
        },

        ":hover": {
            backgroundColor: theme.backgroundColor.secondary,
        },
    })
);

const StyledLink = styled("a")(({ theme }) =>
    css({
        textDecoration: "none",
        color: theme.textColor.primary,
    })
);

const Navbar = () => {
    const links = [
        { id: "1", tag: "About", link: "/about" },
        { id: "2", tag: "Portfolio", link: "/portfolio" },
        { id: "3", tag: "Contact", link: "/contact" },
    ];

    return (
        <>
            <Wrapper>
                <Logo src="home.svg" alt="logo" />
                <nav>
                    <List>
                        {links.map(({ tag, link, id }) => (
                            <ListItem key={id}>
                                <Link href={link}>
                                    <StyledLink>{tag}</StyledLink>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </nav>
            </Wrapper>
        </>
    );
};

export default Navbar;
