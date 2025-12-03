
import React from 'react';
import Button from './Button';
import { Scale, CreditCard, AlertTriangle, Globe } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Button variant="outline" size="sm" onClick={onBack} className="mb-8 border-zinc-200 text-zinc-500 hover:text-zinc-900">
            ← Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Terms of Service.
          </h1>
          <p className="text-xl text-zinc-500 font-medium">
            Mutual respect, defined.
          </p>
          <p className="text-sm text-zinc-400 mt-4">
            Effective Date: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-zinc max-w-none space-y-16">
          
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-sm text-zinc-700">
            <strong>Summary:</strong> These terms govern the relationship between Tabley Systems Ltd ("Us") and the Restaurant Partner ("You"). By using our platform, you agree to these terms. We provide the software; you run the restaurant.
          </div>

          {/* Section 1: Access & License */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">1. Access & License</h2>
            <p className="text-zinc-600 mb-4">
              We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Tabley Booking Management System (the "Service") for your internal business operations.
            </p>
            <p className="text-zinc-600">
              You agree not to misuse the services, reverse-engineer the software, or attempt to access data belonging to other venues.
            </p>
          </section>

          {/* Section 2: Subscriptions & Billing */}
          <section>
             <div className="flex items-center gap-2 mb-4 text-zinc-900">
              <CreditCard size={20} />
              <h2 className="text-2xl font-bold m-0">2. Subscription & Payments</h2>
            </div>
             <ul className="space-y-4 text-zinc-600">
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">Rolling Contract:</span>
                <span>Our paid plans ("Independent Hero", "Full House") operate on a rolling monthly basis. There are no long-term lock-in contracts.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">Cancellation:</span>
                <span>You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing period. We do not provide refunds for partial months.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">Fees:</span>
                <span>Subscription fees are billed automatically via our payment provider. Tabley reserves the right to suspend access if payment fails.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">3. Intellectual Property</h2>
            <p className="text-zinc-600 mb-4">
              <strong>Our IP:</strong> Tabley Systems Ltd owns all rights, title, and interest in the software, visual interfaces, interactive features, and code.
            </p>
            <p className="text-zinc-600">
              <strong>Your IP (The Data Vault):</strong> You retain full ownership of your customer data, reservation history, and floor plan configurations. We claim no ownership over your business data.
            </p>
          </section>

          {/* Section 4: Limitation of Liability */}
          <section className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
            <div className="flex items-center gap-2 mb-4 text-zinc-900">
              <AlertTriangle size={20} />
              <h2 className="text-lg font-bold uppercase tracking-wider m-0">4. Limitation of Liability</h2>
            </div>
            <p className="text-zinc-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Tabley Systems Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits (e.g., from no-shows or system downtime), data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Our total liability for any claims under these terms, including for any implied warranties, is limited to the amount you paid us to use the service in the 12 months prior to the claim.
            </p>
          </section>

          {/* Section 5: Service Availability */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">5. Service Availability</h2>
            <p className="text-zinc-600 mb-4">
              We strive to maintain 99.9% uptime. However, we do not guarantee that the service will be uninterrupted or error-free. We may perform scheduled maintenance with prior notice.
            </p>
          </section>

           {/* Section 6: Governing Law */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-zinc-900">
              <Scale size={20} />
              <h2 className="text-2xl font-bold m-0">6. Governing Law</h2>
            </div>
            <p className="text-zinc-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* Section 7: Contact */}
          <section className="border-t border-zinc-100 pt-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Questions?</h2>
            <p className="text-zinc-600 mb-6">
              If you have any questions about these Terms, please contact us.
            </p>
            <a href="mailto:legal@tabley.co" className="text-emerald-600 font-bold hover:underline text-lg">
              legal@tabley.co
            </a>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
