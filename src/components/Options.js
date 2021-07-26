import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <button className='button button--link' onClick={props.handleDeleteAll}>
        Remove All
      </button>
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

export default Options;
