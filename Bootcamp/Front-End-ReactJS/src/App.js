import React, {useState, useEffect} from 'react';

import Header from './components/Header'
import './App.css';
import backgroundimage from './assets/background.jpeg';
import api from './services/api';

function App(){
  const [projects,setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(reponse => {
      setProjects(reponse.data);
    })
  }, []);

  async function handleAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`);
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    const response = await api.post('projects', {
        title: `Novo Projeto ${Date.now()}`,
        owner: "Vinicius Meirelles"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
       <img width={50} src={backgroundimage}/> 
       <Header title="Projects"/>
       <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
       </ul>

       <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
    );
}

export default App;