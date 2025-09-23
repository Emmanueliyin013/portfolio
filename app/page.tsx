import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Instagram,
  MapPin,
  Calendar,
  Coffee,
  Rocket,
} from "lucide-react"

export default function Portfolio() {
  const skills = [
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "Node.js", icon: Database },
    { name: "Python", icon: Code },
    { name: "PostgreSQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "React Native", icon: Smartphone },
    { name: "Git", icon: Code },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with Next.js, TypeScript, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Emmanuel Sanchez Peralta</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#skills">Skills</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-secondary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
              <span className="text-5xl font-bold text-primary-foreground">ES</span>
            </div>
            <h1 className="text-6xl font-bold mb-6 text-balance">
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Emmanuel
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-10 text-pretty leading-relaxed">
              Software Developer passionate about creating innovative solutions and building exceptional user
              experiences with modern technologies
            </p>
            <div className="flex items-center justify-center gap-6">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-semibold">Full-Stack Software Developer</span>{" "}
                  with a deep love for crafting digital experiences that make a difference. My journey in technology
                  began with curiosity and has evolved into a career dedicated to solving complex problems through
                  elegant code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With expertise spanning modern web technologies like{" "}
                  <span className="text-primary">React, Next.js, Node.js, and Python</span>, I specialize in building
                  scalable applications that prioritize both performance and user experience. I believe in writing
                  clean, maintainable code and following industry best practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community. I'm always excited about the next challenge and the
                  opportunity to learn something new.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button variant="outline" size="lg" className="flex items-center gap-3 bg-transparent" asChild>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-3 bg-transparent" asChild>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-3 bg-transparent" asChild>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Rocket className="w-6 h-6 text-primary" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg">🎓</span>
                    </div>
                    <span>Computer Science Background</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <span>3+ Years of Development Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span>Available Worldwide (Remote)</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-primary" />
                    </div>
                    <span>Always Learning New Technologies</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Coffee className="w-4 h-4 text-primary" />
                    </div>
                    <span>Coffee Enthusiast & Problem Solver</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Experience Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Projects Completed</span>
                    <span className="font-bold text-primary">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Technologies Mastered</span>
                    <span className="font-bold text-primary">10+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Happy Clients</span>
                    <span className="font-bold text-primary">100%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
                >
                  <CardContent className="p-0">
                    <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-lg">{skill.name}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.github} className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demo} className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-10">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 text-pretty leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can bring
            your ideas to life with cutting-edge technology and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-shadow" asChild>
              <a href="mailto:emmanuel@example.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-6 bg-transparent" asChild>
              <a href="#" className="flex items-center gap-3">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-lg">
            © 2024 Emmanuel Sanchez Peralta. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </footer>
    </div>
  )
}
