"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

const profilePhoto = "/media/yo.jpg"
const resumeEn = "/Resume May 2026.pdf"
const resumeEs = "/CV Mayo 2026.pdf"

const birthDate = new Date(1994, 6, 19)
const experienceStartDate = new Date(2020, 0, 1)

function getYearsSince(date: Date, now = new Date()) {
  let years = now.getFullYear() - date.getFullYear()
  const monthDiff = now.getMonth() - date.getMonth()
  const dayDiff = now.getDate() - date.getDate()
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) years -= 1
  return years
}

interface StatItem {
  num: number
  suffix: string
  labelEn: string
  labelEs: string
}

interface EmojiItem {
  emoji: string
  codepoint: string
  labelEn: string
  labelEs: string
}

const emojis: EmojiItem[] = [
  { emoji: "\uD83D\uDCBB", codepoint: "1f4bb", labelEn: "Coding", labelEs: "Programaci\u00f3n" },
  { emoji: "\uD83D\uDCAA", codepoint: "1f4aa", labelEn: "Weights", labelEs: "Pesas" },
  { emoji: "\uD83C\uDFB8", codepoint: "1f3b8", labelEn: "Guitar", labelEs: "Guitarra" },
  { emoji: "\uD83D\uDE80", codepoint: "1f680", labelEn: "Space", labelEs: "Espacio" },
  { emoji: "\uD83D\uDD79\uFE0F", codepoint: "1f47e", labelEn: "Gaming", labelEs: "Videojuegos" },
  { emoji: "\u2708\uFE0F", codepoint: "2708_fe0f", labelEn: "Travel", labelEs: "Viajes" },
  { emoji: "\uD83C\uDF0D", codepoint: "1f30d", labelEn: "Cultures", labelEs: "Culturas" },
  { emoji: "\uD83C\uDF93", codepoint: "1f393", labelEn: "UNAM Grad", labelEs: "Egresado UNAM" },
]

function formatCounter(value: number, stat: StatItem): string {
  if (stat.suffix === "M+") return `${value.toFixed(1)}M+`
  const rounded = Math.round(value)
  const formatted = rounded >= 1000 ? rounded.toLocaleString("en-US") : String(rounded)
  return `${formatted}${stat.suffix}`
}

