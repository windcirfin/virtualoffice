export default function TrustInfrastructureBar() {
    return (
        <section className="py-6 border-y border-slate-200 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                    {[
                        "APOB & PPOB Supportive Locations",
                        "Remote KYC Available At Selected Centers",
                        "Verification-Ready Infrastructure",
                        "Multi-State Compliance Support"
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="text-xs font-black uppercase tracking-widest text-slate-700"
                        >
                            {item}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}