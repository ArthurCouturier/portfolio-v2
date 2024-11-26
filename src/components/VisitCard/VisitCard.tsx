import React, { useEffect, useRef } from "react";
import { initVisitCard } from "./visit-card";

export default function VisitCard() {
    // Canvas Screen
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current && containerRef.current) {
            initVisitCard(canvasRef.current, containerRef.current);
        }
    }, []);

    return (
        <div className="markdown-content w-full h-screen flex justify-center">
            <div
                ref={containerRef}
                className="relative w-[85vw] h-[60vh] flex"
            >
                <canvas ref={canvasRef} className="webgl w-full h-full" />
            </div>
        </div>
    )
}