export default function About() {
  const [isMobile, setIsMobile] = useState(false)
  const { language, t } = useLanguage()
  const age = getYearsSince(birthDate)
  const yearsOfExperience = getYearsSince(experienceStartDate)
  const resumePdf = language === "en" ? resumeEn : resumeEs

  const stats: StatItem[] = [
    { num: yearsOfExperience, suffix: "+", labelEn: "Years of Experience", labelEs: "A\u00f1os de Experiencia" },
    { num: 60, suffix: "+", labelEn: "Microservices Built", labelEs: "Microservicios Desarrollados" },
    { num: 2.3, suffix: "M+", labelEn: "Web Visits Driven", labelEs: "Visitas Web Generadas" },
    { num: 1000, suffix: "+", labelEn: "VR App Downloads", labelEs: "Descargas de App VR" },
    { num: 30, suffix: "+", labelEn: "GIS Systems Deployed", labelEs: "Sistemas GIS Implementados" },
    { num: 100, suffix: "+", labelEn: "Scrum Projects Led", labelEs: "Proyectos Scrum Liderados" },
  ]

  const [counters, setCounters] = useState<number[]>(stats.map(() => 0))
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(stats.map(() => false))
  const [hoveredEmoji, setHoveredEmoji] = useState<number | null>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const targets = [yearsOfExperience, 60, 2.3, 1000, 30, 100]
    const suffixes = ["+", "+", "M+", "+", "+", "+"]

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          targets.forEach((target, i) => {
            setTimeout(() => {
              setCardsVisible((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
              const duration = 1400
              const steps = 60
              const stepVal = target / steps
              let current = 0
              const interval = setInterval(() => {
                current = Math.min(current + stepVal, target)
                setCounters((prev) => {
                  const next = [...prev]
                  next[i] = current
                  return next
                })
                if (current >= target) clearInterval(interval)
              }, duration / steps)
            }, i * 250)
          })
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [yearsOfExperience])

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">{t("About Me", "Sobre M\u00ed")}</h1>

      <div className="grid gap-6" style={{ gridTemplateColumns: isMobile ? "1fr" : "50% 50%" }}>
        {/* About Me Column */}
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
            <p className="mb-3 text-sm">{t("Mexico City, Mexico", "Ciudad de M\u00e9xico, M\u00e9xico")}</p>
            <p className="mb-3 text-sm">
              <a href="https://wa.me/525583582540" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+525583582540</a>
              <span className="hidden sm:inline text-muted-foreground"> | </span>
              <span className="block sm:inline">
                <a href="mailto:migueblogs@gmail.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">migueblogs@gmail.com</a>
              </span>
            </p>
            <p className="mb-3 text-sm">{t(`Age: ${age}`, `Edad: ${age}`)}</p>
            <p className="mb-3 text-sm">
              LinkedIn:{" "}
              <a href="https://linkedin.com/in/vargas-miguel/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/vargas-miguel/</a>
            </p>
            <h2 className="text-lg font-semibold mb-2 mt-4">{t("Professional Summary", "Resumen Profesional")}</h2>
            <p className="text-sm mb-3">
              {t(
                `Computer Engineer with ${yearsOfExperience}+ years of experience specializing in DevOps, web, VR, and full stack development. Proven expertise leading innovative products, including VR and mobile launches such as Mr. Cubic. Skilled in REST APIs, continuous integration, and modern web development, delivering efficient and impactful solutions.`,
                `Ingeniero en Computaci\u00f3n con ${yearsOfExperience}+ a\u00f1os de experiencia en DevOps, desarrollo web, realidad virtual y full stack. Experiencia comprobada liderando productos innovadores, incluyendo lanzamientos VR y m\u00f3viles como Mr. Cubic. Especializado en APIs REST, integraci\u00f3n continua y desarrollo web moderno para entregar soluciones eficientes y de alto impacto.`
              )}
            </p>
            <h2 className="text-lg font-semibold mb-2 mt-3">{t("Interests", "Intereses")}</h2>
            <p className="text-sm mb-3">
              {t(
                "When I am not coding, you will likely find me training at the gym, playing guitar, exploring space science content, gaming, or traveling to discover new cultures and ideas.",
                "Cuando no estoy programando, probablemente estoy entrenando en el gimnasio, tocando guitarra, explorando contenido de ciencia espacial, jugando videojuegos o viajando para conocer nuevas culturas e ideas."
              )}
            </p>
            <h2 className="text-lg font-semibold mb-2 mt-3">{t("Motivation", "Motivaci\u00f3n")}</h2>
            <p className="text-sm">
              {t(
                "I am motivated by combining technical excellence with creativity to build products that improve everyday life. I thrive in dynamic teams where collaboration and innovation produce meaningful outcomes.",
                "Me motiva combinar excelencia t\u00e9cnica con creatividad para construir productos que mejoren la vida diaria. Disfruto equipos din\u00e1micos donde la colaboraci\u00f3n y la innovaci\u00f3n generan resultados de valor."
              )}
            </p>
          </CardContent>
        </Card>

        {/* CV Column */}
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

      {/* Key Achievements */}
      <div className="mt-10" ref={statsRef}>
        <h2 className="text-2xl font-bold mb-6 text-center">{t("Key Achievements", "Logros Clave")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <Card
              key={i}
              className={`text-center transition-all duration-500 hover:shadow-lg hover:scale-105 cursor-default bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 ${
                cardsVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <CardContent className="pt-6 pb-4">
                <p className="text-3xl font-bold">{formatCounter(counters[i], stat)}</p>
                <p className="text-xs text-muted-foreground mt-1">{t(stat.labelEn, stat.labelEs)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* My Life in Emojis */}
      <div className="mt-10 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">{t("My Life in Emojis", "Mi Vida en Emojis")}</h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {emojis.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 cursor-pointer select-none"
              onMouseEnter={() => setHoveredEmoji(i)}
              onMouseLeave={() => setHoveredEmoji(null)}
              onTouchStart={() => setHoveredEmoji(i)}
              onTouchEnd={() => setHoveredEmoji(null)}
            >
              {hoveredEmoji === i ? (
                <img
                  src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${item.codepoint}/512.gif`}
                  alt={item.labelEn}
                  width={64}
                  height={64}
                  className="w-14 h-14 sm:w-16 sm:h-16"
                />
              ) : (
                <span className="text-5xl sm:text-6xl leading-none" role="img" aria-label={item.labelEn}>
                  {item.emoji}
                </span>
              )}
              <p className="text-xs text-center text-muted-foreground leading-tight">{t(item.labelEn, item.labelEs)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
