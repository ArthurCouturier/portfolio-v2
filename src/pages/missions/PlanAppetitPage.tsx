import React from "react";
import { Link } from "react-router-dom";
import { getMission } from "../../data/missions";
import { useLanguage } from "../../i18n/LanguageContext";
import BackButton from "../../components/BackButton";
import MissionHeader from "../../components/MissionHeader";
import PageContainer from "../../components/PageContainer";

export default function PlanAppetitPage() {
    const { lang, t } = useLanguage();
    const mission = getMission("plan-appetit")!;

    return (
        <PageContainer className="text-white py-8">
            <div className="mb-8">
                <BackButton to="/missions" />
            </div>

            <MissionHeader mission={mission} />

            <section className="mt-12">
                <h2 className="text-coutYellow text-2xl font-bold mb-5">{t("planappetit.articles")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {mission.articles?.map((article) => (
                        <Link
                            key={article.slug}
                            to={`/missions/plan-appetit/article/${article.slug}`}
                            className="block bg-coutPurple/60 hover:bg-coutPurple/80 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
                        >
                            <h3 className="text-coutYellow text-lg font-bold">{article.title[lang]}</h3>
                            <p className="mt-2 text-sm font-normal text-white/85 leading-snug">{article.excerpt[lang]}</p>
                            <span className="mt-3 inline-block text-coutYellow text-sm font-bold">
                                {t("planappetit.readArticle")} →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </PageContainer>
    );
}
