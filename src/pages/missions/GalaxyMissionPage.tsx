import React, { useRef, useEffect, useState } from "react";
import { initGalaxy } from "./galaxy";
import ReactMarkdown from "react-markdown";
import "./Markdown.css";
import rehypeRaw from "rehype-raw";
import SkillCategoryButton from "../../components/SkillCategoryButton";

export default function GalaxyMissionPage() {
    // Canvas Screen
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const guiContainerRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (canvasRef.current && containerRef.current && guiContainerRef.current) {
            initGalaxy(canvasRef.current, containerRef.current, guiContainerRef.current);
        }
    }, []);

    // Markdown content
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("/content/galaxy/GalaxyMission.md")
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, []);

    // Handle Fullscreen toggle
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key.toLowerCase() === "f") {
                const canvas = canvasRef.current;
                if (canvas) {
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    } else {
                        canvas.requestFullscreen();
                    }
                }
            }
        };

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        window.addEventListener("keydown", handleKeyDown);
        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    return (
        <div className="markdown-content mx-5 mt-3">
            <ReactMarkdown className={"sm:mx-5 md:mx-10 l:mx-[15vw] xl:mx-[20vw]"} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            <div className="mt-10 mb-8">
                <SkillCategoryButton url="/missions">Back</SkillCategoryButton>
            </div>
            <div
                ref={containerRef}
                className={`relative w-full ${isFullscreen ? "h-[100vh]" : "h-[73vh]"}`}
            >
                <canvas ref={canvasRef} className="webgl w-full h-full" />
                <div ref={guiContainerRef} className="absolute top-0 left-0"></div>
            </div>
        </div>
    );
}
