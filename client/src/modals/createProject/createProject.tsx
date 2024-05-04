import NewProject from '@/service/createService';
import './createProject.scss'

function CreateProject({ setOpenModal }) {
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
          <NewProject />
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreateProject;