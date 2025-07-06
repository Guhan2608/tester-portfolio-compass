
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior QA Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led automation testing initiatives, reducing manual testing time by 70%",
        "Designed and implemented comprehensive test suites for 5+ web applications",
        "Mentored junior QA engineers and established testing best practices",
        "Collaborated with development teams using Agile methodologies"
      ],
      technologies: ["Selenium", "Python", "Jenkins", "Docker", "AWS"]
    },
    {
      title: "QA Engineer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2020 - 2022",
      type: "Full-time",
      achievements: [
        "Developed automated test scripts using Cypress and JavaScript",
        "Performed comprehensive API testing using Postman and Newman",
        "Identified and documented 200+ bugs, improving product quality by 40%",
        "Created detailed test documentation and user acceptance criteria"
      ],
      technologies: ["Cypress", "JavaScript", "Postman", "JIRA", "TestRail"]
    },
    {
      title: "Junior QA Tester",
      company: "Digital Innovations Inc",
      location: "Remote",
      duration: "2019 - 2020",
      type: "Full-time",
      achievements: [
        "Executed manual test cases for web and mobile applications",
        "Participated in regression testing and smoke testing activities",
        "Collaborated with cross-functional teams to ensure quality deliverables",
        "Gained expertise in various testing methodologies and tools"
      ],
      technologies: ["Manual Testing", "TestLink", "Bugzilla", "SQL"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A proven track record of delivering high-quality software through rigorous testing
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-slate-800 mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-4 text-slate-600">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1 text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-slate-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
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

export default Experience;
