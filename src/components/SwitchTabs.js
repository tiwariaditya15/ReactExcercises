import { useState } from "react";

function Tab({ tab }) {
  return <section>{tab}</section>;
}

export default function Switchtabs({}) {
  const [component, setComponent] = useState("home");
  const handleClick = (e) => {
    // console.log(e.target.name);
    setComponent(e.target.name);
  };
  return (
    <div>
      <input type="submit" name="home" value="HOME" onClick={handleClick} />
      <input type="submit" name="about" value="ABOUT" onClick={handleClick} />
      <input
        type="submit"
        name="profile"
        value="PROFILE"
        onClick={handleClick}
      />
      {component === "home" ? (
        <Tab tab={component} />
      ) : component === "profile" ? (
        <Tab tab={component} />
      ) : (
        <Tab tab={component} />
      )}
    </div>
  );
}
