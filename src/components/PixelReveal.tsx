import React, { useEffect, useMemo, useState } from 'react';

interface PixelRevealProps {
    /** When true the overlay materialises and covers the screen. */
    open: boolean;
    /** Pixel coordinates the cascade radiates from (centre of the photo). */
    origin: { x: number; y: number };
    /** Edge length of a single tile, in px. */
    tileSize?: number;
    /** Content shown on top of the tiles once they cover the screen. */
    children: React.ReactNode;
}

// Timing of the cascade. DURATION is how long one tile takes to (dis)appear;
// SPREAD is how far apart the nearest and farthest tiles fire; JITTER adds a
// little per-tile randomness so the front edge looks organic, not like a ruler.
const DURATION = 280;
const SPREAD = 460;
const JITTER = 140;

/**
 * Reveals its children with a grid of square tiles that materialise outward
 * from `origin` (the profile photo) and dissolve back toward it on close.
 * Replaces the previous circular `clip-path` wipe.
 */
export default function PixelReveal({ open, origin, tileSize = 56, children }: PixelRevealProps) {
    const [viewport, setViewport] = useState({ w: 0, h: 0 });

    // Track the viewport so the tile grid always covers the whole screen.
    useEffect(() => {
        const measure = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    const cols = Math.ceil(viewport.w / tileSize);
    const rows = Math.ceil(viewport.h / tileSize);

    // Per-tile random offsets, stable until the grid is resized — so the
    // cascade doesn't reshuffle every time the menu toggles.
    const jitter = useMemo(() => {
        const arr = new Array(cols * rows);
        for (let i = 0; i < arr.length; i++) arr[i] = Math.random();
        return arr;
    }, [cols, rows]);

    // Longest distance from the origin to any corner — used to normalise delays.
    const maxDist = useMemo(() => {
        const corners = [
            [0, 0],
            [viewport.w, 0],
            [0, viewport.h],
            [viewport.w, viewport.h],
        ];
        return Math.max(
            1,
            ...corners.map(([cx, cy]) => Math.hypot(cx - origin.x, cy - origin.y)),
        );
    }, [viewport.w, viewport.h, origin.x, origin.y]);

    const tiles = [];
    for (let i = 0; i < cols * rows; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cx = col * tileSize + tileSize / 2;
        const cy = row * tileSize + tileSize / 2;
        const dist = Math.hypot(cx - origin.x, cy - origin.y) / maxDist; // 0 = at photo, 1 = farthest

        // Opening rolls outward from the photo; closing recedes back into it.
        const delay = (open ? dist : 1 - dist) * SPREAD + jitter[i] * JITTER;

        tiles.push(
            <div
                key={i}
                style={{
                    backgroundColor: 'var(--color-coutPurple)',
                    opacity: open ? 1 : 0,
                    transform: open ? 'scale(1)' : 'scale(0.35)',
                    transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                    transitionDelay: `${delay}ms`,
                }}
            />,
        );
    }

    return (
        <div
            aria-hidden={!open}
            className="absolute inset-0 z-40 overflow-hidden"
            style={{ pointerEvents: open ? 'auto' : 'none' }}
        >
            {/* Tile layer: the coutPurple background that materialises. */}
            <div
                className="absolute inset-0"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cols}, ${tileSize}px)`,
                    gridTemplateRows: `repeat(${rows}, ${tileSize}px)`,
                    pointerEvents: 'none',
                }}
            >
                {tiles}
            </div>

            {/* Content layer: fades in once the tiles have covered the screen. */}
            <div
                className="absolute inset-0 overflow-y-auto overflow-x-hidden"
                style={{
                    opacity: open ? 1 : 0,
                    transition: open
                        ? `opacity 400ms ease-out ${SPREAD * 0.55}ms`
                        : 'opacity 150ms ease-in',
                    pointerEvents: open ? 'auto' : 'none',
                }}
            >
                {children}
            </div>
        </div>
    );
}
