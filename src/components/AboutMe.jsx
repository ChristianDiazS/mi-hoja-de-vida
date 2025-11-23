import React from 'react';
import { ABOUT_ME } from '../constants';

export default function AboutMe() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-cyan-500 border-b-2 border-cyan-500 pb-2">
        {ABOUT_ME.title}
      </h2>
      
      <p className="text-gray-300 leading-relaxed text-justify text-base">
        {ABOUT_ME.description}
      </p>

      <div className="grid grid-cols-2 gap-4 pt-4">
        {ABOUT_ME.highlights.map((highlight, index) => (
          <div 
            key={index}
            className="bg-linear-to-br from-cyan-900/25 to-cyan-900/10 border border-cyan-700/40 rounded-lg p-4 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-900/30 transition-all duration-300"
          >
            <div className="text-3xl mb-3">{highlight.icon}</div>
            <h3 className="text-sm font-semibold text-cyan-400 mb-2 leading-snug">
              {highlight.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {highlight.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
