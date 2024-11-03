import React from "react";

export default function MissionCard({ children }) {
    return (
        <button className="bg-green-300 w-[80vw] md:w-[40vw] xl:w-[25vw] mx-auto my-5">
            <h1 className="mt-3">{children}</h1>
            <div className="bg-blue-400 w-[55vw] md:w-[30vw] xl:w-[15vw] h-[55vw] md:h-[30vw] xl:h-[15vw] mx-auto mt-5"></div>
            <div className="my-3 hover:scale-110 transition duration-200">More ...</div>
        </button>
    )
}
