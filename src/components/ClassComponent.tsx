import React from "react";
import CounterComponent from "./CounterComponent";

class ClassComponent extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    return (
      <div>
        <p>Class Component with effect.</p>
        <CounterComponent initialValue={0} />
      </div>
    );
  }
}

export default ClassComponent;
