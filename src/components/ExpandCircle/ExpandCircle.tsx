import React, { useEffect } from 'react';
import './ExpandCircle.css';

export default function ExpandCircle(props: { circleState: string; setCircleState: React.Dispatch<React.SetStateAction<string>> }) {
    useEffect(() => {
        if (props.circleState === 'opening') {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        };
    }, [props.circleState]);


    return (
        (props.circleState === 'opening' || props.circleState === 'closing') && (
            <div
                className="absolute inset-0 flex justify-center items-center z-0"
            >
                <div
                    className={`bg-[#2f2e6e] rounded-full ${props.circleState === 'opening' ? 'animate-expandCircle' : 'animate-shrinkCircle'
                        }`}
                ></div>
            </div>
        )
    );
}
