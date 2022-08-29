import React from "react";

export default function DemoOutput(props) {
  console.log("Child Component Running");
  return <p>{props.show ? "this is para" : null}</p>;
}
