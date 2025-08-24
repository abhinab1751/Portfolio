import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,   // left
                y: Math.random() * 100,   // top
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,   // left
                y: Math.random() * 20,    // top
                delay: Math.random() * 15,
                animationDuration: Math.random() * 2.5 + 2.5,
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        top: star.y + "%",      // ✅ fixed (was star.x)
                        left: star.x + "%",     // ✅ fixed (was star.y)
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                        position: "absolute",   // ✅ ensure positioning
                        borderRadius: "50%",
                        backgroundColor: "white",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: "2px",
                        top: meteor.y * 2 + "%",          // ✅ corrected
                        left: meteor.x + "%",         // ✅ corrected
                        animationDelay: meteor.delay + "s", // ✅ was wrong before
                        animationDuration: meteor.animationDuration + "s",
                        position: "absolute",
                        backgroundColor: "white",
                    }}
                />
            ))}
        </div>
    );
};
