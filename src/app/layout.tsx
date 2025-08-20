import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./css/globals.css";

// Google fonts with CSS variables
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
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
    }
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "var(--primary-background)",
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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
