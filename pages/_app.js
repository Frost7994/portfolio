import ThemeProvider from "theme";
import GlobalStyle from "theme/GlobalStyle";
import ColorProvider from "context/ColorContext";

import Head from "next/head";

import { Layout } from "components/compounds";

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
                <ColorProvider>
                    <GlobalStyle />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ColorProvider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
