import * as ProjectActions from './actions.js';

export const projectReducer = (state = [], action) => {
const { type } = action;
switch(type) {
// Create
case ProjectActions.CREATE_PROJECT_SUCCESS: {
return [
...state,
action.project
];
}
//Read
case ProjectActions.GET_PROJECTS_SUCCESS: {
return action.projects || [];
}
//update
case ProjectActions.UPDATE_PROJECT_SUCCESS: {
return state.map(item=>item._id === action.project._id ? {...action.project}:{...item})
}
//Remove
case ProjectActions.REMOVE_PROJECT: {
return state.map(s => project(s, action))
}
case ProjectActions.REMOVE_PROJECT_SUCCESS: {
return state.filter(project => project._id !== action._id);
}
default:
return state;
}
}
