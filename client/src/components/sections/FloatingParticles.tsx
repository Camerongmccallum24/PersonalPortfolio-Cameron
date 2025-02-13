import React from "react";

export const FloatingParticles = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(15)].map((_, index) => (
                <div
                    key={index}
                    className="background-particles"
                    style={{
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${Math.random() * 4 + 2}s`,
                    }}
                />
            ))}
        </div>
    );
};
