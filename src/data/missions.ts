export type Lang = "fr" | "en";
export type Localized = { fr: string; en: string };

export interface MissionLink {
    label: Localized;
    url: string;
    /** Optional store badge image per language; rendered instead of a text button. */
    badge?: Localized;
}

/** Technologies grouped by category. Each category is a line of techs. */
export interface Stack {
    back?: string[];
    front?: string[];
    data?: string[];
    sre?: string[];
    other?: string[];
}

export interface MissionArticle {
    slug: string;
    title: Localized;
    excerpt: Localized;
    /** Markdown files live in /content/plan-appetit/articles/<slug>.<lang>.md */
    path: (lang: Lang) => string;
}

export interface Mission {
    slug: string;
    /** Internal route, or undefined for external-only cards. */
    route?: string;
    /** External link used when there is no detail page. */
    externalUrl?: string;
    category: "pro" | "project";
    title: string;
    image?: string;
    role?: Localized;
    period?: string;
    stack?: Stack;
    summary: Localized;
    /** Markdown body path for generic detail pages (CV-based experiences). */
    contentPath?: (lang: Lang) => string;
    links?: MissionLink[];
    articles?: MissionArticle[];
}

export const planAppetitArticles: MissionArticle[] = [
    {
        slug: "lidee-derriere-plan-appetit",
        title: {
            fr: "1 — L'idée derrière Plan Appétit",
            en: "1 — The idea behind Plan Appétit",
        },
        excerpt: {
            fr: "De la billetterie à la restauration : comment est née l'idée, le choix du nom, et le premier générateur de recettes par IA.",
            en: "From ticketing to cooking: how the idea was born, choosing the name, and the first AI recipe generator.",
        },
        path: (lang) => `/content/plan-appetit/articles/lidee-derriere-plan-appetit.${lang}.md`,
    },
];

export const missions: Mission[] = [
    {
        slug: "plan-appetit",
        route: "/missions/plan-appetit",
        category: "pro",
        title: "Plan'Appétit",
        image: "/content/plan-appetit/logo-1024-plain.png",
        role: { fr: "Fondateur solo", en: "Solo Founder" },
        period: "2025 - 2026",
        stack: {
            back: ["Kotlin", "Spring Boot"],
            front: ["React", "TypeScript", "Tailwind"],
            data: ["PostgreSQL", "Flyway"],
            sre: ["Docker", "Kubernetes", "VPS"],
            other: ["Capacitor", "AI integration", "Meta Ads"],
        },
        summary: {
            fr: "J'ai fondé Plan Appétit, une app de planification de repas et de génération de recettes par IA. J'ai conçu, développé et mis en production le produit de bout en bout, en solo, jusqu'à atteindre des milliers d'utilisateurs.",
            en: "I founded Plan Appétit, a meal-planning & AI recipe-generation app. I designed, built and shipped the full product end-to-end as a solo founder, reaching thousands of users.",
        },
        links: [
            { label: { fr: "App Store", en: "App Store" }, url: "https://apps.apple.com/app/plan-app%C3%A9tit/id6756276676", badge: { fr: "/content/plan-appetit/badges/app-store-fr.svg", en: "/content/plan-appetit/badges/app-store-en.svg" } },
            { label: { fr: "Play Store", en: "Play Store" }, url: "https://play.google.com/store/apps/details?id=fr.planappetit.app", badge: { fr: "/content/plan-appetit/badges/google-play-fr.svg", en: "/content/plan-appetit/badges/google-play-en.svg" } },
            { label: { fr: "Web App", en: "Web App" }, url: "https://www.plan-appetit.fr" },
        ],
        articles: planAppetitArticles,
    },
    {
        slug: "openairlines",
        route: "/missions/openairlines",
        category: "pro",
        title: "OpenAirlines",
        image: "/content/openairlines/openairlines_logo-2.jpeg",
        role: { fr: "Data Engineer (Freelance)", en: "Data Engineer (Freelance)" },
        period: "2025",
        stack: {
            back: ["Java", "Spring Boot", "Kotlin", "Python"],
            front: ["Angular", "TypeScript"],
            data: ["SQL", "Flyway", "MySQL", "Mongo"],
            sre: ["Docker", "Kubernetes"],
            other: ["Shape Up", "Hexagonal Architecture"],
        },
        summary: {
            fr: "Trois contrats successifs dans cette entreprise d'efficacité carburant qui aide les compagnies aériennes à économiser du kérosène. Développement et maintenance du pipeline d'intégration de données.",
            en: "Three successive contracts in this fuel-efficiency company helping airlines save fuel. Developed and maintained the data integration pipeline.",
        },
        contentPath: (lang) => `/content/openairlines/openairlines.${lang}.md`,
    },
    {
        slug: "telespazio",
        route: "/missions/telespazio",
        category: "pro",
        title: "Telespazio (Thales)",
        image: "/content/telespazio/telespazio_belgium_logo.jpeg",
        role: { fr: "Data Engineer (Freelance)", en: "Data Engineer (Freelance)" },
        period: "2024",
        stack: {
            back: ["Java", "Spring", "Python", "FastAPI"],
            data: ["OpenSearch", "RabbitMQ"],
            sre: ["Docker", "Kubernetes", "Helm", "GitLab CI"],
            other: ["Keycloak"],
        },
        summary: {
            fr: "Société du groupe Thales franco-italien dans l'observation spatiale. J'ai architecturé et développé une solution d'intégration de données à grande échelle, de l'architecture à la production.",
            en: "A Franco-Italian Thales group company in the space-observation industry. I architected and developed a large-scale data integration solution, end-to-end from architecture to production.",
        },
        contentPath: (lang) => `/content/telespazio/telespazio.${lang}.md`,
    },
    {
        slug: "lyra",
        route: "/missions/lyra",
        category: "pro",
        title: "Lyra Network",
        image: "/content/lyra/logo.png",
        role: { fr: "Ingénieur Back-End (CDD)", en: "Back-End Engineer (Fixed-term)" },
        period: "2022 – 2023",
        stack: {
            back: ["Java", "Spring Boot", "JBoss"],
            sre: ["Jenkins", "Yeoman"],
            other: ["Scrum"],
        },
        summary: {
            fr: "Au sein du département e-commerce de ce prestataire de paiement, j'ai mené la migration de solutions de paiement de JBoss vers Spring Boot, de façon transparente pour les clients.",
            en: "In the e-commerce department of this payment service provider, I led the migration of payment solutions from JBoss to Spring Boot, transparently for all customers.",
        },
        contentPath: (lang) => `/content/lyra/lyra.${lang}.md`,
    },
    {
        slug: "pepperz",
        route: "/missions/pepperz-app",
        category: "project",
        title: "Pepperz App",
        image: "/content/pepperz/pepperz-logo.png",
        summary: {
            fr: "Une application mobile et web que j'ai conçue et développée.",
            en: "A mobile & web application I designed and built.",
        },
        links: [
            { label: { fr: "Ouvrir Pepperz", en: "Open Pepperz" }, url: "https://www.pepperz.app" },
        ],
    },
    {
        slug: "galaxy",
        route: "/missions/galaxy",
        category: "project",
        title: "Three.js Galaxy",
        image: "/content/galaxy/pageImage.png",
        summary: {
            fr: "Une galaxie générée et animée en temps réel avec Three.js (WebGL).",
            en: "A real-time generated and animated galaxy built with Three.js (WebGL).",
        },
    },
];

export function getMission(slug: string): Mission | undefined {
    return missions.find((m) => m.slug === slug);
}
