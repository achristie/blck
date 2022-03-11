import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </SessionProvider>
  );
}

export default MyApp;
