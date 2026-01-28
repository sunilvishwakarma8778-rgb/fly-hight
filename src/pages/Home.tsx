import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle,
  FileText,
  MessageCircle,
  Users,
  Star,
} from "lucide-react";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { fadeUp, stagger } from "../components/Motion";

const features = [
  { icon: Award, title: "Expert Faculty", desc: "Experienced teachers focused on results" },
  { icon: FileText, title: "Weekly Tests", desc: "Regular tests with analysis & feedback" },
  { icon: MessageCircle, title: "Doubt Support", desc: "Daily doubt clearing + guidance" },
  { icon: Users, title: "Mentorship", desc: "Personal attention for every student" },
];

const stats = [
  { value: 5000, label: "Students Guided", suffix: "+" },
  { value: 200, label: "Selections", suffix: "+" },
  { value: 50, label: "Weekly Tests", suffix: "+" },
  { value: 10, label: "Years Experience", suffix: "+" },
];

const courses = [
  {
    title: "IIT-JEE",
    sub: "11th • 12th • Dropper",
    points: ["PCM focused learning", "PYQs + sheets", "Mock tests", "Mentor support"],
  },
  {
    title: "NEET",
    sub: "11th • 12th • Dropper",
    points: ["NCERT focus", "PCB preparation", "Test discussion", "Doubt support"],
  },
  {
    title: "Foundation",
    sub: "Class 9th - 10th",
    points: ["Strong basics", "Board prep", "Olympiad support", "Early foundation"],
  },
];

const toppers = [
  {
    name: "Anjali Verma",
    rank: "AIR 45 (JEE Advanced)",
    year: "2025",
    score: "99.2 Percentile",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vikash Yadav",
    rank: "AIR 78 (NEET)",
    year: "2025",
    score: "670/720",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sneha Gupta",
    rank: "AIR 123 (JEE Mains)",
    year: "2025",
    score: "98.6 Percentile",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&q=80",
  },
];

