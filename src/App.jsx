import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function App() {
  const services = [
    {
      title: "Marine Electrical Diagnostics",
      description:
        "Comprehensive troubleshooting for intermittent faults, charging issues, and onboard systems.",
    },
    {
      title: "Electronics Installation",
      description:
        "Chartplotters, radar, autopilots, sonar, VHF, AIS, and integrated helm electronics.",
    },
    {
      title: "Lithium & Charging Upgrades",
      description:
        "Battery systems, inverters, and charging upgrades designed for safety and performance.",
    },
    {
      title: "Custom Rewires & Refits",
      description:
        "Clean, labeled, serviceable wiring for refits and high-end builds.",
    },
  ];

const projects = [
  { src: "/projects/20241210_131645.jpg", title: "Seakeeper Install" },
  { src: "/projects/20250305_112042.jpg", title: "Fuse Layout" },
  { src: "/projects/20250305_130735.jpg", title: "Switch Panel" },
  { src: "/projects/20240710_161402.jpg", title: "After" },
  { src: "/projects/20241126_162015.jpg", title: "Water Maker" },
  { src: "/projects/mikes-boat-wiring-final.png", title: "System Plan" },
  { src: "/projects/IMG_0779.jpg", title: "Additional Battery" },
  { src: "/projects/IMG_0722.jpg", title: "Before" },
];

  return (
    <div className="bg-[#061c1c] text-white min-h-screen">
      {/* HERO */}
      <section className="text-center py-24 px-6">
        <img src="/logo.png" className="mx-auto w-48 mb-6" />
        <p className="text-amber-300 tracking-widest text-sm uppercase">
          Orange County / SoCal Marine Specialist
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold mt-4">
          Marine Electrical Systems Built for Reliability
        </h1>
        <p className="text-slate-300 mt-6 max-w-xl mx-auto">
          Precision craftsmanship and high-end marine electrical solutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+19497775102"
            className="bg-amber-400 text-black px-6 py-3 rounded-xl flex items-center gap-2 justify-center"
          >
            <Phone size={16} /> Call Now
          </a>

          <a
            href="mailto:info@ampmarine.net"
            className="border border-white/20 px-6 py-3 rounded-xl flex items-center gap-2 justify-center"
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12">
          Marine Electrical Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#0b2222] p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-amber-300 text-xl">{s.title}</h3>
              <p className="text-slate-300 mt-3">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center mb-12">
          Recent Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div
              key={p.src}
              className="bg-[#0b2222] rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="aspect-[4/3]">
                <img
                  src={p.src}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-sm text-slate-300">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl mb-6">Start Your Project</h2>

        <p className="text-slate-300 mb-6">
          info@ampmarine.net
        </p>

        <a
          href="tel:+19497775102"
          className="bg-amber-400 text-black px-6 py-3 rounded-xl inline-flex items-center gap-2"
        >
          <Phone size={16} /> Call 949.777.5102
        </a>
      </section>
    </div>
  );
}
