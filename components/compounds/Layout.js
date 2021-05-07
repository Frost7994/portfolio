import { useContext } from "react";
import { OpenContext } from "context/OpenContext";

import { Page, Overlay } from "components/elements";
import { Navbar, Socialbar } from "components/compounds";

const Layout = ({ children }) => {
    const { open, toggleOpen } = useContext(OpenContext);

    return (
        <Page>
            <Navbar />
            {open && <Overlay toggleOpen={toggleOpen} />}
            <Socialbar />
            {children}
        </Page>
    );
};

export default Layout;
