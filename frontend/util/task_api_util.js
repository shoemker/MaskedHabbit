

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


