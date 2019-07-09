

export const fetchTasks = () => {

	return (
		$.ajax({
			method: 'get',
			url: 'api/task'
		})
	)
}
