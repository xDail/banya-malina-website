"use client";

import { FormEvent, useState } from "react";

const phoneDisplay = "07393 634552";
const phoneHref = "tel:+447393634552";
const whatsappNumber = "447393634552";

const eventTypes = [
  "Birthday parties",
  "Private parties",
  "Family gatherings",
  "Friends nights",
  "Celebrations",
  "Relaxed get-togethers",
];

const facilities = [
  "Indoor seating area",
  "Billiards table",
  "Private outdoor chill space",
  "Outdoor jacuzzi",
  "BBQ / mangal area",
  "On-site parking",
];

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
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="font-display text-2xl font-bold tracking-wide">
            Banya <span className="text-orange-400">Malina</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a className="hover:text-orange-400" href="#events">Events</a>
            <a className="hover:text-orange-400" href="#facilities">Facilities</a>
            <a className="hover:text-orange-400" href="#gallery">Gallery</a>
            <a className="hover:text-orange-400" href="#booking">Booking</a>
          </nav>

          <a
            href={phoneHref}
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold shadow-lg shadow-orange-500/30 transition hover:scale-105 hover:bg-orange-400"
          >
            Call Now
          </a>
        </div>
      </header>

      <section className="hero-bg relative px-6 pb-24 pt-36 md:pt-44">
        <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">
              Private Event & Party Venue in Bradford
            </p>

            <h1 className="font-display mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Your private space for{" "}
              <span className="text-orange-400">parties</span>, birthdays &
              celebrations.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-neutral-300">
              Banya Malina is a private venue in Bradford for birthdays,
              parties, family gatherings and relaxed nights with friends. Enjoy
              indoor seating, billiards, outdoor chill space, jacuzzi, BBQ/mangal
              area and on-site parking.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="rounded-full bg-orange-500 px-8 py-4 font-bold shadow-xl shadow-orange-500/30 transition hover:scale-105 hover:bg-orange-400"
              >
                Make Booking Enquiry
              </a>

              <a
                href={phoneHref}
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold backdrop-blur transition hover:scale-105 hover:border-orange-400"
              >
                {phoneDisplay}
              </a>
            </div>
          </div>

          <div className="animate-float-slow">
            <div className="glass rounded-[2rem] p-6 shadow-2xl shadow-orange-500/10">
              <div className="flex h-[430px] flex-col justify-end rounded-[1.5rem] bg-gradient-to-br from-neutral-800 via-neutral-900 to-black p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                  Bradford
                </p>
                <h2 className="font-display text-4xl font-bold">
                  Private venue with indoor & outdoor space
                </h2>
                <p className="mt-4 text-neutral-300">
                  Photos coming soon. This area will be replaced with real venue
                  images later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            Events
          </p>
          <h2 className="font-display mb-10 text-4xl font-bold md:text-5xl">
            Perfect for private gatherings
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {eventTypes.map((item) => (
              <div
                key={item}
                className="glass group rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-400/50"
              >
                <div className="mb-6 h-12 w-12 rounded-2xl bg-orange-500/20" />
                <h3 className="text-2xl font-bold group-hover:text-orange-300">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
                Facilities
              </p>
              <h2 className="font-display mb-6 text-4xl font-bold md:text-5xl">
                Everything you need for a good night
              </h2>
              <p className="text-lg leading-8 text-neutral-300">
                The main focus is private events and parties. Sauna access is
                available separately as an optional add-on in a locked room.
              </p>
            </div>

            <div className="grid gap-4">
              {facilities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-lg font-semibold transition hover:border-orange-400/50 hover:bg-orange-500/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
            Gallery
          </p>
          <h2 className="font-display mb-10 text-4xl font-bold md:text-5xl">
            Photos coming soon
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex h-72 items-center justify-center rounded-3xl border border-dashed border-white/20 bg-gradient-to-br from-neutral-900 to-black text-neutral-400"
              >
                Venue photo {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="bg-neutral-950 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-400">
              Booking
            </p>
            <h2 className="font-display mb-6 text-4xl font-bold md:text-5xl">
              Send a booking enquiry
            </h2>
            <p className="mb-6 text-lg leading-8 text-neutral-300">
              A £200 deposit is required to secure your booking. Final price
              depends on the date, group size, event type and any extras
              selected.
            </p>

            <div className="glass rounded-3xl p-8">
              <p className="mb-2 text-neutral-400">Location</p>
              <p className="mb-6 text-2xl font-bold">Bradford</p>

              <p className="mb-2 text-neutral-400">Phone</p>
              <a href={phoneHref} className="text-3xl font-bold text-orange-400">
                {phoneDisplay}
              </a>
            </div>
          </div>

          <form onSubmit={submitBooking} className="glass rounded-3xl p-8">
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
              <label className="mb-2 block text-sm font-semibold text-neutral-300">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="h-32 w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-500 px-8 py-4 font-bold shadow-xl shadow-orange-500/30 transition hover:scale-[1.02] hover:bg-orange-400"
            >
              Send Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-neutral-500">
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
    <div className="mb-5">
      <label className="mb-2 block text-sm font-semibold text-neutral-300">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-orange-400"
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
    <div className="mb-5">
      <label className="mb-2 block text-sm font-semibold text-neutral-300">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-orange-400"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}