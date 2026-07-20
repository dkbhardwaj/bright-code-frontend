import Head from "next/head";
import PageBuilder from "../components/PageBuilder";
import { sections } from "../content/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bright Code — AI Workflows for Agencies, with Human Oversight</title>
        <meta
          name="description"
          content="Bright Code helps agencies implement AI workflows and provides deep human oversight of the AI they already run — so every output is client-ready."
        />
      </Head>
      <PageBuilder blades={sections} />
    </>
  );
}
