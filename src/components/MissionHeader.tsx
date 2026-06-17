import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import StackList from "./StackList";
import type { Mission } from "../data/missions";

/**
 * Header card for a mission detail page: title + meta + description + stack + links.
 */
export default function MissionHeader({ mission }: { mission: Mission }) {
    const { lang, t } = useLanguage();

    return (
        <section className="rounded-3xl bg-coutPurple/60 ring-1 ring-white/10 shadow-xl p-6 md:p-8">
            <h1 className="text-coutYellow text-3xl md:text-4xl font-bold">{mission.title}</h1>

            {(mission.role || mission.period) && (
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-normal text-white/70">
                    {mission.role && <span>{mission.role[lang]}</span>}
                    {mission.role && mission.period && <span className="text-white/30">•</span>}
                    {mission.period && <span>{mission.period}</span>}
                </div>
            )}

            <p className="mt-4 text-base font-normal leading-relaxed text-white/90">
                {mission.summary[lang]}
            </p>

            {mission.stack && (
                <div className="mt-5">
                    <p className="text-coutYellow text-sm font-bold mb-2">{t("mission.stack")}</p>
                    <StackList stack={mission.stack} />
                </div>
            )}

            {mission.links && mission.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                    {mission.links.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-coutPurple bg-coutYellow hover:brightness-110 font-bold rounded-lg px-5 py-2 transition duration-200"
                        >
                            {link.label[lang]} <span aria-hidden="true">↗</span>
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
}
