import React from 'react';
import { MARIYA_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
              <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              {MARIYA_DATA.education.map((edu, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                  <p className="text-primary-600 font-semibold">{edu.institution}</p>
                  <p className="text-slate-500 text-sm font-mono">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications</h2>
              <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
            </div>

            <div className="space-y-4">
              {MARIYA_DATA.certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-primary-500/50 transition-colors shadow-sm">
                  <div className="p-2 bg-primary-50 rounded text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
               <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Strengths</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {MARIYA_DATA.strengths.map((str, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white text-slate-600 text-sm rounded-full border border-slate-200 shadow-sm font-medium">
                    {str}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;