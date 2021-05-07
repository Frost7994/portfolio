import { Page } from "components/elements";
import { Navbar, Socialbar } from "components/compounds";

const Layout = ({ children }) => {
    return (
        <Page>
            <Navbar />
            <Socialbar />
            {children}
        </Page>
    );
};

export default Layout;
