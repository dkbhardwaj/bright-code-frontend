import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../app/globals.css";
import "../styles/buttons.css";
import { useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900", "600"],
  display: "swap",
});

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => {
    var anchors = document.querySelectorAll("a");
    anchors.forEach((element) => {
      if (!element.host.includes("bright-code.io")) {
        element.setAttribute("target", "_blank");
      }
    });
  });

  return (
    <>
      <Layout>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
