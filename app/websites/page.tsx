"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import { url } from 'inspector'

const websites = [
  {
    title: "PREPARADOS Web Portal",
    url: "http://www.preparados.cenapred.unam.mx/",
    image: "/media/preparados.jpg",
    description: "A web portal that integrates information about the actions of the National Civil Protection System. It includes blogs directed at the population, covering prevention, assistance, and recovery actions in response to natural and anthropogenic phenomena. It serves as an access point for tools for spatial data analysis, directory consultations, and event registration."
  },
  {
    title: "Cyclone Season",
    url: "http://www.preparados.cenapred.unam.mx/apps/TemporadaCiclones2020",
    image: "/media/CNPC.jpg",
    description: "A tool for visualizing active tropical cyclones in the Pacific and Atlantic Oceans, providing information on predicted trajectories, wind influence zones, satellite images, and an analysis tool for exposed systems (population, housing, neighborhoods, airports, etc.)."
  },
  {
    title: "Early Warning System for Tropical Cyclones (SIAT-CT)",
    url: "http://www.preparados.cenapred.unam.mx/SIAT-CT/",
    image: "/media/siat-ct.jpg",
    description: "Designed to enable the generation and consultation of bulletins issued by the General Directorate of Civil Protection during tropical cyclones that could potentially affect people and their property in the country. It includes forecasts, recommendations, and official information sources."
  },
  {
    title: "CENACOM Reporting System",
    url: "http://www.preparados.cenapred.unam.mx/apps/pruebas/reportesCENACOM/",
    image: "/media/CENACOM.jpg",
    description: "Designed for registering incidents in civil protection to allow the General Directorate to closely monitor events nationwide."
  },
  {
    title: "Evacuation Routes for the Volcán de Fuego",
    //url: "http://www.preparados.cenapred.unam.mx/apps/rutasvolcandefuego/",
    url: "https://www.gob.mx/sspc/prensa/la-cnpc-actualiza-el-plan-del-volcan-de-fuego-en-los-estados-de-colima-y-jalisco",
    image: "/media/volcan_de_fuego.jpg",
    description: "Provides video and photographic records of evacuation routes defined by the State Civil Protection Units of Jalisco and Colima for the Volcán de Fuego in case of a volcanic eruption."
  },
  {
    title: "Evacuation Routes for the Popocatépetl Volcano",
    url: "http://www.preparados.cenapred.unam.mx/apps/rutasvolcan/",
    image: "/media/popocatepetl.jpg",
    description: "Includes video and photographic records of evacuation routes defined by the State Civil Protection Units of Puebla, Tlaxcala, Morelos, and the State of Mexico. It also incorporates standardized response plans for each state in case of a volcanic eruption or alert level change for the Popocatépetl Volcano."
  },
  {
    title: "Volunteer Groups",
    url: "http://www.preparados.cenapred.unam.mx/apps/Voluntarios/",
    image: "/media/volunteer_groups.jpg",
    description: "Facilitates the registration, monitoring, and approval of the National Civil Protection Coordination's Volunteer Groups. It provides a channel for government-society communication and coordination, promoting training and participation in specialized civil protection activities such as rescue, fire-fighting, shelter management, emergency medical services, and more."
  },
  {
    title: "Temporary Shelters",
    url: "http://www.preparados.cenapred.unam.mx/apps/RefugiosTemporales/",
    image: "/media/temporary_shelters.jpg",
    description: "This tool integrates the national database of Temporary Shelters identified by State Civil Protection Units for activation during emergencies. It includes location, capacity, and photographic evidence of the facilities to assess their condition."
  },
  {
    title: "Simulacro Nacional",
    url: "https://simulacronacional.sspc.gob.mx/simulacronacional2024/",
    image: "/media/macrosimulation.jpg",
    description: "This platform enables the registration of buildings wishing to participate in nationally organized Earthquake drills. Participants can also download a certificate of participation after completing the exercise. Each federal entity can visualize statistics and access general registration data."
  },
  {
    title: "National Award 2020",
    url: "https://www.gob.mx/cenapred/articulos/premio-nacional-de-proteccion-civil-2020",
    image: "/media/national_award.jpg",
    description: "Portal for registering nominations for the 2020 National Civil Protection Award."
  },
  {
    title: "2019 Civil Protection Race",
    url: "https://www.gob.mx/sspc/prensa/se-realiza-con-exito-la-carrera-de-proteccion-civil-2019-para-conmemorar-los-sismos-de-1985-y-2017",
    image: "/media/civil_protection_race.jpg",
    description: "Portal for competitors to register for the 2019 National Civil Protection Race."
  },
  {
    title: "Emergency Directory",
    url: "http://www.preparados.cenapred.unam.mx/apps/emergencias/",
    //image: "/media/emergency_directory.jpg",
    image: "/placeholder.svg",
    description: "Allows users to search for municipal and state Civil Protection representatives nationwide through an interactive map, postal code, or neighborhood."
  }
]

