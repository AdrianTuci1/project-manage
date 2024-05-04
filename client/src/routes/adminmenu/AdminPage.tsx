import './AdminPage.scss';
import ProjectContainer from '@/components/projectcontainer/ProjectContainer';
import TaskContainer from '@/components/taskcontainer/TaskContainer';
import { SelectedProjectProvider } from '@/context/projectContext';

function AdminPage() {
    return (
        <SelectedProjectProvider>
        <main>
            <div className="wrappe">
            <div className="left">
                <ProjectContainer />
            </div>
            <div className="right">
                <TaskContainer />
            </div>
            </div>
        </main>
        </SelectedProjectProvider>
    );
}

export default AdminPage;
