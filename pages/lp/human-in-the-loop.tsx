import Head from "next/head";
import PageBuilder from "../../components/PageBuilder";
import BookingSection from "../../components/static/BookingSection";
import { booking, sections } from "../../content/human-in-the-loop";

export default function HumanInTheLoop() {
  return (
    <>
      <Head>
        <title>Human-in-the-Loop Code Review for LA Agencies — Bright Code</title>
        <meta
          name="description"
          content="Los Angeles agencies and product teams shipping code with AI: we're the senior engineers who review it before it reaches production. Free workflow audit."
        />
      </Head>
      <PageBuilder blades={sections} />
      <BookingSection id="book-a-call" title={booking.title} subtitle={booking.subtitle} />
    </>
  );
}
