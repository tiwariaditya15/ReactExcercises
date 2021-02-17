import { useState } from "react";

export default function CharacterCounter({}) {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    if (e.target.value.length < 160 && e.target.value.length >= 0) {
      setCount(160 - e.target.value.length);
    }
  };

  return (
    <div className="">
      <h2>Twitter Text Counter</h2>
      <input
        type="text"
        name="str"
        onChange={handleChange}
        placeholder="Character limit 160"
      />
      <br />
      <br />
      <br />
      <span>
        {count === 160 ? "No more characters left" : count === 0 ? "" : count}{" "}
        characters left...
      </span>
    </div>
  );
}
