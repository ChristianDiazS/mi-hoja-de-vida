import React from 'react';
import { EDUCATION } from '../constants';

export default function Education() {
  return (
    <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>🎓</span> Formación
      </h3>
      <article className="text-sm text-gray-300">
        <h4 className="font-medium text-gray-100 mb-1">{EDUCATION.school}</h4>
        <p className="text-gray-400">{EDUCATION.program}</p>
        <time className="text-xs text-gray-500 block mt-1">{EDUCATION.startDate} - {EDUCATION.endDate}</time>
      </article>
    </section>
  );
}
