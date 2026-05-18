"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

type SiteItem = {
  titleEn: string
  titleEs: string
  url: string
  image: string
  descriptionEn: string
  descriptionEs: string
}

const websites: SiteItem[] = [
  {
    titleEn: "PREPARADOS Web Portal",
    titleEs: "Portal Web PREPARADOS",
    url: "http://www.preparados.cenapred.unam.mx/",
    image: "/media/preparados.jpg",
    descriptionEn: "Portal that centralizes National Civil Protection information, prevention content, analysis tools, and emergency event registration.",
    descriptionEs: "Portal que centraliza información del Sistema Nacional de Protección Civil, contenidos de prevención, herramientas de análisis y registro de eventos."
  },
  {
    titleEn: "Cyclone Season",
    titleEs: "Temporada de Ciclones",
    url: "http://www.preparados.cenapred.unam.mx/apps/TemporadaCiclones2020",
    image: "/media/CNPC.jpg",
    descriptionEn: "Visualization tool for active Pacific and Atlantic cyclones with trajectories, wind impact zones, satellite data, and exposed systems analysis.",
    descriptionEs: "Herramienta para visualizar ciclones activos en Pacífico y Atlántico con trayectorias, zonas de viento, datos satelitales y análisis de sistemas expuestos."
  },
  {
    titleEn: "Early Warning System for Tropical Cyclones (SIAT-CT)",
    titleEs: "Sistema de Alerta Temprana para Ciclones Tropicales (SIAT-CT)",
    url: "http://www.preparados.cenapred.unam.mx/SIAT-CT/",
    image: "/media/siat-ct.jpg",
    descriptionEn: "Platform for generating and consulting official tropical cyclone bulletins, including forecasts, recommendations, and authoritative updates.",
    descriptionEs: "Plataforma para generar y consultar boletines oficiales de ciclones tropicales, incluyendo pronósticos, recomendaciones y actualizaciones oficiales."
  },
  {
    titleEn: "CENACOM Reporting System",
    titleEs: "Sistema de Reportes CENACOM",
    url: "http://www.preparados.cenapred.unam.mx/apps/pruebas/reportesCENACOM/",
    image: "/media/CENACOM.jpg",
    descriptionEn: "Incident reporting system for Civil Protection events, enabling national monitoring and follow-up by authorities.",
    descriptionEs: "Sistema de reporte de incidentes de Protección Civil para facilitar el monitoreo y seguimiento nacional por parte de autoridades."
  },
  {
    titleEn: "Evacuation Routes for Volcan de Fuego",
    titleEs: "Rutas de Evacuación del Volcán de Fuego",
    url: "https://www.gob.mx/sspc/prensa/la-cnpc-actualiza-el-plan-del-volcan-de-fuego-en-los-estados-de-colima-y-jalisco",
    image: "/media/volcan_de_fuego.jpg",
    descriptionEn: "Contains video and photo records of official evacuation routes defined for eruption scenarios in Colima and Jalisco.",
    descriptionEs: "Incluye registros de video y fotografía de rutas oficiales de evacuación definidas para escenarios de erupción en Colima y Jalisco."
  },
  {
    titleEn: "Evacuation Routes for Popocatepetl",
    titleEs: "Rutas de Evacuación del Popocatépetl",
    url: "http://www.preparados.cenapred.unam.mx/apps/rutasvolcan/",
    image: "/media/popocatepetl.jpg",
    descriptionEn: "Route records and response plans for Puebla, Tlaxcala, Morelos, and Estado de Mexico for volcanic alerts.",
    descriptionEs: "Registros de rutas y planes de respuesta para Puebla, Tlaxcala, Morelos y Estado de México ante alertas volcánicas."
  },
  {
    titleEn: "Volunteer Groups",
    titleEs: "Grupos Voluntarios",
    url: "http://www.preparados.cenapred.unam.mx/apps/Voluntarios/",
    image: "/media/volunteer_groups.jpg",
    descriptionEn: "Registration and monitoring channel for volunteer groups in rescue, firefighting, shelter support, and emergency medical response.",
    descriptionEs: "Canal de registro y seguimiento de grupos voluntarios en rescate, combate de incendios, apoyo en refugios y respuesta médica."
  },
  {
    titleEn: "Temporary Shelters",
    titleEs: "Refugios Temporales",
    url: "http://www.preparados.cenapred.unam.mx/apps/RefugiosTemporales/",
    image: "/media/temporary_shelters.jpg",
    descriptionEn: "National temporary shelter database with location, capacity, and evidence photos for emergency activation readiness.",
    descriptionEs: "Base nacional de refugios temporales con ubicación, capacidad y evidencia fotográfica para su activación en emergencias."
  },
  {
    titleEn: "Simulacro Nacional",
    titleEs: "Simulacro Nacional",
    url: "https://simulacronacional.sspc.gob.mx/simulacronacional2024/",
    image: "/media/macrosimulation.jpg",
    descriptionEn: "Building registration platform for nationwide drills, with participation certificates and federal-level statistics.",
    descriptionEs: "Plataforma para registrar inmuebles en simulacros nacionales, con constancias de participación y estadísticas por entidad."
  },
  {
    titleEn: "National Award 2020",
    titleEs: "Premio Nacional 2020",
    url: "https://www.gob.mx/cenapred/articulos/premio-nacional-de-proteccion-civil-2020",
    image: "/media/national_award.jpg",
    descriptionEn: "Official portal for nomination registration to the 2020 National Civil Protection Award.",
    descriptionEs: "Portal oficial para el registro de nominaciones al Premio Nacional de Protección Civil 2020."
  },
  {
    titleEn: "2019 Civil Protection Race",
    titleEs: "Carrera de Protección Civil 2019",
    url: "https://www.gob.mx/sspc/prensa/se-realiza-con-exito-la-carrera-de-proteccion-civil-2019-para-conmemorar-los-sismos-de-1985-y-2017",
    image: "/media/civil_protection_race.jpg",
    descriptionEn: "Registration portal for runners participating in the 2019 National Civil Protection Race.",
    descriptionEs: "Portal de registro para corredores participantes en la Carrera Nacional de Protección Civil 2019."
  },
  {
    titleEn: "Emergency Directory",
    titleEs: "Directorio de Emergencias",
    url: "http://www.preparados.cenapred.unam.mx/apps/emergencias/",
    image: "/placeholder.svg",
    descriptionEn: "Interactive map and search tool to find municipal and state Civil Protection contacts across the country.",
    descriptionEs: "Mapa interactivo y buscador para encontrar contactos de Protección Civil municipal y estatal en todo el país."
  }
]

