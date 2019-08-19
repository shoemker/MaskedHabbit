import * as TaskApiUtil from '../util/task_api_util.js';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK =  'RECEIVE_TASK';
export const REMOVE_TASK = 	 'REMOVE_TASK';

const receiveTasks = (tasks) => ({
	type:RECEIVE_TASKS,
	tasks: tasks
});

const receiveTask = (task) => ({
	type: RECEIVE_TASK,
	task: task
});

const removeTask = (task) => ({
	type: REMOVE_TASK,
	taskId: task.id
});

export const fetchTasks = () => (dispatch) => (
	TaskApiUtil.fetchTasks().then(tasks => dispatch(receiveTasks(tasks))) 
)

export const fetchTask = (id) => (dispatch) => (
	TaskApiUtil.fetchTask(id).then(task => dispatch(receiveTask(task)))
)

export const deleteTask = (id) => (dispatch) => (
	TaskApiUtil.deleteTask(id).then(task => dispatch(removeTask(task)))
)

export const updateTask = (task) => (dispatch) => {
	
	return TaskApiUtil.updateTask(task).then(task => dispatch(receiveTask(task)))
}

export const createTask = (task) => (dispatch) => (
	TaskApiUtil.createTask(task).then(task => dispatch(receiveTask(task)))
)