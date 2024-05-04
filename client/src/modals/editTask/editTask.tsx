import EditTaskWindow from '@/service/EditTaskWindow';
import './editTask.scss'

function EditTask({ setOpenModal, task }) {
  return (
    <div className="ceva">
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <EditTaskWindow selectedTask={task} setOpenModal={setOpenModal}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EditTask;