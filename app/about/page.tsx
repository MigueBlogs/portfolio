"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

const profilePhoto = "/media/yo.jpg"
const resumePdf = "/Resume May 2026.pdf"

const birthDate = new Date(1994, 6, 19) // July 19, 1994
const experienceStartDate = new Date(2020, 0, 1) // January 1, 2020

function getYearsSince(date: Date, now = new Date()) {
  let years = now.getFullYear() - date.getFullYear()
  const monthDiff = now.getMonth() - date.getMonth()
  const dayDiff = now.getDate() - date.getDate()

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years -= 1
  }

  return years
}

export default function About() {
  const [isMobile, setIsMobile] = useState(false)
  const { t } = useLanguage()
  const age = getYearsSince(birthDate)
  const yearsOfExperience = getYearsSince(experienceStartDate)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">{t("About Me", "Sobre Mí")}</h1>
      <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? '1fr' : '50% 50%' }}>
        {/* About Me Column (70%) */}
        <Card>
          <CardHeader>
            <CardTitle>Miguel Vargas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Image
                src={profilePhoto}
                alt="Miguel Vargas"
                width={100}
                height={100}
                className="absolute top-0 right-0 w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>
            <p className="mb-3 text-sm">{t("Mexico City, Mexico", "Ciudad de México, México")}</p>
            <p className="mb-3 text-sm">
              <a href="https://wa.me/525583582540" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+525583582540</a>
              <span className="hidden sm:inline text-muted-foreground"> | </span>
              <span className="block sm:inline">
                <a href="mailto:migueblogs@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">migueblogs@gmail.com</a>
              </span>
            </p>
            <p className="mb-3 text-sm">{t(`Age: ${age}`, `Edad: ${age}`)}</p>
            <p className="mb-3 text-sm">LinkedIn: <a href="https://linkedin.com/in/vargas-miguel/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/vargas-miguel/</a></p>
            <h2 className="text-lg font-semibold mb-2 mt-4">{t("Professional Summary", "Resumen Profesional")}</h2>
            <p className="text-sm mb-3">
              {t(
                `Computer Engineer with ${yearsOfExperience}+ years of experience specializing in DevOps, web, VR, and full stack development. Proven expertise leading innovative products, including VR and mobile launches such as Mr. Cubic. Skilled in REST APIs, continuous integration, and modern web development, delivering efficient and impactful solutions.`,
                `Ingeniero en Computación con ${yearsOfExperience}+ años de experiencia en DevOps, desarrollo web, realidad virtual y full stack. Experiencia comprobada liderando productos innovadores, incluyendo lanzamientos VR y móviles como Mr. Cubic. Especializado en APIs REST, integración continua y desarrollo web moderno para entregar soluciones eficientes y de alto impacto.`
              )}
            </p>
            <h2 className="text-lg font-semibold mb-2 mt-3">{t("Interests", "Intereses")}</h2>
            <p className="text-sm mb-3">
              {t(
                "When I am not coding, you will likely find me training at the gym, playing guitar, exploring space science content, gaming, or traveling to discover new cultures and ideas.",
                "Cuando no estoy programando, probablemente estoy entrenando en el gimnasio, tocando guitarra, explorando contenido de ciencia espacial, jugando videojuegos o viajando para conocer nuevas culturas e ideas."
              )}
            </p>
            <h2 className="text-lg font-semibold mb-2 mt-3">{t("Motivation", "Motivación")}</h2>
            <p className="text-sm">
              {t(
                "I am motivated by combining technical excellence with creativity to build products that improve everyday life. I thrive in dynamic teams where collaboration and innovation produce meaningful outcomes.",
                "Me motiva combinar excelencia técnica con creatividad para construir productos que mejoren la vida diaria. Disfruto equipos dinámicos donde la colaboración y la innovación generan resultados de valor."
              )}
            </p>
          </CardContent>
        </Card>

        {/* CV Column (30%) */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{t("Resume", "CV")}</h2>
          {isMobile ? (
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {t("View Resume", "Ver CV")}
            </a>
          ) : (
            <iframe src={resumePdf} className="w-full h-[600px] border-4 border-blue-500 rounded-lg shadow-lg" />
          )}
        </div>
      </div>
    </div>
  )
}

