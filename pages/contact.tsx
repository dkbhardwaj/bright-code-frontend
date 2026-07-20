import Head from "next/head";
import PageBuilder from "../components/PageBuilder";
import BookingSection from "../components/static/BookingSection";
import { booking, sections } from "../content/contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Book an Appointment — Bright Code</title>
        <meta
          name="description"
          content="Book thirty minutes on your agency's delivery pipeline: where AI already is, where it should be, and where it needs a human."
        />
      </Head>
      <BookingSection title={booking.title} subtitle={booking.subtitle} />
      <PageBuilder blades={sections} />
    </>
  );
}
