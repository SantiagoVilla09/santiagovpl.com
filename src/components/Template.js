import React from 'react';

export default function Template() {

    const descriptions = [
        "Portfolio website built with React and modern CSS.",
        "E-commerce platform with shopping cart functionality.",
        "AI-powered chatbot using NLP.",
        "Weather app using OpenWeatherMap API.",
        "Fitness tracker for workouts and diet goals.",
        "Task manager with calendar integration."
        ];
        
    return (
        <div className="is-preload">
            {/* Header */}
            <header id="header">
                <div className="inner">
                    <div className="image avatar">
                        <img src="/images/avatarsan.png" alt="Santiago avatar" />
                    </div>

                    <h1>
                        <strong>I am Santiago Villazón Ponce de León</strong>, 
                        <br/>Im a computer science student, who aspires to work and colaborate with world class companies.<br />
                    </h1>
                </div>
            </header>

            {/* Main */}
            <div id="main">

                {/* One */}
                <section id="one">
                    <header className="major">
                        <h2>Academic Portafolio And Activities.</h2>
                    </header>
                    <p>Here are 3 things you can read about me.</p>
                    <p className="justified">I love exploring the ways in which the automation of processes, data recollection and analysis can impact in software development. I am especially motivated by how these disciplines can transform industries and improve everyday lives through intelligent automation, advanced data analytics, and machine learning.</p>
                    <p className="justified">Student in Computer Science and Technology from Tecnológico de Monterrey with skills in teamwork, critical thinking, problem-solving, and leadership. I consider myself an adaptable, sociable person, results-oriented and attentive to details.</p>
                    <p className="justified">I am passionate about meeting new people and hearing diverse perspectives. Feel free to contact me if you want to chat about emerging technology, software product development, or any topic that inspires you.</p>
                    <strong>Below you will find my academic, personal and social service work.</strong>
                </section>

                {/* Two */}
                <section id="two">
                    <h2>Recent Work</h2>
                    <div className="row">
                        {["01", "02", "03", "04", "05", "06"].map((num, index) => (
                            <article key={num} className="col-6 col-12-xsmall work-item">
                                <a href={`/images/fulls/${num}.jpg`} className="image fit thumb">
                                    <img src={`/images/thumbs/${num}.jpg`} alt="" />
                                </a>
                                <h3>Project Title {num}</h3>
                                <p>{descriptions[index]}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Three */}
                <section id="three">
                    <h2>Get In Touch</h2>
                    <p>To get directly in touch use these following contact methods</p>
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
                <div className="inner">
                </div>
            </footer>
        </div>
    );
}

