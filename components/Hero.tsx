import React from 'react';
import { MARIYA_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary-600/30 bg-primary-50 text-primary-700 text-sm font-medium tracking-wide animate-fade-in shadow-sm">
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">{MARIYA_DATA.name}</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-600 font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {MARIYA_DATA.role}
        </h2>
        
        <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Specializing in <span className="text-slate-900 font-medium">Generative AI</span>, <span className="text-slate-900 font-medium">Deep Learning</span>, and building scalable <span className="text-slate-900 font-medium">Data Pipelines</span>. 
          Transforming complex datasets into actionable intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#experience" className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 hover:-translate-y-1">
            View Work
          </a>
          <a href={MARIYA_DATA.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2 hover:-translate-y-1">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub Profile
          </a>
        </div>
        
        {/* Tech Stack Decoration */}
        <div className="flex flex-wrap justify-center gap-8 opacity-60 hover:opacity-100 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {['TensorFlow', 'PyTorch', 'LangChain', 'Python', 'React', 'Docker'].map((tech) => (
            <span key={tech} className="text-slate-500 font-bold text-lg hover:text-primary-600 cursor-default transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;