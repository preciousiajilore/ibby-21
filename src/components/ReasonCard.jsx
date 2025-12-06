export default function ReasonCard({ n, title, text, children }) {
  return (
    <article className="relative mx-auto max-w-[780px] px-6 md:px-8 py-12">
      <div
        className="rounded-3xl backdrop-blur px-8 py-10
                   ring-0 border-0 shadow-none focus:outline-none focus:ring-"
        style={{ boxShadow: "none" }}
      >
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center">
          {title || `reason #${n}`}
        </h2>
        <p className="mt-5 text-slate-700 leading-relaxed text-center">{text}</p>
        {children}
      </div>
    </article>
  );
}
