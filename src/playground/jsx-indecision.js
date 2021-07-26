console.log("common boy");
//JSX JAVASCRIPT XML
const app = {
  title: "Indecision App",
  subtitle: "Put Your Life in the hands of Computer",
  options: [],
};
const submissioncall = (e) => {
  e.preventDefault();
  const optiona = e.target.elements.option.value;
  if (optiona) {
    app.options.push(optiona);
    e.target.elements.option.value = "";
    renderFunction();
  }
};
const removeall = () => {
  app.options = [];
  renderFunction();
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const renderFunction = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (
        <p>{"Here are your options"}</p>
      ) : (
        <p>{"Array is empty"}</p>
      )}
      <button onClick={onMakeDecision} disabled={app.options.length == 0}>
        What should I do??
      </button>
      <button onClick={removeall}>Remove all</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={submissioncall}>
        <input type='text' name='option'></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, approot);
};
var approot = document.getElementById("app");
// removeall();
renderFunction();
