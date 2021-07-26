class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleAdd = this.onHandleAdd.bind(this);
    this.onHandleSub = this.onHandleSub.bind(this);
    this.onHandleRemove = this.onHandleRemove.bind(this);
    this.state = {
      count: 0,
    };
  }
  onHandleAdd() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  onHandleSub() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  onHandleRemove() {
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1> Counter: {this.state.count} </h1>
        <button onClick={this.onHandleAdd}> +1 </button>
        <button onClick={this.onHandleSub}> -1 </button>
        <button onClick={this.onHandleRemove}> reset </button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("app"));
