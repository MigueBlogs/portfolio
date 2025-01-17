import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-12 pt-24">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Miguel Vargas</h2>
          <p className="text-lg mb-4">Provo, Utah, United States</p>
          <p className="mb-4">+525583582540 | migueblogs@gmail.com</p>
          <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
          <p>
            Computer Engineer with 5+ years of experience specializing in DevOps, web, VR, and backend development. Proven 
            expertise in leading innovative projects, including a VR-based earthquake simulator, combining a passion for Virtual Reality 
            and game development. Skilled in REST APIs, continuous integration, and web development, delivering efficient and 
            impactful solutions. Eligible for a TN visa under the USMCA agreement, requiring only an offer letter with a straightforward 
            and cost-effective process for the employer.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

