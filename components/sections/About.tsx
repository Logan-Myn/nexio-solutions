"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
              About Nexio Solutions
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
              <p>
                We are a professional SaaS and app development studio based in
                Estonia, dedicated to building innovative solutions that
                transform businesses and enhance user experiences.
              </p>
              <p>
                Our team specializes in creating scalable SaaS platforms, native
                iOS applications, and custom software solutions. We combine
                technical expertise with a deep understanding of business needs
                to deliver products that exceed expectations.
              </p>
              <p>
                From initial concept to final deployment, we work closely with
                our clients to ensure every project is a success. Our commitment
                to quality, innovation, and user-centric design sets us apart in
                the industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[var(--background)] p-6 rounded-xl border-2 border-[var(--border)]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-[var(--foreground)] mb-2">
                    Innovation First
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We leverage cutting-edge technologies to build solutions
                    that stay ahead of the curve.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--background)] p-6 rounded-xl border-2 border-[var(--border)]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-[var(--foreground)] mb-2">
                    User-Centric Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Every product we build is designed with the end user in
                    mind, ensuring intuitive experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--background)] p-6 rounded-xl border-2 border-[var(--border)]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-[var(--foreground)] mb-2">
                    Rapid Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our agile approach ensures fast delivery without
                    compromising on quality or functionality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