const gisMaps: SiteItem[] = [
  {
    titleEn: "Situational Map for Winter Season",
    titleEs: "Mapa Situacional de Temporada Invernal",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=8d751b0360f84e5d94d02359c9fdcc6f",
    image: "/media/winter_season.jpg",
    descriptionEn: "Municipal snowfall hazard index map to identify low-temperature vulnerability areas.",
    descriptionEs: "Mapa con índice municipal de peligro por nevadas para identificar zonas con mayor vulnerabilidad a bajas temperaturas."
  },
  {
    titleEn: "Floods in Tabasco",
    titleEs: "Inundaciones en Tabasco",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=6a43d98ef626425e8b61cd586af6cf12",
    image: "/media/floods_tabasco.jpg",
    descriptionEn: "Emergency coordination map for atypical rain and flood events with shelters, affected localities, and satellite/drone layers.",
    descriptionEs: "Mapa de coordinación de emergencia por lluvias atípicas e inundaciones con refugios, localidades afectadas y capas satelitales/aéreas."
  },
  {
    titleEn: "Storm Surge Exposure (Cyclone Delta)",
    titleEs: "Exposición por Marejada (Ciclón Delta)",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=42f5dac0553348bca6b23e5579533575",
    image: "/media/storm_surge_delta.jpg",
    descriptionEn: "Tracking map for Cyclone Delta with vulnerability zones and temporary shelter activation points.",
    descriptionEs: "Mapa de seguimiento del Ciclón Delta con zonas de vulnerabilidad y puntos de activación de refugios temporales."
  },
  {
    titleEn: "Situational Map for Cyclone Narda",
    titleEs: "Mapa Situacional del Ciclón Narda",
    url: "http://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=9de916331d9849e29fa340458500440b",
    image: "/media/tropical_cyclone_narda.jpg",
    descriptionEn: "Map of flood-affected areas caused by Tropical Storm Narda.",
    descriptionEs: "Mapa de zonas afectadas por inundación durante el paso de la tormenta tropical Narda."
  },
  {
    titleEn: "Buildings Registered for Nationwide Drill",
    titleEs: "Inmuebles Registrados para Simulacro Nacional",
    url: "https://simulacronacional.sspc.gob.mx/simulacronacional2024/mapaInmuebles.htmll",
    image: "/media/nationwidedrill.jpg",
    descriptionEn: "Geospatial view of buildings registered for nationwide drill exercises.",
    descriptionEs: "Vista geoespacial de inmuebles registrados para ejercicios de simulacro nacional."
  },
  {
    titleEn: "Situational Map for Cyclone Raymond",
    titleEs: "Mapa Situacional del Ciclón Raymond",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=32953800bf6a4280adedb38c3d42a79b",
    image: "/media/tropical_cyclone_raymond.jpg",
    descriptionEn: "Critical flood points, temporary shelters, and urban risk areas monitored during Cyclone Raymond.",
    descriptionEs: "Puntos críticos de inundación, refugios temporales y zonas urbanas en riesgo durante el Ciclón Raymond."
  },
  {
    titleEn: "Situational Map for Day of the Dead",
    titleEs: "Mapa Situacional de Día de Muertos",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=d0b88bf49f464487881b16bffc62216e",
    image: "/media/day_of_the_dead.jpg",
    descriptionEn: "Map identifying cemetery locations to support crowd prevention and public safety planning.",
    descriptionEs: "Mapa para identificar ubicaciones de panteones y apoyar la prevención de aglomeraciones y la planeación de seguridad."
  },
  {
    titleEn: "Situational Map for Cyclone Priscilla",
    titleEs: "Mapa Situacional del Ciclón Priscilla",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=3da789a2e8c44f5fae831ebc6a0a2f70",
    image: "/media/tropical_cyclone_priscilla.jpg",
    descriptionEn: "Post-impact analysis map including flood zones, shelters, localities, and event evolution.",
    descriptionEs: "Mapa de análisis posterior al impacto con zonas de inundación, refugios, localidades y evolución del evento."
  },
  {
    titleEn: "Situational Map for Potential Cyclone 17-E",
    titleEs: "Mapa Situacional del Potencial Ciclón 17-E",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=426f94502f454be8b428118fe5b2dfed",
    image: "/media/potential_tropical_cyclone_17e.jpg",
    descriptionEn: "Integrates flood points, landslide-prone areas, and urban zones potentially affected by the cyclone.",
    descriptionEs: "Integra puntos de inundación, zonas de deslizamiento y áreas urbanas potencialmente afectadas por el ciclón."
  },
  {
    titleEn: "Situational Map for Cyclone Lorena",
    titleEs: "Mapa Situacional del Ciclón Lorena",
    url: "https://rmgir.proyectomesoamerica.org/portal/apps/webappviewer/index.html?id=dbb2473eefb14772be8dc5307a1e98d0",
    image: "/media/tropical_cyclone_lorena.jpg",
    descriptionEn: "Situational map for shelter activation and state-level impact monitoring after Cyclone Lorena.",
    descriptionEs: "Mapa situacional para activación de refugios y monitoreo de impacto por entidad tras el Ciclón Lorena."
  }
]

