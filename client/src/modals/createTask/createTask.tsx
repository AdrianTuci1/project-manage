import NewTask from '../../service/NewTask'
import './createTask.scss'

function CreateTask({ setOpenModal }) {
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
          <NewTask/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreateTask;