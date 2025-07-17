import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

const About = () => {
  const education = [
    {
      title: 'MBA - Data Science',
      institution: 'Current Studies',
      period: '2023 - Present',
      description: 'Specializing in Data Science and Business Analytics',
    },
    {
      title: 'B.Tech',
      institution: 'Engineering Degree',
      period: '2019 - 2023',
      description: 'Foundation in technology and analytical thinking',
    },
  ];

  const experience = [
    {
      title: 'Data Analytics Intern',
      institution: 'Algonive',
      period: '2024',
      description: 'Worked on advanced analytics and business intelligence.',
    },
    {
      title: 'ML Engineer Intern',
      institution: 'The Sun Technologies',
      period: '2024',
      description: 'Built and deployed ML models for automation.',
    },
    {
      title: 'Data Science Intern',
      institution: 'Innomatics Research Labs',
      period: '2023',
      description: 'Conducted EDA and developed predictive models.',
    },
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            I'm an MBA student specializing in Data Science with real-world experience in analytics, machine learning, and model deployment.
          </p>
        </div>

        {/* Top Grid: Bio + Education */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Bio */}
          <Card className="hover-lift fade-in-up">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-base font-medium">Hyderabad, Telangana, India</span>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-base font-semibold text-primary mb-2">My Journey</h3>
                  <p className="text-muted-foreground leading-snug">
                    I’ve completed multiple internships applying machine learning and data analysis to real-world problems.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary mb-2">What Drives Me</h3>
                  <p className="text-muted-foreground leading-snug">
                    I enjoy transforming data into actionable insights and building tools that support smart decision-making.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="hover-lift fade-in-up">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-sm">{edu.title}</h4>
                      <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Grid: Experience Cards */}
        <div className="fade-in-delay">
          <h3 className="text-xl font-bold mb-6 text-center text-primary">Work Experience</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="hover-lift transition-shadow fade-in-up">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-sm">{exp.title}</h4>
                    <span className="text-xs bg-accent-light text-accent px-2 py-0.5 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-accent mb-1">{exp.institution}</p>
                  <p className="text-xs text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

