import { useState } from "react";

function ToastMessage({ type, setShow }) {
  const error = {
    padding: "1rem",
    border: "1px solid black",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.5rem",
    backgroundColor: "red",
    color: "white"
  };

  const success = {
    padding: "1rem",
    border: "1px solid black",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.5rem",
    backgroundColor: "green",
    color: "white"
  };

  const normal = {
    padding: "1rem",
    border: "1px solid black",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.5rem"
  };
  return (
    <section
      style={type === "error" ? error : type === "success" ? success : normal}
    >
      <span>This is a Toast</span>
      <span
        style={{
          cursor: "pointer"
        }}
        onClick={(e) => setShow(false)}
      >
        &#x2716;
      </span>
    </section>
  );
}

export default function Toast({}) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const handleClick = (e) => {
    setShow((prevShow) => !prevShow);
    e.target.name === "error"
      ? setType("error")
      : e.target.name === "success"
      ? setType("success")
      : setType("");
  };
  return (
    <div>
      <button name="" onClick={handleClick}>
        {show ? "HIDE" : "SHOW"}
      </button>
      <button name="error" onClick={handleClick}>
        {show ? "HIDE ERROR" : "SHOW ERROR"}
      </button>
      <button name="success" onClick={handleClick}>
        {show ? "HIDE SUCCESS" : "SHOW SUCCESS"}
      </button>
      {show ? <ToastMessage type={type} setShow={setShow} /> : null}
    </div>
  );
}
