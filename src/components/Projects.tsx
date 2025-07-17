// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Github, ExternalLink, TrendingUp, Heart, ShoppingCart, Users } from "lucide-react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Heart Disease Prediction",
//       description: "Built a machine learning model using logistic regression to predict heart disease risk with 85%+ accuracy. Implemented comprehensive data preprocessing, feature engineering, and model evaluation techniques.",
//       tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
//       results: "85%+ Accuracy",
//       icon: Heart,
//       category: "Machine Learning",
//       highlights: [
//         "Data preprocessing and feature engineering",
//         "Logistic regression implementation",
//         "Cross-validation and model evaluation",
//         "Statistical analysis and visualization"
//       ]
//     },
//     {
//       title: "Retail Sales Dashboard",
//       description: "Created an interactive Power BI dashboard analyzing sales trends, customer behavior, and product performance. Delivered actionable insights that improved business decision-making.",
//       tools: ["Power BI", "DAX", "Power Query", "Excel", "SQL"],
//       results: "Key Business Insights",
//       icon: ShoppingCart,
//       category: "Business Intelligence",
//       highlights: [
//         "Interactive dashboard development",
//         "Sales trend analysis",
//         "Customer segmentation insights",
//         "KPI tracking and monitoring"
//       ]
//     },
//     {
//       title: "Banking Churn Analysis",
//       description: "Conducted exploratory data analysis on banking customer data to identify churn patterns and risk factors. Uncovered critical insights about customer retention in the German market.",
//       tools: ["Python", "Pandas", "Seaborn", "NumPy", "Statistical Analysis"],
//       results: "High-Risk Patterns Identified",
//       icon: TrendingUp,
//       category: "Data Analysis",
//       highlights: [
//         "Comprehensive EDA techniques",
//         "Churn pattern identification",
//         "Statistical hypothesis testing",
//         "Data visualization and storytelling"
//       ]
//     },
//     {
//       title: "Customer Segmentation Model",
//       description: "Developed a customer segmentation solution using clustering algorithms to identify distinct customer groups for targeted marketing strategies.",
//       tools: ["Python", "K-Means", "Scikit-learn", "Plotly", "Data Mining"],
//       results: "5 Customer Segments",
//       icon: Users,
//       category: "Machine Learning",
//       highlights: [
//         "Unsupervised learning implementation",
//         "Feature scaling and optimization",
//         "Cluster analysis and validation",
//         "Business recommendations"
//       ]
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Real-world projects showcasing my expertise in machine learning, data analysis, 
//             and business intelligence across different industries and use cases.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           {projects.map((project, index) => {
//             const IconComponent = project.icon;
//             return (
//               <Card key={index} className="hover-lift fade-in-up h-full group" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <CardHeader>
//                   <div className="flex items-start justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
//                         <IconComponent className="h-6 w-6" />
//                       </div>
//                       <div>
//                         <Badge variant="outline" className="mb-2 text-xs">
//                           {project.category}
//                         </Badge>
//                         <CardTitle className="text-xl">{project.title}</CardTitle>
//                       </div>
//                     </div>
//                   </div>
//                 </CardHeader>
                
//                 <CardContent className="space-y-6">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Key Highlights */}
//                   <div>
//                     <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
//                       Key Highlights
//                     </h4>
//                     <ul className="space-y-2">
//                       {project.highlights.map((highlight, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
//                           <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                           {highlight}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Tools Used */}
//                   <div>
//                     <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
//                       Tools & Technologies
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tools.map((tool, toolIndex) => (
//                         <Badge key={toolIndex} variant="secondary" className="text-xs">
//                           {tool}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Results */}
//                   <div className="flex items-center justify-between pt-4 border-t border-border">
//                     <div>
//                       <span className="text-sm text-muted-foreground">Key Result:</span>
//                       <div className="font-semibold text-primary">{project.results}</div>
//                     </div>
//                     <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
//                       <Github className="h-4 w-4 mr-2" />
//                       View Code
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center fade-in-delay">
//           <Card className="hover-lift bg-gradient-primary text-primary-foreground">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
//               <p className="mb-6 opacity-90">
//                 Check out my GitHub repository for more data science projects, 
//                 code samples, and contributions to open source.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
//                   <Github className="mr-2 h-5 w-5" />
//                   View All Projects on GitHub
//                 </Button>
//                 <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
//                   <ExternalLink className="mr-2 h-5 w-5" />
//                   Live Demo Portfolio
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, TrendingUp, Heart, ShoppingCart, Users, Award } from "lucide-react";

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
      ]
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
      ]
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
      ]
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
      ]
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
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4 mr-1" />
                      View Code
                    </Button>
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
              <Button 
                size="lg"
                className="bg-muted text-white hover:bg-primary hover:text-primary-foreground transition-transform"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </Button>
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
