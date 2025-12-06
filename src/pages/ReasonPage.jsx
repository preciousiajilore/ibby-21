import { Link, useNavigate, useParams } from "react-router-dom";
import reasons from "../data/reasons";

function HeartSticker({ color = "#F472B6", className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill={color}
        d="M12 21s-6.7-4.05-9.2-7.37c-2.46-3 .38-6.25 3-7.67a4.6 4.6 0 0 1 5.41.8l.79.78.79-.78a4.6 4.6 0 0 1 5.41-.8c2.62 1.42 5.46 4.67 3 7.67C18.7 16.95 12 21 12 21z"
      />
    </svg>
  );
}

export default function ReasonPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = Math.max(0, reasons.findIndex(r => String(r.id) === String(id)));
  const item = reasons[index] ?? reasons[0];

  const goPrev = () => index > 0 && navigate(`/reason/${reasons[index-1].id}`);
  const goNext = () => index < reasons.length-1 && navigate(`/reason/${reasons[index+1].id}`);

  // Keyboard arrows
  function onKeyDown(e) {
    if (e.key === "ArrowLeft")  goPrev();
    if (e.key === "ArrowRight") goNext();
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10" onKeyDown={onKeyDown} tabIndex={-1}>
      {/* back / prev / next */}
      <div className="flex items-center justify-between mb-4">
        <Link to="/" className="rounded-lg bg-white/80 backdrop-blur px-3 py-2 ring-1 ring-black/10 hover:bg-white
               -ml-1 sm:-ml-3 md:-ml-8">
          ← back
        </Link>
        <div className="flex gap-2">
          <button onClick={goPrev} disabled={index===0}
                  className="rounded-lg bg-white/80 backdrop-blur px-3 py-2 ring-1 ring-black/10 disabled:opacity-40">
            ◀ prev
          </button>
          <button onClick={goNext} disabled={index===reasons.length-1}
                  className="rounded-lg bg-white/80 backdrop-blur px-3 py-2 ring-1 ring-black/10 disabled:opacity-40">
            next ▶
          </button>
        </div>
      </div>

      {/* the big card layout */}
      <div
        className="relative mx-auto max-w-[900px] rounded-3xl bg-white/90 backdrop-blur
                    border border-white/60 px-6 sm:px-10 py-10"
        style={{ boxShadow: "0 18px 40px rgba(15,23,42,.12)" }}
      >
        {/* tilted polaroid */}
        {item.image && (
          <figure
            className="absolute -top-10 left-6 sm:left-10 drop-shadow-xl select-none pointer-events-none"
            style={{
              transform: `translate(${item.photo?.x ?? -24}px, ${item.photo?.y ?? -28}px)
                          rotate(${item.photo?.rotate ?? -12}deg)
                          scale(${item.photo?.scale ?? 1})`,
            }}
          >
            <HeartSticker color={item.heart?.color ?? "#F472B6"} className="absolute -top-5 left-4 w-8 sm:w-10" />
            <div className="bg-white p-2 rounded-md shadow-md ring-1 ring-black/10">
              <img
                src={item.image}
                alt={item.alt || ""}
                className="block h-40 w-32 sm:h-48 sm:w-36 object-cover rounded-[4px]"
                loading="eager"
              />
              <div className="h-4 sm:h-5" />
            </div>
          </figure>
        )}

        <div className="sm:ml-40 md:ml-48 lg:ml-56">
          <h2 className="font-jua text-3xl md:text-4xl text-slate-900">{item.title}</h2>
                {/* Polaroid-style media (image OR video) */}
                {(item.media?.type || item.image) && (
                <figure
                    className="absolute -top-10 left-6 sm:left-10 drop-shadow-xl select-none pointer-events-none"
                    style={{
                    transform: `translate(${item.photo?.x ?? -24}px, ${item.photo?.y ?? -28}px)
                                rotate(${item.photo?.rotate ?? -12}deg)
                                scale(${item.photo?.scale ?? 1})`,
                    }}
                >
                    {/* heart sticker */}
                    <svg viewBox="0 0 24 24" className="absolute -top-5 left-4 w-8 sm:w-10" aria-hidden>
                    <path
                        fill={item.heart?.color ?? "#F472B6"}
                        d="M12 21s-6.7-4.05-9.2-7.37c-2.46-3 .38-6.25 3-7.67a4.6 4.6 0 0 1 5.41.8l.79.78.79-.78a4.6 4.6 0 0 1 5.41-.8c2.62 1.42 5.46 4.67 3 7.67C18.7 16.95 12 21 12 21z"
                    />
                    </svg>

                    {/* polaroid frame */}
                    <div className="bg-white p-2 rounded-md shadow-md ring-1 ring-black/10 pointer-events-auto">
                        {item.image ? (
                        <img
                            src={item.image}
                            alt={item.alt || ""}
                            className="block h-40 w-32 sm:h-48 sm:w-36 object-cover rounded-[4px]"
                            loading="eager"
                        />
                        ) : item.media?.type === "video" ? (
                        <video
                            src={item.media.src}
                            poster={item.media.poster}
                            className="block h-40 w-32 sm:h-48 sm:w-36 object-cover rounded-[4px]"
                            muted
                            playsInline
                            autoPlay
                            loop
                            preload="metadata"
                        />
                        ) : null}
                        <div className="h-4 sm:h-5" />
                    </div>
                    </figure>
                )}

          <div className="mt-6 mx-auto max-w-[620px] rounded-2xl  p-6">
            {(item.lines ?? [item.text]).map((line, idx) => (
              <p key={idx} className="text-slate-700 leading-relaxed">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
