import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Nexio Solutions",
  description: "Terms of service for Nexio Solutions development services and SaaS products.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[var(--foreground)]">
          Terms of Service
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: January 2025
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Welcome to Nexio Solutions. These Terms of Service ("Terms") govern your use of
              our development services and SaaS products. By engaging with our services, you
              agree to be bound by these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              2. Development Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Nexio Solutions provides professional software development services including
              SaaS development, iOS app development, and custom software solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>All development projects are subject to a separate project agreement</li>
              <li>Project scope, timeline, and deliverables will be clearly defined in writing</li>
              <li>Changes to project scope may affect timeline and pricing</li>
              <li>Client cooperation and timely feedback are essential for project success</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              3. SaaS Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our SaaS products, including Dance Hub, are provided on a subscription basis and
              are subject to their own specific terms and conditions.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>Subscriptions are billed on a recurring basis</li>
              <li>You may cancel your subscription at any time</li>
              <li>We reserve the right to modify pricing with 30 days notice</li>
              <li>Service availability is guaranteed at 99.9% uptime</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Intellectual property rights related to custom development projects are
              established in individual project agreements.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>Custom development work: IP rights transfer upon full payment</li>
              <li>SaaS products: Nexio Solutions retains all IP rights</li>
              <li>Clients receive a license to use SaaS products per subscription terms</li>
              <li>Pre-existing IP and proprietary tools remain our property</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              5. Source Code
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For custom development projects:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>Source code is delivered upon project completion and full payment</li>
              <li>Code is provided "as is" with standard documentation</li>
              <li>Third-party libraries and dependencies remain under their respective licenses</li>
              <li>Ongoing maintenance and support are available under separate agreements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              6. Data Protection
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We are committed to protecting your data in accordance with applicable data
              protection laws including GDPR.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>Client data is stored securely and encrypted</li>
              <li>We implement industry-standard security measures</li>
              <li>Data processing agreements are available upon request</li>
              <li>You retain ownership of all data you provide</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              7. Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our liability is limited as follows:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>We provide services with reasonable skill and care</li>
              <li>We are not liable for indirect or consequential damages</li>
              <li>Total liability is limited to fees paid in the preceding 12 months</li>
              <li>Force majeure events are excluded from liability</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              8. Payment Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Payment terms for our services:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>Custom development: Payment milestones defined in project agreement</li>
              <li>SaaS subscriptions: Billed monthly or annually in advance</li>
              <li>Invoices are due within 14 days unless otherwise specified</li>
              <li>Late payments may incur interest charges</li>
              <li>We accept major credit cards and bank transfers</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              9. Confidentiality
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We maintain strict confidentiality of all client information:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>All project details and business information are kept confidential</li>
              <li>NDAs are available upon request</li>
              <li>We do not share client information with third parties</li>
              <li>Confidentiality obligations survive project completion</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              10. Termination
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Either party may terminate services under the following conditions:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-2">
              <li>Development projects: As specified in project agreement</li>
              <li>SaaS subscriptions: With 30 days written notice</li>
              <li>Immediate termination for material breach</li>
              <li>Outstanding fees remain due upon termination</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              11. Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              These Terms are governed by the laws of the Republic of Estonia. Any disputes
              arising from these Terms shall be resolved in the courts of Estonia.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We reserve the right to modify these Terms at any time. Changes will be
              communicated via email or posted on our website. Continued use of our services
              constitutes acceptance of modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email: hello@nexio-solutions.tech<br />
              Location: Estonia
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
