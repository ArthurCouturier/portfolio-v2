import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

function FlagFR() {
    return (
        <svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
            <rect width="1" height="2" x="0" fill="#0055A4" />
            <rect width="1" height="2" x="1" fill="#FFFFFF" />
            <rect width="1" height="2" x="2" fill="#EF4135" />
        </svg>
    );
}

function FlagGB() {
    return (
        <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className="w-full h-full" aria-hidden="true">
            <clipPath id="gb-clip">
                <rect width="60" height="30" />
            </clipPath>
            <g clipPath="url(#gb-clip)">
                <rect width="60" height="30" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
                <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
            </g>
        </svg>
    );
}

export default function LanguageToggle() {
    const { lang, setLang } = useLanguage();
    const isEn = lang === "en";

    const seg = (active: boolean) =>
        `relative z-10 flex-1 flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold transition-colors duration-200 cursor-pointer ${active ? "text-coutPurple" : "text-coutPurple/60 hover:text-coutPurple"}`;

    return (
        <div className="relative inline-flex items-center p-1 rounded-full bg-indigo-300 border-2 border-coutYellow/50" role="group" aria-label="Language">
            {/* Sliding "liquid" highlight */}
            <span
                aria-hidden="true"
                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-coutYellow transition-transform duration-200 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${isEn ? "translate-x-full" : "translate-x-0"}`}
            />
            <button type="button" onClick={() => setLang("fr")} aria-pressed={lang === "fr"} className={seg(!isEn)}>
                <span className="w-5 h-4 rounded-sm overflow-hidden inline-block"><FlagFR /></span> FR
            </button>
            <button type="button" onClick={() => setLang("en")} aria-pressed={lang === "en"} className={seg(isEn)}>
                <span className="w-5 h-4 rounded-sm overflow-hidden inline-block"><FlagGB /></span> EN
            </button>
        </div>
    );
}
