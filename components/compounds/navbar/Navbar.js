import { ThemeButton } from "./components";

const Navbar = () => {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <>
            <div>
                <img src="/logo.svg" alt="logo" />
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <ThemeButton handleClick={handleClick} />
            </div>
        </>
    );
};

export default Navbar;
