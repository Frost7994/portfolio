import styled from "styled-components";
import css from "@styled-system/css";

const Wrapper = styled("img")(css({ height: "3rem" }));

const NavbarLogo = () => {
    return <Wrapper src="/logo.svg" alt="logo" />;
};

export default NavbarLogo;
