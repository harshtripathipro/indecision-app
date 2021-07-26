class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Toggle Visibility </h1>

        <button onClick={this.handleVisibility}>
          {this.state.visibility ? "HideDetails" : "ShowDetails"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Lets Bye</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
