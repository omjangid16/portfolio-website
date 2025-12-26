import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <h2>Resume</h2>

            <div className="resume-actions">
                <p style={{ marginBottom: '1rem', color: 'var(--secondary-color)' }}>
                    Download resume.
                </p>
                <a href="/resume.jpg" download="Om_Prakash_Jangid_Resume.jpg" className="resume-download-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                </a>
            </div>
        </section>
    );
};

export default Resume;
