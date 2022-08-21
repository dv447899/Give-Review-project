import React from "react";

const Show = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2>{props.task}</h2>
          </div>

          <div className="col-6"></div>
        </div>
      </div>
    </>
  );
};

export default Show;
