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
  {
    title: "Head of program and project development department",
    company: "National Civil Defense",
    location: "Mexico City, Mexico",
    date: "February 2019 - December 2021",
    description: [
      "Led the development of web portals and online applications aimed at delivering critical information to the public and enhancing national resilience to natural disasters.",
      "Directed the design and implementation of GIS-based mapping systems for data analysis, risk assessment, and disaster prevention.",
      "Backend and REST API development for an open-source data project of civic defense systems."
    ]
  },
  {
    title: "IT assistant",
    company: "Enlight Mexico",
    location: "Mexico City, Mexico",
    date: "July 2018 - February 2019",
    description: [
      "Provided support and data analysis for internal web platforms and systems managing the company's core data.",
      "Assisted in troubleshooting and resolving Level 1 issues, effectively escalating problems to the appropriate teams when needed.",
      "Focused on error prevention and bug detection in mobile applications (Android and iOS).",
      "Ensured optimal performance and user experience across mobile applications."
    ]
  },
  {
    title: "IT support technician",
    company: "Coface",
    location: "Mexico City, Mexico",
    date: "January 2016 - July 2017",
    description: [
      "Provided first-level technical support to end users, offering remote assistance and troubleshooting.",
      "Managed equipment procurement and warranty processes.",
      "Utilized the company intranet to handle IT-related requests and incidents.",
      "Performed basic management of cabling, switches, and servers at the site.",
      "Supported national and international video conferences, ensuring communications."
    ]
  },
  {
    title: "Web development intern",
    company: "Virtual Corporation",
    location: "Mexico City, Mexico",
    date: "January 2015 - August 2015",
    description: [
      "Developed custom websites tailored to client needs using primarily Adobe technologies (Muse), focusing on creating user-friendly, visually engaging web solutions.",
      "Led video editing and production projects to enhance digital content.",
      "Designed an interactive 360° virtual tour using web technologies, showcasing immersive, interactive user experiences through panoramic photos."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Quality factor",
    location: "Mexico City, Mexico",
    date: "July 2013 - November 2014",
    description: [
      "Maintenance of the main website, development of additional pages of the company (HTML, CSS, JavaScript).",
      "Management of SQL databases.",
      "Capture of data in Excel formats for subsequent analysis using graphs and tables.",
      "Management of social networks: Facebook and Twitter of the company."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.company} | {exp.location}</p>
                <p className="text-sm text-muted-foreground">{exp.date}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

