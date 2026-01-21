import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919956920614"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-flyYellow text-flyBlack shadow-soft rounded-2xl px-4 py-3 font-extrabold flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp
    </motion.a>
  );
}
