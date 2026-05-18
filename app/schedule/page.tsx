"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const calendarUrl = "https://calendar.app.google/zwA3ofimA6v46fjL6"

export default function SchedulePage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto p-4 page-transition">
      <div className="mb-8 rounded-2xl border bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-6">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-6 w-6 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">{t("Book an Interview", "Agenda una Entrevista")}</h1>
            <p className="mt-2 text-muted-foreground">
              {t(
                "Choose a slot directly in Google Calendar for a quick interview or a project discussion.",
                "Elige un horario directamente en Google Calendar para una entrevista rápida o una charla de proyecto."
              )}
            </p>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden border-2">
        <CardHeader>
          <CardTitle>{t("Availability Calendar", "Calendario de Disponibilidad")}</CardTitle>
          <CardDescription>
            {t(
              "If the embedded view does not load in your browser, open the calendar in a new tab.",
              "Si la vista embebida no carga en tu navegador, abre el calendario en una nueva pestaña."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-end">
            <Button asChild>
              <a href={calendarUrl} target="_blank" rel="noopener noreferrer">
                {t("Open in Google Calendar", "Abrir en Google Calendar")} <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="h-[75vh] overflow-hidden rounded-xl border bg-background">
            <iframe
              title="Google Calendar booking"
              src={calendarUrl}
              className="h-full w-full"
              allow="clipboard-write"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
