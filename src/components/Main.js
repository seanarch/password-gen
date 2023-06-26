import React, { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const Main = () => {
  const [password, setPassword] = useState("DefaultPassword");
  const [slider, setSlider] = useState(8);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [str, setStr] = useState("Medium");

  const handleGen = () => {
    let result = "";
    const lowercaseChr = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+|";

    let characters = "";
    if (upper) {
      characters += uppercaseChr;
    }
    if (number) {
      characters += nums;
    }

    if (symbol) {
      characters += syms;
    }

    if (lower) {
      characters += lowercaseChr;
    }

    const charactersLength = characters.length;
    let counter = 0;
    while (counter < slider) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }

    setPassword(result);
  };

  useEffect(() => {
    let strLevel = parseInt(slider) + parseInt(upper + lower + number + symbol);

    if (strLevel >= 10) {
      setStr("Strong");
    } else if (strLevel <= 9 && strLevel >= 6) {
      setStr("Medium");
    } else {
      setStr("Weak");
    }
  }, [upper, lower, number, symbol, slider]);
  console.log(parseInt(upper + lower + number + symbol) + parseInt(slider));
  return (
    <div className="container">
      <div className="password">{password}</div>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          navigator.clipboard.writeText(password);
        }}
      >
        COPY
      </button>
      <hr></hr>
      <label htmlFor="customRange2" className="form-label">
        Character Length
      </label>
      <RangeSlider
        max={16}
        value={slider}
        onChange={(e) => setSlider(e.target.value)}
      />
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={() => setUpper(!upper)}
        />
        <label class="form-check-label" for="flexCheckDefault">
          Include Uppercase Letters
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={() => setLower(!lower)}
        />
        <label class="form-check-label" for="flexCheckChecked">
          Include Lowercase Letters
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={() => setNumber(!number)}
        />
        <label class="form-check-label" for="flexCheckChecked">
          Include Numbers
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={() => setSymbol(!symbol)}
        />
        <label class="form-check-label" for="flexCheckChecked">
          Include Symbols
        </label>
      </div>

      <span>Strength: </span>
      <span>
        <strong>{str}</strong>
      </span>
      <br />
      <button type="button" className="btn btn-primary" onClick={handleGen}>
        Generate Password
      </button>
    </div>
  );
};

export default Main;
