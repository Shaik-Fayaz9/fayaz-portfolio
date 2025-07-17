import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, TrendingUp, Heart, ShoppingCart, Users, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Heart Disease Prediction",
      description: "Built a model using logistic regression to predict heart disease risk with 85%+ accuracy. Included preprocessing, feature engineering, and evaluation.",
      tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      results: "85%+ Accuracy",
      icon: Heart,
      category: "Machine Learning",
      highlights: [
        "Data preprocessing and feature engineering",
        "Logistic regression implementation",
        "Model evaluation and cross-validation"
      ],
      link: "https://github.com/Shaik-Fayaz9/heart-disease-prediction"
    },
    {
      title: "Retail Sales Dashboard",
      description: "Created an interactive dashboard in Power BI to analyze sales trends, customer behavior, and KPIs.",
      tools: ["Power BI", "DAX", "Power Query", "Excel"],
      results: "Actionable Business Insights",
      icon: ShoppingCart,
      category: "Business Intelligence",
      highlights: [
        "Sales trend analysis",
        "Customer segmentation",
        "KPI tracking dashboard"
      ],
      link: "https://github.com/Shaik-Fayaz9/retail-sales-dashboard"
    },
    {
      title: "Banking Churn Analysis",
      description: "Explored customer churn patterns using EDA and statistics on banking data from the German market.",
      tools: ["Python", "Pandas", "Seaborn", "NumPy"],
      results: "Identified High-Risk Segments",
      icon: TrendingUp,
      category: "Data Analysis",
      highlights: [
        "EDA and visualization",
        "Churn pattern detection",
        "Hypothesis testing"
      ],
      link: "https://github.com/Shaik-Fayaz9/banking-churn-analysis"
    },
    {
      title: "Customer Segmentation Model",
      description: "Used K-Means clustering to group customers for targeted marketing based on behavior.",
      tools: ["Python", "K-Means", "Scikit-learn", "Plotly"],
      results: "5 Customer Segments Identified",
      icon: Users,
      category: "Machine Learning",
      highlights: [
        "Clustering with K-Means",
        "Feature scaling and optimization",
        "Cluster validation and business strategy"
      ],
      link: "https://github.com/Shaik-Fayaz9/customer-segmentation"
    }
  ];

  const certifications = [
    "Data Science Certification - Innomatics",
    "Machine Learning Fundamentals",
    "Power BI Certification",
    "SQL Database Management",
    "Python for Data Analysis"
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Projects showcasing my expertise in machine learning, data analysis, and business intelligence.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="hover-lift fade-in-up h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          {project.category}
                        </Badge>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary uppercase tracking-wide">
                      Highlights
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.highlights.map((point, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary uppercase tracking-wide">
                      Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Result + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground">Result:</span>
                      <div className="font-medium text-primary">{project.results}</div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                        <Github className="h-4 w-4 mr-1" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-delay mb-16">
          <Card className="hover-lift bg-gradient-primary text-foreground shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
              <p className="mb-6 opacity-90">
                Visit my GitHub to see all code, notebooks, and more real-world ML/BI projects.
              </p>
              <a
                href="https://github.com/Shaik-Fayaz9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-muted text-white hover:bg-primary hover:text-primary-foreground transition-transform"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects on GitHub
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Certificates Section */}
        <div className="fade-in-up">
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-4 text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  {cert}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
