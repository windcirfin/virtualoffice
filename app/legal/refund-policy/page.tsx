export default function RefundPolicy() {
  const lastUpdated = "May 2026";

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 italic-none">Refund & Cancellation Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Refund Eligibility</h2>
            <p>
              At VirtualSpace, we strive to ensure our clients are fully satisfied with our virtual office solutions. Refund eligibility is determined based on the stage of service delivery:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Full Refund:</strong> If a refund request is placed within 24 hours of payment and <strong>before</strong> the documentation process (Rent Agreement/NOC preparation) has initiated.</li>
              <li><strong>Partial Refund:</strong> If the documentation has been drafted but not yet notarized or dispatched, a processing fee of 25% will be deducted.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Non-Refundable Scenarios</h2>
            <p>Refunds will not be issued in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Once the finalized legal documents (Rent Agreement, NOC, Utility Bill) have been issued and shared with the client.</li>
              <li>Rejection of GST or Company registration by government authorities due to factors unrelated to the business address (e.g., incorrect applicant KYC, business nature issues).</li>
              <li>If the client has already started using the address for official correspondence or business registration.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Subscription Cancellation</h2>
            <p>
              Users on a monthly or yearly plan may cancel their subscription at any time. However:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Cancellation stops the next billing cycle but does not entitle the user to a refund for the current active period.</li>
              <li>Upon cancellation, the client must provide proof of address change (e.g., GST amendment) to ensure the address is no longer in use.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Process for Refund</h2>
            <p>
              To initiate a refund, please email <strong>billing@virtualspace.in</strong> with your Order ID and reason for the request. Valid refunds are processed within 7-10 business days and credited back to the original payment source.
            </p>
          </section>

          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Note on Government Approvals</h2>
            <p className="text-sm">
              As stated in our Terms, VirtualSpace provides the "Documentation Support." Government approvals are subject to departmental discretion. We encourage clients to ensure their business activity is compliant with local zone regulations before booking.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}