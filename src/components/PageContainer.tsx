import React from "react";

/**
 * Shared page container for the missions section.
 * Horizontal padding keeps the content clear of the logo (left) and the profile
 * picture (right) on wider screens, where the transparent header overlays it.
 */
export default function PageContainer({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`w-full max-w-6xl mx-auto px-6 md:px-[120px] lg:px-[150px] 2xl:px-[180px] ${className}`}>
            {children}
        </div>
    );
}
