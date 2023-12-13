// Footer.js
import "./footer.css"; // Asegúrate de tener un archivo CSS para estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h4>Quiénes somos</h4>
          <p>
            Jemh Arquitectura es una firma dedicada al diseño arquitectónico
            moderno, creando espacios que promueven la innovación y la
            sostenibilidad. Con un enfoque en la funcionalidad estética, cada
            proyecto es una obra de arte habitable.
          </p>
        </div>
        <div className="footer-section">
          <h4>Dirección</h4>
          <p>
            Bienvenidos a D7
            Proyeco Urbano
            Los Guaricanos Santo Domingo RD

            Periodo Agosto-Dic.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
