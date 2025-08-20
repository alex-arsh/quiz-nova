"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import styles from "@/app/css/modules/Dashboard.module.css";

export default function Dashboard() {
    const [rawName, setRawName] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [showNameInput, setShowNameInput] = useState<boolean>(true);

    // Load from localStorage when component mounts
    useEffect(() => {
        try {
            const stored = localStorage.getItem("quiz_nova_user");
            if (stored) {
                setName(stored);
                setRawName(stored);
                setShowNameInput(false); // skip input if name already exists
            }
        } catch {}
    }, []);

    // Debounce to avoid hydration/input lag
    const debouncedSetName = useMemo(
        () => debounce((val: string) => setName(val.trim()), 300),
        []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRawName(e.target.value);
        debouncedSetName(e.target.value);
    };

    const handleGetStarted = () => {
        if (name) {
            try {
                localStorage.setItem("quiz_nova_user", name);
            } catch {}
        }
        document
            .getElementById("about-quiz-nova")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === "Enter") handleGetStarted();
    };

    const displayName = name || "Student";

    return (
        <div className={styles.root}>
            {/* Full-screen hero */}
            <main className={styles.hero}>
                <div className={styles.heroInner}>
                    {/* Title */}
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Welcome to{" "}
                        <span className={styles.accent}>Quiz Nova</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className={styles.sub}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        Hello <strong>{displayName}</strong> — ignite curiosity,
                        challenge yourself, and shine ✨
                    </motion.p>

                    {/* Input / Buttons */}
                    <motion.div
                        className={styles.controls}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {showNameInput ? (
                            <div className={styles.nameWrap}>
                                <motion.input
                                    whileFocus={{
                                        scale: 1.05,
                                        borderColor: "#4f86f7"
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    className={styles.input}
                                    placeholder="Enter your name (optional)"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    aria-label="Your name"
                                />
                                <motion.button
                                    className={styles.cta}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleGetStarted}
                                >
                                    Get Started
                                </motion.button>
                                <motion.button
                                    className={styles.ghost}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setShowNameInput(false);
                                        setName("");
                                        document
                                            .getElementById("about-quiz-nova")
                                            ?.scrollIntoView({
                                                behavior: "smooth"
                                            });
                                    }}
                                >
                                    Skip
                                </motion.button>
                            </div>
                        ) : (
                            <motion.button
                                className={styles.cta}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleGetStarted}
                            >
                                Get Started
                            </motion.button>
                        )}
                    </motion.div>

                    {/* Hint */}
                    <motion.p
                        className={styles.hint}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        A better place to learn & compete — scroll to learn more
                    </motion.p>
                </div>

                {/* Decorative blobs (floating animation) */}
                <motion.svg
                    className={`${styles.blob} ${styles.blob1}`}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                    }}
                >
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0" stopColor="#ff7eb3" />
                            <stop offset="1" stopColor="#ffb199" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#g1)"
                        d="M41.6,-69.8C53.6,-61.5,64.5,-53.1,72.2,-41.6C79.9,-30.1,84.4,-15,83.3,-1.1C82.2,12.8,75.6,25.6,68.1,37.1C60.6,48.6,52.2,58.8,40.9,66.6C29.6,74.4,15,79.8,1,78.1C-13,76.3,-26.1,67.5,-37.9,57C-49.8,46.6,-60.3,34.6,-67.9,20.6C-75.5,6.6,-80.2,-10.6,-73.4,-24.7C-66.5,-38.7,-48.9,-49.7,-32,-59.2C-15.1,-68.7,-7.6,-76.6,4.9,-83.4C17.3,-90.2,34.6,-95.9,41.6,-69.8Z"
                        transform="translate(100 100)"
                    />
                </motion.svg>

                <motion.svg
                    className={`${styles.blob} ${styles.blob2}`}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                    animate={{ y: [0, 25, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 7,
                        ease: "easeInOut"
                    }}
                >
                    <defs>
                        <linearGradient id="g2" x1="0" x2="1">
                            <stop offset="0" stopColor="#7afcff" />
                            <stop offset="1" stopColor="#4f86f7" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#g2)"
                        d="M36.8,-58.2C46.8,-52.9,57.5,-46.5,63.8,-36.9C70.1,-27.4,72,-14.7,71.9,-1.1C71.7,12.6,69.5,25.1,63.1,35.9C56.8,46.7,46.2,55.9,33.5,62.6C20.8,69.4,6,73.6,-7.7,78.1C-21.3,82.6,-42.6,87.4,-50.3,79.9C-58,72.4,-52.2,52.6,-53.6,36.7C-55,20.9,-63.6,8.4,-63.4,-4.2C-63.2,-16.8,-54.3,-29.6,-42.8,-36.6C-31.2,-43.6,-15.6,-44.9,-1.6,-42.3C12.3,-39.7,24.6,-33.5,36.8,-58.2Z"
                        transform="translate(100 100)"
                    />
                </motion.svg>
            </main>

            {/* Scrolling content */}
            <motion.section
                id="about-quiz-nova"
                className={styles.section}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>What is Quiz Nova?</h2>
                    <p className={styles.text}>
                        Quiz Nova is a modern quiz platform designed to make
                        learning delightful. Bite-sized quizzes, beautiful UI,
                        smart feedback and meaningful progress — all crafted to
                        make you enjoy the journey of learning.
                    </p>
                </div>
            </motion.section>

            <motion.section
                className={`${styles.section} ${styles.alt}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>How it works</h2>
                    <ol className={styles.list}>
                        <li>
                            <strong>Start:</strong> Choose a topic and
                            difficulty.
                        </li>
                        <li>
                            <strong>Play:</strong> Take a short quiz (5–15
                            questions).
                        </li>
                        <li>
                            <strong>Learn:</strong> Get instant feedback and
                            tips.
                        </li>
                        <li>
                            <strong>Improve:</strong> Track progress and retake
                            improved sets.
                        </li>
                    </ol>
                </div>
            </motion.section>

            <motion.section
                className={styles.section}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Ready to begin?</h2>
                    <p className={styles.text}>
                        When you’re ready, click Get Started or explore sample
                        quizzes to feel the vibe.
                    </p>
                    <div style={{ marginTop: 16 }}>
                        <motion.button
                            className={styles.cta}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => (window.location.href = "/quizzes")}
                        >
                            Explore Quizzes
                        </motion.button>
                        <motion.button
                            className={styles.ghost}
                            style={{ marginTop: 8 }}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => (window.location.href = "/signup")}
                        >
                            Create Account
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            <motion.footer
                className={styles.footer}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <p>&copy; {new Date().getFullYear()} Quiz Nova ✨</p>
            </motion.footer>
        </div>
    );
}
