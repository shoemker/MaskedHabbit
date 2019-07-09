

const fetchTasks = () => {

	return (
		$.ajax({
			method: 'GET',
			url: 'api/tasks'
		})
	)
}

export default fetchTasks;