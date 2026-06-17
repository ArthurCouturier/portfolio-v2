import React, { useRef, useEffect, useState } from "react";
import { initGalaxy } from "./galaxy";
import ReactMarkdown from "react-markdown";
import "./Markdown.css";
import rehypeRaw from "rehype-raw";
import BackButton from "../../components/BackButton";
import PageContainer from "../../components/PageContainer";
import { useLanguage } from "../../i18n/LanguageContext";

export default function GalaxyMissionPage() {
    const { lang } = useLanguage();
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
        let active = true;
        fetch(`/content/galaxy/GalaxyMission.${lang}.md`)
            .then((response) => (response.ok ? response.text() : ""))
            .then((text) => active && setContent(text))
            .catch(() => active && setContent(""));
        return () => {
            active = false;
        };
    }, [lang]);

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
        <div className="markdown-content text-white">
            <PageContainer className="py-8">
                <div className="mb-8">
                    <BackButton to="/missions" />
                </div>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            </PageContainer>
            <div
                ref={containerRef}
                className={`relative w-full mt-8 ${isFullscreen ? "h-[100vh]" : "h-[73vh]"}`}
            >
                <canvas ref={canvasRef} className="webgl w-full h-full" />
                <div ref={guiContainerRef} className="absolute top-0 left-0"></div>
            </div>
        </div>
    );
}
