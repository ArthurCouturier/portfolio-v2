import React from "react";
import { Link } from "react-router-dom";
import type { Mission } from "../data/missions";

export default function MissionCard({ mission }: { mission: Mission }) {
    const isExternal = !mission.route && !!mission.externalUrl;

    const className =
        "group relative block w-full max-w-[400px] aspect-[4/3] rounded-3xl overflow-hidden " +
        "bg-coutPurple/50 ring-1 ring-white/10 hover:ring-2 hover:ring-coutYellow/70 " +
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";

    const inner = (
        <>
            {/* Visual area */}
            <div className="absolute inset-0 flex items-center justify-center p-10 bg-gradient-to-br from-white/10 to-transparent">
                {mission.image ? (
                    <img
                        src={mission.image}
                        alt={mission.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <span className="font-tigedeblug text-coutYellow text-4xl md:text-5xl text-center leading-tight transition-transform duration-300 group-hover:scale-105">
                        {mission.title}
                    </span>
                )}
            </div>

            {/* Bottom title bar (only when there is an image, to avoid duplicating the title) */}
            {mission.image && (
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 bg-gradient-to-t from-coutPurple to-transparent">
                    <h2 className="text-white text-lg font-bold truncate">{mission.title}</h2>
                    <span className="text-coutYellow text-xl shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" aria-hidden="true">
                        →
                    </span>
                </div>
            )}

            {/* Arrow for image-less cards */}
            {!mission.image && (
                <span className="absolute bottom-4 right-4 text-coutYellow text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                    →
                </span>
            )}
        </>
    );

    if (isExternal) {
        return (
            <a href={mission.externalUrl} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
            </a>
        );
    }

    return (
        <Link to={mission.route!} className={className}>
            {inner}
        </Link>
    );
}
