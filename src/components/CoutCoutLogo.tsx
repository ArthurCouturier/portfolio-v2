import React, { useState } from "react";

export default function CoutCoutLogo(props: { animated: boolean }) {

    const { animated } = props

    const [bigLetterClassName, setBigLetterClassName] = useState("text-4xl leading-none text-center -mb-2")
    const [smallLetterClassName, setSmallLetterClassName] = useState("text-3xl leading-none mr-5 scale-x-125")

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        if (animated) {
            setBigLetterClassName("text-3xl leading-none mr-5 scale-x-125")
            setSmallLetterClassName("text-4xl leading-none -mt-2")
            setIsHovered(true)
        }
    }

    const handleMouseLeave = () => {
        setBigLetterClassName("text-4xl leading-none text-center -mb-2")
        setSmallLetterClassName("text-3xl leading-none mr-5 scale-x-125")
        setIsHovered(false)
    }

    return (
        <a
            className="font-extrabold font-tigedeblug flex items-center w-min scale-[1.4] sm:scale-[1.6] md:scale-[1.8] lg:scale-[2] xl:scale-[2.2] 2xl:scale-[2.5]"
            href={"/"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={"text-center w-3 " + (isHovered ? " -mb-2" : " -mt-2")}>
                <div className={"text-coutYellow " + smallLetterClassName}>C</div>
                <div className={"text-coutPurple " + bigLetterClassName + " -mt-2"}>C</div>
            </div>
            <div className={"w-3 " + (isHovered ? " -mb-0.5" : " -mt-0.5")}>
                <div className={"text-coutYellow " + bigLetterClassName}>O</div>
                <div className={"text-coutPurple " + smallLetterClassName}>O</div>
            </div>
            <div className={"w-3 " + (isHovered ? " -mb-0.5" : " -mt-0.5")}>
                <div className={"text-coutYellow " + bigLetterClassName}>U</div>
                <div className={"text-coutPurple " + smallLetterClassName}>U</div>
            </div>
            <div className={"text-center w-3 " + (isHovered ? " -mb-2" : " -mt-2")}>
                <div className={"text-coutYellow " + smallLetterClassName}>T</div>
                <div className={"text-coutPurple " + bigLetterClassName + " -mt-2"}>T</div>
            </div>
        </a>
    )
}
