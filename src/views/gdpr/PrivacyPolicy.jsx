import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultFooter from "../../components/Footers/DefaultFooter";
import { useLanguage } from "../../context/LanguageContext";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const p = t.privacy;
  const s = p.sections;

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <nav className="bg-dark py-4 px-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="font-serif text-cream text-lg tracking-widest bg-transparent border-0 cursor-pointer"
        >
          Atelier JR
        </button>
        <button
          onClick={() => navigate("/")}
          className="text-cream/60 hover:text-cream text-xs tracking-widest uppercase transition-colors duration-200 bg-transparent border-0 cursor-pointer font-sans"
        >
          {p.back}
        </button>
      </nav>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        <h1 className="font-serif text-dark text-4xl md:text-5xl font-normal mb-3">{p.title}</h1>
        <p className="text-dark/40 text-sm mb-12">{p.lastUpdated}</p>
        <p className="text-dark/70 leading-relaxed mb-8">{p.intro}</p>

        {/* Who We Are */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.whoWeAre.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <ul className="list-none text-dark/70 leading-relaxed space-y-1">
            <li>Atelier JR</li>
            <li>Schransstraat 119</li>
            <li>2530 Boechout</li>
            <li>BTW BE0555800496</li>
            <li><a href="mailto:atelier@johannesroeder.com" className="underline hover:text-wood">atelier@johannesroeder.com</a></li>
            <li>https://www.johannesroeder.com</li>
          </ul>
        </section>

        {/* What We Collect */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.whatWeCollect.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <p className="text-dark/70 leading-relaxed mb-4">{s.whatWeCollect.intro}</p>
          <ul className="list-disc list-inside text-dark/70 leading-relaxed space-y-1">
            {s.whatWeCollect.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="text-dark/70 leading-relaxed mt-4">{s.whatWeCollect.outro}</p>
        </section>

        {/* Why We Collect */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.whyWeCollect.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <p className="text-dark/70 leading-relaxed">{s.whyWeCollect.body}</p>
        </section>

        {/* How We Protect */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.howWeProtect.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <ul className="list-disc list-inside text-dark/70 leading-relaxed space-y-1">
            {s.howWeProtect.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* How Long */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.howLong.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <p className="text-dark/70 leading-relaxed">{s.howLong.body}</p>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.yourRights.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <p className="text-dark/70 leading-relaxed mb-4">{s.yourRights.intro}</p>
          <ol className="list-decimal list-inside text-dark/70 leading-relaxed space-y-1">
            {s.yourRights.items.map((item) => <li key={item}>{item}</li>)}
          </ol>
          <p className="text-dark/70 leading-relaxed mt-4">{s.yourRights.contact}</p>
        </section>

        {/* Sharing */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.sharing.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <p className="text-dark/70 leading-relaxed">{s.sharing.body}</p>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.cookies.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <p className="text-dark/70 leading-relaxed">{s.cookies.body}</p>
        </section>

        {/* Changes */}
        <section className="mb-10">
          <h2 className="font-serif text-dark text-2xl font-normal mb-4">{s.changes.title}</h2>
          <div className="w-8 h-px bg-wood mb-5" />
          <p className="text-dark/70 leading-relaxed mb-4">{s.changes.p1}</p>
          <p className="text-dark/70 leading-relaxed">{s.changes.p2}</p>
        </section>
      </main>

      <DefaultFooter />
    </div>
  );
}
