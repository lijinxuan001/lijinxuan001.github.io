import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, ArrowRight, PenTool } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Machine Learning in Financial Analytics",
      excerpt:
        "Exploring how advanced ML techniques are revolutionizing risk assessment and market prediction in the financial sector.",
      category: "Technology",
      date: "Coming Soon",
      readTime: "8 min read",
      tags: ["Machine Learning", "Finance", "Data Science"],
    },
    {
      title: "Building Scalable Knowledge Graphs with Neo4j",
      excerpt:
        "Lessons learned from implementing multi-layer knowledge graphs for complex entity relationship modeling.",
      category: "Technology",
      date: "Coming Soon",
      readTime: "12 min read",
      tags: ["Neo4j", "Graph Databases", "Data Engineering"],
    },
    {
      title: "Reflections on Cross-Cultural Software Development",
      excerpt:
        "Insights from working in different cultural contexts and how it shapes our approach to technology and collaboration.",
      category: "Life",
      date: "Coming Soon",
      readTime: "6 min read",
      tags: ["Culture", "Career", "Personal Growth"],
    },
  ]

  const bookRecommendations = [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "Technical",
      reason: "Essential reading for understanding distributed systems and data architecture.",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      category: "Professional Development",
      reason: "Timeless principles for writing better code and becoming a more effective developer.",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "Philosophy",
      reason: "A fascinating perspective on human history and the forces that shape our world.",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing thoughts on technology, life experiences, and book recommendations
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              <PenTool className="h-4 w-4" />
            </span>
            Latest Articles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-gray-900 leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-purple-300 text-purple-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Book Recommendations */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              <BookOpen className="h-4 w-4" />
            </span>
            Book Recommendations
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookRecommendations.map((book, index) => (
              <Card key={index} className="border-purple-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">{book.title}</CardTitle>
                  <CardDescription className="text-gray-600">by {book.author}</CardDescription>
                  <Badge variant="outline" className="border-purple-300 text-purple-700 w-fit">
                    {book.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm italic">"{book.reason}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I regularly share insights about technology, data science, and personal experiences. Follow me on
                LinkedIn or reach out via email to stay connected.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
