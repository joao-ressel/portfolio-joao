import { useState } from "react";
import { Button } from "../../components/Button";
import emailjs from "@emailjs/browser";

export const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMenssage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(
        "service_grvc72x",
        "template_66nta0n",
        templateParams,
        "ubV7ZL7II5IGbxOyk"
      )
      .then(
        (response) => {
          console.log("Enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMenssage("");
        },
        (err) => {
          console.log("Erro:", err);
        }
      );
  }

  return (
    <section className="contactForm">
      <h2>Drop me a line. I would like to hear from you.</h2>
      <form onSubmit={sendEmail}>
        <h3>Get in Touch</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMenssage(e.target.value)}
        ></textarea>

        <Button variant="rose">Send</Button>
      </form>
    </section>
  );
};
