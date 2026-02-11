export function Mail() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 data-fr="Me Contacter" data-en="Get In Touch">
            Me Contacter
          </h2>
          <p
            data-fr="Une proposition ou une question ? Envoyez-moi un message."
            data-en="A proposal or a question? Send me a message."
          >
            Une proposition ou une question ? Envoyez-moi un message.
          </p>
        </div>

        <form
          action="https://formsubmit.co/7a9a6e68336a10f2a94150711362eab2"
          className="contact-form"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://nolan-notargiacomo.alwaysdata.net/"
          />
          <input
            type="hidden"
            name="_subject"
            value="Nouveau message du Portfolio !"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-group">
            <label
              htmlFor="name"
              className="form-label"
              data-fr="Nom"
              data-en="Name"
            >
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="email"
              className="form-label"
              data-fr="Email"
              data-en="Email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="message"
              className="form-label"
              data-fr="Message"
              data-en="Message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="form-textarea"
              required
              placeholder="Bonjour Nolan..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            data-fr="Envoyer le message ➤"
            data-en="Send Message ➤"
          >
            Envoyer le message ➤
          </button>
        </form>
      </div>
    </section>
  );
}
