"use client"

import { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '@/components/language-provider'

const experiences = [
  {
    title: "CEO - MetaPlay (Startup)",
    company: "MetaPlay",
    location: "Mexico City, Mexico",
    date: "November 2023 - Current",
    year: 2023,
    description: [
      "Founded and lead MetaPlay as CEO, directing product strategy, development, and launch operations.",
      "Launched Mr. Cubic on October 18, 2025, for iOS and Android as a free 3D strategy puzzle game.",
      "Developed and shipped immersive VR products, including a seismic preparedness simulator with real-world classroom testing.",
      "Built and scaled CheveReview, which currently supports more than 30 active reviewers (Cheveners).",
      "Coordinated cross-functional collaboration across engineering, design, QA, and communication to deliver releases faster.",
      "Strengthened IP and codebase governance to protect digital assets and ensure long-term product sustainability."
    ],
    images: [ "/media/MetaPlay_logo.png",
              "/media/MrCubic/bannerMrCubic.png",
              "/media/metaplay.jpg", 
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

const experienceEsTranslations: Record<string, string> = {
  "CEO - MetaPlay (Startup)": "CEO - MetaPlay (Startup)",
  "Senior Programmer Analyst (DevOps)": "Analista Programador Sénior (DevOps)",
  "Head of program and project development department": "Jefe del departamento de desarrollo de programas y proyectos",
  "IT assistant": "Asistente de TI",
  "Social Service - Pemex": "Servicio Social - Pemex",
  "IT support technician": "Técnico de soporte TI",
  "Web development intern": "Practicante de desarrollo web",
  "Software Engineering Intern": "Practicante de Ingeniería de Software",
  "National Civil Defense": "Defensa Civil Nacional",
  "Mexico City, Mexico": "Ciudad de México, México",
  "November 2023 - Current": "Noviembre 2023 - Actual",
  "January 2022 - Current": "Enero 2022 - Actual",
  "June 2019 - December 2021": "Junio 2019 - Diciembre 2021",
  "July 2018 - February 2019": "Julio 2018 - Febrero 2019",
  "July 2017 - February 2018": "Julio 2017 - Febrero 2018",
  "January 2016 - July 2017": "Enero 2016 - Julio 2017",
  "January 2015 - August 2015": "Enero 2015 - Agosto 2015",
  "July 2013 - November 2014": "Julio 2013 - Noviembre 2014",
  "Founded and lead MetaPlay as CEO, directing product strategy, development, and launch operations.": "Fundé y lideré MetaPlay como CEO, dirigiendo estrategia de producto, desarrollo y operaciones de lanzamiento.",
  "Launched Mr. Cubic on October 18, 2025, for iOS and Android as a free 3D strategy puzzle game.": "Lancé Mr. Cubic el 18 de octubre de 2025 para iOS y Android como un juego gratuito de puzzle estratégico 3D.",
  "Developed and shipped immersive VR products, including a seismic preparedness simulator with real-world classroom testing.": "Desarrollé y publiqué productos inmersivos de realidad virtual, incluyendo un simulador de preparación sísmica con pruebas reales en aula.",
  "Built and scaled CheveReview, which currently supports more than 30 active reviewers (Cheveners).": "Construí y escalé CheveReview, que actualmente cuenta con más de 30 revisores activos (Cheveners).",
  "Coordinated cross-functional collaboration across engineering, design, QA, and communication to deliver releases faster.": "Coordiné colaboración cross-funcional entre ingeniería, diseño, QA y comunicación para acelerar entregas.",
  "Strengthened IP and codebase governance to protect digital assets and ensure long-term product sustainability.": "Fortalecí la gobernanza de propiedad intelectual y del código para proteger activos digitales y asegurar sostenibilidad a largo plazo.",
  "Developed Java microservices, REST APIs, and backend Core solutions to enhance banking operations.": "Desarrollé microservicios Java, APIs REST y soluciones backend Core para mejorar operaciones bancarias.",
  "Designed and deployed systems using Docker, Jenkins, Kubernetes, and Atlassian Suite tools.": "Diseñé y desplegué sistemas usando Docker, Jenkins, Kubernetes y herramientas de Atlassian Suite.",
  "Conducted incident analysis and implemented resolutions for complex technical issues.": "Realicé análisis de incidentes e implementé soluciones para problemas técnicos complejos.",
  "Built and tested new features, ensuring robust performance through post-implementation QA testing.": "Construí y probé nuevas funcionalidades, asegurando rendimiento robusto con pruebas QA posteriores a implementación.",
  "Led Scrum ceremonies as a Scrum Master, improving team collaboration and delivery timelines.": "Lideré ceremonias Scrum como Scrum Master, mejorando colaboración del equipo y tiempos de entrega.",
  "Analyzed user requirements and created detailed program specifications to optimize workflows.": "Analicé requerimientos de usuario y creé especificaciones detalladas para optimizar flujos de trabajo.",
  "Delivered high-quality code through comprehensive reviews, maintaining software standards.": "Entregué código de alta calidad mediante revisiones integrales, manteniendo estándares de software.",
  "Senior Programmer Analyst Java, microservices, backend Core, SAP and REST services, Docker, Jenkins, ApacheMaven, Atlassian Suite, Git, Kubernetes, Asana, Slack, Kafka": "Analista Programador Senior en Java, microservicios, backend Core, servicios SAP y REST, Docker, Jenkins, ApacheMaven, Atlassian Suite, Git, Kubernetes, Asana, Slack y Kafka.",
  "Incident analysis and resolution to related issues, builder new features, QA tester and post implementation testing": "Análisis y resolución de incidentes relacionados, construcción de nuevas funcionalidades, pruebas QA y pruebas post implementación.",
  "Conducted code reviews to maintain high-quality software development standards.": "Realicé revisiones de código para mantener altos estándares de desarrollo de software.",
  "Built cutting-edge programs based on detailed workflow charts and diagrams.": "Construí programas avanzados basados en diagramas y flujos de trabajo detallados.",
  "Banking Olympics: Triathlon": "Olimpiadas Bancarias: Triatlón",
  "Developer of web portals and online applications focused on providing information to the population and improving the country's resilience to disturbing events of natural origin.": "Desarrollador de portales web y aplicaciones en línea enfocadas en informar a la población y mejorar la resiliencia del país ante eventos naturales.",
  "Developed 30+ GIS-based mapping systems to provide real-time disaster prevention information, empowering citizens with actionable insights for enhanced safety.": "Desarrollé más de 30 sistemas cartográficos GIS para brindar información preventiva en tiempo real y fortalecer la seguridad ciudadana.",
  "Increased public engagement by driving over 2.3 million visits to the official National Civil Defense website, providing preparedness tools.": "Aumenté el alcance público al impulsar más de 2.3 millones de visitas al portal oficial de Defensa Civil Nacional con herramientas de preparación.",
  "Facilitated the registry portal of 500,000+ buildings for Mexico’s National Earthquake Drill, enhancing nationwide disaster readiness.": "Facilité el portal de registro de más de 500,000 inmuebles para el Simulacro Nacional, mejorando la preparación ante desastres.",
  "Support and analysis of data in the internal web platforms/systems that handle the company's primary data.": "Soporte y análisis de datos en plataformas y sistemas web internos que gestionaban información principal de la empresa.",
  "Solution and channeling of level 1 problems to subsequent areas, as well as error prevention and bug detection in applications for mobile devices, Android and iOS.": "Resolución y canalización de problemas de nivel 1 a áreas correspondientes, prevención de errores y detección de bugs en apps móviles Android e iOS.",
  "Maintenance of workstations, installation of the Operating System, resolution, attention and escalation of tickets.": "Mantenimiento de estaciones de trabajo, instalación de sistema operativo, atención y escalamiento de tickets.",
  "PC formatting, as well as loading internal systems.": "Formateo de equipos y carga de sistemas internos.",
  "Administrative assistance.": "Asistencia administrativa.",
  "Attention to requirements via telephone and remotely.": "Atención de requerimientos vía telefónica y remota.",
  "Connection of equipment and removal of guards.": "Conexión de equipos y retiro de resguardos.",
  "First level technical support to end users.": "Soporte técnico de primer nivel a usuarios finales.",
  "Remote technical support.": "Soporte técnico remoto.",
  "Purchase of equipment and guarantees.": "Compra de equipo y gestión de garantías.",
  "Intranet for handling requirements and incidents related to IT.": "Uso de intranet para atención de requerimientos e incidentes de TI.",
  "Basic management of cabling, switch and server of the company (site).": "Gestión básica de cableado, switches y servidor del sitio.",
  "Equipment formatting.": "Formateo de equipos.",
  "National and international video conference support.": "Soporte de videoconferencias nacionales e internacionales.",
  "Development of web pages for different clients of the company, mainly with Adobe technologies (Muse).": "Desarrollo de páginas web para distintos clientes, principalmente con tecnologías Adobe (Muse).",
  "Video editing and production assistant.": "Asistente de edición y producción de video.",
  "Maintenance of the main website, development of additional pages of the company (HTML, CSS, JavaScript).": "Mantenimiento del sitio principal y desarrollo de paginas adicionales (HTML, CSS, JavaScript).",
  "Management of SQL databases (Update of information).": "Gestión de bases de datos SQL (actualización de información).",
  "Capture of data in Excel formats for subsequent analysis using graphs and tables.": "Captura de datos en formatos Excel para análisis posterior con gráficas y tablas.",
  "Management of social networks: Facebook and Twitter of the company.": "Gestión de redes sociales de la empresa: Facebook y Twitter."
}

export default function Experience() {
  const { t, language } = useLanguage()

  const tr = (text: string) => (language === "en" ? text : (experienceEsTranslations[text] || text))
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);
  const [currentCarouselImages, setCurrentCarouselImages] = useState<string[]>([]);
  const [isManualSelection, setIsManualSelection] = useState(false); // Control para selección manual
  const timelineRef = useRef<HTMLUListElement>(null);
  const isAnimating = useRef(false); // Bandera para el estado del scroll animado


  // Función para desplazar suavemente al año seleccionado
  const scrollToYear = (year: number) => {
    const element = document.querySelector(`[data-year="${year}"]`);
    if (element) {
      isAnimating.current = true; // Marca el scroll como animado

      // Calcula la posición ajustada restando 80px
      const offset = 80; // Ajusta este valor si es necesario
      const yPosition = element.getBoundingClientRect().top + window.scrollY - offset;

      // Desplaza suavemente a la posición ajustada
      window.scrollTo({ top: yPosition, behavior: "smooth" });

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
        //setIsScrolling(true); // Indicar que estamos haciendo scroll
      } else {
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

  // Handle ESC key to close carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedImageIndex !== null) {
        closeCarousel();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedImageIndex]);

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">{t("Experience", "Experiencia")}</h1>
      <div className="flex">
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
                onClick={() => handleYearClick(exp.year)}
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
            className={`experience-card ${activeYear === exp.year ? "border-2 border-primary shadow-lg" : ""}`}
            data-year={exp.year}
          >
            <CardHeader>
              <CardTitle>{tr(exp.title)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {tr(exp.company)} | {tr(exp.location)}
              </p>
              <p className="text-sm text-muted-foreground mb-4">{tr(exp.date)}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{tr(item)}</li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {exp.images && exp.images.map((image, i) => (
                  <div key={i} className="relative">
                    <img
                      src={image}
                      alt={`${t("Experience image", "Imagen de experiencia")} ${i + 1}`}
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
            aria-label={t("Close", "Cerrar")}
          >
            ✖
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={prevImage}
            aria-label={t("Previous image", "Imagen anterior")}
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
            aria-label={t("Next image", "Siguiente imagen")}
          >
            ▶
          </button>
        </div>
      )}
      </div>
    </div>
  );
}