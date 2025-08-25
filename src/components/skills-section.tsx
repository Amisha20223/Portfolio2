import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export default function SkillsSection() {
  const techStack = [
    { name: "Java", icon: "☕", category: "Language" },
    { name: "JavaScript", icon: "🟨", category: "Language" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "HTML", icon: "🌐", category: "Language" },
    { name: "CSS", icon: "🎨", category: "Language" },
    { name: "React", icon: "⚛️", category: "Framework" },
    { name: "Next.js", icon: "▲", category: "Framework" },
    { name: "Tailwind CSS", icon: "💨", category: "Framework" },
    { name: "MySQL", icon: "🗄️", category: "Database" },
    { name: "Git", icon: "📝", category: "Tool" },
    { name: "GitHub", icon: "🐙", category: "Tool" },
  ]

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Power BI", icon: "📊" },
    { name: "GitHub", icon: "🐙" },
    { name: "Git", icon: "📝" },
    { name: "GitLab", icon: "🦊" },
  ]

  const softSkills = [
    { name: "Leadership", icon: "👑" },
    { name: "Event Management", icon: "🎯" },
    { name: "Public Speaking", icon: "🎤" },
    { name: "Time Management", icon: "⏰" },
  ]

  return (
    <section id="skills" className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-accent">Skillset</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Technologies & Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <Card key={tech.name} className="group github-card github-card-hover bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{tech.name}</h4>
                  <Badge variant="outline" className="text-xs border-border">
                    {tech.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            <span className="text-accent">Developer</span> Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool) => (
              <Card key={tool.name} className="group github-card github-card-hover bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{tool.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            <span className="text-accent">Soft</span> Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill) => (
              <Card key={skill.name} className="group github-card github-card-hover bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-foreground">{skill.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
