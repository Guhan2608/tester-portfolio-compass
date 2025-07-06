
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, Code, Database, Globe, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Types",
      icon: Bug,
      skills: ["Manual Testing", "Automated Testing", "API Testing", "Performance Testing", "Security Testing", "Accessibility Testing"]
    },
    {
      title: "Automation Tools",
      icon: Code,
      skills: ["Selenium WebDriver", "Cypress", "Playwright", "TestNG", "JUnit", "Postman"]
    },
    {
      title: "Programming Languages",
      icon: Zap,
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS", "C#"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["REST APIs", "GraphQL", "JSON", "XML", "WebSocket", "OAuth"]
    },
    {
      title: "Mobile Testing",
      icon: Smartphone,
      skills: ["Appium", "Android Testing", "iOS Testing", "React Native", "Flutter"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive testing skills across multiple domains and technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
