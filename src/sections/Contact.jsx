import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <RevealOnScroll>
                <h2>Get In Touch</h2>
                <div className="contact-info">
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:jangidomu20052@gmail.com">jangidomu2005@gmail.com</a></p>
                        <p><strong>Phone:</strong> +91-92167-82857</p>
                        <p><strong>Location:</strong> Anand, Gujarat</p>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/omjangid16" target="_blank" rel="noopener noreferrer" className="social-btn github">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/om-jangid-4568b827a/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Keeping the form as a functional visual element */}
                <form className="contact-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </RevealOnScroll>
        </section>
    );
};

export default Contact;
