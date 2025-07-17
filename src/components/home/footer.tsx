'use client'
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Globe
} from "lucide-react";

export default function Footer() {
  const links = [
    "Our Story",
    "Events",
    "Offering",
    "Media Centre",
  ];

  const handlePhoneClick = () => {
    navigator.clipboard.writeText("+91 9600658789");
    alert("Phone number copied to clipboard!");
  };

  return (
    <footer className="bg-orange-100 border-t border-gray-200 pt-10 pb-5 px-4 md:px-16 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Logo + Socials */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="/logo/logo_png.png"
              alt="logo"
              className="w-8 h-8 md:w-12 md:h-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <p className="font-semibold text-xs md:text-sm text-black">Richness</p>
              <p className="text-xs md:text-sm font-semibold text-black">Creator</p>
            </div>
          </div>

          <div className="flex space-x-3">
            {[
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Globe, href: "https://richnesscreator.com" },
            ].map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:text-yellow-500 hover:border-yellow-500 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-y-4 font-medium text-black">
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className="underline underline-offset-2 hover:animate-pulse transition duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Section */}
        <div className="space-y-4 text-gray-700">
          <div className="space-y-1">
            <p className="font-medium">Contact us</p>
            <p>Richness Creator, Coimbatore, Tamil Nadu, India</p>

            {/* Phone click to copy */}
            <button
              onClick={handlePhoneClick}
              title="Click to copy number"
              className="flex items-center gap-2 text-left hover:text-yellow-500 transition"
            >
              <Phone size={14} />
              <span>Call us: +91 9600658789</span>
            </button>

            {/* Email click to mail */}
            <a
              href="mailto:support@richnesscreator.com"
              title="Send an email"
              className="flex items-center gap-2 hover:text-yellow-500 transition"
            >
              <Mail size={14} />
              <span>support@richnesscreator.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <div className="space-x-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
        </div>
        <div className="mt-2 md:mt-0">© All Rights Reserved. Richness Creator 2025</div>
      </div>
    </footer>
  );
}
