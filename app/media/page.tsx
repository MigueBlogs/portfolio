"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import YouTube from 'react-youtube'
import { Globe } from 'lucide-react'

interface MediaAppearance {
  title: string
  date: string
  videoType: "facebook" | "youtube" | "iframe"
  videoUrl: string
}

const mediaAppearances: MediaAppearance[] = [
  {
    title: "Live interview on Engineering Program at Radio UNAM",
    date: "Jan 29, 2019",
    videoType: "facebook",
    videoUrl: "https://fb.watch/xgbK8v_D_f/"
  },
  {
    title: "Featured in a national TV segment on Fr@ctal - ForoTV. Televisa",
    date: "Mar 30, 2019",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=xk2LA59EAdg"
  },
  {
    title: "Written feature on the news website SinEmbargomx",
    date: "Dec 5, 2020",
    videoType: "iframe",
    videoUrl: "https://www.sinembargo.mx/4073080/tepeyollotl-la-app-creada-por-dos-jovenes-ingenieros-mexicanos-para-simular-sismos/"
  },
  {
    title: "Techtegia: Young Mexicans create app to simulate earthquakes",
    date: "Dec 10, 2022",
    videoType: "iframe",
    videoUrl:"https://techtegia.com/2021/12/jovenes-mexicanos-crean-app-para-simular-sismos-llamada-tepeyollotl/"
  }
]

export default function Media() {
  const renderMediaContent = (media: MediaAppearance) => {
    if (media.videoType === "facebook") {
      return (
        <div className="mb-4">
          <iframe
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(media.videoUrl)}`}
            width="100%"
            height="400"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="yes"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      )
    } else if (media.videoType === "youtube") {
      return (
        <div className="mb-4">
          <YouTube videoId={media.videoUrl.split('v=')[1]} opts={{ width: '100%', height: '400' }} />
        </div>
      )
    } else if (media.videoType === "iframe") {
      return (
        <div className="mb-4">
          <iframe
            src={media.videoUrl}
            width="100%"
            height="400"
            style={{ border: 'none', overflow: 'auto' }}
            scrolling="yes"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      )
    }
  }

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Media Appearances</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {mediaAppearances.map((media, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{media.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{media.date}</p>
              {renderMediaContent(media)}
              {media.videoType === "iframe" && (
                <a href={media.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center mt-4 text-primary hover:underline">
                  <Globe className="mr-2 h-4 w-4" /> Visit Website
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

