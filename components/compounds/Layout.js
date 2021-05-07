import { useContext } from "react";
import { OpenContext } from "context/OpenContext";

import { Page, Overlay, Modal } from "components/elements";
import { Navbar, Socialbar } from "components/compounds";

const Layout = ({ children }) => {
    const { open, toggleOpen, colorOpen, toggleColorOpen } = useContext(
        OpenContext
    );

    return (
        <Page>
            <Modal
                selector="portal"
                open={colorOpen}
                toggleOpen={toggleColorOpen}>
                <p>This is modal content</p>
            </Modal>
            <Navbar />
            {open && <Overlay toggleOpen={toggleOpen} />}
            <Socialbar />
            {children}
        </Page>
    );
};

export default Layout;
