import React from 'react';

export default function Template() {
    return (
        <div className="is-preload">
            {/* Header */}
            <header id="header">
                <div className="inner">
                    <div className="image avatar">
                        <img src="/images/avatarsan.png" alt="Santiago avatar" />
                    </div>

                    <h1>
                        <strong>I am Santiago Villazón Ponce de León</strong>, <br />Im a computer science student, who aspires to work and colaborate with world class companies.<br />
                    </h1>
                </div>
            </header>

            {/* Main */}
            <div id="main">

                {/* One */}
                <section id="one">
                    <header className="major">
                        <h2>Ipsum lorem dolor aliquam ante commodo<br />
                            magna sed accumsan arcu neque.</h2>
                    </header>
                    <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">Learn More</a></li>
                    </ul>
                </section>

                {/* Two */}
                <section id="two">
                    <h2>Recent Work</h2>
                    <div className="row">
                        {["01", "02", "03", "04", "05", "06"].map((num) => (
                            <article key={num} className="col-6 col-12-xsmall work-item">
                                <a href={`/images/fulls/${num}.jpg`} className="image fit thumb">
                                    <img src={`/images/thumbs/${num}.jpg`} alt="" />
                                </a>
                                <h3>Project Title {num}</h3>
                                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
                            </article>
                        ))}
                    </div>
                    <ul className="actions">
                        <li><a href="#" className="button">Full Portfolio</a></li>
                    </ul>
                </section>

                {/* Three */}
                <section id="three">
                    <h2>Get In Touch</h2>
                    <p>To get directly in touch use these following contact methods</p>
                    <div className="row aln-center">
                        <div className="col-6 col-12-small">
                            <ul className="labeled-icons">
                                <li>
                                    <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                                    Estado de México,<br />
                                    Atizapán de Zaragoza<br />
                                    México
                                </li>
                                <li>
                                    <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                                    (+52) 55-4930-7820
                                </li>
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
                    <ul className="icons">
                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                        <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

