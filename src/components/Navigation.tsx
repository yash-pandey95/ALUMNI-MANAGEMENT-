import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">AlumniConnect</span>
          </Link>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Beta
          </Badge>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            About
          </Link>
          <Link 
            to="/demo" 
            className={`text-sm font-medium transition-colors ${
              isActive("/demo") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Demo
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors ${
              isActive("/contact") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-3">
            <Link 
              to="/" 
              className={`block text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block text-sm font-medium transition-colors ${
                isActive("/about") ? "text-primary" : "hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/demo" 
              className={`block text-sm font-medium transition-colors ${
                isActive("/demo") ? "text-primary" : "hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              to="/contact" 
              className={`block text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-primary" : "hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 space-y-2">
              <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-to-r from-primary to-primary-light">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;