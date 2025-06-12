"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const skills = [
    "Python",
    "Go",
    "Machine Learning",
    "Data Analytics",
    "Neo4j",
    "PostgreSQL",
    "FastAPI",
    "Apache Spark",
  ]

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Jinxuan Li
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Software Engineer specializing in data and machine learning, committed to delivering data-driven
                solutions across analytics, automation, and intelligent systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:nico.lijinxuan116@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://linkedin.com/in/jinxuan-li"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center">
            <Card className="p-8 bg-white/70 backdrop-blur-sm border-purple-200 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
                    JL
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Currently</h3>
                  <p className="text-gray-600">Master Thesis Student at ABB</p>
                  <p className="text-sm text-gray-500">User Behavior Modeling Research</p>
                </div>

                <div className="border-t border-purple-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Quick Facts</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>🎓 MSc Computer Science at Chalmers</div>
                    <div>🔬 Research in ML & Data Analytics</div>
                    <div>🌍 Based in Sweden</div>
                    <div>💬 Chinese & English</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
