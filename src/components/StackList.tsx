import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Stack } from "../data/missions";

const CATEGORIES: { key: keyof Stack; labelKey: string }[] = [
    { key: "back", labelKey: "stack.back" },
    { key: "front", labelKey: "stack.front" },
    { key: "data", labelKey: "stack.data" },
    { key: "sre", labelKey: "stack.sre" },
    { key: "other", labelKey: "stack.other" },
];

export default function StackList({ stack }: { stack: Stack }) {
    const { t } = useLanguage();

    const rows = CATEGORIES.filter(({ key }) => stack[key] && stack[key]!.length > 0);
    if (rows.length === 0) return null;

    return (
        <div className="flex flex-col gap-2">
            {rows.map(({ key, labelKey }) => (
                <div key={key} className="flex items-center gap-3">
                    <span className="text-coutYellow text-sm font-bold w-14 shrink-0">{t(labelKey)}</span>
                    {/* Inline list resets override the `.markdown-content ul/li`
                        rules (disc bullets + indent) on mission article pages. */}
                    <ul className="flex flex-wrap gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {stack[key]!.map((tech) => (
                            <li
                                key={tech}
                                className="text-xs font-normal text-white bg-coutPurple/60 rounded-full px-3 py-1"
                                style={{ margin: 0 }}
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