const firstSteps: SiteItem[] = [
  {
    titleEn: "Renovacion Sacerdotal",
    titleEs: "Renovación Sacerdotal",
    url: "https://www.centrologos.org/",
    image: "/media/renovacion_sacerdotal.jpg",
    descriptionEn: "Virtual course portal for priestly renewal, including web content and 360 tour experiences.",
    descriptionEs: "Portal de curso virtual para renovación sacerdotal, incluyendo contenidos web y experiencias de recorrido 360."
  },
  {
    titleEn: "La Gran Avenida",
    titleEs: "La Gran Avenida",
    url: "http://www.lagranavenida.com.mx/index.html",
    image: "/media/la_gran_avenida.jpg",
    descriptionEn: "Simple HTML website for publishing a digital magazine and editorial content.",
    descriptionEs: "Sitio web simple en HTML para publicar revista digital y contenido editorial."
  },
  {
    titleEn: "Distribuidora Nacional de Consumibles",
    titleEs: "Distribuidora Nacional de Consumibles",
    url: "http://dnc.16mb.com/index.html",
    image: "/media/dnc.jpg",
    descriptionEn: "Basic business website for a local consumables company in Mexico City.",
    descriptionEs: "Sitio web básico de negocio para una empresa local de consumibles en Ciudad de México."
  },
  {
    titleEn: "ABK Lighting S.A. de C.V.",
    titleEs: "ABK Lighting S.A. de C.V.",
    url: "http://abk.mx/index.html",
    image: "/media/abk.jpg",
    descriptionEn: "Corporate showcase site focused on services, clients, products, and visual galleries.",
    descriptionEs: "Sitio corporativo de presentación enfocado en servicios, clientes, productos y galerías visuales."
  },
  {
    titleEn: "Encar Muebles",
    titleEs: "Encar Muebles",
    url: "https://www.encarmuebles.com/",
    image: "/media/encar_muebles.jpg",
    descriptionEn: "Digital product catalog website for a furniture store with 50+ items.",
    descriptionEs: "Sitio con catálogo digital de productos para mueblería con más de 50 artículos."
  }
]

