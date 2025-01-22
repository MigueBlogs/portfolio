"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technicalSkills = {
  "Programming Languages": [
    { name: "Java", pdf: "Certificaciones/java.pdf" },
    { name: "Python" },
    { name: "C++" },
    { name: "PHP" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "C#" }
  ],
  "Frontend Development": ["HTML", "CSS", "jQuery", "Responsive Design"],
  "Backend Development": ["Java Microservices", "Core Banking Solutions", { name: "API Integration", pdf:"Certificaciones/APIs.pdf"}, { name: "Object Oriented Programming", pdf: "Certificaciones/poo.pdf" }],
  "REST API Development": ["Design", "Development", "Management", { name: "Next", pdf:"Certificaciones/next.pdf"}],
  "Database Management": ["PostgreSQL", "SQL", "Sybase", "Database Optimization"],
  "DevOps Tools": ["Docker", "Jenkins", "Kubernetes", "CI/CD Pipelines"],
  "Virtual Reality Development": ["Unity", "3DMax", "VR Simulation", "Meta Quest"],
  "GIS Systems and Mapping": ["Mapping Applications", "Risk Assessment Tools", "mappilary", "ArcGIS", "qGIS"],
  "Cloud Technologies and IT Infrastructure": ["Cloud Deployment", "Server Management", "Switches", "Cabling", { name: "TIC's", pdf: "Certificaciones/tics.pdf" }],
  "Mobile App Debugging and QA": ["Android Testing", "iOS Testing", "Bug Tracking"],
  "Incident Analysis and Resolution": ["Root Cause Analysis", "Incident Management"],
  "Project Management Tools": ["Atlassian Suite (JIRA, Confluence)", "Asana", "Zoho CRM"],
  "Agile Methodologies": [{ name: "Scrum Master", pdf: "Certificaciones/scrum.pdf" }, "Sprint Planning", "Team Coordination"],
  "Software Development Tools": ["IntelliJ IDEA", "Eclipse", "Visual Studio Code"],
  "Creative Design Tools": ["Adobe Muse", "Photoshop", "Premiere Pro", "Illustrator"],
  "360° Virtual Tour Design": ["Interactive Tours", "Panoramic Imaging", "VR Content Creation"],
  "Testing and QA": ["Manual Testing", "Automated Testing", "Post-Implementation QA"],
  "Technical Support and Maintenance": ["Ticket Resolution", "Remote Assistance", "Equipment Configuration"],
  "Leadership and Collaboration": ["Team Management", "Cross-Functional Collaboration", "Knowledge Sharing"],
  "Problem-Solving and Analysis": ["Troubleshooting", "Critical Thinking", "Innovative Solutions"]
}

const softSkills = [
  { name: "Bilingual in English and Spanish" , pdf: "Certificaciones/IELTS.pdf"},
  { name: "Leadership and Team Management" },
  { name: "Communication and Cross-Functional Collaboration" },
  { name: "Problem-Solving and Analytical Thinking" },
  { name: "Adaptability and Learning Agility" },
  { name: "Creativity and Innovation" },
  { name: "Project Coordination and Planning" },
  { name: "Detail-Oriented and Organized" },
  { name: "Time Management and Prioritization" },
  { name: "Mentorship and Knowledge Sharing" },
  { name: "Negotiation and Conflict Resolution" },
  { name: "Client-Focused Service" },
  { name: "Public Speaking", pdf: "Certificaciones/speech.pdf" },
  { name: "Conferences", pdf: "Certificaciones/conference.pdf" },
  { name: "Emergency management", pdf: "Certificaciones/protective.pdf" },
  { name: "Crisis Management", pdf: "Certificaciones/usaid.pdf" },
  { name: "Emergency Response", pdf: "Certificaciones/Miguel Vargas Diploma SCI.pdf" },
  { name: "Bombing Prevention", pdf: "Certificaciones/bombing.pdf" },
  { name: "Risk Assessment", pdf: "Certificaciones/risk.pdf" },
]

export default function Skills() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleSkillClick = (pdf?: string) => {
    if (pdf) {
      if (isMobile) {
        window.open(pdf, '_blank')
      } else {
        setSelectedPdf(pdf)
      }
    }
  }

  const handleCloseViewer = () => {
    setSelectedPdf(null)
  }

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <Card key={index} className="border hover:border-blue-500 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={(skill as any).pdf ? "animate-bounce cursor-pointer" : ""}
                        onClick={() => handleSkillClick((skill as any).pdf)}
                      >
                        {(skill as any).pdf && (
                          <span className="relative flex h-3 w-3 mr-2">📜
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                          </span>
                        )}
                        {(skill as any).name || skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Soft Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className={skill.pdf ? "animate-bounce cursor-pointer" : ""}
                onClick={() => handleSkillClick(skill.pdf)}
              >
                {skill.pdf && (
                  <span className="relative flex h-3 w-3 mr-2">📜
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                )}
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedPdf && !isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl h-full max-h-[90vh] overflow-hidden">
            <button className="absolute top-4 right-4 text-black text-2xl" onClick={handleCloseViewer}>✖</button>
            <iframe src={selectedPdf} className="w-full h-full" style={{ minHeight: '80vh' }} />
          </div>
        </div>
      )}
    </div>
  )
}

