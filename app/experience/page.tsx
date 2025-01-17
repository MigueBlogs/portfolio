import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "CEO - Startup",
    company: "MetaPlay Studios",
    location: "Mexico City, Mexico",
    date: "November 2023 - Current",
    description: [
      "Developed and launched a VR-based seismic simulator, available for Android and iOS, promoting disaster preparedness through immersive technology.",
      "Conducted real-world testing with high school students in a classroom setting in Mexico, yielding satisfactory results and valuable user insights.",
      "Developed an immersive VR-based earthquake simulator using Unity and C++, integrated with ironSource to generate revenue through advertisements.",
      "Designed and implemented a platform connecting Chevening Alumni with scholarship applicants to refine application essays and foster mentorship.",
      "Promoted collaboration and knowledge-sharing within the Chevening community through innovative web-based solutions.",
      "Coordinated a team of four essay reviewers, supporting 28 applicants from 12 countries.",
      "Gained experience in leading small teams and managing cross-functional collaboration, including developers, designers, and communicators.",
      "Cultivated a leadership style focused on innovation, problem-solving, and team motivation.",
      "Gained experience in protecting intellectual property rights, safeguarding the codebase and associated digital assets."
    ]
  },
  {
    title: "Senior Programmer Analyst (DevOps)",
    company: "Banregio",
    location: "Mexico City, Mexico",
    date: "January 2022 - Current",
    description: [
      "Developed Java microservices, REST APIs, and backend Core solutions to enhance banking operations.",
      "Designed and deployed systems using Docker, Jenkins, Kubernetes, and Atlassian Suite tools.",
      "Conducted incident analysis and implemented resolutions for complex technical issues.",
      "Built and tested new features, ensuring robust performance through post-implementation QA testing.",
      "Led Scrum ceremonies as a Scrum Master, improving team collaboration and delivery timelines.",
      "Analyzed user requirements and created detailed program specifications to optimize workflows.",
      "Delivered high-quality code through comprehensive reviews, maintaining software standards."
    ]
  },
  // Add more experiences here
]

export default function Experience() {
  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{exp.company} | {exp.location}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

