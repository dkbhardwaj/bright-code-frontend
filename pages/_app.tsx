import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "../styles/global.css";
import "../app/globals.css";
import "../styles/darkmode.css";
import "../styles/buttons.css";
import StaticHeader from "../components/static/Header";
import StaticFooter from "../components/static/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900", "600"],
  display: "swap",
  variable: "--font-poppins",
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
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={`${poppins.className} ${poppins.variable} pt-[101px]`}>
      <StaticHeader />
      {getLayout(<Component {...pageProps} />)}
      <StaticFooter theme="dark" />
    </main>
  );
}
