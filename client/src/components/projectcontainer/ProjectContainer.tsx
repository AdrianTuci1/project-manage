import './projectContainer.scss';
import { useContext } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../projectcard/projectCard';
import CreateProjectBox from '../createProject/createProject';
import { SelectedProjectContext } from '@/context/projectContext';


const mapStateToProps = (state) => ({
    projects: state.projectReducer, // Assuming projects are stored in the 'projectReducer' slice of the state
  });
  
  const ProjectContainer = connect(mapStateToProps)(({ projects }) => {

    const { handleProjectSelect } = useContext(SelectedProjectContext)

    return(
        <>
        <div className="container">
            <div className="firstrow">
                <CreateProjectBox />
            </div>
            <div className="box">
                <div className="card-container">
                    {projects.map(project => (
                    <ProjectCard 
                    key={project._id} 
                    project={project}
                    onSelect={() => handleProjectSelect(project)}                    
                    />
                ))}
                </div>
            </div>
        </div>
        </>
    )
  });


export default ProjectContainer;
