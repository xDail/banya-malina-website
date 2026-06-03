export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="text-orange-400 font-semibold mb-4">
          Private Event Venue in Bradford
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Banya Malina
        </h1>

        <p className="text-xl text-neutral-300 max-w-2xl mb-8">
          A private venue for birthdays, parties, family gatherings and
          celebrations. Enjoy indoor seating, billiards, outdoor chill space,
          BBQ/mangal area, jacuzzi and on-site parking.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:+447393634552"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Call to Book
          </a>

          <a
            href="#booking"
            className="border border-neutral-600 hover:border-white px-6 py-3 rounded-xl font-semibold"
          >
            Booking Enquiry
          </a>
        </div>
      </section>

      <section className="px-6 py-16 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Perfect For</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Birthday Parties",
              "Private Parties",
              "Family Gatherings",
              "Friends Nights",
              "Celebrations",
              "Relaxed Get-Togethers",
            ].map((item) => (
              <div
                key={item}
                className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Facilities</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Indoor seating area",
            "Billiards table",
            "Private outdoor chill space",
            "Outdoor jacuzzi",
            "BBQ / mangal area",
            "On-site parking",
          ].map((item) => (
            <div key={item} className="bg-neutral-900 p-6 rounded-2xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Optional Extras</h2>

          <p className="text-neutral-300 max-w-2xl">
            Sauna access is available as an optional add-on. The sauna area is
            located in a separate locked room and can be added to your booking
            for an additional price.
          </p>
        </div>
      </section>

      <section id="booking" className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Booking Enquiry</h2>

        <p className="text-neutral-300 mb-8 max-w-2xl">
          A £200 deposit is required to secure your booking. Final price depends
          on the date, group size, event type and any extras selected.
        </p>

        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-700 max-w-2xl">
          <p className="mb-4">To make a booking enquiry, call us:</p>

          <a
            href="tel:+447393634552"
            className="text-2xl font-bold text-orange-400"
          >
            07393 634552
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-neutral-800 text-center text-neutral-400">
        <p>Banya Malina · Bradford</p>
        <p>07393 634552</p>
      </footer>
    </main>
  );
}