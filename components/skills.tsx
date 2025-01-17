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
    <section id="skills" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline">{skill}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

