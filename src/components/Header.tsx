import React from 'react';
import CoutCoutLogo from './CoutCoutLogo';
import LanguageToggle from './LanguageToggle';

export default function Header(props: { onToggleMenu: () => void }) {
    return (
        <div className="m-6 relative">
            <span className="inline-block pointer-events-auto">
                <CoutCoutLogo animated={true} />
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto">
                <LanguageToggle />
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center pointer-events-auto">
                <img
                    id="profile-photo"
                    className="relative w-[16vw] sm:w-[13vw] md:w-[9vw] lg:w-[8vw] xl:w-[6.5vw] rounded-full border-coutPurple border-4
          hover:border-8 transition-all duration-300 ease-in-out cursor-pointer z-50"
                    src="/images/pp_square.webp"
                    alt="Profile picture"
                    onClick={props.onToggleMenu}
                />
            </div>
        </div>
    );
}
