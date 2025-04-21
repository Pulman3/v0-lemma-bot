import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageSquareText,
  FileQuestion,
  Bell,
  ThumbsUp,
  MessageCircle,
  ChevronRight,
  Camera,
  Clock,
  CalendarDays,
  BookOpen,
  Send,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="font-medium">LEMMA AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-gray-600 hover:text-black">
              Features
            </Link>
            <Link href="#examples" className="text-sm text-gray-600 hover:text-black">
              Examples
            </Link>
            <Link href="#feedback" className="text-sm text-gray-600 hover:text-black">
              Feedback
            </Link>
            <Link href="https://muni.cz/fi" className="text-sm text-gray-600 hover:text-black">
              MUNI FI
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:flex">
            Try Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm font-medium">
                  Now in beta for LEMMA members
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Film Lab Buddy, <span className="text-black/80">24/7</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Meet LEMMA's AI assistant that helps you reserve equipment, find tutorials, and navigate the film lab
                  like a pro.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-black text-white hover:bg-black/90">
                    Get Early Access
                  </Button>
                  <Button size="lg" variant="outline" className="flex items-center gap-2">
                    See How It Works <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="bg-gray-100 rounded-xl p-6 max-w-md mx-auto shadow-sm">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">L</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm">Hi there! I'm LEMMA's assistant. How can I help you today?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 font-bold text-xs">S</span>
                    </div>
                    <div className="bg-gray-200 rounded-lg p-3">
                      <p className="text-sm">How do I reserve a camera for next weekend?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">L</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm">To reserve a camera for next weekend, you'll need to:</p>
                      <ol className="text-sm list-decimal pl-5 mt-2 space-y-1">
                        <li>Log in to the LEMMA reservation system</li>
                        <li>Check camera availability for your dates</li>
                        <li>Submit your request at least 48 hours in advance</li>
                      </ol>
                      <p className="text-sm mt-2">Need me to send you the reservation link?</p>
                    </div>
                  </div>
                  <div className="mt-6 relative">
                    <Input placeholder="Ask something..." className="pr-10" />
                    <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">How LEMMA AI Helps You</h2>
              <p className="text-gray-600">
                Designed specifically for MUNI FI film students, our assistant streamlines your creative process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Equipment Reservations</h3>
                <p className="text-gray-600">
                  Get instant guidance on how to reserve cameras, lights, and other film equipment from the LEMMA lab.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tutorials & Resources</h3>
                <p className="text-gray-600">
                  Access guides on equipment usage, editing techniques, and film production best practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <CalendarDays className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Events & Deadlines</h3>
                <p className="text-gray-600">
                  Stay updated on upcoming film festivals, workshops, and important submission deadlines.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Notifications</h3>
                <p className="text-gray-600">
                  Receive timely reminders about your equipment returns, upcoming events, and lab announcements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <FileQuestion className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">FAQ & Lab Rules</h3>
                <p className="text-gray-600">
                  Quickly find answers about lab policies, equipment usage guidelines, and common questions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-black/5 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Human Fallback</h3>
                <p className="text-gray-600">
                  Connect to Discord for complex questions that require human assistance from LEMMA staff.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Questions Section */}
        <section id="examples" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">What Can You Ask?</h2>
              <p className="text-gray-600">
                Here are some examples of how LEMMA AI can assist you with your film projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <p className="font-medium mb-2">"How do I book the RED camera for next Tuesday?"</p>
                <p className="text-sm text-gray-600">
                  Get step-by-step reservation instructions and availability info.
                </p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <p className="font-medium mb-2">"What's the deadline for the student film festival?"</p>
                <p className="text-sm text-gray-600">Stay updated on important dates and submission requirements.</p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <p className="font-medium mb-2">"Can you recommend a tutorial for DaVinci Resolve?"</p>
                <p className="text-sm text-gray-600">Access curated learning resources for various film tools.</p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <p className="font-medium mb-2">"What are the rules for using the sound studio?"</p>
                <p className="text-sm text-gray-600">Learn about lab policies and best practices for equipment use.</p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <p className="font-medium mb-2">"When is the next cinematography workshop?"</p>
                <p className="text-sm text-gray-600">Find upcoming events and learning opportunities at LEMMA.</p>
              </div>

              <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <p className="font-medium mb-2">"How do I report a problem with borrowed equipment?"</p>
                <p className="text-sm text-gray-600">Get guidance on troubleshooting and support procedures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Help Us Improve</h2>
                <p className="text-gray-600">
                  LEMMA AI is still learning. Share your feedback or request early access to help shape its development.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@muni.cz" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="feedback" className="text-sm font-medium">
                      Your Feedback or Questions
                    </label>
                    <Textarea
                      id="feedback"
                      placeholder="Share your thoughts, suggestions, or questions about LEMMA AI..."
                      rows={5}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="earlyAccess" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="earlyAccess" className="text-sm text-gray-600">
                      I'd like to request early access to LEMMA AI
                    </label>
                  </div>

                  <Button className="w-full bg-black text-white hover:bg-black/90">Submit Feedback</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Ethical Note Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold mb-4">A Note on Our AI</h3>
              <p className="text-gray-600 mb-6">
                LEMMA AI is designed to assist, not replace, the human connections that make our film community special.
                It's still learning and improving based on your feedback.
              </p>
              <div className="flex justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MessageSquareText className="h-4 w-4" />
                  <span>Continuously improving</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Built for MUNI students</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">L</span>
              </div>
              <span className="font-medium">LEMMA AI</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Terms of Use
              </Link>
              <Link href="https://muni.cz/fi" className="text-sm text-gray-600 hover:text-black">
                MUNI Faculty of Informatics
              </Link>
            </div>

            <div className="mt-6 md:mt-0 text-sm text-gray-500">© {new Date().getFullYear()} LEMMA Film Lab</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
