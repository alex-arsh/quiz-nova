import React from "react";
import { Geist } from "next/font/google";
import "./css/globals.css";

// Google fonts with CSS variables
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

// App metadata (SEO, head info)
export const metadata = {
    title: "Quiz Nova",
    description:
        "Quiz Nova is an innovative web application that transforms knowledge testing into an engaging experience. Offering diverse, interactive quizzes across multiple subjects, it empowers learners to challenge themselves, track growth, and unlock mastery—all within a sleek, intuitive platform.",
    applicationName: "Quiz Nova",
    generator: "Next.js",
    creator: "Alex Arsh",
    formatDetection: {
        telephone: false,
        address: false,
        email: false
    },
    icons: {
        icon: "/icons/favicon.ico",
        shortcut: "/icons/android-chrome-512.png",
        other: [
            {
                rel: "apple-touch-icon",
                url: "/icons/apple-touch-icon.png"
            },
            {
                rel: "icon",
                url: "/icons/android-chrome-192.png",
                sizes: "192x192"
            }
        ]
    }
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "var(--background)",
    colorScheme: "light dark",
    interactiveWidget: "resizes-content",
    viewportFit: "cover"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" translate="no">
            <body
                className={`${geistSans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
