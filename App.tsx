import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen text-slate-800 selection:bg-primary-500/30 selection:text-primary-900 relative">
      
      {/* Background Image */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20" 
        />
        {/* Lighter overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-100/80 to-slate-50/90"></div>
      </div>

      <main className="relative z-0">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
}

export default App;