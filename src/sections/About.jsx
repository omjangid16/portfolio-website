import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => {
    return (
        <section id="about" className="about-section">
            <RevealOnScroll>
                <h2>About Me</h2>
                <div className="about-content">
                    <p>
                        I am currently pursuing my B.Tech in Computer Science and Design at A. D. Patel Institute of Technology, CVM University. I have a strong foundation in programming concepts and web development, and I am actively working on improving my skills through hands-on projects and continuous learning.
                    </p>
                    <br />
                    <p>
                        I am motivated, detail-oriented, and eager to gain real-world experience through internships and collaborative opportunities. I believe in writing clean code, learning from feedback, and consistently improving my technical abilities.
                    </p>
                    <br />
                    <p>
                        <strong>Interests:</strong> Web Development, Learning New Technologies, Problem Solving, Running and Fitness.
                    </p>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;
