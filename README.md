

<a href="http://masked-habbit.herokuapp.com/?#"><img src="https://maskedhabbit-prod.s3-us-west-1.amazonaws.com/Logo1.jpg" alt="logo"></a>

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
</ol>
<br>
<h2>Features</h2>
<ol>
	<li>User Auth: Frontend to backend user authentication using BCrypt for passwords, giving the ability to securely signup, login and logut. </li>
	<li>Tasks organized into categories</li>
	<li>Ability to create tasks</li>
	<li>Ability to accept tasks</li>
</ol>
<br>


<h2>Interesting Code</h2>
After a task doer logs in, they are sent to a page with categories on the left side and the tasks associated with those categories on the right side. Clicking on a category re-renders the page and changes the tasks.



```
<form onSubmit={() => this.setState({ catId: 1 })}>
  <button className="category-doer-button"type="submit" >
    Mounting & Installation
  </button>
</form>
```