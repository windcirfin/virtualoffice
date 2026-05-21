"use client";

import { useState } from "react";

const tabs = [
  "Required Documents",
  "What You Receive",
  "Banking Assistance",
  "Business Use Cases"
];

export default function BusinessRegistrationHub() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Business Registration Knowledge Hub
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Understand what documentation is typically required for GST registration,
            virtual office onboarding, banking workflows, and business compliance setup.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === index
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-sm">

          {/* REQUIRED DOCS */}
          {activeTab === 0 && (
            <div className="space-y-10">

              {[
                {
                  title: "Proprietorship",
                  docs: [
                    "PAN Card",
                    "Aadhaar Card",
                    "Passport Photo",
                    "Bank Statement / Cancelled Cheque",
                    "Address Proof"
                  ]
                },
                {
                  title: "Partnership Firm",
                  docs: [
                    "Partnership Deed",
                    "PAN of Firm & Partners",
                    "Partner Address Proof",
                    "Authorization Letter",
                    "Bank Details"
                  ]
                },
                {
                  title: "LLP",
                  docs: [
                    "Certificate of Incorporation",
                    "LLP Agreement",
                    "Partner KYC",
                    "Business Address Proof",
                    "DSC of Authorized Signatory"
                  ]
                },
                {
                  title: "Private Limited Company",
                  docs: [
                    "Certificate of Incorporation",
                    "MOA & AOA",
                    "Director KYC",
                    "Board Resolution",
                    "Company PAN",
                    "DSC"
                  ]
                }
              ].map((section, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold mb-5">
                    {section.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.docs.map((doc, j) => (
                      <div
                        key={j}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium"
                      >
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          )}

          {/* WHAT YOU RECEIVE */}
          {activeTab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {[
                "Rent Agreement",
                "No Objection Certificate (NOC)",
                "Utility Bill",
                "Signage Proof",
                "Mail Handling Support",
                "Verification Coordination",
                "Commercial Address Usage",
                "APOB/PPOB Supportive Address"
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <h3 className="font-bold text-lg mb-2">
                    {item}
                  </h3>

                  <p className="text-sm text-slate-600">
                    Shared as applicable based on location type,
                    business category, and compliance workflow.
                  </p>
                </div>
              ))}

            </div>
          )}

          {/* BANKING */}
          {activeTab === 2 && (
            <div className="max-w-4xl">

              <h3 className="text-2xl font-bold mb-6">
                Banking Documentation Assistance
              </h3>

              <p className="text-slate-600 leading-relaxed mb-10">
                Many founders require a professional commercial address while opening
                current accounts, payment gateways, and financial infrastructure.
                Our team assists with documentation commonly requested during banking
                verification workflows.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {[
                  "Current Account Supportive Documentation",
                  "Commercial Address Proof",
                  "GST-Linked Address Documentation",
                  "Business Correspondence Address",
                  "Payment Gateway Readiness",
                  "Founder Support Coordination"
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100 font-medium"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>
          )}

          {/* USE CASES */}
          {activeTab === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {[
                "E-commerce Businesses",
                "D2C Brands",
                "Remote Teams",
                "Import Export Firms",
                "Consulting Companies",
                "SaaS Startups",
                "Agencies & Studios",
                "Marketplace Sellers",
                "Multi-State Businesses"
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 font-semibold"
                >
                  {item}
                </div>
              ))}

            </div>
          )}

        </div>
      </div>
    </section>
  );
}