import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const languages = [
  { language: "English", level: "Upper Intermediate (B2)" },
  { language: "Spanish", level: "Proficient (C2)" }
]

export default function Languages() {
  return (
    <section id="languages" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardContent>
          {languages.map((lang, index) => (
            <div key={index} className="mb-2">
              <span className="font-semibold">{lang.language}:</span> {lang.level}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

