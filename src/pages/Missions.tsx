import React from "react";
import MissionCard from "../components/MissionCard";
import BackButton from "../components/BackButton";
import PageContainer from "../components/PageContainer";
import { missions } from "../data/missions";
import { useLanguage } from "../i18n/LanguageContext";

export default function Missions() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col items-center text-white pb-16">
            <PageContainer>
                {/* Header: title centered, back button on top on small / left from md */}
                <div className="relative my-6 md:my-8">
                    <div className="flex justify-center mb-6 md:mb-0 md:block md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
                        <BackButton to="/" />
                    </div>
                    <h1 className="text-center text-coutYellow text-3xl md:text-4xl font-bold">
                        {t("missions.title")}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 w-full justify-items-center">
                    {missions.map((mission) => (
                        <MissionCard key={mission.slug} mission={mission} />
                    ))}
                </div>
            </PageContainer>
        </div>
    );
}
