import { useState } from "react";

const sizes = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
const fonts = [
  "Arial, sans-serif",
  "Helvetica, sans-serif",
  "Gill Sans, sans-serif",
  "Lucida, sans-serif",
  "Helvetica Narrow, sans-serif",
  "sans-serif",
  "Times, serif",
  "Times New Roman, serif",
  "Palatino, serif",
  "Bookman, serif",
  "New Century Schoolbook, serif",
  "serif",
  "Andale Mono, monospace",
  "Courier New, monospace",
  "Courier, monospace",
  "Lucidatypewriter, monospace",
  "Fixed, monospace",
  "monospace",
  "Comic Sans, Comic Sans MS, cursive",
  "Zapf Chancery, cursive",
  "Coronetscript, cursive",
  "Florence, cursive",
  "Parkavenue, cursive",
  "cursive",
  "Impact, fantasy",
  "Arnoldboecklin, fantasy",
  "Oldtown, fantasy",
  "Blippo, fantasy",
  "Brushstroke, fantasy",
  "fantasy"
];

export default function SmallFunction({}) {
  const [size, setSize] = useState(8);
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial, sans-serif");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    e.target.name === "increment"
      ? setSize((prevSize) => prevSize + 8)
      : setSize((prevSize) => prevSize - 8);
  };

  const handleSelect = (e) => {
    // console.log(typeof parseInt(e.target.value));
    console.log(e.target.name);
    e.target.name === "sizeSelector"
      ? setSize(parseInt(e.target.value))
      : setFont(e.target.value);
  };

  return (
    <div>
      {/* input tag */}
      <input type="text" onChange={handleChange} placeholder="Text.." />
      <br />
      <br />
      {/* inc and dnc buttons */}
      <button name="increment" onClick={handleClick}>
        +
      </button>
      &nbsp;
      <button name="decrement" onClick={handleClick}>
        -
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;<span>{size}px</span>
      <br />
      <br />
      {/* select font*/}
      <select name="sizeSelector" onChange={handleSelect}>
        {sizes.map((size) => {
          return <option value={size}>{size}</option>;
        })}
      </select>
      <br />
      <br />
      {/* select font */}
      <select name="fontSelector" onChange={handleSelect}>
        {fonts.map((font) => {
          return <option value={font}>{font}</option>;
        })}
      </select>
      <br />
      <br />
      {/* copy CSS */}
      <h3>Copy CSS 👇</h3>
      <textarea
        rows="8"
        cols="62"
        value={"{\n\tfont-family:'" + font + "';\n\tfont-size:" + size + ";\n}"}
      ></textarea>
      <br />
      <br />
      <p
        style={{ fontSize: size, fontFamily: font, backgroundColor: "#F9FAFB" }}
      >
        {text}
      </p>
    </div>
  );
}
