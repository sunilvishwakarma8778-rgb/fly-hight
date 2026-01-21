import { motion } from "framer-motion";
import { Award, Calendar, Trophy } from "lucide-react";
import { fadeUp, stagger } from "../components/Motion";
import { Link } from "react-router-dom";

const toppers = [
  {
    name: "Anjali Verma",
    exam: "JEE Advanced",
    rank: "AIR 45",
    year: "2025",
    score: "99.2 Percentile",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vikash Yadav",
    exam: "NEET",
    rank: "AIR 78",
    year: "2025",
    score: "670/720",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sneha Gupta",
    exam: "JEE Mains",
    rank: "AIR 123",
    year: "2025",
    score: "98.6 Percentile",
    photo:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Aman Singh",
    exam: "JEE Mains",
    rank: "98.4 Percentile",
    year: "2024",
    score: "Selected",
    photo:
      "https://images.unsplash.com/photo-1520975682031-a6ad3f4c6c86?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Priya Sharma",
    exam: "NEET",
    rank: "Score 650+",
    year: "2024",
    score: "650/720",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rohit Kumar",
    exam: "Foundation",
    rank: "Top Performer",
    year: "2023",
    score: "Excellent Result",
    photo:
      "https://images.unsplash.com/photo-1542725752-e9f7259b3881?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Results() {
  return (
    <div className="container-max py-12">
      {/* Heading */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-5xl font-extrabold"
        >
          Our Results
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-3 text-black/60 text-lg">
          Fly High Classes students achieve top ranks with regular tests &
          mentorship
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {toppers.map((t, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden"
          >
            {/* Photo */}
            <div className="relative h-[220px] overflow-hidden">
              <img
                src={t.photo}
                alt={t.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              {/* Rank Badge */}
              <div className="absolute top-4 left-4 bg-flyYellow text-flyBlack px-4 py-2 rounded-2xl font-extrabold text-sm shadow-soft flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                {t.rank}
              </div>

              {/* Name + Exam */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-extrabold text-xl">{t.name}</p>
                <p className="text-white/80 text-sm">{t.exam}</p>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 bg-black/5 text-flyBlack px-4 py-2 rounded-2xl font-bold text-sm">
                  <Calendar className="w-4 h-4 text-flyYellow" />
                  {t.year}
                </div>

                {/* Score Badge */}
                <div className="inline-flex items-center gap-2 bg-flyBlack text-white px-4 py-2 rounded-2xl font-extrabold text-sm">
                  <Award className="w-4 h-4 text-flyYellow" />
                  {t.score}
                </div>
              </div>

              {/* Button */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-flex bg-flyBlack text-white px-8 py-4 rounded-2xl font-extrabold hover:bg-black/90 transition"
        >
          Book Free Demo Class
        </Link>
      </div>
    </div>
  );
}
