import {Button} from "../../components/Button"
export const FormContact = () => {
  return (
    <section className="contactForm">
      <h2>Drop me a line. I would like to hear from you.</h2>
      <form>
        <h3>Get in Touch</h3>
        <input type="text" name="name" className="input" placeholder="Name" />

        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />

        <textarea
          name="message"
          className="textarea"
          placeholder="Message"
        ></textarea>

        <Button variant="rose">Send</Button>
      </form>
    </section>
  );
};
