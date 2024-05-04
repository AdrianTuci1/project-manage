import {HttpClient} from './httpClient.js';
// This is the API. The backend root URL can be set from here.
const API = 'http://localhost:8800';
//Setting the todos URI
const PROJECT_API = `${API}/projects`
// The CRUD Operations of the Todo Resource.
//Create
const createProject = project => {
return HttpClient.post(PROJECT_API, project)
}
//Read
const getProjects = () => {
return HttpClient.get(PROJECT_API)
}
//Update
const updateProject = project => {
return HttpClient.put(`${API}/projects/${project._id}`, project)
}
//Delete
const removeProject = project => {
return HttpClient.delete(`${API}/projects/${project._id}`)
}
//Encapsulating in a JSON object
const ProjectApi = {createProject, getProjects, updateProject, removeProject}
export {ProjectApi}