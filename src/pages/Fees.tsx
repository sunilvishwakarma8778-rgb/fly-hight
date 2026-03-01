import { motion } from "framer-motion";
import { Award, Calendar, Trophy } from "lucide-react";
import { fadeUp, stagger } from "../components/Motion";
import { Link } from "react-router-dom";

export default function Results() {
  const feeData = [
    ["6th, 7th & 8th", "₹24,000"],
    ["9th & 10th (UP Board)", "₹18,000"],
    ["9th & 10th (CBSE)", "₹24,000"],
    ["9th & 10th (ICSE)", "₹30,000"],
    ["11th & 12th (Commerce)", "₹24,000"],
    ["11th & 12th (UP Board)", "₹24,000"],
    ["11th & 12th (PCM/B)", "₹36,000"],
    ["Computer", "₹12,000"],
  ];

  return (
    <>
      {/* FEE STRUCTURE SECTION */}
      <section className="bg-flyBg">
        <div className="container-max py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Fee Structure
            </h2>
            <p className="mt-3 text-xl font-bold text-black">
              1 Year Complete Education Plan (2025–2026)
            </p>
          </div>

          {/* MOBILE VIEW */}
          <div className="mt-10 space-y-4 md:hidden">
            {feeData.map(([cls, fee]) => (
              <div
                key={cls}
                className="bg-white rounded-2xl p-4 shadow-soft border border-black/5 flex items-center justify-between"
              >
                <span className="font-semibold text-sm">{cls}</span>
                <span className="font-extrabold text-flyBlack tracking-wide">
                  {fee}
                </span>
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW */}
          <div className="mt-10 hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden">
              <thead className="bg-gradient-to-r from-flyYellow to-flyYellowDark text-flyBlack">
                <tr>
                  <th className="p-4 text-left font-extrabold">Class</th>
                  <th className="p-4 text-right font-extrabold">Fees</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map(([cls, fee]) => (
                  <tr key={cls} className="border-t hover:bg-flyBg transition">
                    <td className="p-4 font-semibold">{cls}</td>
                    <td className="p-4 text-right font-extrabold">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-black">
            Registration Fee: <strong>₹1,000</strong>
            <span className="block text-xs mt-1">
              (Bag, ID Card, T-Shirt included)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// const toppers = [
//   {
//     name: "Anjali Verma",
//     exam: "JEE Advanced",
//     rank: "AIR 45",
//     year: "2025",
//     score: "99.2 Percentile",
//     photo:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Vikash Yadav",
//     exam: "NEET",
//     rank: "AIR 78",
//     year: "2025",
//     score: "670/720",
//     photo:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Sneha Gupta",
//     exam: "JEE Mains",
//     rank: "AIR 123",
//     year: "2025",
//     score: "98.6 Percentile",
//     photo:
//       "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Aman Singh",
//     exam: "JEE Mains",
//     rank: "98.4 Percentile",
//     year: "2024",
//     score: "Selected",
//     photo:
//       "https://images.unsplash.com/photo-1520975682031-a6ad3f4c6c86?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Priya Sharma",
//     exam: "NEET",
//     rank: "Score 650+",
//     year: "2024",
//     score: "650/720",
//     photo:
//       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     name: "Rohit Kumar",
//     exam: "Foundation",
//     rank: "Top Performer",
//     year: "2023",
//     score: "Excellent Result",
//     photo:
//       "https://images.unsplash.com/photo-1542725752-e9f7259b3881?auto=format&fit=crop&w=900&q=80",
//   },
// ];

// export default function Results() {
//   return (
//     <div className="container-max py-12">
//       {/* Heading */}
//       <motion.div
//         variants={stagger}
//         initial="hidden"
//         animate="show"
//         className="text-center"
//       >
//         <motion.h1
//           variants={fadeUp}
//           className="text-3xl md:text-5xl font-extrabold"
//         >
//           Our Results
//         </motion.h1>
//         <motion.p variants={fadeUp} className="mt-3 text-black/60 text-lg">
//           Fly High Classes students achieve top ranks with regular tests &
//           mentorship
//         </motion.p>
//       </motion.div>

//       {/* Cards */}
//       <motion.div
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {toppers.map((t, idx) => (
//           <motion.div
//             key={idx}
//             variants={fadeUp}
//             whileHover={{ y: -8 }}
//             className="bg-white rounded-3xl shadow-soft border border-black/5 overflow-hidden"
//           >
//             {/* Photo */}
//             <div className="relative h-[220px] overflow-hidden">
//               <img
//                 src={t.photo}
//                 alt={t.name}
//                 className="w-full h-full object-cover hover:scale-110 transition duration-500"
//               />

//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

//               {/* Rank Badge */}
//               <div className="absolute top-4 left-4 bg-flyYellow text-flyBlack px-4 py-2 rounded-2xl font-extrabold text-sm shadow-soft flex items-center gap-2">
//                 <Trophy className="w-4 h-4" />
//                 {t.rank}
//               </div>

//               {/* Name + Exam */}
//               <div className="absolute bottom-4 left-4 right-4">
//                 <p className="text-white font-extrabold text-xl">{t.name}</p>
//                 <p className="text-white/80 text-sm">{t.exam}</p>
//               </div>
//             </div>

//             {/* Info */}
//             <div className="p-6">
//               <div className="flex items-center justify-between gap-3">
//                 {/* Year Badge */}
//                 <div className="inline-flex items-center gap-2 bg-black/5 text-flyBlack px-4 py-2 rounded-2xl font-bold text-sm">
//                   <Calendar className="w-4 h-4 text-flyYellow" />
//                   {t.year}
//                 </div>

//                 {/* Score Badge */}
//                 <div className="inline-flex items-center gap-2 bg-flyBlack text-white px-4 py-2 rounded-2xl font-extrabold text-sm">
//                   <Award className="w-4 h-4 text-flyYellow" />
//                   {t.score}
//                 </div>
//               </div>

//               {/* Button */}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* CTA */}
//       <div className="mt-14 text-center">
//         <Link
//           to="/contact"
//           className="inline-flex bg-flyBlack text-white px-8 py-4 rounded-2xl font-extrabold hover:bg-black/90 transition"
//         >
//           Book Free Demo Class
//         </Link>
//       </div>
//     </div>
//   );
// }
