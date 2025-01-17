import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "SQL", "Java", "PostgreSQL", "Unity", "jQuery", "C", "PHP", "Python", "IntelliJ IDEA",
  "REST APIs Development", "Web development", "Continuous integration",
  "Scrum", "Game design", "Asana", "Zoho CRM", "3DMax", "Adobe Suite",
  "Microsoft Suite", "Networking", "Communication", "Autodidact"
]

export default function Skills() {
  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Skills</h1>
      <Card>
        <CardHeader>
          <CardTitle>Technical and Soft Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

