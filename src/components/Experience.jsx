import React, { useState } from 'react';
import { EXPERIENCES, ADDITIONAL_EXPERIENCE } from '../constants';

export default function Experience() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>💼</span> Experiencia Profesional
      </h3>

      <div className="space-y-4">
        {EXPERIENCES.map((job, index) => (
          <article key={index} className="pb-4 border-b border-[rgba(255,255,255,0.05)] last:border-b-0">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium leading-tight">{job.title}</h4>
                <time className="text-xs text-gray-400 block mt-1">{job.period}</time>
              </div>
              <div className="text-sm text-gray-300 shrink-0 text-right">{job.category}</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{job.description}</p>
          </article>
        ))}
      </div>

      <details className="mt-4 text-sm" onToggle={(e) => setShowMore(e.target.open)}>
        <summary className="cursor-pointer text-cyan-300 font-medium hover:text-cyan-200 transition">
          {showMore ? '- Ocultar' : '+ Ver'} historial laboral completo
        </summary>
        {showMore && (
          <div className="mt-3 text-gray-300 text-sm space-y-2 pl-4 border-l border-cyan-300/30">
            {ADDITIONAL_EXPERIENCE.map((exp, index) => (
              <div key={index}>
                <p className="font-medium text-gray-200">{exp.company}</p>
                <p className="text-gray-400 text-xs">{exp.period}</p>
              </div>
            ))}
            <p className="text-gray-400 italic mt-2">Historial adicional disponible a solicitud.</p>
          </div>
        )}
      </details>
    </section>
  );
}
