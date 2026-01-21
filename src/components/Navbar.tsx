import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/results", label: "Results" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "bg-white/80 backdrop-blur border-b transition-all",
          scrolled ? "shadow-soft border-black/10" : "border-transparent",
        ].join(" ")}
      >
        <div className="container-max py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-flyBlack grid place-items-center">
              <span className="text-flyYellow font-extrabold text-lg">FH</span>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-lg">
                <span className="text-flyBlack">Fly High</span>{" "}
                <span className="text-flyYellow">Classes</span>
              </div>
              <div className="text-xs text-black/60">IIT-JEE & NEET • Gorakhpur</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "text-sm font-semibold transition-colors",
                    isActive ? "text-flyBlack" : "text-black/60 hover:text-flyBlack",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919956920614"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-flyBlack"
            >
              <PhoneCall className="w-4 h-4" />
              Call
            </a>
            <Link
              to="/contact"
              className="bg-flyYellow text-flyBlack px-4 py-2 rounded-xl font-bold hover:bg-flyYellowDark transition-colors"
            >
              Free Demo Class
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-xl hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-black/10"
        >
          <div className="container-max py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "py-2 px-3 rounded-xl font-semibold",
                    isActive ? "bg-flyYellow/20 text-flyBlack" : "text-black/70 hover:bg-black/5",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-flyYellow text-flyBlack px-4 py-3 rounded-xl font-bold text-center hover:bg-flyYellowDark transition-colors"
            >
              Book Free Demo
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
