export default function InfrastructureCapabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Infrastructure Capabilities
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Features and operational support vary by property,
            city, and business center configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Remote KYC Support",
              desc: "Available at selected partner locations with digital onboarding workflows."
            },
            {
              title: "Meeting Room Access",
              desc: "Professional meeting and discussion spaces available at eligible centers."
            },
            {
              title: "Reception Coordination",
              desc: "Operational front desk support available at managed commercial locations."
            },
            {
              title: "Mail Handling",
              desc: "Mail receiving and notification support depending on center operations."
            },
            {
              title: "Signage Support",
              desc: "Business signage available at approved and compatible locations."
            },
            {
              title: "Verification Coordination",
              desc: "Supportive infrastructure for GST, banking, and compliance workflows."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200"
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