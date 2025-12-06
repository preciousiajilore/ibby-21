import { useRef } from "react";
import { Link } from "react-router-dom";
import reasons from "../data/reasons";

export default function FilmStrip() {
  const listRef = useRef(null);
  const itemRefs = useRef([]);

  const scrollByFrames = (dir = 1) => {
    const list = listRef.current;
    if (!list) return;
    const frameW = itemRefs.current[0]?.offsetWidth ?? 120;
    const gap = 24; // match gap below
    list.scrollBy({ left: dir * (frameW + gap) * 6, behavior: "smooth" });
  };

  return (
    <section className="relative mx-auto px-6">
      <div className="relative mx-auto w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">
        {/* FILM BAR */}
        <div className="film-bar">
          <div className="film-perf" style={{ top: 14 }} />
          <div className="film-perf" style={{ bottom: 12 }} />

          {/* frames */}
          <ul
            ref={listRef}
            className="absolute inset-x-6 top-1/2 -translate-y-1/2
                       flex gap-6 md:gap-8 overflow-x-auto pb-2 min-w-0
                       snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
            onWheel={(e)=>{ if(Math.abs(e.deltaY)>Math.abs(e.deltaX)) e.currentTarget.scrollLeft+=e.deltaY; }}
          >
            <style>{`ul::-webkit-scrollbar{display:none}`}</style>

            {reasons.map((r, i) => (
              <li key={r.id} className="snap-center shrink-0">
                <Link
                  ref={(el) => (itemRefs.current[i] = el)}
                  to={`/reason/${r.id}`}
                  className="block shrink-0 w-32 h-48 glass-frame p-4
                             flex flex-col items-stretch justify-between gap-3
                             hover:scale-[1.02] transition"
                >
                 <div className="glass-pane flex-1 rounded-md overflow-hidden">
                  {r.media?.type === "video" ? (
                    <video
                      src={r.media.src}
                      poster={r.media.poster}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      autoPlay
                      loop
                      preload="metadata"
                    />
                  ) : r.media?.type === "image" ? (
                    <img src={r.media.src} alt="" className="w-full h-full object-cover" />
                  ) : r.image ? (
                    <img src={r.image} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100/70 to-slate-200/70" />
                  )}
                </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* arrows */}
        <button
          onClick={() => scrollByFrames(-1)}
          aria-label="Scroll left"
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                     h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/10 hover:shadow-md"
        >←</button>
        <button
          onClick={() => scrollByFrames(1)}
          aria-label="Scroll right"
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                     h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow ring-1 ring-black/10 hover:shadow-md"
        >→</button>
      </div>
    </section>
  );
}
