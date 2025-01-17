"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const websites = [
  {
    title: "Project 1",
    url: "https://example1.com",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Project 2",
    url: "https://example2.com",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Project 3",
    url: "https://example3.com",
    image: "/placeholder.svg?height=400&width=600"
  },
]

export default function Websites() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % websites.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + websites.length) % websites.length)
  }

  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Web Development Projects</h1>
      <Card className="relative overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[400px]">
            <img
              src={websites[currentIndex].image || "/placeholder.svg"}
              alt={websites[currentIndex].title}
              className="w-full h-full object-cover"
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
            <a href={websites[currentIndex].url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Visit Website
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

