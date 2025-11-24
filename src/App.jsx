import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Proficiency from './components/Proficiency';
import Education from './components/Education';
import Skills from './components/Skills';
import Methodologies from './components/Methodologies';
import Contact from './components/Contact';
import Languages from './components/Languages';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-linear-to-b from-[#071024] via-[#05060a] to-[#000000] text-gray-200 antialiased flex justify-center">
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <Analytics/>
        <Header />
        <Hero />
        <AboutMe />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            <Experience />
            <Projects />
          </div>

          {/* Right column (sidebar) */}
          <aside className="space-y-6">
            <Skills />
            <Methodologies />
            <Languages />
            <Education />
            <Contact />
          </aside>
        </div>

        {/* Full width section */}
        <div className="w-full mt-6">
          <Proficiency />
        </div>

        <Footer />
      </div>
    </div>
  );
}

