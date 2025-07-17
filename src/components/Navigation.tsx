import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
            >
              Shaik Fayaz
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative group text-foreground font-medium transition-transform duration-300 hover:scale-105"
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </span>
                {/* Optional underline animation */}
                <span className="block h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-primary mx-auto mt-1 rounded-full"></span>
              </button>
            ))}
            <a
              href="/Shaik_Fayaz_Resume .pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="gradient-primary transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/90 backdrop-blur-sm border-t border-border transition-all duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300 hover:scale-[1.02]"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <a
                  href="/Shaik_Fayaz_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="w-full gradient-primary transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-xl"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
