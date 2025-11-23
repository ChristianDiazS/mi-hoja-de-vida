import React from 'react';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <div className="rounded-2xl p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
      <h4 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
        <span>⚙️</span> Habilidades Técnicas
      </h4>
      <ul className="grid grid-cols-2 gap-2">
        {SKILLS.map((skill, index) => (
          <li 
            key={index}
            className="px-3 py-2 bg-[rgba(255,255,255,0.01)] rounded border border-[rgba(255,255,255,0.02)] text-sm text-gray-300 hover:border-cyan-400/30 transition duration-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