const gisMaps = [
  // {
  //   title: "Situational Maps",
  //   url: "http://www.preparados.cenapred.unam.mx/catalogo-mapas-situacionales",
  //   image: "/media/situational_maps.jpg",
  //   description: "Generated by the General Directorate of Civil Protection as tools for information analysis during emergencies or events occurring in the country that directly impact the population or their properties."
  // },
  {
    title: "Situational Map for Winter Season",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=8d751b0360f84e5d94d02359c9fdcc6f",
    image: "/media/winter_season.jpg",
    description: "Displays the snowfall hazard index at the municipal level to identify areas with greater vulnerability to low temperatures (information provided by Cenapred). November 2019."
  },
  {
    title: "Floods in Tabasco",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=6a43d98ef626425e8b61cd586af6cf12",
    image: "/media/floods_tabasco.jpg",
    description: "Created for the management and coordination of the emergency caused by atypical rains and floods in the state. It includes information on flooded areas, affected localities, satellite images, drone overflight images, and temporary shelters. November 2020."
  },
  {
    title: "Storm Surge Exposure (Tropical Cyclone Delta)",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=42f5dac0553348bca6b23e5579533575",
    image: "/media/storm_surge_delta.jpg",
    description: "Generated to report on the evolution of Tropical Cyclone Delta and its path through national territory, identifying the most vulnerable areas. It integrates the location of activated temporary shelters and the phenomenon's trajectory. October 2020."
  },
  {
    title: "Situational Map for Tropical Cyclone Narda",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=9de916331d9849e29fa340458500440b",
    image: "/media/tropical_cyclone_narda.jpg",
    description: "Displays areas affected by flooding due to the passage of Tropical Storm Narda. October 2020."
  },
  {
    title: "Buildings Registered for the 2020 and 2021 Nationwide Drill",
    url: "https://simulacronacional.sspc.gob.mx/simulacronacional2024/mapaInmuebles.htmll",
    image: "/media/nationwidedrill.jpg",
    description: "A map showing buildings registered for the nationwide drill exercise. January 2020."
  },
  {
    title: "Situational Map for Tropical Cyclone Raymond",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=32953800bf6a4280adedb38c3d42a79b",
    image: "/media/tropical_cyclone_raymond.jpg",
    description: "Integrates critical flood points to be monitored during the passage of Tropical Cyclone Raymond, identifying temporary shelters, urban areas, and the phenomenon’s evolution. November 2019."
  },
  {
    title: "Situational Map for Day of the Dead",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=d0b88bf49f464487881b16bffc62216e",
    image: "/media/day_of_the_dead.jpg",
    description: "Identifies the locations of cemeteries across the country to avoid large gatherings of people during this date. October 2019 and October 2020."
  },
  {
    title: "Situational Map for Tropical Cyclone Priscilla",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=3da789a2e8c44f5fae831ebc6a0a2f70",
    image: "/media/tropical_cyclone_priscilla.jpg",
    description: "Tool created following the impact of Hurricane Lorena, integrating information on temporary shelters, flood zones, urban localities, and the phenomenon’s evolution. October 2019."
  },
  {
    title: "Situational Map for Potential Tropical Cyclone 17-E",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=426f94502f454be8b428118fe5b2dfed",
    image: "/media/potential_tropical_cyclone_17e.jpg",
    description: "Displays critical flood points identified by the National Water Commission and Cenapred, as well as landslide-prone and urban areas that could be affected by the tropical cyclone’s passage. October 2019."
  },
  {
    title: "Situational Map for Tropical Cyclone Lorena",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=dbb2473eefb14772be8dc5307a1e98d0",
    image: "/media/tropical_cyclone_lorena.jpg",
    description: "Situational map generated after the impact of Hurricane Lorena, showing temporary shelters and states potentially affected, along with the phenomenon's evolution. September 2019."
  }
]

const firstSteps = [
  {
    title: "Renovación Sacerdotal",
    url: "https://www.centrologos.org/",
    image: "/media/renovacion_sacerdotal.jpg",
    description: "Virtual course for priestly renewal, primarily aimed at priests worldwide, sponsored by Centro Sacerdotal Logos. Developed using Adobe Muse and other software for creating 360-degree image tours featured on the website."
  },
  {
    title: "La Gran Avenida",
    url: "http://www.lagranavenida.com.mx/index.html",
    image: "/media/la_gran_avenida.jpg",
    description: "For La Gran Avenida, a simple HTML-based website was developed to publish the company's digital magazine. Adobe DreamWeaver was the tool used to build the website."
  },
  {
    title: "Distribuidora Nacional de Consumibles",
    url: "http://dnc.16mb.com/index.html",
    image: "/media/dnc.jpg",
    description: "Basic website for a small business client dedicated to selling consumables in Mexico City. Equipped with basic functionalities using Adobe Muse."
  },
  {
    title: "ABK Lighting S.A. de C.V.",
    url: "http://abk.mx/index.html",
    image: "/media/abk.jpg",
    description: "Designed to showcase the potential of a company by highlighting its services, clients, products, and galleries, aiming to persuade visitors. This project was created using Adobe Muse."
  },
  {
    title: "Encar Muebles",
    url: "https://www.encarmuebles.com/",
    image: "/media/encar_muebles.jpg",
    description: "A furniture store with over 50 items for which a digital catalog was created to showcase its products, bringing them closer to clients without the need to visit a physical branch. Developed using Adobe Muse."
  }
]

