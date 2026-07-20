import Head from "next/head";
import PageBuilder from "../components/PageBuilder";
import { sections } from "../content/ai-oversight";

export default function AiOversight() {
  return (
    <>
      <Head>
        <title>Human Oversight of AI Workflows — Bright Code</title>
        <meta
          name="description"
          content="Experienced reviewers between your AI and your clients: auditing outputs, catching hallucinations and compliance risks, and owning the quality bar."
        />
      </Head>
      <PageBuilder blades={sections} />
    </>
  );
}
