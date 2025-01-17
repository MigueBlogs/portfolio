import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const volunteerExperiences = [
  {
    title: "IT Internship",
    organization: "Pemex",
    location: "Mexico City, Mexico",
    date: "July 2017 - February 2018",
    responsibilities: [
      "Maintenance and formatting of workstations, including operating system installation and internal system setup.",
      "Remote and in-person assistance for ticket resolution, escalation, and administrative tasks.",
      "Support for technical and operational requirements."
    ]
  },
  {
    title: "Resource Analyst & Verifier Volunteer",
    organization: "VERIFICADO19S",
    location: "Mexico City, Mexico",
    date: "September 2017 - October 2017",
    description: "Collaborated in a multidisciplinary team to manage and verify critical data during the emergency response to the earthquake that struck Mexico on September 19, 2017. Utilized Google Drive and shared files to streamline communication and resource management across a large team, ensuring timely support by distributing rescue tools, water, food and supplies to affected citizens."
  }
]

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Volunteer and Social Service Internship</CardTitle>
        </CardHeader>
        <CardContent>
          {volunteerExperiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">{exp.organization} | {exp.location}</p>
              <p className="text-sm text-muted-foreground">{exp.date}</p>
              {exp.responsibilities ? (
                <ul className="list-disc list-inside mt-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm mt-2">{exp.description}</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

