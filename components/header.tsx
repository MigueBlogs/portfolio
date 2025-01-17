"use client"

import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute('href')?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <header className="w-full fixed top-0 bg-background z-50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Miguel Vargas
        </Link>
        <ul className="flex space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ModeToggle />
      </nav>
    </header>
  )
}

