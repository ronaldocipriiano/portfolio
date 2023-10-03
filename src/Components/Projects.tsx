import { useState } from 'react';

function Projetos() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: 'Projeto Pixels Art',
      description: 'Descrição do Projeto 1.',
      imageUrl: 'url-da-imagem-1.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-1',
    },
    {
      title: 'Projeto Trybewarts',
      description: 'Descrição do Projeto 2.',
      imageUrl: 'url-da-imagem-2.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-2',
    },
    {
      title: 'Projeto Zoo functions',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    },
    {
      title: 'Projeto iChoveu',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    },
    {
      title: 'Projeto - Password Manager',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    },
    {
      title: 'Projeto - Trybe Tunes',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    },
    {
      title: 'Projeto - Front-end Online Store',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    }, 
    {
      title: 'Projeto - TrybeWallet',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    }, 
    {
      title: 'Projeto - StarWars',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    }, 
    {
      title: 'Projeto - App de Receitas',
      description: 'Descrição do Projeto 3.',
      imageUrl: 'url-da-imagem-3.jpg',
      projectUrl: 'https://github.com/seu-usuario/projeto-3',
    }, 
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="projects">
      <div className="container">
        <h2>Meus Projetos</h2>
        <div className="project-list">
          {displayedProjects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
        {showAllProjects ? (
          <button onClick={() => setShowAllProjects(false)}>Minimizar Projetos</button>
        ) : (
          <button onClick={() => setShowAllProjects(true)}>Ver mais Projetos</button>
        )}
      </div>
    </section>
  );
}

export default Projetos;
