import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contato</h2>
        <div className="contact-links">
          <div className="contact-item">
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/ronaldo-cipriano/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:seu-email@example.com">
              <FontAwesomeIcon icon={faEnvelope} />
              Email (ronaldolopes14@gmail.com)
            </a>
          </div>
          <div className="contact-item">
            <a href="tel:+1234567890">
              <FontAwesomeIcon icon={faPhone} />
              Telefone (+5563981048459)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
