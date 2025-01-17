import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

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
              src="/media/yo.jpg"
              alt="Miguel Vargas"
              width={100}
              height={100}
              className="absolute top-0 right-0 w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
          <p className="mb-4">Provo, Utah, United States</p>
          <p className="mb-4">+525583582540 | migueblogs@gmail.com</p>
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p>
            Computer Engineer with 5+ years of experience specializing in DevOps, web, VR, and backend development. Proven 
            expertise in leading innovative projects, including a VR-based earthquake simulator, combining a passion for Virtual Reality 
            and game development. Skilled in REST APIs, continuous integration, and web development, delivering efficient and 
            impactful solutions. Eligible for a TN visa under the USMCA agreement, requiring only an offer letter with a straightforward 
            and cost-effective process for the employer.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

