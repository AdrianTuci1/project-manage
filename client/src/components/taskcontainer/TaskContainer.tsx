import { useContext, useState } from 'react';
import TaskTable from '@/components/tasktable/TaskTable';
import './taskContainer.scss';
import { connect } from 'react-redux';
import { SelectedProjectContext } from '@/context/projectContext';
import CreateTask from '@/modals/createTask/createTask';

const mapStateToProps = (state) => ({
    projects: state.projectReducer, // Assuming projects are stored in the 'projectReducer' slice of the state
  });



const TaskContainer = connect(mapStateToProps)(() => {
    const { selectedProject } = useContext(SelectedProjectContext)
    const [ modalOpen, setModalOpen ] = useState(false);
    const taskCount = selectedProject?.tasks?.length || 0;

    return(
        <>
        <div className="container">
        {selectedProject ? (
            <div key={selectedProject._id}>
            <div className="wrapper">
                <div className="firstcol">
                    <h2>Tasks in {selectedProject.name}</h2>
                    <p>You have {taskCount} open tasks</p>
                </div>
                <div className="secondcol">
                    <div className="navform">Search</div>
                </div>
                <div className="thirdcol">Filter</div>
                <div className="fourthcol">
                    <button onClick={() => {setModalOpen(true)}}>Add task</button>
                    {modalOpen && <CreateTask setOpenModal={setModalOpen} />}
                </div>
            </div>
            <div className="table">
                <TaskTable tasks={selectedProject.tasks} />
            </div>
            </div>
        ) : (
            <p className="no-project">Please select a project</p>
        )}
        </div>
        </>
)
})

export default TaskContainer;
