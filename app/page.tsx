import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center page-transition">
      <h1 className="text-4xl font-bold mb-4">Miguel Vargas</h1>
      <p className="text-xl mb-8">Computer Engineer | DevOps Specialist | Web Developer</p>
      <div className="space-y-4">
        <Button asChild>
          <Link href="/about">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

