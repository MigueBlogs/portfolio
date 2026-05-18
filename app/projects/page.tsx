"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Apple, CalendarClock, Globe, PlayCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const projects = [
  {
    title: "VR Earthquake Simulator",
    descriptionEn:
      "Immersive VR mobile app for earthquake preparedness with 550+ downloads and measurable learning impact in user testing.",
    descriptionEs:
      "Aplicación móvil VR inmersiva para preparación ante sismos con más de 550 descargas y mejoras medibles en aprendizaje durante pruebas de usuario.",
    technologies: [
      "Unity", "C#", "VR", "ironSource", "Disaster Training"
    ],
    video: "/media/unity.mp4",
    downloads: [
      { label: "iOS", url: "https://apps.apple.com/mx/app/simulador-de-sismos-vr/id6477807046" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.metaplaystudios.simuladordesismos" }
    ]
  },
  {
    title: "Mr. Cubic",
    date: "October 18, 2025",
    descriptionEn:
      "Launch of Mr. Cubic by MetaPlay, a free 3D strategy puzzle game designed for short, fun play sessions.",
    descriptionEs:
      "Lanzamiento de Mr. Cubic por MetaPlay, un juego gratuito de puzzle estratégico 3D pensado para sesiones cortas y divertidas.",
    storyEn:
      "Hi, everyone! We are MetaPlay, a small and proud 100% Mexican studio. We launched Mr. Cubic, a chill 3D strategy puzzle game and it is completely free.",
    storyEs:
      "Hola a todos. Somos MetaPlay, un estudio 100% mexicano. Lanzamos Mr. Cubic, un juego de puzzle estratégico 3D relajado y completamente gratis.",
    technologies: ["Unity", "Mobile", "Puzzle Design", "Product Launch"],
    video: "/media/MrCubic/Mr_Cubic_Promotional_Video_Generation.mp4",
    downloads: [
      { label: "iOS", url: "https://apps.apple.com/app/mr-cubic/id6753639906" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.MetaPlayStudios.mrcubic" }
    ]
  },
  {
    title: "CheveReview Platform",
    descriptionEn:
      "Essay review platform for Chevening applicants with an active reviewer community. It currently has 30+ active reviewers (Cheveners).",
    descriptionEs:
      "Plataforma de revisión de ensayos para aplicantes Chevening con una comunidad activa de revisores. Actualmente cuenta con más de 30 revisores activos (Cheveners).",
    technologies: [
      "Web Development", "Database Management", "Mentorship Platform"
    ],
    link: "https://chevereview.great-site.net/?i=1",
    image: "/media/cheve.jpg"
  },
  {
    title: "VR Fire Simulator",
    descriptionEn:
      "A virtual reality fire response simulator currently in development to train decision-making under emergency conditions.",
    descriptionEs:
      "Simulador de respuesta a incendios en realidad virtual, actualmente en desarrollo, para entrenar la toma de decisiones en condiciones de emergencia.",
    releaseEn: "Planned release: 1Q 2027",
    releaseEs: "Lanzamiento estimado: 1T 2027",
    technologies: ["Unity", "Virtual Reality", "Emergency Training"],
    image: "/media/fire.png"
  }
]

export default function Projects() {
  const { language, t } = useLanguage()

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">{t("Projects", "Proyectos")}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              {project.date && (
                <p className="text-sm text-muted-foreground">{project.date}</p>
              )}
            </CardHeader>
            <CardContent>
              {project.image && (
                <div className="mb-4">
                  <img src={project.image} alt={`${project.title} image`} className="border-2 border-primary rounded-lg shadow-md" />
                </div>
              )}
              {project.video && (
                <div className="mb-4">
                  <video
                    src={project.video}
                    className="border-2 border-primary rounded-lg shadow-md w-full"
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              )}
              <p className="mb-2">{language === "en" ? project.descriptionEn : project.descriptionEs}</p>
              {project.storyEn && <p className="mb-4 text-sm text-muted-foreground">{language === "en" ? project.storyEn : project.storyEs}</p>}
              {project.releaseEn && (
                <div className="mb-4 rounded-xl border border-amber-300 bg-amber-50 p-3 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/30 dark:text-amber-200">
                  <p className="flex items-center gap-2 font-semibold">
                    <CalendarClock className="h-4 w-4" />
                    {language === "en" ? project.releaseEn : project.releaseEs}
                  </p>
                </div>
              )}

              {project.downloads && (
                <>
                  <div className="mb-4 flex flex-wrap gap-4">
                    {project.downloads.map((item) => (
                      <Button key={item.url} asChild className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.label === "iOS" ? <Apple className="mr-2 h-4 w-4" /> : <PlayCircle className="mr-2 h-4 w-4" />}
                          {t("Download on", "Descargar en")} {item.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                  <br />
                </>
              )}

              {project.link && (
                <>
                  <Button asChild className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Globe className="mr-2 h-4 w-4" /> {t("Visit CheveReview", "Visitar CheveReview")}
                    </a>
                  </Button>
                  <br />
                </>
              )}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

