import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import "../styles/global.css";
import "../app/globals.css";
import "../styles/darkmode.css";
import "../styles/buttons.css";
import StaticHeader from "../components/static/Header";
import StaticFooter from "../components/static/Footer";

// Landing pages with a stripped-down header/footer (no nav or footer
// links) to keep paid/organic traffic focused on the page's own CTA.
const LANDING_PAGE_ROUTES = ["/lp/human-in-the-loop"];

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
  const router = useRouter();
  const isLandingPage = LANDING_PAGE_ROUTES.includes(router.pathname);

  return (
    <main className={`${poppins.className} ${poppins.variable} pt-[101px]`}>
      <StaticHeader hideNavLinks={isLandingPage} ctaHref={isLandingPage ? "#book-a-call" : undefined} />
      {getLayout(<Component {...pageProps} />)}
      <StaticFooter theme="dark" hideLinks={isLandingPage} />
    </main>
  );
}
