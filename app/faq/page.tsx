import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      q: "Will I get a proper Rent Agreement for GST registration?",
      a: "Yes. We provide a notarized Rent Agreement along with a No Objection Certificate (NOC) and a utility bill (Electricity/Water) in the name of the owner, which are mandatory for GST registration."
    },
    {
      q: "Can I use this address for Company Registration (MCA)?",
      a: "Absolutely. Our addresses are valid for both GST and MCA (Company/LLP) registration. We provide the necessary documentation required by the Registrar of Companies."
    },
    {
      q: "How will I receive my couriers and letters?",
      a: "Our reception team handles all your incoming mail. We notify you via WhatsApp/Email as soon as a courier arrives. You can choose to have it scanned and emailed or forwarded to your physical address."
    },
    {
      q: "What is the turnaround time for documentation?",
      a: "Once you submit your KYC and make the payment, we typically issue the soft copies of your documentation within 24 business hours."
    },
    {
      q: "Do I need to pay a security deposit?",
      a: "No. Our virtual office plans are designed to be light on your pocket. We do not charge any security deposits or hidden maintenance fees."
    }
  ];

  return (
    <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-slate-600">Everything you need to know about Virtual Offices and GST compliance.</p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-white shadow-sm border-slate-200">
            <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-6">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}