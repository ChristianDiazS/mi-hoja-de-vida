import React from 'react';
import { LANGUAGES } from '../constants';

export default function Languages() {
  return (
    <div className="rounded-2xl p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
      <h4 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
        <span>🌐</span> Idiomas
      </h4>
      <div className="text-sm text-gray-300 space-y-2">
        {LANGUAGES.map((lang, index) => (
          <div key={index} className="flex justify-between">
            <span>{lang.name}</span>
            <span className="text-gray-400">({lang.level})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
