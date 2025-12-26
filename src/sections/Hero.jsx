import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="animate-slide-up delay-100">Om Jangid</h1>
                <h3 className="animate-slide-up delay-200">B.Tech Student | Computer Science & Design</h3>
                <p className="animate-fade delay-300">Aspiring software developer with a strong interest in web technologies and problem-solving. Passionate about learning, building projects, and growing in a professional environment.</p>
                <div className="hero-buttons animate-scale delay-400">
                    <a href="#projects" className="cta-button">View Work</a>
                    <a href="#contact" className="cta-button outline">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
