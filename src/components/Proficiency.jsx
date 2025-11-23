import React from 'react';
import { TECH_PROFICIENCY } from '../constants';

export default function Proficiency() {
  return (
    <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <span>📊</span> Proficiencia Técnica
      </h3>
      
      <div className="space-y-4">
        {TECH_PROFICIENCY.map((tech, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              <span className="text-xs font-semibold text-cyan-400">{tech.percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-linear-to-r from-cyan-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${tech.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
