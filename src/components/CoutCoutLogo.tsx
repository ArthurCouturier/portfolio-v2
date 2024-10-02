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
            className="font-extrabold font-tigedeblug flex items-center w-min scale-150"
            href={"/"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={"text-center w-3 " + (isHovered ? " -mb-2" : " -mt-2")}>
                <div className={"text-[#f4cf77] " + smallLetterClassName}>C</div>
                <div className={"text-[#2f2e6e] " + bigLetterClassName + " -mt-2"}>C</div>
            </div>
            <div className={"w-3 " + (isHovered ? " -mb-0.5" : " -mt-0.5")}>
                <div className={"text-[#f4cf77] " + bigLetterClassName}>O</div>
                <div className={"text-[#2f2e6e] " + smallLetterClassName}>O</div>
            </div>
            <div className={"w-3 " + (isHovered ? " -mb-0.5" : " -mt-0.5")}>
                <div className={"text-[#f4cf77] " + bigLetterClassName}>U</div>
                <div className={"text-[#2f2e6e] " + smallLetterClassName}>U</div>
            </div>
            <div className={"text-center w-3 " + (isHovered ? " -mb-2" : " -mt-2")}>
                <div className={"text-[#f4cf77] " + smallLetterClassName}>T</div>
                <div className={"text-[#2f2e6e] " + bigLetterClassName + " -mt-2"}>T</div>
            </div>
        </a>
    )
}
