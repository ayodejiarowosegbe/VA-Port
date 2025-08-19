import { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function PortfolioVA() {
  const tags = useMemo(() => [
    "Virtual Assistant",
    "Customer Support",
    "Project Coordination",
    "HR Assistance",
  ], []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">Ayodeji Arowosegbe</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#tools" className="hover:opacity-80">Tools</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#work" className="hover:opacity-80">Samples</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800">Hire Me</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-gray-200">{t}</span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">Hi, I’m Ayodeji Samson Arowosegbe — your reliable Virtual Assistant.</h1>
            <p className="mt-4 text-slate-600">I help founders and teams streamline operations, manage communication, and keep projects on track. Strong background in customer service, HR, logistics, and project management.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="rounded-xl px-4 py-2 bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">See Services</a>
              <a href="#contact" className="rounded-xl px-4 py-2 border border-slate-300 text-sm font-semibold hover:bg-slate-50">Get a Free Intro Call</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-sm border border-gray-200 bg-white p-6"
          >
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /><span>Nigeria</span></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4" /><a className="underline" href="mailto:ayodejiarowosegbe1@gmail.com">ayodejiarowosegbe1@gmail.com</a></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4" /><a className="underline" href="tel:+2349069716629">+234 906 971 6629</a></li>
              <li className="flex items-center gap-3"><Linkedin className="h-4 w-4" /><a className="underline" href="#" target="_blank" rel="noreferrer">LinkedIn (add link)</a></li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex rounded-xl px-4 py-2 bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500">Request Availability</a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-2xl shadow-sm border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-3 text-slate-600">I am a highly organized and results-driven Virtual Assistant with a strong background in customer service, HR management, logistics, and project management. I support entrepreneurs, executives, and teams by managing schedules, communications, documents, and projects with precision and professionalism.</p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Administrative Support",
              desc: "Email & calendar management, data entry, document creation, travel & meeting arrangements.",
            },
            {
              title: "Customer Support",
              desc: "Responding to inquiries, live chat & email support, handling complaints with professionalism.",
            },
            {
              title: "Project & Task Management",
              desc: "Task tracking, research, progress reporting, and coordinating with teams and stakeholders.",
            },
            {
              title: "HR Assistance",
              desc: "Recruitment support (sourcing, screening, scheduling), onboarding documentation, record keeping.",
            },
            {
              title: "Social Media & Digital",
              desc: "Content scheduling, basic Canva design, community engagement, inbox management.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl shadow-sm border border-gray-200 bg-white p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">Tools & Platforms</h2>
        <p className="mt-3 text-slate-600">Google Workspace · Microsoft Office · Slack · Trello · Asana · Zendesk · Freshdesk · HubSpot · Canva · Buffer · Hootsuite · Excel · Google Sheets · Dropbox · Notion</p>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl shadow-sm border border-gray-200 bg-white p-6">
            <h3 className="font-semibold">Shipping & Logistics Manager — Jauren Forte Export Ltd <span className="text-slate-500 font-normal">(2022 – Present)</span></h3>
            <p className="mt-2 text-sm text-slate-600">Oversaw logistics operations, managed shipment documentation, and coordinated with international clients. Improved process efficiency by streamlining communication between departments.</p>
          </div>
          <div className="rounded-2xl shadow-sm border border-gray-200 bg-white p-6">
            <h3 className="font-semibold">Customer Service & HR Roles — Various Organizations <span className="text-slate-500 font-normal">(2017 – 2022)</span></h3>
            <p className="mt-2 text-sm text-slate-600">Managed employee records, recruitment, and onboarding processes. Handled customer inquiries, ensuring high satisfaction rates.</p>
          </div>
          <div className="rounded-2xl shadow-sm border border-gray-200 bg-white p-6">
            <h3 className="font-semibold">Project Management — Freelance & Volunteer</h3>
            <p className="mt-2 text-sm text-slate-600">Supported events, talk shows, and online projects by handling scheduling, communication, and resource coordination.</p>
          </div>
        </div>
      </section>

      {/* Samples */}
      <section id="work" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">Portfolio Samples</h2>
        <p className="mt-3 text-slate-600">Add links or screenshots for: email/calendar dashboards, social media content calendars, Trello/Asana boards, reports, and presentations.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {["Sample 1", "Sample 2", "Sample 3"].map((k) => (
            <div key={k} className="rounded-2xl shadow-sm border border-gray-200 bg-white aspect-video flex items-center justify-center text-slate-400">{k}</div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <blockquote className="rounded-2xl shadow-sm border border-gray-200 bg-white p-6 text-sm text-slate-700">“Ayodeji is an exceptional organizer and communicator. His ability to manage tasks and coordinate with teams is outstanding.” — Former Supervisor</blockquote>
          <blockquote className="rounded-2xl shadow-sm border border-gray-200 bg-white p-6 text-sm text-slate-700">“Reliable, proactive, and detail-oriented. A joy to work with.” — Colleague</blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl shadow-sm border border-gray-200 bg-white p-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-slate-600">I’m available for remote and freelance opportunities. Let’s discuss how I can help.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a href="mailto:ayodejiarowosegbe1@gmail.com" className="text-center rounded-xl px-4 py-3 bg-slate-900 text-white font-semibold hover:bg-slate-800">Email Me</a>
            <a href="https://wa.me/2349069716629" className="text-center rounded-xl px-4 py-3 border border-slate-300 font-semibold hover:bg-slate-50">WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Ayodeji Samson Arowosegbe — Virtual Assistant</footer>
    </div>
  );
}
