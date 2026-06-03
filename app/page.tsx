"use client";

import { FormEvent, useState } from "react";

const phoneDisplay = "07393 634552";
const phoneHref = "tel:+447393634552";
const whatsappNumber = "447393634552";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    eventType: "Birthday party",
    sauna: "No",
    message: "",
  });

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function submitBooking(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = `
Banya Malina Booking Enquiry

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Guests: ${form.guests}
Event type: ${form.eventType}
Sauna access: ${form.sauna}

Message:
${form.message}
    `.trim();

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-bold">
            Banya Malina
          </a>

          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#events">Events</a>
            <a href="#facilities">Facilities</a>
            <a href="#extras">Extras</a>
            <a href="#booking">Booking</a>
          </nav>

          <a
            href={phoneHref}
            className="rounded-xl bg-orange-500 px-5 py-2 font-semibold hover:bg-orange-600"
          >
            Call
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-semibold text-orange-400">
          Private Event & Party Venue in Bradford
        </p>

        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Private space for birthdays, parties and celebrations.
        </h1>

        <p className="mb-8 max-w-2xl text-xl text-neutral-300">
          Banya Malina is a private venue in Bradford for birthdays, parties,
          family gatherings and relaxed get-togethers. Enjoy indoor seating,
          billiards, outdoor chill space, BBQ/mangal area, jacuzzi and parking.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#booking"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
          >
            Booking Enquiry
          </a>

          <a
            href={phoneHref}
            className="rounded-xl border border-neutral-600 px-6 py-3 font-semibold hover:border-white"
          >
            {phoneDisplay}
          </a>
        </div>
      </section>

      <section id="events" className="bg-neutral-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold">Perfect For</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Birthday parties",
              "Private parties",
              "Family gatherings",
              "Friends nights",
              "Celebrations",
              "Relaxed get-togethers",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">About Banya Malina</h2>

        <p className="max-w-3xl text-lg text-neutral-300">
          Our venue is made for private celebrations and relaxed gatherings.
          You get a private space for your group without sharing it with other
          guests. Suitable for birthdays, small parties, family events and
          evenings with friends.
        </p>
      </section>

      <section id="facilities" className="bg-neutral-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold">Facilities</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Indoor seating area",
              "Billiards table",
              "Private outdoor chill space",
              "Outdoor jacuzzi",
              "BBQ / mangal area",
              "On-site parking",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-700 bg-neutral-800 p-6 text-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="extras" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">Optional Extras</h2>

        <p className="max-w-3xl text-lg text-neutral-300">
          Sauna access is available as an optional add-on. The sauna facilities
          are located in a separate locked room and can be added to your booking
          for an additional price.
        </p>
      </section>

      <section className="bg-neutral-900 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold">Gallery</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-neutral-600 bg-neutral-800 text-neutral-400"
              >
                Photos coming soon
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">Booking Enquiry</h2>

        <p className="mb-8 max-w-3xl text-neutral-300">
          A £200 deposit is required to secure your booking. Final price depends
          on the date, group size, event type and any extras selected.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <form
            onSubmit={submitBooking}
            className="rounded-2xl border border-neutral-700 bg-neutral-900 p-6"
          >
            <Input label="Name" value={form.name} onChange={(v) => updateField("name", v)} />
            <Input label="Phone number" value={form.phone} onChange={(v) => updateField("phone", v)} />
            <Input label="Preferred date" type="date" value={form.date} onChange={(v) => updateField("date", v)} />
            <Input label="Number of guests" value={form.guests} onChange={(v) => updateField("guests", v)} />

            <Select
              label="Type of event"
              value={form.eventType}
              onChange={(v) => updateField("eventType", v)}
              options={[
                "Birthday party",
                "Private party",
                "Family gathering",
                "Friends gathering",
                "Other",
              ]}
            />

            <Select
              label="Sauna access?"
              value={form.sauna}
              onChange={(v) => updateField("sauna", v)}
              options={["No", "Yes", "Not sure yet"]}
            />

            <div className="mb-6">
              <label className="mb-2 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="h-28 w-full rounded-xl bg-neutral-800 p-3 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
            >
              Send Enquiry on WhatsApp
            </button>
          </form>

          <div className="rounded-2xl border border-neutral-700 bg-neutral-900 p-6">
            <h3 className="mb-4 text-2xl font-bold">Contact</h3>

            <p className="mb-2 text-neutral-300">Location:</p>
            <p className="mb-6 text-xl font-semibold">Bradford</p>

            <p className="mb-2 text-neutral-300">Phone:</p>
            <a href={phoneHref} className="text-2xl font-bold text-orange-400">
              {phoneDisplay}
            </a>

            <p className="mt-8 text-neutral-300">
              Fill in the enquiry form or call us to check availability and
              confirm your booking deposit.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800 px-6 py-10 text-center text-neutral-400">
        <p>Banya Malina · Private Event Venue · Bradford</p>
        <p>{phoneDisplay}</p>
      </footer>
    </main>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="mb-4">
      <label className="mb-2 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-neutral-800 p-3 outline-none"
      />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="mb-4">
      <label className="mb-2 block">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl bg-neutral-800 p-3 outline-none"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}