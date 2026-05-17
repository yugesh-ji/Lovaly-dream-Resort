import { Link } from "wouter";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-2xl font-bold text-primary mb-4 block">
              Lovaly Dream Resort
            </span>
            <p className="text-muted-foreground mb-4 max-w-sm">
              A regal escape in the heartland of Bihar. Experience old-world hospitality meeting modern luxury in Rohtas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Near Patanwa Govt Polytechnic College</li>
              <li>Indrapuri, Rohtas (Bihar)</li>
              <li>Phone: 8797550731</li>
              <li>Email: lovelydreamresort@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Lovaly Dream Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
