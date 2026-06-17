import React, { useState } from "react";

export default function Skill(props: { skill: string }) {

    const skill = JSON.parse(props.skill);
    const [logo, setLogo] = useState(skill.icon + " colored");
    function changerLogo() {
        if (logo === skill.icon) {
            setLogo(skill.icon + " colored");
        } else {
            setLogo(skill.icon);
        }
    }

    return (
        <div className={"sm:my-2 md:my-4 lg:my-6 xl:my-7 flex justify-center scale-75 sm:scale-90 md:scale-90 lg:scale-100 xl:scale-110"}>
            <a href={skill.url} className={""} target={"_blank"}>
                <i className={`${logo} text-[80px] transition duration-300 opacity-90 hover:opacity-100`} onMouseEnter={changerLogo} onMouseLeave={changerLogo}></i>
            </a>
        </div>
    )
};