const flyHighPhotos = [
  {
    title: "Classroom Session",
    desc: "Focused learning environment",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Weekly Test Series",
    desc: "Regular tests & performance tracking",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Doubt Clearing",
    desc: "Personal mentorship & guidance",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1542725752-e9f7259b3881?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
];

const testimonials = [
  {
    name: "Student Name",
    tag: "JEE / NEET Student",
    text: "Great teachers and regular tests helped me improve quickly. Doubt support is very good.",
  },
  {
    name: "Student Name",
    tag: "Class 11/12",
    text: "Best coaching in Gorakhpur for serious preparation. Concepts are explained clearly.",
  },
  {
    name: "Parent / Student",
    tag: "Foundation Batch",
    text: "Good environment, personal attention and disciplined study plan.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <FloatingWhatsApp />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-flyBlack to-black text-white overflow-hidden">
        
        {/* 3D Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Glow Orbs */}
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-flyYellow/25 blur-[120px]" />
          <div className="absolute top-10 right-0 w-[520px] h-[520px] rounded-full bg-flyYellowDark/20 blur-[140px]" />
          <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-white/10 blur-[160px]" />

          {/* 3D Grid */}
          <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,rgba(255,196,0,0.35)_1px,transparent_0)] [background-size:28px_28px]" />

          {/* Floating 3D Shapes */}
          <div className="absolute top-24 left-10 w-16 h-16 rounded-2xl bg-flyYellow/20 rotate-12 blur-[1px] shadow-[0_20px_60px_rgba(255,196,0,0.25)] animate-floatSlow" />
          <div className="absolute bottom-24 right-20 w-20 h-20 rounded-full bg-white/10 blur-[1px] shadow-[0_20px_60px_rgba(255,255,255,0.08)] animate-floatSlow2" />
          <div className="absolute top-1/2 right-1/3 w-14 h-14 rounded-2xl bg-flyYellowDark/20 -rotate-12 blur-[1px] shadow-[0_20px_60px_rgba(255,179,0,0.2)] animate-floatSlow3" />
        </div>

        <div className="container-max py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-flyYellow" />
                <span className="text-sm text-white/80">Gorakhpur • </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight">
                Crack <span className="text-flyYellow">ICSE-CBSE & UP</span> with Expert Guidance
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-5 text-lg text-white/75">
                Daily Doubt Support • Weekly Tests • Personal Attention
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-flyYellow text-flyBlack px-7 py-4 rounded-2xl font-extrabold text-center hover:bg-flyYellowDark transition"
                >
                  Book Free Demo
                </Link>
                <a
                  href="https://wa.me/919956920614"
                  target="_blank"
                  rel="noreferrer"
                  className="border-2 border-flyYellow text-flyYellow px-7 py-4 rounded-2xl font-extrabold text-center hover:bg-flyYellow hover:text-flyBlack transition"
                >
                  WhatsApp Now
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-soft border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="Students studying"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white text-flyBlack rounded-2xl shadow-soft px-5 py-4 border border-black/10">
                <p className="font-extrabold">Limited Seats</p>
                <p className="text-sm text-black/60">Early admission benefits available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="container-max py-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-flyBg rounded-3xl p-6 shadow-soft border border-black/5 hover:-translate-y-1 hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-flyYellow grid place-items-center text-flyBlack">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="mt-4 font-extrabold text-lg">{f.title}</h3>
                  <p className="mt-2 text-black/60">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-white">
        <div className="container-max py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Achievements</h2>
            <p className="mt-3 text-black/60">
              Trusted by students for IIT-JEE & NEET preparation in Gorakhpur
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-flyBg rounded-3xl p-6 shadow-soft border border-black/5 text-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-extrabold text-flyBlack"
                >
                  {s.value}
                  <span className="text-flyYellowDark">{s.suffix}</span>
                </motion.p>
                <p className="mt-2 text-black/60 font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-flyBg">
        <div className="container-max py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Courses</h2>
            <p className="mt-3 text-black/60">Choose the right program for your goal</p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {courses.map((c, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden"
              >
                <div className="p-6 bg-gradient-to-r from-flyYellow to-flyYellowDark">
                  <h3 className="text-2xl font-extrabold">{c.title}</h3>
                  <p className="text-black/70 font-semibold">{c.sub}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {c.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-flyYellow mt-0.5" />
                        <span className="text-black/70">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/courses"
                    className="mt-6 inline-flex w-full justify-center bg-flyBlack text-white px-5 py-3 rounded-2xl font-extrabold hover:bg-black/90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white">
        <div className="container-max py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Top Results</h2>
            <p className="mt-2 text-black/60">Our toppers & success stories</p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {toppers.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-extrabold text-lg">{t.name}</p>
                    <p className="text-white/80 text-sm">{t.rank}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-flyYellow text-flyBlack px-4 py-2 rounded-2xl font-extrabold text-sm">
                      {t.year}
                    </span>
                    <span className="text-black/70 font-bold text-sm">{t.score}</span>
                  </div>

                  <Link
                    to="/results"
                    className="mt-5 inline-flex w-full justify-center bg-flyBlack text-white px-5 py-3 rounded-2xl font-extrabold hover:bg-black/90 transition"
                  >
                    View Full Result
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              to="/results"
              className="inline-flex bg-flyYellow text-flyBlack px-6 py-3 rounded-2xl font-extrabold hover:bg-flyYellowDark transition"
            >
              View All Results
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      <section className="bg-white">
        <div className="container-max py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Gallery</h2>
            <p className="mt-3 text-black/60">Glimpses of our classroom and student activities</p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {galleryImages.map((img, idx) => (
              <motion.button
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="relative rounded-3xl overflow-hidden shadow-soft border border-black/5"
                onClick={() => window.open(img, "_blank")}
              >
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-[200px] object-cover" />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition" />
              </motion.button>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex bg-flyYellow text-flyBlack px-7 py-4 rounded-2xl font-extrabold hover:bg-flyYellowDark transition"
            >
              Book Free Demo Class
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="bg-flyBg">
        <div className="container-max py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Testimonials</h2>
            <p className="mt-3 text-black/60">What students say about Fly High Classes</p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 overflow-x-auto"
          >
            <div className="flex gap-6 min-w-max pb-2">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white rounded-3xl p-6 shadow-soft border border-black/5 w-[320px] sm:w-[360px]"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-flyYellow fill-flyYellow" />
                    ))}
                  </div>
                  <p className="mt-4 text-black/70 italic">"{t.text}"</p>
                  <div className="mt-5">
                    <p className="font-extrabold">{t.name}</p>
                    <p className="text-sm text-black/60">{t.tag}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-flyBlack to-black text-white">
        <div className="container-max py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Start Your Journey?</h2>
          <p className="mt-3 text-white/75 text-lg">
            Book your free demo class and start IIT-JEE / NEET preparation in Gorakhpur.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-flyYellow text-flyBlack px-7 py-4 rounded-2xl font-extrabold hover:bg-flyYellowDark transition"
            >
              Book Free Demo
            </Link>
            <a
              href="https://wa.me/919956920614"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-flyYellow text-flyYellow px-7 py-4 rounded-2xl font-extrabold hover:bg-flyYellow hover:text-flyBlack transition"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
