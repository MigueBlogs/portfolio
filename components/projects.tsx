import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "VR Earthquake Simulator",
    description: "Developed an immersive VR application for disaster preparedness with over 550 downloads, enhancing user learning experiences and disaster readiness by 51% based on user feedback.",
    technologies: ["Unity", "C#", "VR", "ironSource"]
  },
  {
    title: "CheveReview Platform",
    description: "Led the design and implementation of a web platform connecting Chevening alumni with scholarship applicants, supporting 28 applicants from 12 countries by providing feedback on 59 essays.",
    technologies: ["Web Development", "Database Management", "User Experience"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
          <CardDescription>Showcasing my work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

