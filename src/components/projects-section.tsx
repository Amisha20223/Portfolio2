import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "FINIUS",
      description:
        "Educational solutions aimed at enhancing financial literacy, resulting in a 25% improvement in user engagement within the first month of launch. Created interactive courses covering budgeting, saving, investing, debt management, and retirement planning, leading to a 30% increase in course completion rates.",
      image: "/finius-project.jpg",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://finius-seven.vercel.app",
      githubUrl: "#",
      period: "Dec 2023 - Jan 2024",
    },
    {
      title: "DYANC",
      description:
        "Built a user-friendly portal with a modern UI and intuitive navigation, resulting in a 35% increase in student interaction with the platform. Customized features like course listings, syllabus display, and progress tracking for students, which improved course enrollment by 25%.",
      image: "/code-editor-project.jpg",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      period: "Jun 2024 - Ongoing",
    },
    {
      title: "Billing System",
      description:
        "Designed and implemented user-friendly interfaces, which resulted in a 30% reduction in user errors during billing processes. Integrated real-time data updates and responsive design to enhance user experience by 15%.",
      image: "/billing-software-project.jpg",
      technologies: ["React", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      period: "Nov 2023 - Dec 2023",
    },
    {
      title: "Customer Analytics Dashboard",
      description:
        "Built a comprehensive analytics dashboard for tracking customer churn and subscription metrics. Features interactive charts, demographic analysis, and real-time data visualization to help businesses make data-driven decisions.",
      image: "/customer-dashboard-project.jpg",
      technologies: ["React", "D3.js", "JavaScript", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      period: "Mar 2024 - Apr 2024",
    },
    {
      title: "Food Delivery Platform",
      description:
        "Developed a modern food delivery website with intuitive navigation and engaging user interface. Features include menu exploration, discount vouchers, and fast home delivery tracking system.",
      image: "/food-delivery-project.jpg",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://amisha20223.github.io/FOODY/",
      githubUrl: "#",
      period: "Feb 2024 - Mar 2024",
    },
    {
      title: "Weather Application",
      description:
        "Created a beautiful weather application with gradient backgrounds and real-time weather data. Features location-based weather updates, humidity tracking, and wind speed monitoring with an intuitive user interface.",
      image: "/weather-app-project.jpg",
      technologies: ["React", "JavaScript", "Weather API", "CSS"],
      liveUrl: "https://amisha20223.github.io/Practice-Project/",
      githubUrl: "#",
      period: "Jan 2024 - Feb 2024",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Recent <span className="text-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development and user experience
            design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group github-card github-card-hover overflow-hidden bg-card border-border">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-card/90 text-xs border border-border">
                    {project.period}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs border-border hover:bg-accent/10">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" className="flex-1 github-button bg-accent hover:bg-accent/90" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="github-button border-border hover:bg-card bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
