import { ProjectApi } from '../api/projectApi.js';

//Create
export const CREATE_PROJECT = 'CREATE_PROJECT'
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS'
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR'
//Read
export const GET_PROJECTS = 'GET_PROJECTS'
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR'
//Update
export const UPDATE_PROJECT = 'UPDATE_PROJECT'
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS'
export const UPDATE_PROJECT_ERROR = 'UPDATE_PROJECT_ERROR'
//Remove
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const REMOVE_PROJECT_SUCCESS = 'REMOVE_PROJECT_SUCCESS'
export const REMOVE_PROJECT_ERROR = 'REMOVE_PROJECT_ERROR'
//Create
//The dispatch and getstate function is provided by the Redux-Thunk middleware, we can dispatch actions with it.

export function CreateProject(project){
return (dispatch, getState) => {
return ProjectApi.createProject(project).then(res => {
dispatch(CreateProjectSuccess(res.data))
})
}
}
export function CreateProjectSuccess(project){
return {
type:CREATE_PROJECT_SUCCESS,
project
}
}
//Read
export function GetProjects(){
return (dispatch, getState) => {
return ProjectApi.getProjects()
.then(res => {
dispatch(GetProjectSuccess(res.data))
})
}
}

export function GetProjectSuccess(projects){
return {
type:GET_PROJECTS_SUCCESS,
projects
}
}
//Remove
export function RemoveProject(project) {
return (dispatch, getState) => {
ProjectApi.removeProject(project).then(res => {
dispatch(RemoveProjectSuccess(project))
})
}
}
export function RemoveProjectSuccess(project) {
return {
type: REMOVE_PROJECT_SUCCESS,
project,
_id: project._id
}
}
//update
export function UpdateProject(project){
return (dispatch) => {
return ProjectApi.updateProject(project).then(res => {
dispatch(UpdateProjectSuccess(res.data))
})
}
}
export function UpdateProjectSuccess(project){
return {
type:UPDATE_PROJECT_SUCCESS,
project,
}
}