import { useState } from "react";

export default function ShowPassword({}) {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(true);
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const handleClick = (e) => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div>
      {toggle ? (
        <input type="password" name="reset" onChange={handleChange} />
      ) : (
        <input type="text" name="reset" onChange={handleChange} />
      )}
      &nbsp;
      <button onClick={handleClick}>{toggle ? "Show" : "Hide"}</button>
      <br />
      <br />
    </div>
  );
}
