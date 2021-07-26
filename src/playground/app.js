class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  handleDeleteAll() {
    this.setState(() => ({
      options: [],
    }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  }

  handlePick() {
    const pick = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[pick]);
  }

  handleAddOption(option) {
    if (!option) return "Plz Enter a valid option";
    else if (this.state.options.indexOf(option) > -1)
      return "This option already exist";
    else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
    }
  }
  render() {
    const subtitle = "Put You life in the hands of Computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteAll={this.handleDeleteAll}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: [],
};
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};
Header.defaultProps = {
  title: "IndecisionApp",
};
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I do??
      </button>
    </div>
  );
};
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteAll}>Remove All</button>
      {props.options.length == 0 && <p>Please Enter the options to start</p>}
      <p>
        {props.options.map((Options) => (
          <Option
            key={Options}
            OptionText={Options}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </p>
    </div>
  );
};
const Option = (props) => {
  return (
    <div>
      {props.OptionText + "   "}
      <button
        onClick={() => {
          props.handleDeleteOption(props.OptionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.submissionCall = this.submissionCall.bind(this);
    this.state = {
      error: undefined,
    };
  }
  submissionCall(e) {
    e.preventDefault();
    const option = e.target.elements.form.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error,
    }));
    e.target.elements.form.value = "";
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submissionCall}>
          <input type='text' name='form'></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
console.log(__dirname);
