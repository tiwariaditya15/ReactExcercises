import { useState } from "react";

export default function AlphanumericPassword({}) {
  const [password, setPassword] = useState({
    confirm: "",
    reconfirm: ""
  });

  return (
    <div>
      <h2>Password Match</h2>
      <input
        type="password"
        name="confirm"
        onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
      />
      <br /> <br />
      <input
        type="password"
        name="reconfirm"
        onChange={(e) =>
          setPassword({ ...password, reconfirm: e.target.value })
        }
      />
      <br />
      <br />
      <span className="error">
        {password["confirm"] === password["reconfirm"]
          ? ""
          : "Password doesn't match"}
      </span>
    </div>
  );
}
