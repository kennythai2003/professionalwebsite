import "../styles/navigation.css";

function Navigation() {
  return (
    <header>
      <img
        src="/professionalwebsite/signature.png"
        class="signature"
        alt="logo"
      />
      <nav className="navigation">
        <a href="#" class="active">
          Home
        </a>
        <a href="#about">About Me</a>
        <a href="#experience">Technical Skills</a>
        <a href="#projects">Projects</a>
        <a href="#clubs">Involvement</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navigation;
