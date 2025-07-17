import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
          {/* Left: Brand and Socials */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Shaik Fayaz</h3>
            <p className="text-sm text-background/70">
              Data Analyst turning data into business insights through analytics & ML.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/fayazshaik2001" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://github.com/Shaik-Fayaz9" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:shaikfaya9@gmail.com">
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Quick Navigation & Info */}
          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex flex-wrap gap-4 justify-start md:justify-end">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="text-sm text-background/60 text-right">
              📧 shaikfaya9@gmail.com <br />
              📍 Hyderabad, India
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-background/20 pt-4">
          <p className="text-xs text-background/50 text-center md:text-left mb-2 md:mb-0">
            © {currentYear} Shaik Fayaz. Made with{" "}
            <Heart className="inline h-3 w-3 text-red-400 mx-1" />
            using React + Tailwind CSS.
          </p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToTop}
            className="text-background hover:text-primary"
          >
            <ArrowUp className="h-4 w-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
