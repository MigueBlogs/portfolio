import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold">Computer Engineering</h3>
          <p className="text-sm text-muted-foreground">UNAM Faculty of Engineering</p>
          <p className="text-sm">Thesis: Earthquake simulator with virtual reality</p>
          <p className="text-sm">Specialization Module: Intelligent Systems and Computer Graphics</p>
        </CardContent>
      </Card>
    </section>
  )
}

