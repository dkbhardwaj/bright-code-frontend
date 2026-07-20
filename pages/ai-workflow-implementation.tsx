import Head from "next/head";
import PageBuilder from "../components/PageBuilder";
import { sections } from "../content/ai-workflow-implementation";

export default function AiWorkflowImplementation() {
  return (
    <>
      <Head>
        <title>AI Workflow Implementation for Agencies — Bright Code</title>
        <meta
          name="description"
          content="We design and build AI workflows around how your agency delivers — inside your stack, with guardrails and human checkpoints from day one."
        />
      </Head>
      <PageBuilder blades={sections} />
    </>
  );
}
