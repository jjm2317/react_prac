import React from "react";

const ShowButtonSet = ({ buttonList, selectRenderMode }) => {
  return (
    <div>
      {buttonList.map((name) => (
        <button key={name} name={name} onClick={selectRenderMode}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default ShowButtonSet;
