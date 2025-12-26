import React from 'react';
import Card from '../components/Card';
import RevealOnScroll from '../components/RevealOnScroll';

const Projects = () => {
    const projects = [
        {
            title: 'Amazon Clone',
            description: 'Developed a responsive web-based project focusing on clean UI and functional design. Implemented core features using HTML, CSS, and JavaScript.',
            link: '#' // User didn't provide a specific link yet, keeping placeholder or could use #
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <RevealOnScroll>
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Card key={index} {...project} />
                    ))}
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default Projects;
