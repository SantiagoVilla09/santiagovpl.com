import React, { useState } from 'react';

export default function Template() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showCV, setShowCV] = useState(false);

    const projects = [
        {
            num: "01",
            title: "Multi-agent road distribution project",
            description: "In this multi agent system, agents simulate vehicle behavior in traffic. The system optimizes flow and reduces congestion through inter-agent communication.",
            github: "https://github.com/SantiagoVilla09/SistemasMultiagentes.git",
            youtube: "https://youtu.be/uIf8nNBjUr8"
        },
        {
            num: "02",
            title: "Edu-Quiz - Educational video game",
            description: "Educational video game with website for students and teachers. Includes resources, tracking, and interactive quizzes.",
            github: "https://github.com/Edu-Quiz",
            youtube: "https://www.youtube.com/watch?v=ur4Tn-O5ELo"
        },
        {
            num: "03",
            title: "Health-Tech mobile health tracking app",
            description: "Mobile app to record daily diet and workouts. Users can assess food quality and physical activity.",
            github: "https://github.com/HealthTech-MS"
        },
        {
            num: "04",
            title: "Syntactic Analizer with Parallelism",
            description: "A Python code parser that analyzes code syntax and detects errors. Using HTML, lines of code with errors are highlighted in parallel for greater reading and processing efficiency.",
            github: "https://github.com/SantiagoVilla09/Analizador-de-sintaxis-con-paralelismo",
            youtube: "https://www.youtube.com/watch?v=7BpvxfP2P7o"
        }
    ];

    return (
        <div className="is-preload">
            {/* Header */}
            <header id="header">
                <div className="inner">
                    <div className="image avatar">
                        <img src="/images/avatarsan.png" alt="Santiago avatar" />
                    </div>
                    <h1 style={{ color: 'lightgrey', textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}>
                        <strong>I am Santiago Villazón Ponce de León</strong>,
                        <br />I'm a computer science student, who aspires to work and collaborate with world class companies.
                    </h1>

                    {/* Social Buttons */}
                    <div style={{ marginTop: '1em' }}>
                        <a
                            href="https://github.com/SantiagoVilla09"
                            className="icon brands fa-github"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.5em', marginRight: '1em' }}
                        >
                            <span className="label">GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/santiagovillazon"
                            className="icon brands fa-linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.5em', marginRight: '1em' }}
                        >
                            <span className="label">LinkedIn</span>
                        </a>

                        <a
                            href="https://www.youtube.com/@santiagovillazonponcedeleo3387"
                            className="icon brands fa-youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '1.5em', marginRight: '1em' }}
                        >
                            <span className="label">YouTube</span>
                        </a>

                        <button
                            onClick={() => setShowCV(true)}
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                fontSize: '1.5em',
                                color: '#3EB58C', // verde similar a tus otros íconos
                                marginRight: '1em'
                            }}
                            className="icon solid fa-file-pdf"
                            aria-label="Ver CV"
                        >

                            <div className="style-cv">CV</div>
                        </button>

                    </div>
                </div>
            </header>

            {/* Main */}
            <div id="main">
                {/* One */}
                <section id="one">
                    <header className="major">
                        <h2>Academic Portfolio And Activities</h2>
                    </header>
                    <p className="justified">I love exploring the ways in which the automation of processes, data recollection and analysis can impact in software development. I am especially motivated by how these disciplines can transform industries and improve everyday lives through intelligent automation, advanced data analytics, and machine learning.</p>
                    <p className="justified">Student in Computer Science and Technology from Tecnológico de Monterrey with skills in teamwork, critical thinking, problem-solving, and leadership. I consider myself an adaptable, sociable person, results-oriented and attentive to details.</p>
                    <p className="justified">I am passionate about meeting new people and hearing diverse perspectives. Feel free to contact me if you want to chat about emerging technology, software product development, or any topic that inspires you.</p>
                    <strong>Below you will find my academic, personal and social service work.</strong>
                </section>
                
                

                {/* Two */}
                <section id="two">
                    <h2>Recent Work</h2>
                    <div className="row">
                        {projects.map((proj) => (
                            <article key={proj.num} className="col-6 col-12-xsmall work-item">
                                <div
                                    className="image fit thumb"
                                    onClick={() => setSelectedProject(proj)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === "Enter") setSelectedProject(proj); }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={`/images/thumbs/${proj.num}.jpg`} alt="" />
                                </div>
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                            </article>
                        ))}
                    </div>

                    {/* Project Modal */}
                    {selectedProject && (
                        <div className="modal">
                            <div className="modal-content">
                                <h3>{selectedProject.title}</h3>
                                <p>{selectedProject.description}</p>

                                {(selectedProject.github || selectedProject.youtube) && (
                                    <>
                                        <p style={{ marginTop: "1.5em", fontWeight: "bold" }}>
                                            Select the icons to learn more about the project:
                                        </p>
                                        <div style={{ marginTop: "1em" }}>
                                            {selectedProject.github && (
                                                <a
                                                    href={selectedProject.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="icon brands fa-github"
                                                    style={{ fontSize: "1.5em", marginRight: "1em" }}
                                                >
                                                    <span className="label">GitHub</span>
                                                </a>
                                            )}
                                            {selectedProject.youtube && (
                                                <a
                                                    href={selectedProject.youtube}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="icon brands fa-youtube"
                                                    style={{ fontSize: "1.5em" }}
                                                >
                                                    <span className="label">YouTube</span>
                                                </a>
                                            )}
                                        </div>
                                    </>
                                )}

                                <br />
                                <button onClick={() => setSelectedProject(null)}>Cerrar</button>
                            </div>
                        </div>
                    )}

                    {showCV && (
                        <div className="modal">
                            <div
                                className="modal-content"
                                style={{
                                    width: "80vw", // 80% del ancho de la pantalla
                                    height: "90vh", // 90% de la altura de la pantalla
                                    position: "relative",
                                    backgroundColor: "#fff",
                                    padding: "1em",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                }}
                            >
                                <button
                                    onClick={() => setShowCV(false)}
                                    aria-label="Cerrar"
                                    style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '2.5rem',
                                        height: '2.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                        transition: 'background-color 0.3s, transform 0.2s, color 0.3s',
                                        color: '#555',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
                                        e.currentTarget.style.color = '#000';
                                        e.currentTarget.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                                        e.currentTarget.style.color = '#555';
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                >
                                    <i className="fas fa-times"></i>
                                </button>

                                <iframe
                                    src="/pdf/Curriculum-Santiago.pdf"
                                    title="Curriculum Santiago Villazón"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: "none",
                                    }}
                                ></iframe>
                            </div>
                        </div>
                    )}
                </section>


                {/* Three */}
                <section id="three">
                    <h2>Get In Touch</h2>
                    <p>To get directly in touch use these contact methods:</p>
                    <div className="row aln-center">
                        <div className="col-4 col-12-small">
                            <ul className="labeled-icons">
                                <li>
                                    <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                                    Estado de México,<br />
                                    Atizapán de Zaragoza<br />
                                    México
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 col-12-small">
                            <ul className="labeled-icons">
                                <li>
                                    <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                                    (+52) 55-4930-7820
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-12-small">
                            <ul className="labeled-icons">
                                <li>
                                    <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                                    <a href="mailto:santiagovillazon2001@gmail.com">santiagovillazon2001@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer id="footer">
                <div className="inner"></div>
            </footer>
        </div>
    );
}
