import React from "react";
import { useNavigate } from "react-router-dom";

export default function SkillCategoryButton({ children, url }) {
    const navigate = useNavigate();
    const scalling = "scale-[1.5] sm:scale-[1.6] md:scale-[1.8] lg:scale-[2] active:scale-[1.3] active:sm:scale-[1.4] active:md:scale-[1.6] active:lg:scale-[1.8]"
    const colors = "text-coutYellow bg-coutPurple/80 hover:bg-coutPurple border-coutYellow"
    const className = `font-bold text-center md:text-center font-tigedeblug w-[20vw] block mx-auto border-2 ${colors} ${scalling} transition duration-200`

    const isExternal = /^https?:\/\//.test(url);

    if (isExternal) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
                {children}
            </a>
        );
    }

    return (
        <button className={className} onClick={() => navigate(url)}>
            {children}
        </button>
    );
}
