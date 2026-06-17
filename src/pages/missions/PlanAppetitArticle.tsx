import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./Markdown.css";
import { planAppetitArticles } from "../../data/missions";
import { useLanguage } from "../../i18n/LanguageContext";
import BackButton from "../../components/BackButton";
import PageContainer from "../../components/PageContainer";

export default function PlanAppetitArticle() {
    const { slug } = useParams();
    const { lang, t } = useLanguage();
    const article = planAppetitArticles.find((a) => a.slug === slug);
    const [content, setContent] = useState("");

    useEffect(() => {
        if (!article) return;
        let active = true;
        fetch(article.path(lang))
            .then((r) => (r.ok ? r.text() : ""))
            .then((text) => active && setContent(text))
            .catch(() => active && setContent(""));
        return () => {
            active = false;
        };
    }, [article, lang]);

    if (!article) {
        return (
            <div className="text-white text-center mt-10">
                <div className="mt-6">
                    <Link to="/missions/plan-appetit" className="text-coutYellow underline">
                        {t("planappetit.backToMission")}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <PageContainer className="markdown-content text-white py-8">
            <div className="mb-8">
                <BackButton to="/missions/plan-appetit" />
            </div>

            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </PageContainer>
    );
}
