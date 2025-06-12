import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Science - Algorithms, Languages and Logic",
      school: "Chalmers University of Technology",
      period: "2023 - Present",
      location: "Sweden",
      status: "Current",
      courses: [
        "Algorithms",
        "Advanced Algorithms",
        "Algorithms for Machine Learning and Inference",
        "Design of AI Systems",
        "Computational Skills for Large-Scale Data",
        "Statistics and Machine Learning in High Dimensions",
        "Language-Based Security",
      ],
    },
    {
      degree: "Master's Degree of Applied Statistics",
      school: "University of Chinese Academy of Sciences",
      period: "2018 - 2020",
      location: "China",
      status: "Completed",
    },
    {
      degree: "Bachelor's Degree of Statistics",
      school: "Hunan University",
      period: "2014 - 2018",
      location: "China",
      status: "Completed",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in computer science, statistics, and data analytics
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-purple-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 leading-tight">{edu.degree}</CardTitle>
                        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                          <span className="flex items-center gap-1 font-medium text-gray-700">
                            <MapPin className="h-4 w-4" />
                            {edu.school}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </span>
                          <span className="text-orange-600 font-medium">{edu.location}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={edu.status === "Current" ? "default" : "secondary"}
                    className={
                      edu.status === "Current"
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                        : "bg-purple-100 text-purple-800"
                    }
                  >
                    {edu.status}
                  </Badge>
                </div>
              </CardHeader>

              {edu.courses && (
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Relevant Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge key={course} variant="outline" className="border-purple-300 text-purple-700">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Technical Skills Summary */}
        <div className="mt-16">
          <Card className="border-purple-200 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">T</span>
                </div>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Languages</h4>
                  <div className="space-y-2">
                    {["Python", "Go", "SQL", "Bash", "PowerShell", "Java", "JavaScript"].map((lang) => (
                      <Badge key={lang} variant="outline" className="border-purple-300 text-purple-700 mr-2 mb-2">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Databases</h4>
                  <div className="space-y-2">
                    {["PostgreSQL", "MySQL", "Neo4j"].map((db) => (
                      <Badge key={db} variant="outline" className="border-purple-300 text-purple-700 mr-2 mb-2">
                        {db}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tools & Frameworks</h4>
                  <div className="space-y-2">
                    {["Git", "Kubernetes", "Docker", "Azure", "Apache Spark", "Hadoop", "FastAPI"].map((tool) => (
                      <Badge key={tool} variant="outline" className="border-purple-300 text-purple-700 mr-2 mb-2">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Languages (Spoken)</h4>
                  <div className="space-y-2">
                    {["Chinese", "English"].map((lang) => (
                      <Badge key={lang} variant="outline" className="border-purple-300 text-purple-700 mr-2 mb-2">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
