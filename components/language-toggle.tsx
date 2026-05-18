"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="mr-1"
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
      title={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      <span className="mr-2" aria-hidden="true">
        {language === "en" ? "🇺🇸" : "🇲🇽"}
      </span>
      <span>{language === "en" ? "EN" : "ES"}</span>
    </Button>
  )
}
