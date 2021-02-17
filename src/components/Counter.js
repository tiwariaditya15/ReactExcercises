import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    if (e.target.name === "plus") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="App">
      <h2>Counter</h2>
      <button onClick={handleClick} name="plus">
        +
      </button>
      <button onClick={handleClick} name="minus">
        -
      </button>
      <br />
      <span>Count : {count}</span>
    </div>
  );
}
