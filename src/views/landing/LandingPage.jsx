import React from "react";
import LandingPageNavbar from "../../components/Navbars/LandingPageNavbar";
import Hero from "../../components/sections/Hero";
import Philosophy from "../../components/sections/Philosophy";
import About from "../../components/sections/About";
import Work from "../../components/sections/Work";
import Workshop from "../../components/sections/Workshop";
import Craft from "../../components/sections/Craft";
import Contact from "../../components/sections/Contact";
import DefaultFooter from "../../components/Footers/DefaultFooter";
import CookieBanner from "../../components/ui/CookieBanner";

export default function LandingPage() {
  return (
    <>
      <LandingPageNavbar />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Work />
        <Workshop />
        <Craft />
        <Contact />
      </main>
      <DefaultFooter />
      <CookieBanner />
    </>
  );
}
