import { Button } from '@mantine/core';
import { useState, useContext } from 'react';
import './taskTable.scss';
import { connect, useDispatch } from 'react-redux';
import EditTask from '@/modals/editTask/editTask';
import { SelectedProjectContext } from '@/context/projectContext';

interface Task {
  title: string;
  status: string;
  priority: string;
  due_Date: Date;
  assigned_To: string;
}

const mapStateToProps = (state) => ({
  projects: state.projectReducer, // Assuming projects contain tasks
});

const TaskTable = (props: { projects: any[]}) => {
  const { selectedProject } = useContext(SelectedProjectContext);
  const [modalOpen, setModalOpen ] = useState(false)
  const dispatch = useDispatch();
  const [data, setData] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const task = selectedProject.tasks.map((task) => task)
  const tasks = selectedProject
  ? props.projects.find((project) => project._id === selectedProject._id)?.tasks
  : []; // Assuming projects have an _id

  const handleRowClick = (task: Task) => {
    setSelectedTask(task);
  }

  return (
    <>
    {tasks.length > 0 &&(
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Assigned To</th>
          <th>Edit</th> 
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task._id} onClick={() => handleRowClick(task)}>
            <td>{task.title}</td>
            <td>{task.status}</td>
            <td>{task.priority}</td>
            <td>
            {new Date(task.due_date).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
            </td>
            <td>{task.assigned_to}</td>
            <td>
              <Button onClick={() => setModalOpen(true)}>Edit</Button>
              {selectedTask && modalOpen && <EditTask task={selectedTask} setOpenModal={setModalOpen} />}
            </td>
          </tr>
        ))} 
      </tbody>
    </table>
    )}
    {tasks.lenght === 0 && <p>No tasks found</p>}
    </>
  );
};

export default connect(mapStateToProps)(TaskTable);
