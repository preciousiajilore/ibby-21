import FilmStrip from "../components/FilmStrip.jsx";

export default function Home() {
  return (
    <section className="mt-6">
      <FilmStrip />
      {/* bottom-left floating heart (optional) */}
      <img
        src="/images/decor/heart_3.svg"
        alt=""
        aria-hidden
        className="fixed bottom-6 left-4 w-12 sm:w-16 opacity-90 floaty pointer-events-none select-none drop-shadow"
      />
    </section>
  );
}
