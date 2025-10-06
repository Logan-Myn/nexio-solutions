"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Service } from "@/types";

const services: Service[] = [
  {
    icon: "🚀",
    title: "SaaS Development",
    description:
      "Full-stack SaaS solutions from concept to launch. We build scalable, secure platforms that grow with your business.",
    features: [
      "Custom SaaS Platforms",
      "Multi-tenant Architecture",
      "API Development",
      "Cloud Infrastructure",
    ],
  },
  {
    icon: "📱",
    title: "iOS App Development",
    description:
      "Native iOS applications that deliver exceptional user experiences. From concept to App Store, we handle it all.",
    features: [
      "Native iOS Apps",
      "SwiftUI & UIKit",
      "App Store Optimization",
      "Performance Tuning",
    ],
  },
  {
    icon: "💻",
    title: "Custom Software Solutions",
    description:
      "Tailored software solutions designed specifically for your business needs and workflow requirements.",
    features: [
      "Business Automation",
      "Legacy System Modernization",
      "Integration Services",
      "Technical Consulting",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full">
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
