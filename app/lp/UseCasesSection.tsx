export default function UseCasesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Built For Modern Business Operations
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our virtual office infrastructure supports founders,
            agencies, e-commerce sellers, and remote-first teams across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              title: "GST Registration",
              desc: "Compliance-focused documentation for business registration workflows."
            },
            {
              title: "Company Incorporation",
              desc: "Suitable for MCA filings and startup registration processes."
            },
            {
              title: "Amazon & Flipkart Sellers",
              desc: "Professional business address for marketplace onboarding."
            },
            {
              title: "Bank Current Accounts",
              desc: "Commercial address documentation for banking verification."
            },
            {
              title: "Remote Teams",
              desc: "Maintain a premium HQ presence while operating remotely."
            },
            {
              title: "Multi-State Expansion",
              desc: "Launch operational presence across major Indian cities."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] border border-slate-200 bg-slate-50"
            >
              <h3 className="text-lg font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}