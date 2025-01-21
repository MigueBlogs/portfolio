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
    ],
    images: [ "/media/metaplay.jpg", 
              "/media/metaplay2.jpg",
              "/media/metaplay3.jpg",
              "/media/metaplay4.jpg",
              "/media/metaplay5.jpg",
              "/media/metaplay6.jpg"]
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
      "Built cutting-edge programs based on detailed workflow charts and diagrams.",
      "Banking Olympics: Triathlon"
    ],
    images: [ "/media/banregio.jpeg", 
              "/media/banregio2.jpeg",
             // "/media/banregio3.jpeg",
              "/media/banregio4.jpeg",
              //"/media/banregio5.jpeg",
              "/media/banregio6.jpeg",
              //"/media/banregio7.jpeg",
              "/media/banregio8.jpeg",]
  },
  {
    title: "Head of program and project development department",
    company: "National Civil Defense",
    location: "Mexico City, Mexico",
    date: "June 2019 - December 2021",
    year: 2019,
    description: [
      "Developer of web portals and online applications focused on providing information to the population and improving the country's resilience to disturbing events of natural origin.",
      "Developed 30+ GIS-based mapping systems to provide real-time disaster prevention information, empowering citizens with actionable insights for enhanced safety.",
      "Increased public engagement by driving over 2.3 million visits to the official National Civil Defense website, providing preparedness tools.",
      "Facilitated the registry portal of 500,000+ buildings for Mexico’s National Earthquake Drill, enhancing nationwide disaster readiness.",

    ],
    images: ["/media/CNPC1.jpg", "/media/CNPC.jpg", "/media/CNPC2.jpg"]
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
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);
  const [currentCarouselImages, setCurrentCarouselImages] = useState<string[]>([]);
  const [isManualSelection, setIsManualSelection] = useState(false); // Control para selección manual
  const [isScrolling, setIsScrolling] = useState(false); // Control para el estado del scroll
  const timelineRef = useRef<HTMLUListElement>(null);
  const isAnimating = useRef(false); // Bandera para el estado del scroll animado


  // Función para desplazar suavemente al año seleccionado
  const scrollToYear = (year: number) => {
    // const element = document.querySelector(`[data-year="${year}"]`);
    // if (element) {
    //   element.scrollIntoView({ behavior: "smooth", block: "start" });
    // }

    const element = document.querySelector(`[data-year="${year}"]`);
    if (element) {
      isAnimating.current = true; // Marca el scroll como animado
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Establece un tiempo límite para desactivar la animación
      setTimeout(() => {
        isAnimating.current = false; // Desmarca la animación
      }, 1000); // Ajusta el tiempo según la duración de tu animación
    }
  };

  // Función para manejar el click en un año del timeline
  const handleYearClick = (year: number) => {
    setActiveYear(year);
    setIsManualSelection(true); // Indica que el año fue seleccionado manualmente
    scrollToYear(year);

    //setTimeout(() => {setIsManualSelection(false); }, 2000);

  };

  // Función para manejar el clic en una imagen
  const handleImageClick = (images: string[], index: number) => {
    setCurrentCarouselImages(images);
    setExpandedImageIndex(index);
  };

  // Función para cerrar el carrusel
  const closeCarousel = () => {
    setExpandedImageIndex(null);
  };

  // Función para ir a la imagen anterior en el carrusel
  const prevImage = () => {
    if (expandedImageIndex !== null && expandedImageIndex > 0) {
      setExpandedImageIndex(expandedImageIndex - 1);
    }
  };

  // Función para ir a la imagen siguiente en el carrusel
  const nextImage = () => {
    if (expandedImageIndex !== null && expandedImageIndex < currentCarouselImages.length - 1) {
      setExpandedImageIndex(expandedImageIndex + 1);
    }
  };

  // Detectar cuando se hace scroll manual
  const handleScroll = () => {
    if (!isAnimating.current) {
      if (!isManualSelection) {
        //console.log("Scrolling");
        setIsScrolling(true); // Indicar que estamos haciendo scroll
      }else{
        setIsManualSelection(false); // Indicar que el scroll fue manual
      }
    } 
  };

  // Actualiza el año activo usando IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isManualSelection) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const year = entry.target.getAttribute("data-year");
              if (year) setActiveYear(parseInt(year));
            }
          });
        }
      },
      { threshold: [1.0] } // Detecta el 100% visible
    );

    const elements = document.querySelectorAll(".experience-card");
    elements.forEach((el) => observer.observe(el));



    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isManualSelection]); // Cuando cambia `isManualSelection`, reinicia el efecto

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
                className={`cursor-pointer transition-colors duration-300 ${activeYear === exp.year ? "text-primary font-bold" : "text-muted-foreground"}`}
                onClick={() => handleYearClick(exp.year)} // Cambia aquí la función de onClick
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
              <div className="grid grid-cols-3 gap-2 mt-4">
                {exp.images && exp.images.map((image, i) => (
                  <div key={i} className="relative">
                    <img
                      src={image}
                      alt={`Experience image ${i + 1}`}
                      className="cursor-pointer object-cover w-full h-24"
                      onClick={() => handleImageClick(exp.images, i)}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Carousel */}
      {expandedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeCarousel}
          >
            ✖
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={prevImage}
          >
            ◀
          </button>
          <img
            src={currentCarouselImages[expandedImageIndex]}
            alt="Expanded"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute right-4 text-white text-2xl"
            onClick={nextImage}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}