function CarouselSection({
  title,
  items,
  currentIndex,
  onPrev,
  onNext,
  onThumbnailClick,
  isEnglish,
  visitLabel,
}: {
  title: string
  items: SiteItem[]
  currentIndex: number
  onPrev: () => void
  onNext: () => void
  onThumbnailClick: (index: number) => void
  isEnglish: boolean
  visitLabel: string
}) {
  const current = items[currentIndex]

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 mt-12">{title}</h1>
      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[400px] flex items-center justify-center">
            <img
              src={current.image || "/placeholder.svg"}
              alt={isEnglish ? current.titleEn : current.titleEs}
              className="max-h-full transition-opacity duration-500 ease-in-out opacity-100"
              style={{ objectFit: 'contain' }}
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button variant="outline" size="icon" onClick={onPrev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={onNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{isEnglish ? current.titleEn : current.titleEs}</h2>
            <p className="mb-4">{isEnglish ? current.descriptionEn : current.descriptionEs}</p>
            <a href={current.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
              <Globe className="mr-2 h-4 w-4" /> {visitLabel}
            </a>
          </div>
          <div className="flex justify-center mt-4 overflow-x-auto">
            <div className="flex space-x-2">
              {items.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={isEnglish ? item.titleEn : item.titleEs}
                  className={`w-16 h-16 object-cover cursor-pointer border-2 ${currentIndex === index ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => onThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default function Websites() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [gisIndex, setGisIndex] = useState(0)
  const [firstStepsIndex, setFirstStepsIndex] = useState(0)
  const { language, t } = useLanguage()
  const isEnglish = language === 'en'

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">{t("Web Development Projects", "Proyectos de Desarrollo Web")}</h1>

      <CarouselSection
        title={t("Institutional Portals", "Portales Institucionales")}
        items={websites}
        currentIndex={currentIndex}
        onPrev={() => setCurrentIndex((prev) => (prev - 1 + websites.length) % websites.length)}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % websites.length)}
        onThumbnailClick={setCurrentIndex}
        isEnglish={isEnglish}
        visitLabel={t("Visit Website", "Visitar Sitio")}
      />

      <CarouselSection
        title={t("Geographic Information System Maps", "Mapas de Sistemas de Información Geográfica")}
        items={gisMaps}
        currentIndex={gisIndex}
        onPrev={() => setGisIndex((prev) => (prev - 1 + gisMaps.length) % gisMaps.length)}
        onNext={() => setGisIndex((prev) => (prev + 1) % gisMaps.length)}
        onThumbnailClick={setGisIndex}
        isEnglish={isEnglish}
        visitLabel={t("Visit Website", "Visitar Sitio")}
      />

      <CarouselSection
        title={t("First Steps", "Primeros Pasos")}
        items={firstSteps}
        currentIndex={firstStepsIndex}
        onPrev={() => setFirstStepsIndex((prev) => (prev - 1 + firstSteps.length) % firstSteps.length)}
        onNext={() => setFirstStepsIndex((prev) => (prev + 1) % firstSteps.length)}
        onThumbnailClick={setFirstStepsIndex}
        isEnglish={isEnglish}
        visitLabel={t("Visit Website", "Visitar Sitio")}
      />
    </div>
  )
}