export default function Websites() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [gisIndex, setGisIndex] = useState(0)
  const [firstStepsIndex, setFirstStepsIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % websites.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + websites.length) % websites.length)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
  }

  const nextGisSlide = () => {
    setGisIndex((prevIndex) => (prevIndex + 1) % gisMaps.length)
  }

  const prevGisSlide = () => {
    setGisIndex((prevIndex) => (prevIndex - 1 + gisMaps.length) % gisMaps.length)
  }

  const handleGisThumbnailClick = (index: number) => {
    setGisIndex(index)
  }

  const nextFirstStepsSlide = () => {
    setFirstStepsIndex((prevIndex) => (prevIndex + 1) % firstSteps.length)
  }

  const prevFirstStepsSlide = () => {
    setFirstStepsIndex((prevIndex) => (prevIndex - 1 + firstSteps.length) % firstSteps.length)
  }

  const handleFirstStepsThumbnailClick = (index: number) => {
    setFirstStepsIndex(index)
  }

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Web Development Projects</h1>
      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[400px] flex items-center justify-center">
            <img
              src={websites[currentIndex].image || "/placeholder.svg"}
              alt={websites[currentIndex].title}
              className="max-h-full transition-opacity duration-500 ease-in-out opacity-100"
              style={{ objectFit: 'contain' }}
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button variant="outline" size="icon" onClick={prevSlide}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{websites[currentIndex].title}</h2>
            <p className="mb-4">{websites[currentIndex].description}</p>
            <a href={websites[currentIndex].url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
              <Globe className="mr-2 h-4 w-4" /> Visit Website
            </a>
          </div>
          <div className="flex justify-center mt-4 overflow-x-auto">
            <div className="flex space-x-2">
              {websites.map((website, index) => (
                <img
                  key={index}
                  src={website.image}
                  alt={website.title}
                  className={`w-16 h-16 object-cover cursor-pointer border-2 ${currentIndex === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <h1 className="text-3xl font-bold mb-6 mt-12">Geographic Information System Maps</h1>
      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[400px] flex items-center justify-center">
            <img
              src={gisMaps[gisIndex]?.image || "/placeholder.svg"}
              alt={gisMaps[gisIndex]?.title}
              className="max-h-full transition-opacity duration-500 ease-in-out opacity-100"
              style={{ objectFit: 'contain' }}
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button variant="outline" size="icon" onClick={prevGisSlide}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextGisSlide}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{gisMaps[gisIndex]?.title}</h2>
            <p className="mb-4">{gisMaps[gisIndex]?.description}</p>
            <a href={gisMaps[gisIndex]?.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
              <Globe className="mr-2 h-4 w-4" /> Visit Website
            </a>
          </div>
          <div className="flex justify-center mt-4 overflow-x-auto">
            <div className="flex space-x-2">
              {gisMaps.map((map, index) => (
                <img
                  key={index}
                  src={map.image}
                  alt={map.title}
                  className={`w-16 h-16 object-cover cursor-pointer border-2 ${gisIndex === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => handleGisThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <h1 className="text-3xl font-bold mb-6 mt-12">First Steps</h1>
      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[400px] flex items-center justify-center">
            <img
              src={firstSteps[firstStepsIndex]?.image || "/placeholder.svg"}
              alt={firstSteps[firstStepsIndex]?.title}
              className="max-h-full transition-opacity duration-500 ease-in-out opacity-100"
              style={{ objectFit: 'contain' }}
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button variant="outline" size="icon" onClick={prevFirstStepsSlide}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextFirstStepsSlide}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{firstSteps[firstStepsIndex]?.title}</h2>
            <p className="mb-4">{firstSteps[firstStepsIndex]?.description}</p>
            <a href={firstSteps[firstStepsIndex]?.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
              <Globe className="mr-2 h-4 w-4" /> Visit Website
            </a>
          </div>
          <div className="flex justify-center mt-4 overflow-x-auto">
            <div className="flex space-x-2">
              {firstSteps.map((project, index) => (
                <img
                  key={index}
                  src={project.image}
                  alt={project.title}
                  className={`w-16 h-16 object-cover cursor-pointer border-2 ${firstStepsIndex === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => handleFirstStepsThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

