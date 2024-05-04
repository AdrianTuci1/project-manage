import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { SelectedProjectContext } from '@/context/projectContext';

import { UpdateProject, RemoveProject } from '@/redux/actions';

interface Task {
    _id: string;
    title: string;
    status: string;
    priority: string;
    due_date: string;
    assigned_to: string;
}

const EditTaskWindow = ({ selectedTask, setOpenModal }) => {
    const { selectedProject } = useContext(SelectedProjectContext);
    const dispatch = useDispatch();
    const [ isEdit, setIsEdit ] = useState(false)
    const initialState = {
        title: selectedTask.title,
        status: selectedTask.status,
        priority: selectedTask.priority,
        due_date: selectedTask.due_date,
        assigned_to: selectedTask.assigned_to,
        _id: selectedTask._id,
      };

    const [formData, setFormData] = React.useState<Task>(initialState)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // This function likely updates the formData state based on user input
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior
        const updatedProject = {
            ...selectedProject, // Include original project data except tasks
            tasks: selectedProject.tasks.map((task) =>
              task._id === formData._id ? formData : task // Update only the matching task
            ),
          };
      
          dispatch(UpdateProject(updatedProject)); // Dispatch action with updated project
      
          // Close edit modal (if applicable)
          setOpenModal && setOpenModal(false);      

      };

    const handleDelete = () => {
        // Dispatch an action to delete the task using Redux (similar to NewTask)
        const updatedProject = {
          ...selectedProject,
          tasks: selectedProject.tasks.filter((task) => task._id !== formData._id), // Filter out the task to delete
        };
        dispatch(UpdateProject(updatedProject));
        setOpenModal && setOpenModal(false);
      };

    return(
        <div className="new-task">
            <h2>{selectedTask.title}</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                className="new-task-input"
                placeholder="Task title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                />
                <input
                type="text"
                className="new-task-input"
                placeholder="Task status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                />
                <input
                type="text"
                className="new-task-input"
                placeholder="Task priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                />
                <input
                type="date"
                className="new-task-input"
                placeholder="Task due date"
                name="due_date"
                value={formData.due_date}
                onChange={handleChange}
                />
                <input
                type="text"
                className="new-task-input"
                placeholder="Assigned to"
                name="assigned_to"
                value={formData.assigned_to}
                onChange={handleChange}
                />
                <div className="button-task">
                <button id="deleteBtn" onClick={handleDelete}>Delete</button>
                <button type="submit" id="cancelBtn" onClick={() => setIsEdit(false)}>Edit</button>
                </div>
            </form>
        </div>
    )
};

export default EditTaskWindow;