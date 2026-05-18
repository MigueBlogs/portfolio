"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Language = "en" | "es"

type LanguageContextType = {
	language: Language
	setLanguage: (language: Language) => void
	toggleLanguage: () => void
	t: (en: string, es: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("en")

	useEffect(() => {
		const storedLanguage = window.localStorage.getItem("portfolio-language")
		if (storedLanguage === "en" || storedLanguage === "es") {
			setLanguage(storedLanguage)
		}
	}, [])

	useEffect(() => {
		window.localStorage.setItem("portfolio-language", language)
		document.documentElement.lang = language
	}, [language])

	const value = useMemo(
		() => ({
			language,
			setLanguage,
			toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "es" : "en")),
			t: (en: string, es: string) => (language === "en" ? en : es),
		}),
		[language]
	)

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error("useLanguage must be used inside LanguageProvider")
	}
	return context
}
