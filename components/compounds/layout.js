// Compounds
import Navbar from "./navbar";

const Layout = ({ children }) => {
    return (
        <>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                }}>
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        maxWidth: "1500px",
                        margin: "0 auto",
                        padding: "0rem 1rem",
                    }}>
                    <Navbar />
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
