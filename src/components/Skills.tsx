// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { 
//   Brain, 
//   BarChart3, 
//   Presentation, 
//   Settings, 
//   TrendingUp,
//   Code,
//   Database,
//   LineChart,
//   Award
// } from "lucide-react";

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Core Technical Skills",
//       icon: Brain,
//       color: "bg-primary text-primary-foreground",
//       skills: [
//         "Python (Pandas, NumPy, Scikit-learn)",
//         "SQL (PostgreSQL, Oracle)",
//         "Machine Learning",
//         "Logistic Regression",
//         "Supervised Learning",
//         "Data Cleaning & Analysis",
//         "Model Evaluation",
//         "EDA (Exploratory Data Analysis)"
//       ]
//     },
//     {
//       title: "Business Intelligence Tools",
//       icon: BarChart3,
//       color: "bg-accent text-accent-foreground",
//       skills: [
//         "Power BI",
//         "DAX & Power Query",
//         "Tableau",
//         "Excel Advanced",
//         "VLOOKUP & Pivot Tables",
//         "Power Query",
//         "Excel Macros",
//         "Dashboard Creation"
//       ]
//     },
//     {
//       title: "Visualization Tools",
//       icon: Presentation,
//       color: "bg-secondary text-secondary-foreground",
//       skills: [
//         "Matplotlib",
//         "Seaborn",
//         "Power BI Dashboards",
//         "Data Storytelling",
//         "KPI Development",
//         "Interactive Charts",
//         "Report Design",
//         "Visual Analytics"
//       ]
//     },
//     {
//       title: "Tools & Environments",
//       icon: Settings,
//       color: "bg-muted text-muted-foreground",
//       skills: [
//         "Jupyter Notebook",
//         "Git & GitHub",
//         "Google Sheets",
//         "VS Code",
//         "Anaconda",
//         "Command Line",
//         "Docker",
//         "AWS Basics"
//       ]
//     },
//     {
//       title: "Statistical Concepts",
//       icon: TrendingUp,
//       color: "bg-primary text-primary-foreground",
//       skills: [
//         "A/B Testing",
//         "Regression Analysis",
//         "Correlation Analysis",
//         "Hypothesis Testing",
//         "Data Distributions",
//         "Statistical Inference",
//         "Probability Theory",
//         "Descriptive Statistics"
//       ]
//     }
//   ];

//   const certifications = [
//     "Data Science Certification - Innomatics",
//     "Machine Learning Fundamentals",
//     "Power BI Certification",
//     "SQL Database Management",
//     "Python for Data Analysis"
//   ];

//   return (
//     <section id="skills" className="py-20 gradient-bg">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             A comprehensive toolkit developed through hands-on experience in data analytics, 
//             machine learning, and business intelligence across multiple internships and projects.
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {skillCategories.map((category, index) => {
//             const IconComponent = category.icon;
//             return (
//               <Card key={index} className="hover-lift fade-in-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <CardHeader>
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className={`p-3 rounded-lg ${category.color}`}>
//                       <IconComponent className="h-6 w-6" />
//                     </div>
//                     <CardTitle className="text-lg">{category.title}</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {category.skills.map((skill, skillIndex) => (
//                       <Badge 
//                         key={skillIndex} 
//                         variant="secondary" 
//                         className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
//                       >
//                         {skill}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Certifications & Achievements */}
//         <div className="fade-in-delay">
//           <Card className="hover-lift">
//             <CardHeader>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-3 rounded-lg bg-accent text-accent-foreground">
//                   <Award className="h-6 w-6" />
//                 </div>
//                 <CardTitle className="text-xl">Certifications & Achievements</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {certifications.map((cert, index) => (
//                   <div 
//                     key={index} 
//                     className="flex items-center gap-3 p-4 bg-primary-light rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
//                   >
//                     <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-primary-foreground"></div>
//                     <span className="font-medium">{cert}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Skill Level Indicators */}
//         <div className="mt-16 fade-in-up">
//           <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { skill: "Python", level: 90 },
//               { skill: "SQL", level: 85 },
//               { skill: "Power BI", level: 88 },
//               { skill: "Machine Learning", level: 82 }
//             ].map((item, index) => (
//               <Card key={index} className="hover-lift text-center">
//                 <CardContent className="p-6">
//                   <h4 className="font-semibold mb-4">{item.skill}</h4>
//                   <div className="relative">
//                     <div className="w-20 h-20 mx-auto mb-4">
//                       <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//                         <path
//                           className="text-muted"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="3"
//                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                         />
//                         <path
//                           className="text-primary"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="3"
//                           strokeDasharray={`${item.level}, 100`}
//                           d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                         />
//                       </svg>
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <span className="text-lg font-bold text-primary">{item.level}%</span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BarChart3, 
  Presentation, 
  Settings, 
  TrendingUp,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technical Skills",
      icon: Brain,
      color: "bg-primary text-primary-foreground",
      skills: [
        "Python", "Pandas", "NumPy", "Scikit-learn",
        "SQL (PostgreSQL, Oracle)", "Machine Learning",
        "Supervised Learning", "Logistic Regression", "Model Evaluation"
      ]
    },
    {
      title: "Business Intelligence",
      icon: BarChart3,
      color: "bg-accent text-accent-foreground",
      skills: [
        "Power BI", "Tableau", "DAX", "Power Query",
        "Excel Advanced", "Pivot Tables", "Dashboard Creation"
      ]
    },
    {
      title: "Visualization & Storytelling",
      icon: Presentation,
      color: "bg-secondary text-secondary-foreground",
      skills: [
        "Matplotlib", "Seaborn", "Interactive Charts",
        "Power BI Dashboards", "Report Design", "KPI Development"
      ]
    },
    {
      title: "Dev Tools & Environments",
      icon: Settings,
      color: "bg-muted text-foreground",
      skills: [
        "Jupyter Notebook", "Git & GitHub", "VS Code",
        "Anaconda", "Google Sheets", "Docker", "AWS (Basics)"
      ]
    },
    {
      title: "Statistical Knowledge",
      icon: TrendingUp,
      color: "bg-primary text-primary-foreground",
      skills: [
        "Regression Analysis", "Hypothesis Testing",
        "A/B Testing", "Probability", "Statistical Inference"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tools and techniques I’ve mastered through projects, internships, and solving real-world data challenges.
          </p>
        </div>

        {/* Top Row (3 Columns) */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-10 justify-center">
          {skillCategories.slice(0, 3).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-lift fade-in-up h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-md ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Row (2 Cards Centered) */}
        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.slice(3).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-lift fade-in-up w-full md:w-[45%] lg:w-[30%]">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-md ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
