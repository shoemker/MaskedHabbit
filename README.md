

<a href="http://masked-habbit.herokuapp.com/?#"><img src="./app/assets/images/Logo1.jpg" alt="logo"></a>

<br>
<h1><a href="http://masked-habbit.herokuapp.com/?#">Masked-Habbit</a> is a clone of <a href="https://www.taskrabbit.com/">TaskRabbit.</a></h1>
<br>

<h2>Masked-Habbit Overview</h2>
Like many apps, Masked-Habbit connects people. It starts with people that have tasks that need done and are willing to pay people to do them. They can post these tasks on TaskRabbit and get matched with local people (professional or amateur) who have the skills to do these tasks and will agree to the price offered.
<br><br>
<h2>Technologies Used</h2>
<ol>
	<li>Rails: This app uses a Rails backend.</li>
	<li>Ruby: The migrations, models, controllers and other rails components use the Ruby language.</li>
	<li>PostgreSQL: The Rails backend uses a PostgreSQL relational database.
	<li>React: This app is a one-page app that re-renders with a React frontend.</li>
	<li>Redux: In the app, React uses the Redux library.</li>
	<li>Javascript: As the Rails backend uses Ruby as its programming language, React and Redux use Javascript for the frontend programming language.</li>
	<li>AJAX: The frontend uses AJAX to get information from the database.
	<li>HTML: The page is, of course, rendered in HTML.</li>
	<li>CSS: The HTML is styled with CSS.
  <li>Images are stored on AWS</li>
</ol>
<br>
<h2>Features</h2>
<ol>
	<li>User Auth: Frontend to backend user authentication using BCrypt for passwords, giving the ability to securely signup, login and logut. </li>
	<li>Tasks organized into categories</li>
	<li>Ability to create tasks</li>
  <li>Ability to delete tasks</li>
	<li>Ability to accept tasks</li>
  <li>Errors shown for login, signup, and task creation</li>
</ol>
<br>


<h2>Interesting Code</h2>
After a task doer logs in, they are sent to a page with categories on the left side and the tasks associated with those categories on the right side. Clicking on a category re-renders the page and changes the tasks.
<br>

First, in the constructor of logged_in_doer_form.jsx:
```
this.state = {categoryId: 0}
```
The state now has a key/value pair that we can use to access the categoryId and we can change it with setState.<br>
Below we can see that clicking on the button (the category button that is on the left side of the page) will set the categoryId in state to a new value. setState() will also trigger a new render, which is exactly what we want to see the new tasks.

```
<form onSubmit={() => this.setState({ categoryId: 1 })}>
  <button className="category-doer-button"type="submit" >
    Mounting & Installation
  </button>
</form>
```
Next, we take the list of all the tasks and select the ones that match the new CategoryId, putting them in the tasksSelected array. The following code is in the render() method.
```
let tasksSelected = [];
	
 (this.props.tasks.length > 0) && this.props.tasks.forEach( (task) = {
  if (this.state.categoryId === task.category_id 
	&& task.completed === false) {
   tasksSelected.push(task);
 }
})
```
In the above code, the main block starts with (this.props.tasks.length > 0) so that the code doesn't execute on the very first render before the tasks are fetched.<br><br>
Finally, we render the tasks within the return of the render.
```
{this.props.tasks.length > 0 && tasksSelected.map((task) => {
 return (
  <div className='doer-task-container'>
   <p className="task-brief">Task: {task.brief}</p>
   <p className='task-fields'>Description: {task.description}</p>
   <p className='task-fields'>Location: {task.location}</p>
   <p className='task-fields'>
    Need a Vehicle? :{task.vehicle_needed ? "yes" : "no"}
   </p>
   <button className="task-accept-button" type="submit">
    Accept Task
   </button>
  </div>
 )
})}
```
Again we use a gateway at the beginning so that this block doesn't try to execute on the first render before we fetch the Tasks.
