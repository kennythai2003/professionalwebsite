import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact">
      <p className="small_text">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="/professionalwebsite/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:kennythai021403@gmail.com">
              Click here to email me!
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="/professionalwebsite/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/thaikenny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="/professionalwebsite/github.png"
            alt="GitHub icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.github.com/kennythai2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
