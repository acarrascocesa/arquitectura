import "./form.css"; // Asegúrate de tener este archivo de estilos en tu proyecto

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí manejarías la lógica de envío del formulario, como enviar los datos a un servidor
    console.log("Formulario enviado");
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-form-container">
        <h2>CONTACTAME</h2>
        <p>Escribe algo en esta área.</p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="first-name"
            placeholder="Primer nombre"
            required
          />
          <input type="text" id="last-name" placeholder="Apellido" required />
          <input type="email" id="email" placeholder="Tu email" required />
          <input
            type="text"
            id="subject"
            placeholder="Asunto del email"
            required
          />
          <textarea id="message" placeholder="Tu mensaje" required></textarea>
          <div className="checkbox-container">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              Al marcar esta casilla y enviar tu información, nos otorgas
              permiso para enviarte correos electrónicos. Puedes cancelar tu
              suscripción en cualquier momento.
            </label>
          </div>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
