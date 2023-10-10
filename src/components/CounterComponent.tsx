import React from "react";

interface CounterProps {
  initialValue: number;
}

const CounterComponent = ({ initialValue }: CounterProps) => {
  const [count, setCount] = React.useState(initialValue);

  React.useEffect(() => {
    console.log("count useEffect mounted");
    return () => {
      console.log("count useEffect cleanup");
    };
  }, [count]);

  const handleCounterClick = () => {
    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>
          <button onClick={handleCounterClick}>Increase counter</button>
        </p>
        <p>Counter: {count} times</p>
        <p>
          <button onClick={handleResetCounter}>Reset counter</button>
        </p>
      </div>
    </div>
  );
};

export default CounterComponent;
