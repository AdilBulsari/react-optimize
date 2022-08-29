import React from "react";

function DemoOutput(props) {
  console.log("Child Component Running");
  return <p>{props.show ? "this is para" : null}</p>;
}

export default React.memo(DemoOutput);
