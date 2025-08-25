"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["FRONTEND DEVELOPER", "AI/ML ENTHUSIAST", "HACKATHON WINNER"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/amisha20223", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amisha-singh-69a790230/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/maheaa_07", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/maheaa_07", label: "Instagram" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* GitHub-inspired Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,166,255,0.05),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-1 h-1 bg-accent/40 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-accent/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full animate-ping"></div>
        {/* GitHub-style grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(48,54,61,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(48,54,61,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                Hi There! <span className="inline-block animate-bounce text-accent">👋🏻</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                I'm <span className="text-accent font-bold">Amisha Singh</span>
              </h2>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl font-semibold text-primary typewriter">{roles[currentRole]}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              B.Tech ECE student at KIET Group of Institutions (70%) with expertise in React, NextJS, and TypeScript.
              Frontend Developer Intern at Jobsphere, passionate about AI/ML, and winner of multiple hackathons
              including 1st Runner-Up at Graph-Ethon 2024 and KICCS-D-HACK.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="github-button github-glow bg-primary hover:bg-primary/90">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" className="github-button border-border hover:bg-card bg-transparent">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="github-button hover:bg-card hover:text-accent transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-card via-muted to-card github-card-hover flex items-center justify-center shadow-2xl border border-border">
                <img
                  src="/amisha-singh-profile.jpg"
                  alt="Amisha Singh - Frontend Developer"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent/30 shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-bounce shadow-lg border border-border">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center animate-pulse shadow-lg border border-border">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center animate-ping border border-border">
                <span className="text-sm">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent" />
        </div>
      </div>
    </section>
  )
}
