// // import React from 'react';
// // import { Card, CardContent } from "@/components/ui/card";
// // import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";

// // const About = () => {
// //   const timeline = [
// //     {
// //       type: 'education',
// //       title: 'MBA - Data Science',
// //       institution: 'Current Studies',
// //       period: '2023 - Present',
// //       description: 'Specializing in Data Science and Business Analytics',
// //       icon: GraduationCap
// //     },
// //     {
// //       type: 'work',
// //       title: 'Data Analytics Intern',
// //       institution: 'Algonive',
// //       period: '2024',
// //       description: 'Advanced analytics and business intelligence projects',
// //       icon: Briefcase
// //     },
// //     {
// //       type: 'work',
// //       title: 'ML Engineer Intern',
// //       institution: 'The Sun Technologies',
// //       period: '2024',
// //       description: 'Machine learning model development and deployment',
// //       icon: Briefcase
// //     },
// //     {
// //       type: 'work',
// //       title: 'Data Science Intern',
// //       institution: 'Innomatics Research Labs',
// //       period: '2023',
// //       description: 'Data preprocessing, EDA, and statistical modeling',
// //       icon: Briefcase
// //     },
// //     {
// //       type: 'education',
// //       title: 'B.Tech',
// //       institution: 'Engineering Degree',
// //       period: '2019 - 2023',
// //       description: 'Foundation in technology and analytical thinking',
// //       icon: GraduationCap
// //     }
// //   ];

// //   return (
// //     <section id="about" className="py-20 bg-background">
// //       <div className="container mx-auto px-6">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">About Me</h2>
// //           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
// //             I'm an MBA student specializing in Data Science with hands-on experience in real-world projects. 
// //             I'm passionate about solving complex business problems through data-driven insights and machine learning solutions.
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-2 gap-12 items-start">
// //           {/* Bio Section */}
// //           <div className="fade-in-up">
// //             <Card className="hover-lift">
// //               <CardContent className="p-8">
// //                 <div className="flex items-center mb-6">
// //                   <MapPin className="h-6 w-6 text-primary mr-3" />
// //                   <span className="text-lg font-semibold">Hyderabad, Telangana, India</span>
// //                 </div>
                
// //                 <div className="space-y-6">
// //                   <div>
// //                     <h3 className="text-xl font-semibold mb-3 text-primary">My Journey</h3>
// //                     <p className="text-muted-foreground leading-relaxed">
// //                       As an MBA student specializing in Data Science, I've gained comprehensive experience through 
// //                       multiple internships where I've applied machine learning, business intelligence, and advanced 
// //                       analytics to solve real-world problems.
// //                     </p>
// //                   </div>
                  
// //                   <div>
// //                     <h3 className="text-xl font-semibold mb-3 text-primary">What Drives Me</h3>
// //                     <p className="text-muted-foreground leading-relaxed">
// //                       I'm passionate about transforming raw data into actionable business insights. Whether it's 
// //                       building predictive models, creating interactive dashboards, or uncovering hidden patterns, 
// //                       I love the challenge of making data tell compelling stories.
// //                     </p>
// //                   </div>

// //                   <div className="grid grid-cols-2 gap-4 pt-4">
// //                     <div className="text-center p-4 bg-primary-light rounded-lg">
// //                       <div className="text-2xl font-bold text-primary">3+</div>
// //                       <div className="text-sm text-muted-foreground">Years Experience</div>
// //                     </div>
// //                     <div className="text-center p-4 bg-accent-light rounded-lg">
// //                       <div className="text-2xl font-bold text-accent">15+</div>
// //                       <div className="text-sm text-muted-foreground">Tools Mastered</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </div>

// //           {/* Timeline */}
// //           <div className="fade-in-delay">
// //             <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">My Timeline</h3>
// //             <div className="space-y-6">
// //               {timeline.map((item, index) => {
// //                 const IconComponent = item.icon;
// //                 return (
// //                   <div key={index} className="flex gap-4 group">
// //                     <div className={`
// //                       flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
// //                       ${item.type === 'education' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}
// //                       group-hover:scale-110 transition-transform
// //                     `}>
// //                       <IconComponent className="h-6 w-6" />
// //                     </div>
                    
// //                     <div className="flex-1 pb-6">
// //                       <Card className="hover-lift">
// //                         <CardContent className="p-6">
// //                           <div className="flex justify-between items-start mb-2">
// //                             <h4 className="font-semibold text-lg">{item.title}</h4>
// //                             <span className="text-sm text-primary font-medium bg-primary-light px-3 py-1 rounded-full">
// //                               {item.period}
// //                             </span>
// //                           </div>
// //                           <p className="text-primary font-medium mb-2">{item.institution}</p>
// //                           <p className="text-muted-foreground text-sm">{item.description}</p>
// //                         </CardContent>
// //                       </Card>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default About;

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

