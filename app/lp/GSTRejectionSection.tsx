export default function GSTRejectionSection() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Why GST Applications Get Rejected
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Most virtual office providers fail during verification because
            their locations are not operationally prepared for compliance checks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white rounded-[2rem] border border-red-100 p-10">
            <h3 className="text-xl font-bold mb-8 text-red-600">
              Common Market Problems
            </h3>

            <div className="space-y-5">
              {[
                "Residential or non-commercial properties",
                "Invalid or reused documentation",
                "No signage support",
                "Premises inaccessible during visits",
                "No coordination during officer verification",
                "Inactive or non-operational locations"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                  <p className="text-sm text-slate-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-[2rem] p-10">
            <h3 className="text-xl font-bold mb-8 text-emerald-400">
              Our Infrastructure Approach
            </h3>

            <div className="space-y-5">
              {[
                "Operational commercial environments",
                "APOB & PPOB supportive locations",
                "Verification coordination assistance",
                "Documentation reviewed internally",
                "Signage-capable business centers",
                "Professional front desk environments"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
                  <p className="text-sm text-slate-300 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}