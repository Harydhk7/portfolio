import { Button } from "@/components/ui/button"
import { Shield, Terminal, Code, Laptop, Award, Briefcase, GraduationCap, Github, Linkedin, Target } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">0xHary</div>
          <div className="space-x-4">
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#education" className="hover:text-white transition-colors">Education</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#achievements" className="hover:text-white transition-colors">Achievements</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section id="hero" className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Hari Krishna D</h1>
          <p className="text-xl mb-8">Cybersecurity Enthusiast | Penetration Tester | CTF Player</p>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/harydhk/">
              <Button variant="outline" className="border-green-500 hover:bg-green-500 hover:text-black">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/Harydhk">
              <Button variant="outline" className="border-green-500 hover:bg-green-500 hover:text-black">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </Link>
            <Link href="https://tryhackme.com/p/0xhary">
              <Button variant="outline" className="border-green-500 hover:bg-green-500 hover:text-black">
                <Target className="mr-2 h-4 w-4" /> TryHackMe
              </Button>
            </Link>
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                I'm a passionate cybersecurity professional specializing in penetration testing and ethical hacking. Currently pursuing my Bachelor's in Computer Science and Engineering at Vellore Institute of Technology, I'm dedicated to securing digital landscapes and participating in CTF challenges.
              </p>
              <p>
                My expertise includes network scanning, vulnerability assessment, and exploitation techniques using industry-standard tools like Nmap, Metasploit, and Burp Suite.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Shield className="mr-2" /> Penetration Testing
              </div>
              <div className="flex items-center">
                <Terminal className="mr-2" /> Ethical Hacking
              </div>
              <div className="flex items-center">
                <Code className="mr-2" /> CTF Challenges
              </div>
              <div className="flex items-center">
                <Laptop className="mr-2" /> Web App Security
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="border border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Vellore Institute of Technology</h3>
              <p className="text-sm mb-2">Bachelor of Computer Science and Engineering | Expected Sep 2026</p>
              <p className="mb-2">Amaravati, Andhra Pradesh</p>
              <p className="font-bold mt-2">Relevant Coursework:</p>
              <ul className="list-disc list-inside">
                <li>Computer Networks</li>
                <li>Problem solving (Python)</li>
                <li>Web Application Security</li>
                <li>Object oriented Programming (Java)</li>
                <li>Social Network Analysis</li>
                <li>Database Management System</li>
              </ul>
            </div>
            <div className="border border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Royal Matric Higher Secondary School</h3>
              <p className="text-sm mb-2">Higher Secondary | 2008 - 2022</p>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Penetration Tester</h3>
              <p className="text-sm mb-2">Hackersdaddy | Aug 2024 – Present</p>
              <ul className="list-disc list-inside">
                <li>Conducting website penetration tests and black-box assessments using Nmap, Metasploit, and Burp Suite.</li>
                <li>Participating in Capture The Flag (CTF) challenges and authoring security reports with remediation suggestions.</li>
              </ul>
            </div>
            <div className="border border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Cybersecurity Intern</h3>
              <p className="text-sm mb-2">Tamil Nadu Cyber Crime Wing | Jul 2024</p>
              <ul className="list-disc list-inside">
                <li>Assisted in investigating online crimes, including social media, IP, and log analysis, as well as OSINT.</li>
              </ul>
            </div>
            <div className="border border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Penetration Tester</h3>
              <p className="text-sm mb-2">Hacktify | Feb 2024 – Mar 2024</p>
              <ul className="list-disc list-inside">
                <li>Performed web application penetration tests, identifying vulnerabilities and drafting remediation reports.</li>
                <li>Strengthened cybersecurity skills through Capture The Flag (CTF) challenges.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Offensive-pi</h3>
              <p className="mb-4">A low-cost radio transceiver for frequency interception and security testing.</p>
              <p className="text-sm">Technologies: Raspberry Pi, DragonOS, PiFM, RTL-SDR</p>
            </div>
            <div className="border border-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Rebel Alliance CTF</h3>
              <p className="mb-4">Designed and hosted CTF challenges covering various security domains on the CTFd platform.</p>
              <p className="text-sm">Focus: Cryptography, Forensics, Steganography, Network Analysis, OSINT</p>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Award className="mr-2" /> Bootstrap paradox 2023 by Simats - 3rd place
            </li>
            <li className="flex items-center">
              <Award className="mr-2" /> Hall of Fame recognition for Finding and Reporting a Vulnerability in Bugcrowd VDP
            </li>
          </ul>
        </section>

        <section id="social-engagements" className="py-20">
          <h2 className="text-3xl font-bold mb-8">Social Engagements</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Briefcase className="mr-2" /> Chapter Lead: Null Chapter - VIT AP (Aug 2023 - Present)
            </li>
            <li className="flex items-center">
              <Briefcase className="mr-2" /> Technical Team Lead: Null Chapter - VIT AP (Aug 2022 - Aug 2023)
            </li>
          </ul>
          <div className="mt-4">
            <p>Skills developed:</p>
            <ul className="list-disc list-inside">
              <li>Leadership</li>
              <li>Problem solving and critical thinking</li>
              <li>Project management</li>
              <li>Collaboration and teamwork</li>
            </ul>
          </div>
          <div className="mt-4">
            <p>Events organized:</p>
            <ul className="list-disc list-inside">
              <li>Capture The Flag event</li>
              <li>AI music concert</li>
              <li>Various workshops related to cybersecurity</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="inline-flex items-center">
          &copy; 2024 Hari Krishna D. All rights reserved
          <span className="ml-1 w-2 h-4 bg-green-500 inline-block animate-[blink_0.7s_infinite]"></span>
        </p>
      </footer>
    </div>
  )
}
