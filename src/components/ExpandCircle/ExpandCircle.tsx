import React, { useEffect } from "react";
import './ExpandCircle.css';

export default function ExpandCircle(props: { circleState: string, setCircleState: React.Dispatch<React.SetStateAction<string>> }) {

    useEffect(() => {
        // Peut-être utiliser cet effet pour écouter des changements ou effectuer des actions spécifiques
        if (props.circleState === 'opening') {
            console.log("Circle is expanding");
        }
    }, [props.circleState]);

    return (
        (props.circleState === 'opening' || props.circleState === 'closing') && (
            <div className="absolute inset-0 flex justify-center items-center z-[-1]">
                <div className={`bg-[#2f2e6e] rounded-full ${props.circleState === 'opening' ? 'animate-expandCircle' : 'animate-shrinkCircle'}`}></div>
            </div>
        )
    );
}
