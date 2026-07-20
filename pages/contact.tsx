import Head from "next/head";
import PageBuilder from "../components/PageBuilder";
import { sections } from "../content/contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Book a Call — Bright Code</title>
        <meta
          name="description"
          content="Thirty minutes on your agency's delivery pipeline: where AI already is, where it should be, and where it needs a human."
        />
      </Head>
      <PageBuilder blades={sections} />
    </>
  );
}
