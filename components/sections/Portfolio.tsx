"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Project } from "@/types";

const projects: Project[] = [
  {
    title: "Dance Hub",
    subtitle: "SaaS Platform for Dance Studios",
    description:
      "A comprehensive platform helping dance instructors and studios manage classes, students, schedules, and grow their business. Built with modern web technologies to provide a seamless experience for both instructors and students.",
    link: "https://dance-hub.io",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Tailwind CSS",
    ],
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing our commitment to excellence and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    DH
                  </div>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-8">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">
                          {project.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-[var(--primary)] mb-4">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-6">
                      <h4 className="font-semibold text-[var(--foreground)] mb-3">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[var(--muted)] text-[var(--foreground)] rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary">
                          Visit Dance Hub
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 ml-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                          </svg>
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
