import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ReasonPage from "./pages/ReasonPage.jsx";

export default function App() {
  return (
    <main className="min-h-dvh text-slate-700 bg-page-radial">
      {/* tiny site header (tap to go home) */}
      <header className="mx-auto max-w-6xl px-6 pt-6">
        <Link to="/" className="block text-center">
          <h1 className="font-jua text-white drop-shadow-md
                         text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
            happy birthday ibby
            <img
              src="/images/decor/heart.svg"
              alt=""
              aria-hidden
              className="inline-block w-8 sm:w-10 md:w-12 ml-2 align-middle translate-y-[0.05em] floaty"
            />
          </h1>
          <p className="mt-2 text-center text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-covered-by-your-grace-regular">
            from: cici✨
          </p>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reason/:id" element={<ReasonPage />} />
        {/* optional 404: */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}
