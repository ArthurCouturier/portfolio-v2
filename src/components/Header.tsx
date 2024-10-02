import React, { useState } from "react";
import CoutCoutLogo from './CoutCoutLogo';

import ExpandCircle from "./ExpandCircle/ExpandCircle.tsx";

export default function Header(props: { handleCircleExpanded: () => void }) {

    const [circleState, setCircleState] = useState('closed'); // 'closed', 'opening', 'closing'

    const handleImageClick = () => {
        if (circleState === 'closed') {
            setCircleState('opening');
        } else {
            setCircleState('closing');
            setTimeout(() => {
                setCircleState('closed');
            }, 1500); // Animation duration before the circle is closed
        }
        props.handleCircleExpanded();
    };

    return (
        <div className="bg-red-300 m-12 flex z-10">
            <div className="flex-1">
                <CoutCoutLogo animated={true} />
            </div>
            <div className="relative flex-5">
                <ExpandCircle circleState={circleState} setCircleState={setCircleState} />

                <img
                    className="relative w-[7vw] rounded-full scale-150 border-[#2f2e6e] border-4
                    hover:border-8 transition-all duration-500 ease-in-out cursor-pointer"
                    src="/src/assets/images/pp_square.png"
                    alt="Profile picture"
                    onClick={handleImageClick}
                />
            </div>

        </div>
    )
}
