import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">AlumniConnect</span>
            </div>
            <p className="text-primary-foreground/80 max-w-sm">
              Empowering educational institutions to build stronger, more engaged alumni communities through innovative technology.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Demo
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Integrations
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Training
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Documentation
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">hello@alumniconnect.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 AlumniConnect. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;