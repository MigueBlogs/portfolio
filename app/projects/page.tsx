import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe } from 'lucide-react'

const projects = [
  {
    title: "VR Earthquake Simulator",
    description:
      "Developed an immersive VR application for disaster preparedness with over 550 downloads, enhancing user learning experiences and disaster readiness by 51% based on user feedback. The VR Earthquake Simulator is a state-of-the-art mobile application designed to educate users about earthquake preparedness through the immersive experience of Virtual Reality (VR). Created by engineers from UNAM, the app aims to help individuals, families, and communities learn effective strategies to respond to seismic events safely and confidently.<br/><br/>The app is available for free download on:<br/><a href='https://apps.apple.com/mx/app/simulador-de-sismos-vr/id6477807046' target='_blank' rel='noopener noreferrer' class='text-primary underline'>iOS: Download here</a><br/><a href='https://play.google.com/store/apps/details?id=com.metaplaystudios.simuladordesismos' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Android: Download here</a><br/><br/>By combining advanced technology with educational content, the VR Earthquake Simulator empowers communities to be better prepared for seismic emergencies, helping reduce risks and save lives.",
    technologies: [
      "Unity", "C#", "VR", "ironSource",
      "Earthquake Preparedness", "Virtual Reality", "Emergency Training",
      "Seismic Safety", "Family Education", "Disaster Response", "Safety Awareness",
      "Free App", "Interactive Learning", "Earthquake Simulation", "National Drill",
      "Immersive Education", "Risk Prevention", "Community Safety", "UNAM Engineers",
      "Disaster Readiness", "Lifelong Learning", "Safety Certification",
      "Mobile Technology", "Resilience Training"
    ],
    video: "/media/unity.mp4"
  },
  {
    title: "CheveReview Platform",
    description:
      "CheveReview is a platform designed to assist <a href='https://www.chevening.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Chevening Scholarship</a> applicants by allowing them to upload their essays for review. The platform promotes collaboration between applicants and reviewers, helping to refine essay quality through feedback from individuals who have already won the scholarship, known as 'Cheveners'. These Cheveners provide free and anonymous feedback on your essays. Each applicant can upload up to four essays, and each essay is allowed a maximum of three comments from different reviewers, ensuring that feedback is well-rounded and constructive. The goal is to provide applicants with the best possible preparation for their scholarship applications.",
    technologies: [
      "Web Development", "Database Management", "User Experience",
      "Chevening", "Scholarship", "Essays", "Review", "Feedback", "Platform",
      "Applicants", "Cheveners", "Preparation", "Writing", "Support",
      "Collaboration", "Mentorship", "Comments", "Refinement", "Anonymity",
      "Success", "Guidance", "Application", "Improvement"
    ],
    link: "https://chevereview.great-site.net/?i=1",
    image: "/media/cheve.jpg" // Añadir ruta de la imagen aquí
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <div className="container mx-auto p-4 page-transition">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {project.image && (
                <div className="mb-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={`${project.title} image`} className="border-2 border-primary rounded-lg shadow-md cursor-pointer" />
                  </a>
                </div>
              )}
              {project.video && (
                <div className="mb-4">
                  <video src={project.video} className="border-2 border-primary rounded-lg shadow-md" controls />
                </div>
              )}
              
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center mt-4 text-primary">
                  <Globe className="mr-2 h-4 w-4" /> Visit Project
                </a>
              )}
              <br></br>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

