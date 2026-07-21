"use client";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import calStyles from "../../styles/calendlyCalendar.module.css";
import { GOOGLE_ADS_BOOKING_CONVERSION } from "../../content/site";

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

function formatDisplayDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

// No same-day appointments: earliest selectable date is tomorrow
function earliestBookableDate(): Date {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  return tomorrow;
}

type Status = "idle" | "submitting" | "success" | "error";

const StepIndicator: React.FC<{ step: number }> = ({ step }) => (
  <div className="flex items-center gap-[8px] mb-[20px]" aria-label={`Step ${step} of 3`}>
    {[1, 2, 3].map((n) => (
      <span
        key={n}
        className={`h-[6px] rounded-[3px] transition-all duration-300 ${
          n <= step ? "bg-[#0044FF] w-[32px]" : "bg-[#E5E5EA] w-[16px]"
        }`}
      />
    ))}
  </div>
);

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

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
          phone: formData.get("phone"),
          message: formData.get("message"),
          website: formData.get("website"),
          date: selectedDate ? toDateString(selectedDate) : "",
          time,
        }),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        // Google Ads "Free consultation" conversion
        const gtag = (window as any).gtag;
        if (typeof gtag === "function") {
          gtag("event", "conversion", { send_to: GOOGLE_ADS_BOOKING_CONVERSION });
        }
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
          Thanks — we&apos;ll confirm{" "}
          {selectedDate ? `${formatDisplayDate(selectedDate)} at ${TIME_SLOTS.find((s) => s.value === time)?.label}` : "your appointment"}{" "}
          by email within one business day.
        </p>
      </div>
    );
  }

  // Step 1: pick a date
  if (step === 1) {
    return (
      <div>
        <StepIndicator step={1} />
        <span className="block text-[16px] font-[600] mb-[10px]">Book a meeting</span>
        <div className="rounded-[10px] border border-[#E5E5EA] p-[10px]">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
              if (date) setStep(2);
            }}
            disabled={{ before: earliestBookableDate() }}
            startMonth={new Date()}
            showOutsideDays={false}
            fixedWeeks
            className={calStyles.calendar}
          />
        </div>
      </div>
    );
  }

  // Step 2: pick a time
  if (step === 2) {
    return (
      <div>
        <StepIndicator step={2} />
        <button
          type="button"
          onClick={() => setStep(1)}
          className="text-[13px] text-[#0044FF] cursor-pointer mb-[5px]"
        >
          &larr; Change date
        </button>
        <span className="block text-[16px] font-[600] mb-[10px]">
          {selectedDate ? formatDisplayDate(selectedDate) : "Pick a time"} — choose a time
        </span>
        <div className="flex flex-wrap gap-[10px]" role="group" aria-label="Preferred time">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot.value}
              type="button"
              onClick={() => {
                setTime(slot.value);
                setStep(3);
              }}
              className={`rounded-[10px] border px-[18px] py-[12px] text-[14px] cursor-pointer ${
                time === slot.value
                  ? "border-[#0044FF] bg-[#0044FF] text-white"
                  : "border-[#E5E5EA] hover:border-[#0044FF]"
              }`}
            >
              {slot.label}
            </button>
          ))}
        </div>
        <p className="text-[13px] text-[#6b7280] mt-[15px]">All times Pacific.</p>
      </div>
    );
  }

  // Step 3: details
  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <StepIndicator step={3} />

      {/* Chosen slot summary */}
      <button
        type="button"
        onClick={() => setStep(1)}
        className="flex items-center gap-[10px] rounded-[10px] border border-[#0044FF] bg-[#0044FF]/[0.04] px-[14px] py-[10px] text-left cursor-pointer"
        aria-label="Change date or time"
      >
        <span className="text-[14px] font-[600] text-[#0044FF]">
          {selectedDate ? formatDisplayDate(selectedDate) : ""} &middot;{" "}
          {TIME_SLOTS.find((s) => s.value === time)?.label}
        </span>
        <span className="text-[12px] text-[#6b7280] ml-auto">Change</span>
      </button>

      <div className="row">
        <input name="name" type="text" placeholder="Your name *" aria-label="Your name" autoComplete="name" required />
        <input name="email" type="email" placeholder="Work email *" aria-label="Work email" autoComplete="email" required />
      </div>

      <div className="row">
        <input name="phone" type="tel" placeholder="Phone (optional)" aria-label="Phone" autoComplete="tel" />
        <input name="company" type="text" placeholder="Agency / company" aria-label="Agency or company" autoComplete="organization" />
      </div>

      {/* Honeypot — hidden from real users */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="!absolute !left-[-9999px] !w-px !h-px !p-0 !border-0"
      />

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
