const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-buttons">
        <a
          href="mailto:karaguarraci@gmail.com"
          className="contact-button email-button"
        >
          <img
            src="https://img.icons8.com/?size=512&id=12580&format=png"
            alt="Email Icon"
            className="contact-icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/kara-guarraci/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <img
            src="https://img.icons8.com/?size=512&id=447&format=png"
            alt="LinkedIn Icon"
            className="contact-icon"
          />
        </a>
        <a
          href="https://github.com/karaguarraci"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <img
            src="https://img.icons8.com/?size=512&id=12598&format=png"
            alt="GitHub Icon"
            className="contact-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
