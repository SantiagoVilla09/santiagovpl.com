import React from 'react';

export default function Template() {
  return (
    <div className="is-preload">
      {/* Header */}
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar"><img src="/images/avatarsan.png" alt="" /></a>
          <h1>
            <strong>I am Santiago Villazón Ponce de León</strong>, a super simple<br />
            responsive site template freebie<br />
            crafted by <a href="http://html5up.net">HTML5 UP</a>.
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
          <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna...</p>
          <div className="row">
            <div className="col-8 col-12-small">
              <form method="post" action="#">
                <div className="row gtr-uniform gtr-50">
                  <div className="col-6 col-12-xsmall">
                    <input type="text" name="name" id="name" placeholder="Name" />
                  </div>
                  <div className="col-6 col-12-xsmall">
                    <input type="email" name="email" id="email" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <textarea name="message" id="message" placeholder="Message" rows="4" />
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </form>
            </div>
            <div className="col-4 col-12-small">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                  1234 Somewhere Rd.<br />
                  Nashville, TN 00000<br />
                  United States
                </li>
                <li>
                  <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                  <a href="#">hello@untitled.tld</a>
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
          <ul className="copyright">
            <li>&copy; Untitled</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

