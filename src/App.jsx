import { useState } from 'react'
import ProjectsPage from './projects/ProyectsPage';
import ProjectsPage2 from './projects/ProjectsPage2';
import './App.css'

function App() {
 return(
   <div className='container'>
       <ProjectsPage></ProjectsPage>
       <ProjectsPage2></ProjectsPage2>
   </div>
 );
}

export default App;
