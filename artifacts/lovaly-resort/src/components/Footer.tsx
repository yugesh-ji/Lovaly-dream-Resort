import Link from "next/link"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-yellow-500">Lovaly Dream Resort</h3>
            <p className="text-sm leading-relaxed">
              Your ultimate getaway for stay, dine and relax in the heart of Rohtas. Experience luxury wrapped in nature.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/918797550731" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-yellow-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-yellow-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-yellow-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 font-bold">Address:</span>
                <span>Near Patanwa Govt Polytechnic College, Indrapuri, Rohtas (Bihar)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 font-bold">Phone:</span>
                <span>8797550731</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2 font-bold">Email:</span>
                <span>lovelydreamresort@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lovaly Dream Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
