import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import { SelectedProjectContext } from '@/context/projectContext';
import { UpdateProject } from '@/redux/actions';

interface Task {
    _id: string;
    title: string;
    status: string;
    priority: string;
    due_date: Date;
    assigned_to: string;
}

const NewTask = () => {
    const { selectedProject } = useContext(SelectedProjectContext);
    const dispatch = useDispatch();

    const initialState = {
        title: '',
        status: '',
        priority: '',
        due_date: '',
        assigned_to: '',
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
        event.preventDefault();

        const updateProject = {
            ...selectedProject, // Include original project data except tasks
            tasks: [...selectedProject.tasks, formData], // Add new task to tasks array
        };

        console.log(updateProject)

        dispatch(UpdateProject(updateProject)); // Dispatch action with updated project
    };


    return(
        <div className="new-task">
            <h2>{selectedProject.name}</h2>
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
                    <button className="add-button" type="submit">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
};

export default NewTask;

