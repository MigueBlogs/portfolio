import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const profilePhoto = "/media/yo.jpg"
const triathlonPhoto = "/media/triathlon.jpg"

export default function About() {
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
          <p className="mb-4">+525583582540 | migueblogs@gmail.com</p>
          <p className="mb-4">Age: 30</p>
          <p className="mb-4">LinkedIn: <a href="https://linkedin.com/in/vargas-miguel/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vargas-miguel/</a></p>
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p>
            Computer Engineer with 5+ years of experience specializing in DevOps, web, VR, and backend development. Proven 
            expertise in leading innovative projects, including a VR-based earthquake simulator, combining a passion for Virtual Reality 
            and game development. Skilled in REST APIs, continuous integration, and web development, delivering efficient and 
            impactful solutions. Eligible for a TN visa under the USMCA agreement, requiring only an offer letter with a straightforward 
            and cost-effective process for the employer.
          </p>
          <h2 className="text-xl font-semibold mb-2 mt-4">Interests</h2>
          <p>
            Passionate about staying active through fitness and sports, enjoying creativity with guitar playing, and exploring innovative technologies like rockets, space exploration, and video games. Avid traveler who values cultural experiences and embraces life's opportunities to learn and grow.
          </p>
          <h2 className="text-xl font-semibold mb-2 mt-4">Motivation</h2>
          <p>
            Driven by a desire to blend technical expertise with creativity, I am motivated by the opportunity to develop impactful technologies that improve lives. My passion for Virtual Reality and game development fuels my ambition to create immersive solutions, empowering users to explore new possibilities. I thrive in dynamic environments where teamwork and innovation drive meaningful change, aiming to contribute to cutting-edge projects that shape the future.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

