

export const fetchTasks = () => {
	return (
		$.ajax({
			method: 'GET',
			url: 'api/tasks'
		})
	)
}



export const fetchTask = (id) => {
	return (
		$.ajax({
			method: 'GET',
			url: `api/tasks/${id}`
		})
	)
}

export const createTask = (task) => {
	return (
		$.ajax({
			method: 'POST',
			url: `api/tasks`,
			data: {task}
		})
	)
}

export const updateTask = (task) => {
	return (
		$.ajax({
			method: 'PATCH',
			url: `api/tasks/${task.id}`,
			data: { task }
		})
	)
}

export const deleteTask = (id) => {

	return (
		$.ajax({
			method: 'DELETE',
			url: `api/tasks/${id}`
		})
	)
}