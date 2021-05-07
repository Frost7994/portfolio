import ThemeProvider from "theme";
import GlobalStyle from "theme/GlobalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>TJ Graphics | Designer</title>
                <meta
                    name="description"
                    content="A display portfolio for who I am and what I can bring to the table for your projects"
                />
            </Head>
            <ThemeProvider>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
