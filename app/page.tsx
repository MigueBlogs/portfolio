"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import YouTube from 'react-youtube'

export default function Home() {
  const videoId = 'xk2LA59EAdg' // Default video ID
  const [windowWidth, setWindowWidth] = useState(0)
  const [isLightMode, setIsLightMode] = useState(false)
  // inicia en el segundo 48 el video:
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleModeChange = () => {
      const isLight = window.matchMedia('(prefers-color-scheme: light)').matches
      setIsLightMode(isLight)
    }
    handleModeChange()
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', handleModeChange)
    return () => window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', handleModeChange)
  }, [])

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      playlist: videoId,
      modestbranding: 1,
      start: 48, // Start the video at the 48th second
      playbackRate: 1.5, // Reproduce el video a 1.5x velocidad
    },
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <YouTube
          videoId={videoId}
          opts={opts}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] min-w-[100%] min-h-[100%]" // Reduce el zoom
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Miguel Vargas</h1>
        <p className="text-xl mb-8">Computer Engineer | DevOps Specialist | Web Developer</p>
        <div className="space-y-4">
          <Button asChild variant="outline" className="animate-bounce bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href="/about">
              {isLightMode ? 'Learn More' : 'Learn More'} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

