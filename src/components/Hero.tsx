import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-picture.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Profile Image */}
          <div className="lg:order-2 fade-in-delay">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover-lift float">
                <img 
                  src={profilePhoto} 
                  alt="Shaik Fayaz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:order-1 text-center lg:text-left max-w-2xl animate-fade-in-up">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2 animate-slide-in-left">👋 Hi, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-gradient animate-zoom-in">
                Shaik Fayaz
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 animate-fade-in">
                Data Analyst | Data Science Enthusiast | BI Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl animate-fade-in-slow">
                I turn data into powerful business decisions using analytics, machine learning, and visual storytelling.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://github.com/Shaik-Fayaz9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/fayazshaik2001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
