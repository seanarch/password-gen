import React, { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "./Main.css";

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
      <h1>Password Generator with React</h1>
      <div className="row">
        <div className="col">
          <div className="password">{password}</div>
        </div>
        <div className="col">
          <button
            className="copyBtn"
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(password);
            }}
          >
            COPY
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="customRange2" className="form-label">
            Character Length
          </label>
        </div>
        <div className="col">
          <RangeSlider
            max={16}
            value={slider}
            onChange={(e) => setSlider(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={() => setUpper(!upper)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Include Uppercase Letters
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={() => setLower(!lower)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Include Lowercase Letters
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={() => setNumber(!number)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Include Numbers
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={() => setSymbol(!symbol)}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Include Symbols
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span>Strength: </span>
        </div>
        <div className="col">
          <span>
            <strong>{str}</strong>
          </span>
        </div>
      </div>
      <button className="generateBtn" type="button" onClick={handleGen}>
        Generate Password
      </button>
    </div>
  );
};

export default Main;
