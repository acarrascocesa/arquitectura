import "./navbar.css"; // Asume que tienes un archivo CSS separado para estilos

const Navbar = () => {
  // Función para manejar el desplazamiento suave - puedes mejorarla según tus necesidades
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">JEMH ARQUITECTURA</div>
      <ul className="navbar-nav">
        <li className="nav-item" onClick={() => scrollToSection("inicio")}>
          INICIO
        </li>
        <li className="nav-item" onClick={() => scrollToSection("proyect")}>
          PROYECTOS
        </li>
        <li className="nav-item" onClick={() => scrollToSection("contact")}>
          CONTACAME
        </li>
      </ul>
      <button
        className="btn-movilizacion"
        onClick={() => scrollToSection("movilizacion")}
      >
        MOVILIZACION
      </button>
    </nav>
  );
};

export default Navbar;
