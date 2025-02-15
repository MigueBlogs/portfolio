"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const profilePhoto = "/media/yo.jpg"
const triathlonPhoto = "/media/triathlon.jpg"
const shortResume = "/Legal.pdf"
const longResume = "/Long.pdf"

export default function About() {
  const [isMobile, setIsMobile] = useState(false)

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
    <div className="container mx-auto p-4 page-transition relative">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
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
          <p className="mb-4">Provo, Utah, United States</p>
          <p className="mb-4">
            <a href="https://wa.me/525583582540" target="_blank" rel="noopener noreferrer">+525583582540</a>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">
              <a href="mailto:migueblogs@gmail.com" target="_blank" rel="noopener noreferrer">migueblogs@gmail.com</a>
            </span>
          </p>
          <p className="mb-4">Age: 30</p>
          <p className="mb-4">LinkedIn: <a href="https://linkedin.com/in/vargas-miguel/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vargas-miguel/</a></p>
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p>
            Computer Engineer with 5+ years of experience specializing in DevOps, web, VR, and full stack development. Proven 
            expertise in leading innovative projects, including a VR-based earthquake simulator, combining a passion for Virtual Reality 
            and game development. Skilled in REST APIs, continuous integration, and web development, delivering efficient and 
            impactful solutions. Eligible for a TN visa under the USMCA agreement, requiring only an offer letter with a straightforward 
            and cost-effective process for the employer.
          </p>
          <h2 className="text-xl font-semibold mb-2 mt-4">Interests</h2>
          <p>
            When I’m not coding, you’ll likely find me breaking a sweat at the gym, strumming my guitar in search of the next big hit (or just trying to stay in tune), or diving into the latest in rocket science and space exploration—because who doesn’t dream of being an astronaut? I’m also an avid gamer, a curious traveler who loves immersing in new cultures, and someone who’s always ready to embrace life’s adventures and lessons, one passport stamp at a time.
          </p>
          <h2 className="text-xl font-semibold mb-2 mt-4">Motivation</h2>
          <p>
            Driven by a desire to blend technical expertise with creativity, I am motivated by the opportunity to develop impactful technologies that improve lives. My passion for Virtual Reality and game development fuels my ambition to create immersive solutions, empowering users to explore new possibilities. I thrive in dynamic environments where teamwork and innovation drive meaningful change, aiming to contribute to cutting-edge projects that shape the future.
          </p>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Resumes</h2>
        {isMobile ? (
          <div className="space-y-4">
            <a href={shortResume} target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Resume
            </a>
            <a href={longResume} target="_blank" rel="noopener noreferrer" className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Long Resume
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Resume</h3>
              <iframe src={shortResume} className="w-full h-96 border-4 border-blue-500 rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Detailed Resume</h3>
              <iframe src={longResume} className="w-full h-96 border-4 border-blue-500 rounded-lg shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

