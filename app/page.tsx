"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import YouTube, { YouTubeEvent } from 'react-youtube'

export default function Home() {
  const videoId = 'xk2LA59EAdg' // Default video ID
  const [windowWidth, setWindowWidth] = useState(0)
  const [isLightMode, setIsLightMode] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(false) // Estado para controlar la visibilidad del botón

  useEffect(() => {
    setIsClient(true)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setIsMobile(window.innerWidth < 640)
    }
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

  useEffect(() => {
    // Mostrar el botón después de 3 segundos
    const timer = setTimeout(() => {
      setIsButtonVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    //window.scrollTo(0, document.body.scrollHeight)
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
      start: 49, // Start the video at the 48th second
      playbackRate: 1.5, // Reproduce el video a 1.5x velocidad
    },
  }

  const onReady = (event: YouTubeEvent) => {
    // Accede al reproductor de YouTube
    const player = event.target
    if (player) {
      player.playVideo()
    }
  }

  const onError = (e: YouTubeEvent) => {
    console.error('YouTube Player Error:', e)
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {isClient && (
          <YouTube
            videoId={videoId}
            opts={opts}
            className={`absolute top-1/2 left-1/2 transform ${
              isMobile ? '-translate-x-1/4 -translate-y-1/2 w-[400%] h-[150%] min-w-[100%] min-h-[100%]' : '-translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] min-w-[100%] min-h-[100%]'
            }`} // Ajusta el zoom según el modo
            style={{ pointerEvents: 'none' }}
            onReady={onReady}
            onError={onError}
          />
        )}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in invisible">Miguel Vargas</h1>
        <p className="text-xl mb-8 animate-fade-in-delay invisible">Computer Engineer | DevOps Specialist | Web Developer | XR Experiences</p>
        <div className="space-y-4">
          {isButtonVisible && (
            <Button asChild variant="outline" className="animate-bounce bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link href="/about">
                {isLightMode ? 'Learn More' : 'Learn More'} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out forwards;
          animation-delay: 0s;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-in-out forwards;
          animation-delay: 1s;
        }
        .invisible {
          visibility: hidden;
        }
        .animate-fade-in,
        .animate-fade-in-delay {
          visibility: visible;
        }
      `}</style>
    </div>
  )
}

