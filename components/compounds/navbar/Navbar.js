import { Container } from "components/elements";
import {
    NavbarWrapper,
    NavbarWrapperInner,
    NavbarLogo,
    ThemeButton,
} from "./components";

// Component
const Navbar = () => {
    // Theme Selector
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <>
            <NavbarWrapper>
                <Container>
                    <NavbarWrapperInner>
                        <NavbarLogo />
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Portfolio</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        <ThemeButton handleClick={handleClick} />
                    </NavbarWrapperInner>
                </Container>
            </NavbarWrapper>
        </>
    );
};

export default Navbar;
