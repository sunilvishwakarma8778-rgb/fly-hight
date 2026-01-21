import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../components/Motion";
import {
  MapPin,
  PhoneCall,
  MessageCircle,
  User,
  GraduationCap,
  BookOpen,
  Send,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  // ✅ अपना WhatsApp नंबर डालो (91 के साथ, बिना + के)
  const WHATSAPP_NUMBER = "919956920614";

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    studentClass: "11th",
    stream: "JEE",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      alert("Please enter Name and Phone number");
      return;
    }

    const text = `Hello Fly High Classes 👋
I want to take admission.

Name: ${form.name}
Phone: ${form.phone}
Class: ${form.studentClass}
Stream: ${form.stream}
Message: ${form.message ? form.message : "N/A"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);

    // ✅ WhatsApp open in new tab
    window.open(url, "_blank");
  };

  return (
    <div className="container-max py-12">
      {/* Header */}
      <motion.div variants={stagger} initial="hidden" animate="show" className="text-center">
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-flyYellow/15 text-flyBlack px-4 py-2 rounded-full border border-flyYellow/30"
        >
          <Sparkles className="w-4 h-4 text-flyYellowDark" />
          <span className="text-sm font-bold">Admission Open • Free Demo Available</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold">
          Contact / Admission
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-3 text-black/60 text-lg max-w-2xl mx-auto">
          Book your free demo class at <span className="font-bold">Fly High Classes</span> and get
          complete guidance for <span className="font-bold">IIT-JEE & NEET</span> preparation in
          Gorakhpur.
        </motion.p>
      </motion.div>

      {/* Main Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Form */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-3xl shadow-soft border border-black/5 p-6 md:p-8"
        >
          <motion.div variants={fadeUp} className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold">Submit Enquiry</h2>
              <p className="mt-1 text-black/60">
                Fill the form and our team will contact you shortly.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-flyBg px-3 py-2 rounded-2xl border border-black/5">
              <Clock className="w-4 h-4 text-flyYellowDark" />
              <span className="text-sm font-semibold text-black/70">Quick Response</span>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={fadeUp} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-flyBg border border-black/5 p-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-flyYellowDark" />
              <p className="text-sm font-semibold text-black/70">Trusted Coaching</p>
            </div>
            <div className="rounded-2xl bg-flyBg border border-black/5 p-3 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-flyYellowDark" />
              <p className="text-sm font-semibold text-black/70">JEE / NEET Focus</p>
            </div>
            <div className="rounded-2xl bg-flyBg border border-black/5 p-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-flyYellowDark" />
              <p className="text-sm font-semibold text-black/70">Weekly Tests</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form variants={stagger} className="mt-7 space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <motion.div variants={fadeUp}>
              <label className="text-sm font-bold text-black/70">Name</label>
              <div className="mt-2 relative">
                <User className="w-5 h-5 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-flyYellow"
                  placeholder="Enter your full name"
                />
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp}>
              <label className="text-sm font-bold text-black/70">Phone</label>
              <div className="mt-2 relative">
                <PhoneCall className="w-5 h-5 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  inputMode="numeric"
                  className="w-full rounded-2xl border border-black/10 pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-flyYellow"
                  placeholder="Enter your phone number"
                />
              </div>
            </motion.div>

            {/* Class + Stream */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-bold text-black/70">Class</label>
                <div className="mt-2 relative">
                  <GraduationCap className="w-5 h-5 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <select
                    value={form.studentClass}
                    onChange={(e) => setForm({ ...form, studentClass: e.target.value })}
                    className="w-full rounded-2xl border border-black/10 pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-flyYellow bg-white"
                  >
                    <option>9th</option>
                    <option>10th</option>
                    <option>11th</option>
                    <option>12th</option>
                    <option>Dropper</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-black/70">Stream</label>
                <div className="mt-2 relative">
                  <BookOpen className="w-5 h-5 text-black/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <select
                    value={form.stream}
                    onChange={(e) => setForm({ ...form, stream: e.target.value })}
                    className="w-full rounded-2xl border border-black/10 pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-flyYellow bg-white"
                  >
                    <option>JEE</option>
                    <option>NEET</option>
                    <option>Foundation</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp}>
              <label className="text-sm font-bold text-black/70">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-flyYellow"
                placeholder="Write your message... (Preferred time, class, stream etc.)"
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              variants={fadeUp}
              type="submit"
              className="w-full bg-flyYellow text-flyBlack px-6 py-4 rounded-2xl font-extrabold hover:bg-flyYellowDark transition flex items-center justify-center gap-2"
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Submit Enquiry
            </motion.button>

            {/* Success UI */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center bg-green-50 border border-green-200 text-green-700 font-semibold rounded-2xl py-3"
              >
                ✅ Enquiry ready! WhatsApp opened in new tab.
              </motion.div>
            )}
          </motion.form>

          {/* Call + WhatsApp Buttons */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919956920614"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-flyBlack text-white px-5 py-3 rounded-2xl font-extrabold hover:bg-black/90 transition"
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-flyBlack text-flyBlack px-5 py-3 rounded-2xl font-extrabold hover:bg-black/5 transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

          <p className="mt-4 text-xs text-black/45 text-center">
            By submitting this form, you agree to be contacted by Fly High Classes.
          </p>
        </motion.div>

        {/* Right: Map + Info */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-extrabold">Visit Us</h2>

            <div className="mt-3 space-y-2 text-black/65">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-flyYellow mt-0.5" />
                Civil Lines, Gorakhpur, Uttar Pradesh
              </p>
              <p className="text-sm text-black/50">
                Tap Submit Enquiry to open WhatsApp message automatically.
              </p>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[360px] bg-flyBg">
            <iframe
              title="Fly High Classes Map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Gorakhpur%20Civil%20Lines&output=embed"
            />
          </div>

          {/* Quick FAQ */}
          <div className="p-6 md:p-8 border-t border-black/5">
            <h3 className="font-extrabold text-lg">Quick FAQ</h3>

            <div className="mt-4 space-y-3">
              <div className="bg-flyBg rounded-2xl p-4 border border-black/5">
                <p className="font-bold">✔ Free Demo Class available?</p>
                <p className="text-sm text-black/60 mt-1">
                  Yes, you can book a free demo class from this page.
                </p>
              </div>

              <div className="bg-flyBg rounded-2xl p-4 border border-black/5">
                <p className="font-bold">✔ Which batches are available?</p>
                <p className="text-sm text-black/60 mt-1">
                  JEE / NEET (11th, 12th, Dropper) and Foundation (9th–10th).
                </p>
              </div>

              <div className="bg-flyBg rounded-2xl p-4 border border-black/5">
                <p className="font-bold">✔ How to get admission?</p>
                <p className="text-sm text-black/60 mt-1">
                  Submit enquiry or contact on WhatsApp for quick guidance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
