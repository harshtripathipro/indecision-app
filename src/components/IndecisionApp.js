import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./header";
import OptionalModal from "./optionalModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  };
  handleDeleteAll = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };

  handlePick = () => {
    const pick = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[pick];
    this.setState(() => ({
      selectedOption: option,
    }));
  };

  handleAddOption = (option) => {
    if (!option) return "Plz Enter a valid option";
    else if (this.state.options.indexOf(option) > -1)
      return "This option already exist";
    else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
    }
  };
  closeModal = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };
  render() {
    const subtitle = "Put You life in the hands of Computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
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
          <OptionalModal
            selectedOption={this.state.selectedOption}
            closeModal={this.closeModal}
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;
