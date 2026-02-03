import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeUp, stagger } from "../components/Motion";
import { Link } from "react-router-dom";

const courseData = [
  {
    title: "NURTURE",
    subtitle: "Class 6th – 8th | All Boards",
    points: [
      "All Subjects covered",
      "Mathematics, Science, English, Hindi, Social Science",
      "Strong foundation & concept clarity",
      "Regular tests & doubt sessions",
    ],
  },
  {
    title: "PRE FOUNDATION (ICSE)",
    subtitle: "Class 9th – 10th | ICSE Board",
    points: [
      "Physics",
      "Chemistry",
      "Biology",
      "Mathematics",
      "Computer",
      "Board exam oriented preparation",
    ],
  },
  {
    title: "PRE FOUNDATION (CBSE)",
    subtitle: "Class 9th – 10th | CBSE Board",
    points: [
      "Science",
      "Mathematics",
      "Social Studies",
      "Computer",
    ],
  },
   {
    title: "PRE FOUNDATION ",
    subtitle: "Class 9th – 10th UP BOARD HINDI MEDIUM",
    points: [
      "Science",
      "Mathematics",
      "Social Studies",
      "Computer",
    ],
  },
  {
    title: "FOUNDATION",
    subtitle: "Class 11th – 12th | Commerce Stream",
    points: [
      "Accountancy",
      "Economics",
      "Business Studies",
      "Concept clarity with exam focus",
    ],
  },
  {
    title: "FOUNDATION",
    subtitle: "Class 11th – 12th | Science / Math",
    points: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology",
      "Computer",
    ],
  },
  {
    title: "FOUNDATION",
    subtitle: " UP Board (Hindi Medium) Class 11th – 12th ",
    points: [
      "All Subjects available",
      "Hindi Medium teaching",
      "Board exam focused preparation",
      "Regular tests & doubt support",
    ],
  },
];

export default function Courses() {
  return (
    <div className="container-max py-12">
      {/* Heading */}
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Courses
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-2 text-black/60">
          Classes 6th to 12th • ICSE • CBSE • UP Board (Hindi Medium Available)
        </motion.p>
      </motion.div>

      {/* Course Cards */}
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
            {/* Card Header */}
            <div className="p-6 bg-gradient-to-r from-flyYellow to-flyYellowDark">
              <h2 className="text-2xl font-extrabold">
                {course.title}
              </h2>
              <p className="text-black/180 font-semibold">
                {course.subtitle}
              </p>
            </div>

            {/* Card Body */}
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
                Teaching strictly as per board exam pattern
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
