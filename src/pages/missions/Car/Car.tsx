import React, { useEffect, useRef } from "react";
import SkillCategoryButton from "../../../components/SkillCategoryButton";
import initCar from "./car_designer";

export default function Car() {

    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current && containerRef.current) {
            initCar(canvasRef.current, containerRef.current);
        }
    }, []);

    return (
        <div className="markdown-content w-full h-screen flex flex-col items-center">
            <div
                ref={containerRef}
                className="relative w-[95vw] h-[60vh]"
            >
                <canvas ref={canvasRef} className="webgl w-full h-full" />
            </div>
            <div className="mt-10 mb-8">
                <SkillCategoryButton url="/missions">Back</SkillCategoryButton>
            </div>
        </div>
    )
}
