import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Terminal, Github, Linkedin, Award, Briefcase, GraduationCap, Code, Target } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-4 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Hari Krishna D</h1>
          <nav>
            <ul className="flex space-x-4">
              {["About", "Education", "Experience", "Projects", "Skills"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 space-y-8">
        <section id="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-600">
                <Terminal className="mr-2" /> About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Cybersecurity Enthusiast | Penetration Tester</p>
              <p>Reg. No. 22BCE94359361816271 | harydhk2@gmail.com</p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.linkedin.com/in/harydhk/" target="_blank">
                  <Button variant="outline" size="sm">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </Link>
                <Link href="https://github.com/Harydhk" target="_blank">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </Link>
                <Link href="https://tryhackme.com/p/0xhary" target="_blank">
                  <Button variant="outline" size="sm">
                    <Target className="mr-2 h-4 w-4" /> TryHackMe
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="education" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-600">
                <GraduationCap className="mr-2" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Vellore Institute of Technology</h3>
                <p>Bachelor of Computer Science and Engineering</p>
                <p>Amaravati, Andhra Pradesh | Expected Sep 2026</p>
                <p className="text-sm text-gray-600">
                  Relevant Coursework: Computer Networks, Problem solving (Python), Web Application Security, 
                  Object-oriented Programming (Java), Social Network Analysis, Database Management System
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="text-xl font-semibold">Royal Matric Higher Secondary School</h3>
                <p>Higher Secondary | 2008 - 2022</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-600">
                <Briefcase className="mr-2" /> Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Penetration Tester",
                  company: "Hackersdaddy",
                  period: "Aug 2024 – Present",
                  responsibilities: [
                    "Conducting website penetration tests and black-box assessments using Nmap, Metasploit, and Burp Suite.",
                    "Participating in Capture The Flag (CTF) challenges and authoring security reports with remediation suggestions."
                  ]
                },
                {
                  title: "Cybersecurity Intern",
                  company: "Tamil Nadu Cyber Crime Wing",
                  period: "Jul 2024",
                  responsibilities: [
                    "Assisted in investigating online crimes, including social media, IP, and log analysis, as well as OSINT."
                  ]
                },
                {
                  title: "Penetration Tester",
                  company: "Hacktify",
                  period: "Feb 2024 – Mar 2024",
                  responsibilities: [
                    "Performed web application penetration tests, identifying vulnerabilities and drafting remediation reports.",
                    "Strengthened cybersecurity skills through Capture The Flag (CTF) challenges."
                  ]
                }
              ].map((job, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{job.title} at {job.company}</h3>
                  <p className="text-sm text-gray-600">{job.period}</p>
                  <ul className="list-disc list-inside mt-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                  {index < 2 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-600">
                <Code className="mr-2" /> Projects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Offensive-pi",
                  tech: "Raspberry Pi, DragonOS, PiFM, RTL-SDR",
                  period: "Jan 2024 – Apr 2024",
                  details: [
                    "Built a low-cost radio transceiver for frequency interception and security testing.",
                    "Used Raspberry Pi with Dragon OS and PiFM; integrated RTL-SDR for broad frequency coverage."
                  ]
                },
                {
                  title: "Rebel Alliance CTF",
                  tech: "Cryptography, Forensics, Steganography, Network Analysis, OSINT",
                  period: "Feb 2024",
                  details: [
                    "Designed and hosted CTF challenges covering various security domains on the CTFd platform.",
                    "Developed challenges for multiple skill levels, from beginners to advanced."
                  ]
                }
              ].map((project, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.tech}</p>
                  <p className="text-sm text-gray-600">{project.period}</p>
                  <ul className="list-disc list-inside mt-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                  {index === 0 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-600">
                <Award className="mr-2" /> Skills & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Penetration testing", "Ethical Hacking", "Bug Bounty", "CTF",
                      "Nmap", "Metasploit", "Burp Suite", "Nessus", "Nikto", "ZAP Proxy",
                      "Python", "Java (Beginner)"
                    ].map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                  <ul className="list-disc list-inside">
                    <li>Bootstrap paradox 2023 by Simats - winners (3rd place)</li>
                    <li>Hall of Fame recognition for Finding and Reporting a Vulnerability in Bugcrowd VDP</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Engagements</h3>
                  <ul className="list-disc list-inside">
                    <li>Chapter Lead: Null Chapter - VIT AP (Aug 2023 - Present)</li>
                    <li>Technical Team Lead: Null Chapter - VIT AP (Aug 2022 - Aug 2023)</li>
                    <li>Organized Capture The Flag event, AI music concert, and more events and workshops related to cybersecurity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-8 p-4 bg-gray-100 border-t border-gray-200 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Hari Krishna D. All rights reserved.</p>
      </footer>
    </div>
  )
}
