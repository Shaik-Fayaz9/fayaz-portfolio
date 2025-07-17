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
