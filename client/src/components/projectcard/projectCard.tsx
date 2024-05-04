import { useState } from 'react';
import './projectcard.scss';
import EditProject from '@/modals/editProject/editProject';



function ProjectCard({project, onSelect}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    onSelect(project)
  }

  return (
    <>
      {project ? (  // Render only if project is found
        <div className="card" onClick={handleClick}>
          <img src={project.image} alt={project.name} width="50" height="50" />
          <div className="content1">
            <h3>{project.name}</h3>
            <p>Open Tasks: <span>{project.tasks.length}</span></p>
          </div>
          <div className="content2">
            <p>Status: <span>{project.status}</span></p>
            <p>Priority: <span className={`priority ${project.priority.toLowerCase()}`}>{project.priority}</span></p>
          </div>
          <div className="content3">
            <button onClick={() => setModalOpen(true)}>edit</button>
            {modalOpen && <EditProject project={project} setOpenModal={setModalOpen} />}
          </div>
        </div>
      ) : <h3>error</h3>}
    </>
  );
}

export default ProjectCard;
