import React from 'react';
import { MARIYA_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MARIYA_DATA.skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category} 
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:border-primary-500/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary-500/10 group"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-primary-600 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-sm rounded-md bg-slate-100 text-slate-600 border border-slate-200 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-colors font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;