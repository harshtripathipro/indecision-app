import React from "react";
export default (props) => {
  return (
    <div>
      {props.OptionText + "   "}
      <button
        className='button button--link'
        onClick={() => {
          props.handleDeleteOption(props.OptionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};
