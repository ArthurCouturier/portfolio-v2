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
        <div className="m-6 relative">
            <CoutCoutLogo animated={true} />
            <div className="absolute top-0 right-0 flex items-center justify-center">
                <ExpandCircle circleState={circleState} setCircleState={setCircleState} />
                <img
                    className="relative w-[16vw] sm:w-[13vw] md:w-[9vw] lg:w-[8vw] xl:w-[6.5vw] rounded-full border-coutPurple border-4
          hover:border-8 transition-all duration-500 ease-in-out cursor-pointer z-50"
                    src="/images/pp_square.webp"
                    alt="Profile picture"
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
}
