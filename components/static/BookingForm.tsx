"use client";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import calStyles from "../../styles/calendlyCalendar.module.css";

const TIME_SLOTS = [
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
];

function toDateString(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

type Status = "idle" | "submitting" | "success" | "error";

const BookingForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
          website: formData.get("website"),
          date: selectedDate ? toDateString(selectedDate) : "",
          time,
        }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={`${calStyles.light} ${calStyles.calandarWrap} text-center py-[60px] px-[30px]`}>
        <h4 className="font-[600] text-[20px]">Request received</h4>
        <p className="mt-[10px] text-[#6b7280]">
          Thanks — we&apos;ll confirm your appointment by email within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="row">
        <input name="name" type="text" placeholder="Your name *" aria-label="Your name" autoComplete="name" required />
        <input name="email" type="email" placeholder="Work email *" aria-label="Work email" autoComplete="email" required />
      </div>

      <input name="company" type="text" placeholder="Agency / company" aria-label="Agency or company" autoComplete="organization" />

      {/* Honeypot — hidden from real users */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="!absolute !left-[-9999px] !w-px !h-px !p-0 !border-0"
      />

      <div className="rounded-[10px] border border-[#E5E5EA] p-[10px]">
        <span className="block text-[14px] font-[600] px-[10px] pt-[5px]">Pick a date *</span>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          disabled={{ before: new Date() }}
          showOutsideDays={false}
          fixedWeeks
          className={calStyles.calendar}
        />
      </div>

      <div className="flex flex-wrap gap-[8px]" role="group" aria-label="Preferred time">
        {TIME_SLOTS.map((slot) => (
          <button
            key={slot.value}
            type="button"
            onClick={() => setTime(time === slot.value ? "" : slot.value)}
            className={`rounded-[10px] border px-[14px] py-[8px] text-[14px] cursor-pointer ${
              time === slot.value
                ? "border-[#0044FF] bg-[#0044FF] text-white"
                : "border-[#E5E5EA]"
            }`}
          >
            {slot.label}
          </button>
        ))}
      </div>

      <textarea
        name="message"
        placeholder="What would you like to cover? (optional)"
        aria-label="Message"
      />

      {status === "error" && (
        <p role="alert" className="text-[14px] text-[#d93025]">{errorMessage}</p>
      )}

      <button
        className="btn-primary no-arrow w-fit ml-auto mt-[5px]"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Request appointment"}
      </button>
    </form>
  );
};

export default BookingForm;
