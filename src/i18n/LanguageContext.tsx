import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

type Lang = "fr" | "en";

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggleLang: () => void;
    t: (key: string) => string;
}

const STORAGE_KEY = "lang";

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getLangFromQuery(): Lang | null {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    // Supports ?lang=fr / ?lang=en as well as the bare forms ?fr / ?en
    const value = (params.get("lang") || (params.has("fr") ? "fr" : params.has("en") ? "en" : "")).toLowerCase();
    return value === "fr" || value === "en" ? value : null;
}

function getInitialLang(): Lang {
    if (typeof window === "undefined") return "fr";
    const fromQuery = getLangFromQuery();
    if (fromQuery) return fromQuery;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "fr" ? stored : "fr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>(getInitialLang);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = (next: Lang) => setLangState(next);
    const toggleLang = () => setLangState((prev) => (prev === "fr" ? "en" : "fr"));

    const t = (key: string): string => {
        const entry = translations[key];
        if (!entry) return key;
        return entry[lang] ?? entry.fr ?? key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
    return ctx;
}
