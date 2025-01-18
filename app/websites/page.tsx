"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react'

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
    title: "Evacuation Routes for the Volcán de Fuego",
    url: "http://www.preparados.cenapred.unam.mx/apps/rutasvolcandefuego/",
    //image: "/media/volcan_de_fuego.jpg",
    image: "/placeholder.svg",
    description: "Provides video and photographic records of evacuation routes defined by the State Civil Protection Units of Jalisco and Colima for the Volcán de Fuego in case of a volcanic eruption."
  },
  {
    title: "Evacuation Routes for the Popocatépetl Volcano",
    url: "http://www.preparados.cenapred.unam.mx/apps/rutasvolcan/",
    image: "/media/popocatepetl.jpg",
    description: "Includes video and photographic records of evacuation routes defined by the State Civil Protection Units of Puebla, Tlaxcala, Morelos, and the State of Mexico. It also incorporates standardized response plans for each state in case of a volcanic eruption or alert level change for the Popocatépetl Volcano."
  },
  {
    title: "Emergency Directory",
    url: "http://www.preparados.cenapred.unam.mx/apps/emergencias/",
    //image: "/media/emergency_directory.jpg",
    image: "/placeholder.svg",
    description: "Allows users to search for municipal and state Civil Protection representatives nationwide through an interactive map, postal code, or neighborhood."
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
    title: "Macrosimulation Platform",
    url: "https://simulacronacional.sspc.gob.mx/simulacronacional2024/",
    image: "/media/macrosimulation.jpg",
    description: "The Macrosimulation platform enables the registration of buildings wishing to participate in nationally organized drills. Participants can also download a certificate of participation after completing the exercise. Each federal entity can visualize statistics and access general registration data."
  },
  {
    title: "National Award 2020",
    url: "http://www.preparados.cenapred.unam.mx/PremioNacional2020/",
    image: "/media/national_award.jpg",
    description: "Portal for registering nominations for the 2020 National Civil Protection Award."
  },
  {
    title: "2019 Civil Protection Race",
    url: "http://www.preparados.cenapred.unam.mx/apps/carrera/",
    image: "/media/civil_protection_race.jpg",
    description: "Portal for competitors to register for the 2019 National Civil Protection Race."
  }
]

export default function Websites() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % websites.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + websites.length) % websites.length)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
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
    </div>
  )
}

