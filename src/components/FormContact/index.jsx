import "./styles.sass";

export const FormContact = () => {
  return (
    <section className="contactForm">
      <h2>Drop me a line. I would like to hear from you.</h2>
      <form>
        <h3>Get in Touch</h3>
        <label>
          Name:
          <input type="text" name="name" className="input" />
        </label>
        <label>
          Email:
          <input type="email" name="email" className="input" />
        </label>
        <label>
          Menssage:
          <textarea name="message" className="textarea"></textarea>
        </label>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </section>
  );
};
