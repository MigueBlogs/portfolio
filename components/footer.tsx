"use client"

import { useLanguage } from '@/components/language-provider'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Miguel Vargas. {t("All rights reserved.", "Todos los derechos reservados.")}</p>
    </footer>
  )
}

