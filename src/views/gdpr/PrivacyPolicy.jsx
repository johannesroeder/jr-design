import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultFooter from "../../components/Footers/DefaultFooter";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Minimal header */}
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
          ← Back
        </button>
      </nav>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-16">
        <h1 className="font-serif text-dark text-4xl md:text-5xl font-normal mb-3">Privacy Policy</h1>
        <p className="text-dark/40 text-sm mb-12">Last updated: 9 December 2024</p>

        <p className="text-dark/70 leading-relaxed mb-8">
          At JR Design, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect the information you provide through our website's contact form.
        </p>

        {[
          {
            title: "Who We Are",
            content: (
              <ul className="list-none text-dark/70 leading-relaxed space-y-1">
                <li>JR Design</li>
                <li>Lodewijk Van Berckenlaan 366, 2140 Borgerhout</li>
                <li><a href="mailto:atelier@johannesroeder.com" className="underline hover:text-wood">atelier@johannesroeder.com</a></li>
                <li>https://www.johannesroeder.com</li>
              </ul>
            ),
          },
          {
            title: "What Data We Collect",
            content: (
              <>
                <p className="text-dark/70 leading-relaxed mb-4">When you use our contact form, we collect:</p>
                <ul className="list-disc list-inside text-dark/70 leading-relaxed space-y-1">
                  <li>First Name — to personalise our response.</li>
                  <li>Email Address — to contact you regarding your inquiry.</li>
                  <li>Message — the details of your inquiry.</li>
                </ul>
                <p className="text-dark/70 leading-relaxed mt-4">We do not collect any additional data or track users outside the scope of this form.</p>
              </>
            ),
          },
          {
            title: "Why We Collect Your Data",
            content: <p className="text-dark/70 leading-relaxed">We use the information you provide solely to respond to your inquiry. We will not use your data for any other purpose, such as marketing, without your explicit consent.</p>,
          },
          {
            title: "How We Protect Your Data",
            content: (
              <ul className="list-disc list-inside text-dark/70 leading-relaxed space-y-1">
                <li>Encrypting data transmission using HTTPS.</li>
                <li>Storing data securely on our servers.</li>
                <li>Limiting access to your data only to those who need it to handle your inquiry.</li>
              </ul>
            ),
          },
          {
            title: "How Long We Keep Your Data",
            content: <p className="text-dark/70 leading-relaxed">We retain the information you provide for up to 6 months after responding to your inquiry. After this period, your data will be securely deleted.</p>,
          },
          {
            title: "Your Rights",
            content: (
              <>
                <p className="text-dark/70 leading-relaxed mb-4">Under GDPR, you have the right to:</p>
                <ol className="list-decimal list-inside text-dark/70 leading-relaxed space-y-1">
                  <li>Access — request a copy of the data we hold about you.</li>
                  <li>Correction — ask us to correct inaccurate or incomplete data.</li>
                  <li>Deletion — request that we delete your data.</li>
                  <li>Objection — object to how your data is being used.</li>
                  <li>Withdrawal of Consent — withdraw consent at any time.</li>
                </ol>
                <p className="text-dark/70 leading-relaxed mt-4">To exercise these rights, contact us at <a href="mailto:atelier@johannesroeder.com" className="underline hover:text-wood">atelier@johannesroeder.com</a>.</p>
              </>
            ),
          },
          {
            title: "Sharing Your Data",
            content: <p className="text-dark/70 leading-relaxed">We do not share, sell, or transfer your personal data to third parties unless required to do so by law.</p>,
          },
          {
            title: "Cookies",
            content: <p className="text-dark/70 leading-relaxed">Our website does not currently use cookies to track or store user data. If this changes in the future, we will update this Privacy Policy and request your consent.</p>,
          },
          {
            title: "Changes to This Policy",
            content: (
              <>
                <p className="text-dark/70 leading-relaxed mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.</p>
                <p className="text-dark/70 leading-relaxed">By submitting the contact form on this website, you confirm that you have read and understood this Privacy Policy.</p>
              </>
            ),
          },
        ].map(({ title, content }) => (
          <section key={title} className="mb-10">
            <h2 className="font-serif text-dark text-2xl font-normal mb-4">{title}</h2>
            <div className="w-8 h-px bg-wood mb-5" />
            {content}
          </section>
        ))}
      </main>

      <DefaultFooter />
    </div>
  );
}
