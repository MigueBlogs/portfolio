"use client"

import { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "CEO - Startup",
    company: "MetaPlay Studios",
    location: "Mexico City, Mexico",
    date: "November 2023 - Current",
    year: 2023,
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
    year: 2022,
    description: [
      "Developed Java microservices, REST APIs, and backend Core solutions to enhance banking operations.",
      "Designed and deployed systems using Docker, Jenkins, Kubernetes, and Atlassian Suite tools.",
      "Conducted incident analysis and implemented resolutions for complex technical issues.",
      "Built and tested new features, ensuring robust performance through post-implementation QA testing.",
      "Led Scrum ceremonies as a Scrum Master, improving team collaboration and delivery timelines.",
      "Analyzed user requirements and created detailed program specifications to optimize workflows.",
      "Delivered high-quality code through comprehensive reviews, maintaining software standards.",
      "Senior Programmer Analyst Java, microservices, backend Core, SAP and REST services, Docker, Jenkins, ApacheMaven, Atlassian Suite, Git, Kubernetes, Asana, Slack, Kafka",
      "Incident analysis and resolution to related issues, builder new features, QA tester and post implementation testing",
      "Conducted code reviews to maintain high-quality software development standards.",
      "Analyzed user requirements to create detailed program specifications.",
      "Built cutting-edge programs based on detailed workflow charts and diagrams."
    ]
  },
  {
    title: "Head of program and project development department",
    company: "National Civil Defense",
    location: "Mexico City, Mexico",
    date: "June 2019 - December 2021",
    year: 2019,
    description: [
      "Developer of web portals and online applications focused on providing information to the population and improving the country's resilience to disturbing events of natural origin."
    ]
  },
  {
    title: "IT assistant",
    company: "Enlight Mexico",
    location: "Mexico City, Mexico",
    date: "July 2018 - February 2019",
    year: 2018,
    description: [
      "Support and analysis of data in the internal web platforms/systems that handle the company's primary data.",
      "Solution and channeling of level 1 problems to subsequent areas, as well as error prevention and bug detection in applications for mobile devices, Android and iOS."
    ]
  },
  {
    title: "Social Service - Pemex",
    company: "Pemex",
    location: "Mexico City, Mexico",
    date: "July 2017 - February 2018",
    year: 2017,
    description: [
      "Maintenance of workstations, installation of the Operating System, resolution, attention and escalation of tickets.",
      "PC formatting, as well as loading internal systems.",
      "Administrative assistance.",
      "Attention to requirements via telephone and remotely.",
      "Connection of equipment and removal of guards."
    ]
  },
  {
    title: "IT support technician",
    company: "Coface",
    location: "Mexico City, Mexico",
    date: "January 2016 - July 2017",
    year: 2016,
    description: [
      "First level technical support to end users.",
      "Remote technical support.",
      "Purchase of equipment and guarantees.",
      "Intranet for handling requirements and incidents related to IT.",
      "Basic management of cabling, switch and server of the company (site).",
      "Equipment formatting.",
      "National and international video conference support."
    ]
  },
  {
    title: "Web development intern",
    company: "Virtual Corporation",
    location: "Mexico City, Mexico",
    date: "January 2015 - August 2015",
    year: 2015,
    description: [
      "Development of web pages for different clients of the company, mainly with Adobe technologies (Muse).",
      "Video editing and production assistant."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Quality factor",
    location: "Mexico City, Mexico",
    date: "July 2013 - November 2014",
    year: 2013,
    description: [
      "Maintenance of the main website, development of additional pages of the company (HTML, CSS, JavaScript).",
      "Management of SQL databases (Update of information).",
      "Capture of data in Excel formats for subsequent analysis using graphs and tables.",
      "Management of social networks: Facebook and Twitter of the company."
    ]
  }
]

export default function Experience() {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const timelineRef = useRef<HTMLUListElement>(null);

  // Actualiza el año activo usando IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute("data-year");
            if (year) setActiveYear(parseInt(year));
          }
        });
      },
      { threshold: 0.5 } // Detecta el 50% visible
    );

    const elements = document.querySelectorAll(".experience-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToYear = (year: number) => {
    const element = document.querySelector(`[data-year="${year}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="container mx-auto p-4 page-transition flex">
      {/* Timeline */}
      <div className="w-1/4 pr-8">
        <div className="sticky top-20">
          <ul
            ref={timelineRef}
            className="space-y-8 relative flex flex-col items-start"
          >
            {experiences.map((exp, index) => (
              <li
                key={index}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeYear === exp.year ? "text-primary font-bold" : "text-muted-foreground"
                }`}
                onClick={() => scrollToYear(exp.year)}
              >
                <span>{exp.year}</span>
              </li>
            ))}
            {/* Línea animada */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 hidden md:block"
              style={{ height: `${experiences.length * 100}px` }}
            >
              <div
                className="absolute bg-primary w-1 transition-all duration-300"
                style={{
                  height: `${
                    activeYear
                      ? ((experiences.findIndex((exp) => exp.year === activeYear) + 1) /
                          experiences.length) *
                        100
                      : 0
                  }%`,
                }}
              />
            </div>
          </ul>
        </div>
      </div>

      {/* Cards */}
      <div className="w-3/4 space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="experience-card"
            data-year={exp.year}
          >
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {exp.company} | {exp.location}
              </p>
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
  );
}

