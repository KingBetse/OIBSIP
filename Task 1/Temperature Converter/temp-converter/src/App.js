import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="all">
        <Container />
      </div>
    </div>
  );
}
function Container() {
  return (
    <div className="containe">
      <h3>Temperature Converter</h3>
      <Converter />
    </div>
  );
}
function Converter() {
  const [tempName, setTempName] = useState("");
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();

  function handleCalc() {
    if (tempName === "*C") {
      const result = value * 1.8 + 32;
      console.log(result);

      return parseFloat(result).toFixed(2);
    } else if (tempName === "*F") {
      const result = ((value - 32) * 5) / 9;
      console.log(result);
      return parseFloat(result).toFixed(2);
    } else if (tempName === "*K") {
      const result = value - 273.15;
      return parseFloat(result).toFixed(2);
    } else if (tempName === "*c") {
      const result = Number(value) + 273.15;
      console.log(result);
      return parseFloat(result).toFixed(2);
    }
  }

  return (
    <div className="form" id="form">
      <form>
        <select
          className="form-select"
          onChange={(e) => {
            setTempName(e.target.value);
          }}
        >
          <option>Choose </option>
          <option value="*C">*C to *F</option>
          <option value="*F">*F to *C</option>
          <option value="*c">*C to *K</option>
          <option value="*K">*K to *C</option>
        </select>

        <br />
        <div className="input-group">
          <input
            type="number"
            placeholder={
              tempName ? `Enter value in ${tempName}` : "Enter a Value"
            }
            className="input-value form-control"
            value={value}
            required
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <div className="input-group-text">{tempName}</div>
        </div>

        <br />
      </form>
      {show ? (
        <span>
          Result:{" "}
          {value
            ? `${handleCalc()} ${
                tempName === "*C"
                  ? "*F"
                  : tempName === "*F"
                  ? "*C"
                  : tempName === "*c"
                  ? "*k"
                  : tempName === "*K"
                  ? "*C"
                  : ""
              }
        `
            : "Enter Value"}
          {""}
        </span>
      ) : (
        ""
      )}
      {tempName || value ? (
        <button
          className="btn btn-primary  "
          onClick={() => {
            handleCalc();
            setShow(true);
          }}
        >
          Convert
        </button>
      ) : (
        <button
          className="btn btn-primary  "
          onClick={() => {
            handleCalc();
            setShow(true);
          }}
          disabled
        >
          Convert
        </button>
      )}
    </div>
  );
}

export default App;
