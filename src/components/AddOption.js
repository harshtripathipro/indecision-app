import React from "react";
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  submissionCall = (e) => {
    e.preventDefault();

    const option = e.target.elements.form.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({
      error,
    }));
    e.target.elements.form.value = "";
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submissionCall}>
          <input type='text' name='form'></input>
          <button className='button'>Add option</button>
        </form>
      </div>
    );
  }
}
