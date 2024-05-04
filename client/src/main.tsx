import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import * as ProjectActions from './redux/actions'

const store = configureStore()
store.dispatch(ProjectActions.GetProjects())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
);
