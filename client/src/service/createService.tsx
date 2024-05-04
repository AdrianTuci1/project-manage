import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import { CreateProject } from '@/redux/actions'; // Assuming actions are typed

// Interface for Project data (replace with your actual structure)
interface Project {
  name: string;
  tasks: string[]; // Array of task strings
  status: boolean;
  priority: string;
  image: string;
  __v: number;
}

// Interface for props passed to the component
interface NewProjectProps {
  projectList: Project[]; // Array of Project objects
  onCreatePressed: (formData: Project) => void; // Function to dispatch action
}

const NewProject: React.FC<NewProjectProps> = ({
  projectList,
  onCreatePressed,
}) => {
  const [formData, setFormData] = React.useState<Project>({
    name: '',
    tasks: [],
    status: true,
    priority: '',
    image: '',
    __v: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    const isDuplicate = projectList.some(
      (project) => project.name === formData.name
    );
    if (!isDuplicate) {
      onCreatePressed(formData);
      setFormData({ ...formData, name: "", tasks: "" }); // Reset name and tasks
    }
  };

  return (
    <div className="new-project">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-project-input"
          placeholder="Project Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <select
          className="new-project-input"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>
        <input
          type="text"
          className="new-project-input"
          placeholder="Priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        />
        <input
          type="text"
          className="new-project-input"
          placeholder="Image URL (optional)"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <div className="button-container">
          <button className="add-button" type="submit">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  projectList: state.projectReducer, // Assuming projectReducer returns Project[]
});

const mapDispatchToProps = (dispatch: any) => ({
  onCreatePressed: (formData: Project) => dispatch(CreateProject(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);


