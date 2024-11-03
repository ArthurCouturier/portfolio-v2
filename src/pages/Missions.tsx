import React from "react";
import MissionCard from "../components/MissionCard";

export default function Missions() {
    return (
        <div className={"bg-red-400 flex flex-col justify-center"}>
            <h1 className="text-center">Missions I've done</h1>
            <div className={"flex-col items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-10"}>
                <MissionCard>Thalès / Telespazio</MissionCard>
                <MissionCard>Pepperz App</MissionCard>
                <MissionCard>This Portfolio</MissionCard>
                <MissionCard>My ex-Portfolio</MissionCard>
                <MissionCard>Anthéa Avocats Associés</MissionCard>
            </div>
        </div>
    );
}
