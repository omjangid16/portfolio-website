import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const Experience = () => {
    return (
        <section id="experience">
            <RevealOnScroll>
                <h2>Experience & Achievements</h2>
                <div className="experience-timeline">
                    <div className="experience-item">
                        <h3>Fresher | Open to Internships</h3>
                        <p className="exp-date">Present</p>
                        <p>
                            Currently seeking internship opportunities to gain industry exposure, apply academic knowledge,
                            and learn from experienced professionals in a real-world environment.
                        </p>
                    </div>

                    <h3 className="sub-heading">Achievements</h3>
                    <div className="achievements-list">
                        <div className="achievement-item">
                            <h4>Smart India Hackathon</h4>
                            <p>Participant</p>
                        </div>
                        <div className="achievement-item">
                            <h4>Odoo X GCET Hackathon</h4>
                            <p>Participant</p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Experience;
