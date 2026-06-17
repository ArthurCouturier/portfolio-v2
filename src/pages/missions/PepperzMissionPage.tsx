import React, { useEffect, useState } from "react";
import SkillCategoryButton from "../../components/SkillCategoryButton";
import PageContainer from "../../components/PageContainer";
import BackButton from "../../components/BackButton";
import "./Markdown.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function PepperzMissionPage() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/content/pepperz/PepperzMission.md")
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <PageContainer className="markdown-content text-white py-8">
            <div className="mb-8">
                <BackButton to="/missions" />
            </div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            <div className="mt-10">
                <SkillCategoryButton url="https://www.pepperz.app">Link to Pepperz</SkillCategoryButton>
            </div>
        </PageContainer>
    );
}
