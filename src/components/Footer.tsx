import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  PhoneCall,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-flyBlack text-white">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-extrabold">
              <span className="text-flyYellow">Fly High</span> Classes
            </h3>
            <p className="text-white/70 mt-3 leading-relaxed">
              Premium coaching institute for ICSE-CBSE & UP preparation in
              Gorakhpur. Weekly tests, doubt support and personal mentorship.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-flyYellow mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-white/75">
              <Link to="/" className="hover:text-flyYellow">
                Home
              </Link>
              <Link to="/courses" className="hover:text-flyYellow">
                Courses
              </Link>
              <Link to="/results" className="hover:text-flyYellow">
                Results
              </Link>
              <Link to="/contact" className="hover:text-flyYellow">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-flyYellow mb-4">Contact</h4>
            <div className="space-y-3 text-white/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-flyYellow mt-0.5" />
                <p>FCI Road, Ashok Nagar, Gorakhpur, Uttar Pradesh</p>
              </div>
              <a
                href="tel:+919956920614"
                className="flex items-center gap-2 hover:text-flyYellow"
              >
                <PhoneCall className="w-5 h-5 text-flyYellow" />
                +91 99569 20614
              </a>
              <a
                href="https://wa.me/919956920614"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-flyYellow"
              >
                <MessageCircle className="w-5 h-5 text-flyYellow" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-flyYellow mb-4">Social</h4>
            <a
              href="https://www.instagram.com/fly_high_classes"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 px-4 py-3 rounded-2xl hover:bg-white/15 transition"
            >
              <Instagram className="w-5 h-5 text-flyYellow" />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Fly High Classes. All rights reserved.
          </p>
          <p className="text-white/50">
            Designed by{" "}
            <a
              href="https://www.techssetu.com/"
              target="_blank"
              rel="noreferrer"
              className="text-flyYellow hover:underline"
            >
              TechsSetu
            </a>{" "}
            • Yellow & Black theme
          </p>
        </div>
      </div>
    </footer>
  );
}
