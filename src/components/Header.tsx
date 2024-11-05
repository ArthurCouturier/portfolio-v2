import React, { useState } from 'react';
import CoutCoutLogo from './CoutCoutLogo';
import ExpandCircle from './ExpandCircle/ExpandCircle.tsx';

export default function Header(props: { handleCircleExpanded: () => void }) {
    const [circleState, setCircleState] = useState('closed'); // 'closed', 'opening', 'closing'

    const handleImageClick = () => {
        props.handleCircleExpanded();
        if (circleState === 'closed') {
            setCircleState('opening');
        } else {
            setCircleState('closing');
            setTimeout(() => {
                setCircleState('closed');
            }, 1500); // Animation duration before the circle is closed
        }
    };

    return (
        <div className="m-12 flex relative">
            <div className="flex-1">
                <CoutCoutLogo animated={true} />
            </div>
            <div className="relative flex-5">
                <ExpandCircle circleState={circleState} setCircleState={setCircleState} />
                <img
                    className="relative w-[12vw] sm:w-[10vw] md:w-[7vw] lg:w-[6vw] xl:w-[5vw] rounded-full scale-[1.5] border-coutPurple border-4
          hover:border-8 transition-all duration-500 ease-in-out cursor-pointer z-50"
                    src="/images/pp_square.png"
                    alt="Profile picture"
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
}
