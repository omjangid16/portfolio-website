import React from 'react';
import Card from '../components/Card';
import RevealOnScroll from '../components/RevealOnScroll';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website designed to showcase my skills and projects. Built with React and Vite, featuring a modern, responsive design with smooth animations and interactive elements.',
            link: '#',
            githubLink: 'https://github.com/omjangid16/portfolio-website'
        },
        {
            title: 'DayFlow',
            description: 'Built a React single-page HR management app (JSX/JavaScript, CSS) with Supabase integration for authentication and data storage, featuring Login/Register, Dashboard, Employee profiles, Attendance, Leaves, and Payroll. Centralized HR workflows into a responsive frontend to streamline employee management, attendance tracking, and payroll processing.',
            link: 'http://localhost:5174/',
            githubLink: 'https://github.com/omjangid16/odooXgcet'
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
