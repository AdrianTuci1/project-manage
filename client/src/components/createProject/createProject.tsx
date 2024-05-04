import { Button } from "@mantine/core";
import { useState } from "react";
import './createProject.scss'
import CreateProject from "@/modals/createProject/createProject";

function CreateProjectBox() {
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className="box1">
        <h3>My Projects</h3>
        <Button
            onClick={() => {
            setModalOpen(true)
        }}>
        Create new
        </Button>
        {modalOpen && <CreateProject setOpenModal={setModalOpen} />}
        </div>
    )
}

export default CreateProjectBox;