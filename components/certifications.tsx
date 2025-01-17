import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  "IELTS certification english B2 (Overall Band Score 6.0)",
  "Incident Command System (Naval University) - 140 hours",
  "REST API Design, Development & Management (Udemy) - 7.5 hours",
  "Java Multithreading, Concurrency & Performance Optimization (Udemy) - 5.5 hours",
  "Object-oriented programming (OOP) with Java (Udemy) - 12.5 hours",
  "Agile Management with SCRUM (Udemy) - 9 hours",
  "USAID Incident Command System Introductory Online Course",
  "Bombing Prevention Awareness Course (U.S. Department of Homeland Security) - 7 hours",
  "Protective Measures Course (U.S. Department of Homeland Security) - 7 hours"
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {certifications.map((cert, index) => (
              <li key={index} className="text-sm mb-2">{cert}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

