import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const Experience = () => {
    return (
        <section id="experience">
            <RevealOnScroll>
                <h2>Experience & Achievements</h2>
                <div className="experience-timeline">
                    <div className="experience-item">
                        <h3>Web Development Intern</h3>
                        <p className="exp-date">05/2026 - 06/2026</p>
                        <p style={{ fontWeight: '600', color: '#fff', marginBottom: '0.5rem' }}>
                            Brainybeam Info-Tech PVT LTD
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--secondary-color)', fontSize: '0.95rem' }}>
                            <li>Learned and applied HTML, CSS, JavaScript, Bootstrap, React.js, and Node.js.</li>
                            <li>Worked with REST APIs, JSON data, and asynchronous JavaScript.</li>
                            <li>Developed a responsive User Authentication UI including Login and Signup pages.</li>
                            <li>Improved skills in frontend development, debugging, and responsive web design.</li>
                        </ul>
                    </div>

                    <h3 className="sub-heading">Hackathon and Competitions</h3>
                    <div className="achievements-list">
                        <div className="achievement-item">
                            <h4>Internal smart India Hackathon (SIH-2025)</h4>
                        </div>
                        <div className="achievement-item">
                            <h4>Odoo X GCET Hackathon</h4>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Experience;
