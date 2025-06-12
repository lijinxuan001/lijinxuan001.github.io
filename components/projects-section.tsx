import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Financial Public Opinion Analysis System",
      company: "Chinese Academy of Science Suzhou Institution",
      period: "Oct 2021 - June 2023",
      type: "Side Project",
      description:
        "Built a comprehensive financial analysis system with multi-layer knowledge graph and advanced NLP capabilities.",
      achievements: [
        "Built multi-layer financial knowledge graph with Neo4j to model entities such as companies, people, and events",
        "Developed full NLP pipeline (Python + PyTorch) with BERT + BILSTM + CRF for Named Entity Recognition (NER), Relation Extraction, and Sentiment Analysis",
        "Created RESTful APIs with FastAPI for dashboards and downstream systems",
      ],
      technologies: ["Python", "PyTorch", "Neo4j", "BERT", "FastAPI", "NLP"],
    },
  ]

  const experiences = [
    {
      title: "Master Thesis Student",
      company: "ABB",
      period: "Jan 2025 - Present",
      location: "Sweden",
      description: "Conducting thesis research on user behavior modeling via log analysis in the RobotStudio team.",
      achievements: [
        "Normalized event sequences from user logs; used n-grams and Markov Chains to identify frequent interaction patterns and build event graphs",
        "Converted event sequences into natural language and applied sBert embeddings with clustering to discover user behavior groups",
      ],
      technologies: ["Python", "Machine Learning", "NLP", "Data Analysis", "Clustering"],
    },
    {
      title: "Algorithm Research Engineer",
      company: "Chinese Academy of Science Suzhou Institution",
      period: "Oct 2021 - June 2023",
      location: "China",
      description:
        "Developed algorithms, knowledge graph and data interfaces for a financial public opinion analysis system.",
      achievements: [
        "Integrated structured and unstructured data for risk control and market analysis",
        "Designed and implemented scalable data processing pipelines",
      ],
      technologies: ["Python", "Neo4j", "Data Engineering", "Algorithm Design"],
    },
    {
      title: "Software Engineer",
      company: "Gf Fund Management Co., Ltd",
      period: "June 2020 - Sep 2021",
      location: "China",
      description: "Developed data APIs and analysis models for intelligent investment research system.",
      achievements: [
        "Developed data APIs using Go for an Intelligent Investment Research System, enabling visualization and querying of fund and bond information",
        "Built Python-based data analysis models for real-time capital market insights, utilizing Apache Spark for large-scale processing",
      ],
      technologies: ["Go", "Python", "Apache Spark", "APIs", "Data Visualization"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects & Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and software engineering
          </p>
        </div>

        {/* Side Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              P
            </span>
            Side Projects
          </h3>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.period}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 w-fit">
                      {project.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-300 text-purple-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              W
            </span>
            Work Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                      <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="text-purple-600 font-medium">{exp.location}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-300 text-purple-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
