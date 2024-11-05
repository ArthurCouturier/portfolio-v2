import React, { useEffect, useState } from "react";
import SkillCategoryButton from "../../components/SkillCategoryButton";
import "./Markdown.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function TelespazioMissionPage() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/content/telespazio/TelespazioMission.md")
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="markdown-content mx-5">
            <ReactMarkdown className={"sm:mx-5 md:mx-10 l:mx-[15vw] xl:mx-[20vw]"} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            <div className="mt-10">
                <SkillCategoryButton url="/missions">Back</SkillCategoryButton>
            </div>
        </div>
    );
}
