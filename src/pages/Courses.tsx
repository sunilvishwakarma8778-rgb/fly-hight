import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeUp, stagger } from "../components/Motion";
import { Link } from "react-router-dom";

const courseData = [
  {
    title: "IIT-JEE Coaching",
    subtitle: "Class 11th • 12th • Dropper",
    points: [
      "Complete syllabus coverage (PCM)",
      "PYQs + DPPs + practice sheets",
      "Weekly tests with analysis",
      "Doubt support + mentorship",
    ],
  },
  {
    title: "NEET Coaching",
    subtitle: "Class 11th • 12th • Dropper",
    points: [
      "NCERT focused teaching (PCB)",
      "Mock tests + discussion",
      "Biology concept clarity",
      "Personal attention",
    ],
  },
  {
    title: "Foundation Program",
    subtitle: "Class 9th - 10th",
    points: [
      "Strong basics + board preparation",
      "Olympiad support",
      "Early JEE/NEET foundation",
      "Regular tests",
    ],
  },
];

export default function Courses() {
  return (
    <div className="container-max py-12">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">
          Courses
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-2 text-black/60">
          Choose the right course for IIT-JEE & NEET success
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {courseData.map((c, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-flyYellow to-flyYellowDark">
              <h2 className="text-2xl font-extrabold">{c.title}</h2>
              <p className="text-black/70 font-semibold">{c.subtitle}</p>
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
                to="/contact"
                className="mt-6 inline-flex w-full justify-center bg-flyBlack text-white px-5 py-3 rounded-2xl font-extrabold hover:bg-black/90 transition"
              >
                Enquiry Now
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
