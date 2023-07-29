import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import WhatisGPT3 from "./components/WhatisGPT3";
import EarlyAccess from "./components/EarlyAccess";
import Posibilities from "./components/Posibilities";
import CTA from "./components/CTA";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-color-bg">
      <Header />
      <HeroSection />
      <Companies />
      <WhatisGPT3 />
      <EarlyAccess />
      <Posibilities />
      <CTA />
      <Blogs />
      <Footer />
    </main>
  );
}

export default App;
