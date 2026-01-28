import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeUp, stagger } from "../components/Motion";
import { Link } from "react-router-dom";

const courseData = [
  {
    title: "Middle School Program",
    subtitle: "Class 6th – 8th | ICSE • CBSE • UP Board",
    points: [
      "Strong fundamentals in Maths & Science",
      "Concept clarity with board-wise teaching",
      "School exam focused preparation",
      "Regular tests & doubt sessions",
    ],
  },
  {
    title: "Secondary School Program",
    subtitle: "Class 9th – 10th | ICSE • CBSE • UP Board",
    points: [
      "Complete board syllabus coverage",
      "Answer writing & numericals practice",
      "Previous year questions discussion",
      "Board pattern tests with analysis",
    ],
  },
  {
    title: "Senior Secondary Program",
    subtitle: "Class 11th – 12th | ICSE • CBSE • UP Board",
    points: [
      "In-depth subject understanding",
      "Board exam oriented teaching approach",
      "Regular chapter-wise & full syllabus tests",
      "Doubt support & academic guidance",
    ],
  },
];

export default function Courses() {
  return (
    <div className="container-max py-12">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Courses
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-2 text-black/60">
          Classes 6th to 12th • ICSE • CBSE • UP Board
        </motion.p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {courseData.map((course, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-flyYellow to-flyYellowDark">
              <h2 className="text-2xl font-extrabold">
                {course.title}
              </h2>
              <p className="text-black/70 font-semibold">
                {course.subtitle}
              </p>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {course.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-flyYellow mt-0.5" />
                    <span className="text-black/70">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-6 inline-flex w-full justify-center bg-flyBlack text-white px-5 py-3 rounded-2xl font-extrabold hover:bg-black/90 transition"
              >
                Enquiry Now
              </Link>

              <p className="mt-3 text-center text-xs text-black/50">
                Teaching strictly as per ICSE, CBSE & UP Board exam pattern
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
