export const filterTasksByCategoryId = (state, categoryId) => {
	let tasks = Object.values(state.entities.tasks);
	let stuff = [];

	tasks.forEach(function (task) {
		if (parseInt(categoryId, 10) === task.category_id && task.completed === false) {
			stuff.push(task);
		}
	})

	return stuff;
}