import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Reusable "back" button (rounded, coutYellow on coutPurple).
 * - `to`: destination route
 * - `label`: optional custom label (defaults to the localized "Back")
 * - `className`: extra classes for positioning by the caller
 */
export default function BackButton({
    to,
    label,
    className = "",
}: {
    to: string;
    label?: string;
    className?: string;
}) {
    const { t } = useLanguage();
    return (
        <Link
            to={to}
            className={`inline-block text-coutYellow bg-coutPurple/80 hover:bg-coutPurple border-2 border-coutYellow rounded-lg px-5 py-2 transition duration-200 ${className}`}
        >
            ← {label ?? t("mission.back")}
        </Link>
    );
}
