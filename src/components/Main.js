import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import PasswordGen from "./PasswordGen";

const Main = () => {
  const [password, setPassword] = useState("DefaultPassword");
  const [slider, setSlider] = useState(8);

  const handleGen = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 8) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    console.log(result);
    setPassword(result);
  };

  return (
    <div className="container">
      <div className="password">{password}</div>
      <button type="button" className="btn btn-info">
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
      <button type="button" className="btn btn-primary" onClick={handleGen}>
        Generate Password
      </button>
    </div>
  );
};

export default Main;
