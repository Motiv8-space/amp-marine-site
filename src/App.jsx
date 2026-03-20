import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function AmpMarineWebsite() {
  const services = [
    {
      title: "Marine Electrical Diagnostics",
      description:
        "Comprehensive troubleshooting for intermittent faults, charging issues, battery banks, and onboard electrical systems.",
    },
    {
      title: "Electronics Installation",
      description:
        "Professional installation of chartplotters, radar, autopilots, sonar, VHF, AIS, and integrated helm electronics.",
    },
    {
      title: "Lithium & Charging Upgrades",
      description:
        "Modern battery, inverter, solar, and charging system upgrades designed for reliability, safety, and performance.",
    },
    {
      title: "Custom Rewires & Refits",
      description:
        "Clean, labeled, serviceable wiring solutions for new builds, refits, and high-end marine electrical modernization.",
    },
  ];

  const projects = [
    { src: "/projects/mikes-boat-wiring-final.png", title: "System Plan" },
    { src: "/projects/20250305_112042.jpg", title: "Fuse Layout" },
    { src: "/projects/IMG_0722.jpg", title: "Before" },
    { src: "/projects/20240710_161402.jpg", title: "After" },
    { src: "/projects/20241126_162015.jpg", title: "Water Maker" },
  ];

return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-[#061c1c] text-white">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.2, delay: 2.1, ease: "easeInOut" }}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#061c1c]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative text-center"
        >
          <motion.div
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-6 text-xs uppercase tracking-[0.45em] text-amber-200/85 sm:text-sm"
          >
            Orange County / SoCal Marine Specialist
          </motion.p>
        </motion.div>
      </motion.div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#061c1c]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3"></div>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href="tel:+1-949-777-5102" className="font-semibold tracking-wide text-amber-300 transition hover:text-white">
              Amp Marine
            </a>
          </div>
        </div>
      </header>

      <section className="relative w-full">
        {/* Image block with overlay, bolt glow, and bridging CTA buttons */}
        <div className="relative w-full overflow-hidden">
          <img
            src="/preview.jpg"
            alt="Amp Marine electrical work"
            className="w-full h-[55vh] object-cover block"
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Bolt glow — outer */}
          <motion.div
            className="pointer-events-none absolute left-[28%] top-[8%] h-32 w-32 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.7), transparent 70%)" }}
            animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.2, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Bolt glow — inner */}
          <motion.div
            className="pointer-events-none absolute left-[28.5%] top-[8%] h-16 w-16 blur-xl"
            style={{ background: "radial-gradient(circle, rgba(125,211,252,0.9), transparent 70%)" }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.15, 0.95] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />

        </div>

        {/* CTA buttons — outside overflow-hidden, negative margin creates image overlap */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 flex flex-col items-center justify-center gap-3 px-6 -mt-6 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300 to-amber-500 px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:scale-[1.02]"
          >
            Request Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+1-949-777-5102"
            className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/40 bg-[#061c1c]/80 px-6 py-3 text-sm font-medium text-amber-200 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Tap to Call
          </a>
          <a
            href="mailto:info@ampmarine.net"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-[#061c1c]/80 px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Email Us
          </a>
        </motion.div>

        {/* Text block below */}
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-sm uppercase tracking-[0.35em] text-amber-300"
          >
            Orange County / SoCal Marine Specialist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Marine Electrical Systems Built for Reliability
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            Precision craftsmanship, high-end electronics integration, and uncompromising reliability.
          </motion.p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Services</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Premium Marine Electrical Solutions
          </h2>
          <p className="mt-4 text-slate-400">
            Designed for performance, built for longevity, and executed with
            exceptional attention to detail.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#0b2222] p-8 shadow-xl transition hover:border-amber-400/40"
            >
              <h3 className="text-xl font-semibold text-amber-200">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Recent Projects</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">Craftsmanship You Can See</h2>
          <p className="mt-4 text-slate-400">Real installations showcasing precision, cleanliness, and reliability.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b2222]"
            >
              <img src={p.src} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="p-5">
                <h3 className="text-lg text-amber-200 font-semibold">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b2222] p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-semibold">Start Your Next Project</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Contact us to discuss your vessel, upgrades, or troubleshooting needs.
            Serving Orange County and Southern California with premium marine
            electrical solutions.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="mailto:info@ampmarine.net"
              className="text-lg text-amber-300 transition hover:text-white"
            >
              info@ampmarine.net
            </a>

            <a
              href="tel:+1-949-777-5102"
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/30 px-5 py-3 text-amber-200 transition hover:bg-white/5"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>

            <a
              href="https://www.ampmarine.net"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-white"
            >
              www.ampmarine.net
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Amp Marine Electrical Solutions — All rights reserved
      </footer>

      {/* STICKY CALL BUTTON (MOBILE HIGH CONVERSION) */}
      <a
        href="tel:+1-949-777-5102"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-3 text-sm font-semibold text-black shadow-2xl transition hover:scale-105 md:hidden"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  );
}
