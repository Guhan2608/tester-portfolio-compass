
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Test Automation Suite",
      description: "Comprehensive automated testing framework for a major e-commerce platform, covering end-to-end user journeys, API testing, and performance validation.",
      achievements: [
        "Reduced testing time from 40 hours to 6 hours per release",
        "Achieved 95% test coverage across critical user paths",
        "Identified and prevented 50+ potential production bugs"
      ],
      technologies: ["Selenium WebDriver", "Python", "pytest", "Jenkins", "Docker"],
      metrics: {
        bugsPrevented: 50,
        timeReduction: "85%",
        coverage: "95%"
      },
      type: "Automation Framework"
    },
    {
      title: "Mobile Banking App Testing",
      description: "End-to-end testing strategy for a mobile banking application, including security testing, usability testing, and cross-platform compatibility.",
      achievements: [
        "Executed 500+ test cases across iOS and Android platforms",
        "Performed security penetration testing and vulnerability assessment",
        "Ensured compliance with banking industry standards"
      ],
      technologies: ["Appium", "Java", "TestNG", "Charles Proxy", "BrowserStack"],
      metrics: {
        testCases: 500,
        platforms: 2,
        securityIssues: 12
      },
      type: "Mobile Testing"
    },
    {
      title: "API Testing Framework",
      description: "RESTful API testing framework with automated validation, load testing, and comprehensive reporting for microservices architecture.",
      achievements: [
        "Created reusable test components for 20+ microservices",
        "Implemented continuous testing in CI/CD pipeline",
        "Established performance benchmarks and monitoring"
      ],
      technologies: ["Postman", "Newman", "JavaScript", "MongoDB", "Grafana"],
      metrics: {
        apiEndpoints: 150,
        responseTime: "200ms",
        uptime: "99.9%"
      },
      type: "API Testing"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing impactful testing projects that delivered measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-slate-200 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-blue-200 text-blue-700">
                    {project.type}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800 mb-3">{project.title}</CardTitle>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col">
                <div className="mb-6">
                  <h4 className="font-medium text-slate-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-slate-700 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    Impact Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center p-2 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm font-medium text-slate-600 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
