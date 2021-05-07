import ThemeProvider from "theme";
import GlobalStyle from "theme/GlobalStyle";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
