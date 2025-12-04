import React from 'react';
import { MARIYA_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Footer background gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-600 mb-12">
            I'm currently available for new projects and opportunities in Data Science and AI Engineering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            <a href={`mailto:${MARIYA_DATA.email}`} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg hover:border-primary-500/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <h3 className="text-slate-800 font-semibold mb-1">Email</h3>
              <p className="text-slate-500 text-sm truncate w-full px-2">{MARIYA_DATA.email}</p>
            </a>

            <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg hover:border-primary-500/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h3 className="text-slate-800 font-semibold mb-1">Phone</h3>
              <p className="text-slate-500 text-sm">{MARIYA_DATA.phone}</p>
            </div>

            <a href={MARIYA_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg hover:border-primary-500/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <h3 className="text-slate-800 font-semibold mb-1">LinkedIn</h3>
              <p className="text-slate-500 text-sm">Connect on LinkedIn</p>
            </a>

            <a href={MARIYA_DATA.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg hover:border-primary-500/50 hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <h3 className="text-slate-800 font-semibold mb-1">GitHub</h3>
              <p className="text-slate-500 text-sm">View Projects</p>
            </a>

          </div>

          <div className="text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} {MARIYA_DATA.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;