import Head from "next/head";
import PageBuilder from "../components/PageBuilder";
import { sections } from "../content/how-we-work";

export default function HowWeWork() {
  return (
    <>
      <Head>
        <title>How We Work — Bright Code</title>
        <meta
          name="description"
          content="Small scope first: intro call, workflow audit, pilot, then scale. Engagement models for agencies adopting AI with human oversight."
        />
      </Head>
      <PageBuilder blades={sections} />
    </>
  );
}
