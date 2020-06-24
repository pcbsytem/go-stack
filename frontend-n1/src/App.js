import React, { useState } from 'react';

import './App.css';
import backgroundImage from '../src/assets/background.jpg';

import Header from './components/Header';

/**
  * Componente
  * Propriedade
  * Estado & Imutabilidade
  */

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    const project = `Novo projeto ${Date.now()}`;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} alt="background" />

      <ul>
        {
          projects.map(project => (
            <li key={project}>{project}</li>
          ))
        }
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;