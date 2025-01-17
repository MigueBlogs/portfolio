import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "VR Earthquake Simulator",
    description:
      "Developed an immersive VR application for disaster preparedness with over 550 downloads, enhancing user learning experiences and disaster readiness by 51% based on user feedback.",
    technologies: ["Unity", "C#", "VR", "ironSource"],
  },
  {
    title: "CheveReview Platform",
    description:
      "Led the design and implementation of a web platform connecting Chevening alumni with scholarship applicants, supporting 28 applicants from 12 countries by providing feedback on 59 essays.",
    technologies: ["Web Development", "Database Management", "User Experience"],
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                <Badge variant="secondary">simulator</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

