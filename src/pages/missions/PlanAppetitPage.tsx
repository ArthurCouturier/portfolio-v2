import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import SkillCategoryButton from "../../components/SkillCategoryButton";
import rehypeRaw from "rehype-raw";

export default function PlanAppetitPage() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/content/plan-appetit/PlanAppetit.md")
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="markdown-content mx-5">
            <ReactMarkdown className={"sm:mx-5 md:mx-10 l:mx-[15vw] xl:mx-[20vw]"} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            <div className="mt-10">
                <SkillCategoryButton url="https://plan-appetit.vercel.app">Link to Plan'Appetit</SkillCategoryButton>
            </div>
            <div className="mt-10">
                <SkillCategoryButton url="/missions">Back</SkillCategoryButton>
            </div>
        </div>
    );
}