"use client";
import React, { useState, useEffect } from "react";
import "./style.css"; // Import your CSS module

export default function MirrorImage() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.altKey && event.key === "/") {
                setShowImage((prevState) => !prevState);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <main>
            {showImage && <div className={"overlay"}></div>}
            {/* Content goes here */}
        </main>
    );
}
