import React from "react";
import Modal from "react-modal";

const OptionalModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel='Selected Option'
      onRequestClose={props.closeModal}
    >
      <h3>Selected Option</h3>
      <p>{props.selectedOption}</p>
      <button onClick={props.closeModal}>Okay</button>
    </Modal>
  );
};

export default OptionalModal;
