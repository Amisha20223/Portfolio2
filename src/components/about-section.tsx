import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  const activities = ["AI & Machine Learning", "Public Speaking", "Football", "Leading Tech Communities"]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Know Who <span className="text-primary">I Am</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hi Everyone, I am <span className="text-primary font-semibold">Amisha Singh</span>, a passionate
                    Frontend Developer who recently completed my B.Tech in Electronics and Communication Engineering
                    from <span className="text-primary font-semibold">KIET Group of Institutions</span> with 70% marks.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I have hands-on experience as a JavaScript Developer Intern at SoftCode and Frontend Developer
                    Intern at Jobsphere, where I optimized web applications and improved user engagement by 40%.
                    Currently exploring the fascinating world of{" "}
                    <span className="text-secondary font-semibold">Artificial Intelligence and Machine Learning</span>,
                    while building innovative web solutions with React, NextJS, and ElectronJS.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    As a Frontend Developer Lead at Google Developer Student Club (GDSC) and former organizer at
                    INNOTECH, I love mentoring fellow developers and organizing tech workshops to share knowledge with
                    the community.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Apart from coding, I love to:</h3>
                    <div className="flex flex-wrap gap-2">
                      {activities.map((activity) => (
                        <Badge
                          key={activity}
                          variant="secondary"
                          className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-muted-foreground">
                    "Building the future with code, one algorithm at a time!"
                  </blockquote>
                  <p className="text-right text-primary font-semibold">- Amisha Singh</p>

                  <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">🏆 Recent Achievements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Top 15 Team at IIIT Kota's HackTheChain Hackathon</li>
                      <li>• 1st Runner-Up at KICCS-D-HACK</li>
                      <li>• 1st Runner-Up at Graph-Ethon 2024 (National Level)</li>
                      <li>• 1st Runner-Up at DTU Avahaan'23 Football Tournament</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/amisha-singh-profile.jpg"
                  alt="Amisha Singh - Frontend Developer & AI/ML Enthusiast"
                  className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse flex items-center justify-center shadow-lg">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full animate-bounce flex items-center justify-center shadow-lg">
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-primary/80 rounded-full animate-ping flex items-center justify-center">
                <span className="text-sm">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
