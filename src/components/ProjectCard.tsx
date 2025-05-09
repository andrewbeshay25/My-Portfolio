// src/components/ProjectCard.tsx
"use client";

import { Project } from "@/data/projects";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  project: Project;
  isNew?: boolean;
}

export default function ProjectCard({ project, isNew = false }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <motion.div
        layoutId={project.id}
        className="relative border border-[color:var(--color-accent)] rounded-xl p-6 cursor-pointer bg-[color:var(--color-background)] text-[color:var(--color-text)] hover:shadow-xl hover:-translate-y-1 transition"
        onClick={() => setIsExpanded(true)}
      >
        {isNew && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        <h3 className="text-xl font-bold text-[color:var(--color-primary)] mb-2">
          {project.title}
        </h3>
        <p className="text-sm mb-3 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-[color:var(--color-accent)] text-[color:var(--color-background)] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layoutId={project.id}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(15,23,42,0.9)] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="max-w-5xl w-full bg-[color:var(--color-background)] text-[color:var(--color-text)] rounded-xl p-8 overflow-y-auto max-h-[90vh] relative border-2 border-[color:var(--color-accent)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 text-lg hover:opacity-75"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold mb-4 text-[color:var(--color-primary)]">
                {project.title}
              </h2>
              <p className="mb-4 text-sm">{project.description}</p>

              <div className="flex justify-center mb-2">
                {project.screenshots && project.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full mx-1 ${idx === activeImage ? 'bg-[color:var(--color-accent)]' : 'bg-gray-400'}`}
                    onClick={() => setActiveImage(idx)}
                  />
                ))}
              </div>

              <div className="flex justify-center mb-6">
                {project.screenshots && project.screenshots[activeImage] && (
                  <Image
                    src={project.screenshots[activeImage]}
                    width={600}
                    height={360}
                    alt={`${project.title} screenshot ${activeImage + 1}`}
                    className="rounded-lg border hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>

              <div className="flex gap-6 justify-center">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-[color:var(--color-accent)] text-[color:var(--color-background)] font-semibold hover:opacity-90"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded border border-[color:var(--color-accent)] text-[color:var(--color-accent)] font-semibold hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-background)] transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
