import "../styles.css";
import { useState, useEffect } from "react";
import TranslatorInput from "./TranslatorInput";
import LoadingGif from "../assets/Loading.gif"

function InputBox(props) {
  const [showInputBox, setShowInputBox] = useState(true)
  const [loading, setLoading] = useState(false);
  const [freeInput, setFreeInput] = useState("");

  function saveInput() {
    var val = localStorage.getItem("input")
    if (val) {
      localStorage.clear()
    } else {
      localStorage.setItem("input", freeInput)
      handleInputBox()
    }
  }

  function handleInputBox() {
    if (showInputBox) {
      setShowInputBox(false)
    } else {
      setShowInputBox(true)
    }
  }

  function handleInputChange(event) {
    setFreeInput(event.target.value)
  };

  if (showInputBox) {
    return (
      <>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
              width: "600px",
              fontFamily: "Oswald",
            }}>
            <img src={LoadingGif}>
            </img>
          </div>) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "400px",
              width: "600px",
              backgroundColor: "transparent",
              fontFamily: "Oswald",
            }}
          >
            <div>
              <form>
                <p style={{ fontSize: "20px", wordWrap: "break-word", marginBottom: "30px" }}>Enter at least one character to submit!</p>
                <input style={{ width: "110px", height: "35px" }}
                  type="text"
                  placeholder="hello"
                  onChange={handleInputChange} />
                {freeInput ? (
                  <button
                    onClick={saveInput}
                    style={{ fontFamily: "Oswald", width: "110px", height: "35px", marginLeft: "20px" }}>Submit
                  </button>) : (null)}
              </form>
            </div>
            <div>
              <button
                onClick={props.handleInputText}
                style={{ fontFamily: "Oswald", width: "110px", height: "35px" }}
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (<TranslatorInput handleInputBox={handleInputBox}></TranslatorInput>)
  }
}
export default InputBox;

