import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Get in touch for opportunities or collaborations</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

