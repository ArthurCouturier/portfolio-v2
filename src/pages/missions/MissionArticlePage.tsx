import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./Markdown.css";
import { getMission } from "../../data/missions";
import { useLanguage } from "../../i18n/LanguageContext";
import BackButton from "../../components/BackButton";
import MissionHeader from "../../components/MissionHeader";
import PageContainer from "../../components/PageContainer";

export default function MissionArticlePage({ slug }: { slug: string }) {
    const { lang, t } = useLanguage();
    const mission = getMission(slug);
    const [content, setContent] = useState("");

    useEffect(() => {
        if (!mission?.contentPath) return;
        let active = true;
        fetch(mission.contentPath(lang))
            .then((r) => (r.ok ? r.text() : ""))
            .then((text) => active && setContent(text))
            .catch(() => active && setContent(""));
        return () => {
            active = false;
        };
    }, [mission, lang]);

    if (!mission) {
        return (
            <div className="text-white text-center mt-10">
                Mission not found.
                <div className="mt-6">
                    <Link to="/missions" className="text-coutYellow underline">{t("mission.back")}</Link>
                </div>
            </div>
        );
    }

    return (
        <PageContainer className="markdown-content text-white py-8">
            <div className="mb-8">
                <BackButton to="/missions" />
            </div>

            <MissionHeader mission={mission} />

            <div className="mt-8">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            </div>
        </PageContainer>
    );
}
