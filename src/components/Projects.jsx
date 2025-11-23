import React from 'react';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>🚀</span> Proyectos Destacados
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <article 
            key={index}
            className="p-4 rounded-xl bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.05)] transition duration-200 flex flex-col h-full"
          >
            <h4 className="font-medium text-gray-100">{project.title}</h4>
            <p className="text-sm text-gray-300 mt-2 grow">{project.description}</p>
            <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.02)]">
              <p className="text-xs text-gray-400">
                <span className="font-semibold text-gray-300">Stack: </span>
                {project.stack}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
