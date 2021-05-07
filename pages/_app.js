import ThemeProvider from "theme";
import GlobalStyle from "theme/GlobalStyle";
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
                <GlobalStyle />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
