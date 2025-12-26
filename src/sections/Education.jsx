import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const Education = () => {
    return (
        <section id="education">
            <RevealOnScroll>
                <h2>Education</h2>
                <div className="education-grid">
                    <div className="education-item">
                        <h3>Bachelor of Technology (B.Tech)</h3>
                        <p className="edu-highlight">Computer Science and Design</p>
                        <p>A. D. Patel Institute of Technology, CVM University</p>
                        <p className="edu-year">2023 - 2027</p>
                    </div>
                    <div className="education-item">
                        <h3>Higher Secondary Education (HSC)</h3>
                        <p>St. Johns School</p>
                        <p className="edu-year">2021 - 2023</p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Education;
