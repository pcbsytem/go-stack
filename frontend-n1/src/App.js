import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';


/**
  * Componente
  * Propriedade
  * Estado & Imutabilidade
  */

function App() {
  const [projects, setProjects] = useState([]);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Patrick"
    });

    const projects = response.data;

    setProjects(projects);
  }

  useEffect(() => {
    api.get('projects')
      .then(response => {
        setProjects(response.data);
      });
  }, []);

  return (
    <>
      <Header title="Projects" />

      <ul>
        {
          projects.map(project => (
            <li key={project.id}>
              {project.title}
            </li>
          ))
        }
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;