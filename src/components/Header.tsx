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
        <div className="m-12 flex relative"> {/* Assure-toi que le Header a un z-index plus élevé */}
            <div className="flex-1">
                <CoutCoutLogo animated={true} />
            </div>
            <div className="relative flex-5">
                <ExpandCircle circleState={circleState} setCircleState={setCircleState} />
                <img
                    className="relative w-[7vw] rounded-full scale-150 border-[#2f2e6e] border-4
          hover:border-8 transition-all duration-500 ease-in-out cursor-pointer z-50"
                    src="/src/assets/images/pp_square.png"
                    alt="Profile picture"
                    onClick={handleImageClick}
                />
            </div>
        </div>
    );
}
