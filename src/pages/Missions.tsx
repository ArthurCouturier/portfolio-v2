import React from "react";
import MissionCard from "../components/MissionCard";

export default function Missions() {
    return (
        <div className={"flex flex-col justify-center"}>
            <h1 className="text-center text-coutYellow scale-150">Missions I've done</h1>
            <div className={"flex-col items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-10"}>
                <MissionCard title="Thalès / Telespazio" url="/missions/telespazio">
                    <img src="/content/telespazio/telespazio-logo.png" alt="Pepperz Logo" />
                </MissionCard>
                <MissionCard title="Pepperz App" url="/missions/pepperz-app">
                    <img src="/content/pepperz/pepperz-logo.png" alt="Pepperz Logo" />
                </MissionCard>
                <MissionCard title="This Portfolio" url="">
                    This Portfolio
                </MissionCard>
                <MissionCard title="My ex-Portfolio" url="">
                    My ex-Portfolio
                </MissionCard>
                <MissionCard title="Anthéa Avocats Associés" url="">
                    Anthéa Avocats Associés
                </MissionCard>
            </div>
        </div>
    );
}
