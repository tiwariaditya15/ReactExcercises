import { useState } from "react";

const dark = {
  backgroundColor: "#1d3557",
  color: "#f1faee",
  padding: "2rem"
};
export default function DarkMode({}) {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = (e) => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div>
      <section style={darkMode ? dark : { padding: "2rem" }}>
        This is dark toggle excercise where you can turn this area to dark mode.
      </section>
      <section>
        <button onClick={handleClick}>
          {darkMode ? "LIGHT" : "DARK"} MODE
        </button>
      </section>
    </div>
  );
}
