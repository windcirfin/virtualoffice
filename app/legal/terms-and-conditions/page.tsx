export default function TermsAndConditions() {
  const lastUpdated = "May 2026";

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms and Conditions</h1>
        <p className="text-slate-500 mb-12">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of VirtualSpace, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
            <p>
              VirtualSpace provides business address services, mail handling, and documentation support for GST and Company Registration. We act as a facilitator between businesses and verified property owners/office providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Documentation Disclaimer (GST/MCA)</h2>
            <p className="font-medium text-slate-900">
              IMPORTANT: While we provide the documentation required for GST and Company registration (Rent Agreement, NOC, Utility Bill), the approval of such registrations is strictly subject to the discretion of the respective government departments. VirtualSpace does not guarantee government approval.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Responsibilities</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Users must provide accurate and truthful KYC information.</li>
              <li>The virtual office address must not be used for any illegal or prohibited activities.</li>
              <li>Users are responsible for timely renewal of their subscription to maintain a valid address.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p>
              VirtualSpace shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to registration rejections by government authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in <strong>New Delhi/Bangalore</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}