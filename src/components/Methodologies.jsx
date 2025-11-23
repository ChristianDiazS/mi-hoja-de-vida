import React from 'react';
import { METHODOLOGIES } from '../constants';

export default function Methodologies() {
  return (
    <div className="rounded-2xl p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
      <h4 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
        <span>📐</span> Metodologías
      </h4>
      <div className="flex flex-wrap gap-2">
        {METHODOLOGIES.map((method, index) => (
          <span
            key={index}
            className="px-3 py-1.5 bg-linear-to-r from-purple-900/30 to-purple-900/10 border border-purple-700/30 rounded-full text-xs text-purple-300 hover:border-purple-500/50 transition"
          >
            {method}
          </span>
        ))}
      </div>
    </div>
  );
}
