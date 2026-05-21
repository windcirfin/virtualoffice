export default function PrivacyPolicy() {
  const lastUpdated = "May 2026";

  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last Updated: {lastUpdated}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              VirtualSpace ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our virtual office services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products, including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Contact Data:</strong> Name, email address, phone number, and business name.</li>
              <li><strong>Inquiry Data:</strong> City of interest and specific service requirements (GST, Company Reg, etc.).</li>
              <li><strong>Usage Data:</strong> IP address, browser type, and interaction with our website via cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provide and manage the virtual office services you request.</li>
              <li>To contact you regarding your inquiry via phone, email, or WhatsApp.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To comply with legal obligations and prevent fraudulent activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share information with verified office providers within our network specifically to fulfill your service request. We may also disclose information if required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <strong>support@virtualspace.in</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}