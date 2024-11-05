import React, { useState } from "react";

export default function MissionCard({ children, title, url }) {
    const [handled, setHandled] = useState(false);

    return (
        <button
            className="bg-coutPurple bg-opacity-60 rounded-3xl w-[61vw] md:w-[36vw] xl:w-[18vw] mx-auto my-5 transition duration-200 hover:scale-95 active:scale-105"
            onClick={() => window.location.href = url}
            onMouseEnter={() => setHandled(true)}
            onMouseLeave={() => setHandled(false)}
        >
            <h1 className="mt-3 text-coutYellow">{title}</h1>
            <div className="w-[55vw] md:w-[30vw] xl:w-[15vw] h-[55vw] md:h-[30vw] xl:h-[15vw] mx-auto mt-5">
                {children}
            </div>
            <div className={`my-3 ${handled && "scale-110"} transition duration-200`}>More ...</div>
        </button>
    )
}
