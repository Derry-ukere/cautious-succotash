import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/nav-bar/NavBar";
import Head from "next/head";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps : {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider>
      <Head>
        <title>Auth App</title>
        <meta name="description" content="this ia blog section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
