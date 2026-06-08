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
                        <div className="skills-tags">
                            <span className="skill-badge">HTML5</span>
                            <span className="skill-badge">CSS</span>
                            <span className="skill-badge">BootStrap</span>
                            <span className="skill-badge">Javascript</span>
                            <span className="skill-badge">React js</span>
                            <span className="skill-badge">Rest APIs</span>
                            <span className="skill-badge">Mongo DB</span>
                            <span className="skill-badge">Node js</span>
                            <span className="skill-badge">MySQL</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Tools & Editors</h3>
                        <div className="skills-tags">
                            <span className="skill-badge">Git/Github</span>
                            <span className="skill-badge">VS Code</span>
                            <span className="skill-badge">Antigravity</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Soft Skills</h3>
                        <div className="skills-tags">
                            <span className="skill-badge">Problem Solving</span>
                            <span className="skill-badge">Communication</span>
                            <span className="skill-badge">Team Collaboration</span>
                            <span className="skill-badge">Continuous Learning</span>
                            <span className="skill-badge">Debugging</span>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Skills;
