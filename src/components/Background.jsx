import React, { useEffect, useState } from 'react';

const Background = () => {
    // We only want the animation to run once on mount.
    // The blobs will start from a random position and 'float' to their final position.

    // We can randomize the start positions slightly to make it look dynamic every refresh.
    const [blobs, setBlobs] = useState([]);

    useEffect(() => {
        // Create 3-4 random blobs
        const newBlobs = Array.from({ length: 4 }).map((_, i) => ({
            id: i,
            startX: Math.random() * 100 - 50 + '%', // Random start X between -50% and 50% relative overflow
            startY: Math.random() * 100 - 50 + '%', // Random start Y
            color: i % 2 === 0 ? 'rgba(99, 102, 241, 0.35)' : 'rgba(165, 180, 252, 0.35)', // Increased opacity
            size: Math.random() * 300 + 300 + 'px', // Random size 300-600px
            top: Math.random() * 80 + '%',
            left: Math.random() * 80 + '%',
            delay: Math.random() * 0.5 + 's', // Staggered start
            duration: Math.random() * 2 + 2 + 's', // Random duration 2-4s
        }));
        setBlobs(newBlobs);
    }, []);

    return (
        <div className="bg-container">
            {blobs.map((blob) => (
                <div
                    key={blob.id}
                    className="bg-blob"
                    style={{
                        backgroundColor: blob.color,
                        width: blob.size,
                        height: blob.size,
                        top: blob.top,
                        left: blob.left,
                        '--tx': blob.startX,
                        '--ty': blob.startY,
                        animationDelay: blob.delay,
                        animationDuration: blob.duration
                    }}
                />
            ))}
        </div>
    );
};

export default Background;
