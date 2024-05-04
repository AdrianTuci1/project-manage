import './editProj.scss'
import { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { UpdateProject, RemoveProject } from '@/redux/actions'

const EditProject = ({ project , onRemovePressed, setOpenModal }: type) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false); // Initially not editing
  const [formData, setFormData] = useState({
    name: project.name,
    status: project.status,
    priority: project.priority,
    image: project.image,
    _id: project._id,
    tasks: project.tasks,
    __v: project.__v
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(UpdateProject(formData)); // Dispatch the UpdateProject action
      setIsEdit(false); // Close edit mode after successful update
    } catch (error) {
      console.error('Error updating project:', error);
      // Handle errors appropriately, e.g., display error message to user
    }
  };

  return (
    <div className="ceva">
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setOpenModal(false)}>X</button>
          </div>
          <div className="title">
            <h1>Edit {project.name}</h1>
          </div>
          <div className="body">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
              <label htmlFor="status">Status:</label>
              <input type="text" name="status" id="status" value={formData.status} onChange={handleChange} />
              <label htmlFor="priority">Priority:</label>
              <input type="text" name="priority" id="priority" value={formData.priority} onChange={handleChange} />
              <label htmlFor="image">Image URL:</label>
              <input type="text" name="image" id="image" value={formData.image} onChange={handleChange} />
              <button type="submit">Save Changes</button>
            </form>
          </div>
          <div className="footer">
            <button id="cancelBtn" onClick={() => setOpenModal(false)}>Inapoi</button>
            <button id="deleteBtn" onClick={() => onRemovePressed(project)}>Sterge</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.projectReducer
})

const mapDispatchToProps = dispatch => ({
  onRemovePressed: project => dispatch(RemoveProject(project)), // Use project ID for removal
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);