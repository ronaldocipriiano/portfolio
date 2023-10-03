import perfil from '../assets/perfil.jpeg';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
      <div className="profile-image">
        <img src={perfil} alt="Foto perfil Ronaldo Cipriano" />
      </div>
      <div>
          <h1>Ronaldo Cipriano</h1>
          <h2>Desenvolvedor Full Stack</h2>
      </div>
    </header>
  );
}

export default Header;
