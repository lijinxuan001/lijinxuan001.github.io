"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Jinxuan Li</h3>
            <p className="text-gray-300 max-w-md">
              Software Engineer specializing in data and machine learning. Passionate about building intelligent systems
              that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", href: "#home" },
                { label: "Projects", href: "#projects" },
                { label: "Education", href: "#education" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.getElementById(link.href.substring(1))
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="block text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:nico.lijinxuan116@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                nico.lijinxuan116@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/jinxuan-li"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-600 hover:border-purple-400 hover:text-purple-400"
              >
                <a href="mailto:nico.lijinxuan116@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-600 hover:border-purple-400 hover:text-purple-400"
              >
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

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} Jinxuan Li. All rights reserved.</p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-purple-400" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
