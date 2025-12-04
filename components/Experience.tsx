import React from 'react';
import { MARIYA_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-slate-300 ml-3 md:ml-6 space-y-12">
          {MARIYA_DATA.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 border-2 border-slate-400 group-hover:border-primary-500 group-hover:bg-primary-500 transition-colors"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">{exp.role}</h3>
                <span className="text-primary-600 font-medium font-mono text-sm mt-1 md:mt-0">{exp.period}</span>
              </div>
              
              <h4 className="text-lg text-slate-500 mb-4 font-semibold">{exp.company}</h4>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;