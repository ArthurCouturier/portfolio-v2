import React from "react";

export default function SkillCategoryButton({ children, url }) {
    const scalling = "scale-[1.5] sm:scale-[1.6] md:scale-[1.8] lg:scale-[2] active:scale-[1.3] active:sm:scale-[1.4] active:md:scale-[1.6] active:lg:scale-[1.8]"
    const colors = "text-coutYellow bg-coutPurple border-coutYellow"
    return (
        <button
            className={`font-bold text-center md:text-center font-tigedeblug w-[20vw] block mx-auto border-2 bg-opacity-80 hover:bg-opacity-100 ${colors} ${scalling} transition duration-200`}
            onClick={() => window.location.href = url}
        >
            {children}
        </button>
    )
}
