import { useState } from "react";

export default function AlhanumericPassword({}) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
    setPassword((prevPassword) => {
      const regx = /[\d]+/;
      if (regx.test(prevPassword)) {
        setMessage("");
      } else {
        setMessage("Password needs to contain atleast one numeric character.");
      }
      // console.log(password, message, regx.test(password));
      return prevPassword;
    });
  };

  return (
    <div>
      <h2>Alphanumeric Password</h2>
      <input
        type="text"
        name="password"
        onChange={(e) => handleChange(e)}
      />{" "}
      <br />
      <br />
      <span>{message}</span>
    </div>
  );
}
