
import React from 'react';
import Button from './Button';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Button variant="outline" size="sm" onClick={onBack} className="mb-8 border-zinc-200 text-zinc-500 hover:text-zinc-900">
            ← Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
            Privacy Policy.
          </h1>
          <p className="text-xl text-zinc-500 font-medium">
            Transparency by design.
          </p>
          <p className="text-sm text-zinc-400 mt-4">
            Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-zinc max-w-none space-y-16">
          
          {/* Section 1: The Philosophy */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-emerald-600">
              <Shield size={20} />
              <h2 className="text-lg font-bold uppercase tracking-wider m-0">1. The Data Vault Guarantee</h2>
            </div>
            <p className="text-zinc-600 text-lg leading-relaxed">
              At Tabley, we operate on a simple principle: <strong>We provide the vault; you hold the key.</strong>
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Unlike marketplace competitors, we do not view your customer data as a commodity to be harvested. When a diner books a table at your restaurant via Tabley, that data belongs exclusively to you. We strictly prohibit the use of your guest data for marketing third-party services, other restaurants, or our own consumer products.
            </p>
          </section>

          {/* Section 2: The Legal Clause (Controller vs Processor) */}
          <section className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
            <div className="flex items-center gap-2 mb-4 text-zinc-900">
              <FileText size={20} />
              <h2 className="text-lg font-bold uppercase tracking-wider m-0">2. Data Controller vs. Processor</h2>
            </div>
            <div className="text-zinc-800 font-medium leading-relaxed space-y-4">
              <p>
                <strong>[RELATIONSHIP DEFINITION: FOR THE PURPOSES OF THE UK GENERAL DATA PROTECTION REGULATION (UK GDPR), THE PARTIES AGREE THAT:]</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>[THE RESTAURANT (YOU) ACTS AS THE "DATA CONTROLLER". YOU DETERMINE THE PURPOSES AND MEANS OF PROCESSING DINER PERSONAL DATA.]</strong>
                </li>
                <li>
                  <strong>[TABLEY SYSTEMS LTD (US) ACTS AS THE "DATA PROCESSOR". WE PROCESS DINER PERSONAL DATA SOLELY ON YOUR BEHALF AND IN ACCORDANCE WITH YOUR INSTRUCTIONS TO PROVIDE THE BOOKING MANAGEMENT SERVICE.]</strong>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Data We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">3. Data We Collect (B2B)</h2>
            <p className="text-zinc-600 mb-4">
              To provide our Software as a Service (SaaS), we collect the following business information from you (the Restaurant Partner):
            </p>
            <ul className="space-y-3 text-zinc-600">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                <span><strong>Account Information:</strong> Name of the business owner/manager, business email address, and phone number.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                <span><strong>Venue Details:</strong> Restaurant name, address, floor plans, and service configurations.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                <span><strong>Billing Information:</strong> Payment methods processed securely via our payment provider (Stripe). We do not store raw credit card details on our servers.</span>
              </li>
            </ul>
          </section>

          {/* Section 4: Purpose */}
          <section>
             <h2 className="text-2xl font-bold text-zinc-900 mb-6">4. Purpose of Processing</h2>
             <p className="text-zinc-600 mb-4">We process this data solely to:</p>
             <ul className="space-y-3 text-zinc-600">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                <span>Provide, operate, and maintain the Tabley booking system.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                <span>Process subscription payments and generate invoices.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mt-2 shrink-0"></span>
                <span>Notify you of system updates, security alerts, or service changes.</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Security */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-zinc-900">
              <Lock size={20} />
              <h2 className="text-2xl font-bold m-0">5. Security & Storage</h2>
            </div>
            <p className="text-zinc-600 leading-relaxed">
              We employ bank-grade encryption (SSL/TLS) for all data in transit and at rest. Your data is stored on secure servers located within the UK/EEA, fully compliant with UK GDPR requirements. We conduct regular security audits to ensure the integrity of the "Data Vault."
            </p>
          </section>

          {/* Section 6: Contact */}
          <section className="border-t border-zinc-100 pt-12">
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Contact Us</h2>
            <p className="text-zinc-600 mb-6">
              For any questions regarding this policy or your data rights, please contact our Data Protection Officer:
            </p>
            <a href="mailto:privacy@tabley.co" className="text-emerald-600 font-bold hover:underline text-lg">
              privacy@tabley.co
            </a>
            <p className="text-zinc-500 text-sm mt-8">
              Tabley Systems Ltd. Registered in England & Wales. Bath, UK.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
