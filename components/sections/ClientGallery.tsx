import React from "react";

export function ClientGallery() {
  // Replace the 'logoPath' with the actual file names of your images inside the public folder.
  const clients = [
    {
      name: "BankBazaar",
      logoPath: "/logos/bankbazaar.png",
      industry: "Fintech"
    },
    {
      name: "ACKO",
      logoPath: "/logos/acko.png",
      industry: "Insurtech"
    },
    {
      name: "MaxBupa",
      logoPath: "/logos/maxbupa.png",
      industry: "Insurance"
    },
    {
      name: "Plenaxis",
      logoPath: "/logos/plenaxis.png",
      industry: "Consulting"
    },
    {
      name: "7Genix",
      logoPath: "/logos/7genix.png",
      industry: "Technology"
    },
    {
      name: "Verve99",
      logoPath: "/logos/verve99.png",
      industry: "Media"
    },
    {
      name: "Esparcidor",
      logoPath: "/logos/esparcidor.png",
      industry: "Logistics"
    },
    {
      name: "Unilivres",
      logoPath: "/logos/unilivres.png",
      industry: "E-Commerce"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-2">
            Infrastructure Trusted By Industry Leaders
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full opacity-20"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500 cursor-default"
            >
              {/* Logo Image with Grayscale-to-Color transition */}
              <div className="relative w-full h-16 flex items-center justify-center mb-3">
                <img
                  src={client.logoPath}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-[80%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                {/* Fallback text if the image isn't found */}
                <span className="hidden text-xl font-black text-slate-800 tracking-tight italic-none">
                  {client.name}
                </span>
              </div>

              {/* Hover Badge for Industry Context */}
              <span className="absolute bottom-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}