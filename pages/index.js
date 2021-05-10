export default function Home() {
    return (
        <>
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    paddingTop: "4rem",
                    display: "flex",
                    alignItems: "center",
                }}>
                <div
                    style={{
                        width: "680px",
                        marginLeft: "2rem",
                    }}>
                    <p
                        style={{
                            color: "#ffc000",
                            fontSize: "1.25rem",
                            fontWeight: "500",
                            marginBottom: "-0.5rem",
                        }}>
                        TJ Byrne
                    </p>
                    <h1
                        style={{
                            color: "#fff",
                            fontSize: "3rem",
                            fontWeight: "500",
                            marginBottom: "0.5rem",
                        }}>
                        All Things Design And Code
                    </h1>
                    <p
                        style={{
                            color: "#dadedf",
                            fontSize: "1.5rem",
                            fontWeight: "400",
                            marginBottom: "2rem",
                        }}>
                        I’m a full stack web developer with a taste for UI/UX
                        elements and style.
                    </p>
                    <div>
                        <button
                            style={{
                                fontSize: "1rem",
                                fontWeight: "500",
                                height: "2.5rem",
                                width: "7.5rem",
                                border: "none",
                                borderRadius: "0.2rem",
                                backgroundColor: "#ffc000",
                                marginRight: "1rem",
                                cursor: "pointer",
                            }}>
                            Portfolio
                        </button>
                        <button
                            style={{
                                fontSize: "1rem",
                                fontWeight: "500",
                                height: "2.5rem",
                                width: "7.5rem",
                                border: "2px solid #ffc000",
                                borderRadius: "0.2rem",
                                backgroundColor: "transparent",
                                color: "#ffc000",
                                cursor: "pointer",
                            }}>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
