import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const Skills = () => {
    return (
        <section id="skills">
            <RevealOnScroll>
                <h2>Skills</h2>
                <div className="skills-content">
                    <div className="skill-category">
                        <h3>Technical Skills</h3>
                        <ul className="skill-list">
                            <li><strong>Programming Languages:</strong> C, Java, OOP</li>
                            <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript</li>
                            <li><strong>Version Control:</strong> Git, GitHub</li>
                            <li><strong>Tools & Editors:</strong> VS Code, Antigravity</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Soft Skills</h3>
                        <ul className="skill-list">
                            <li>Effective Communication</li>
                            <li>Teamwork</li>
                            <li>Time Management</li>
                            <li>Problem Solving</li>
                            <li>Willingness to Learn</li>
                        </ul>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Skills;
