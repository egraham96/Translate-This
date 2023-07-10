import "../styles.css";
import { useState } from "react";
import InputBox from "./InputBox";
import JokeBox from "./JokeBox";

//This component asks user whether they want to translate text they submitted themselves or get a joke from JokeAPI they can translate
function Question(props) {
  //State management
  const [showQuestion, setShowQuestion] = useState(true);
  const [inputText, setInputTextBox] = useState(false);
  const [getJoke, setJokeBox] = useState(false);

  
  const handleInputText = () => {
    if (inputText === false) {
      setShowQuestion(false);
      setInputTextBox(true);
    } else {
      setShowQuestion(true);
      setInputTextBox(false);
    }
  };

  const handleGetJoke = () => {
    if (getJoke === false) {
      setShowQuestion(false);
      setJokeBox(true);
    } else {
      setShowQuestion(true);
      setJokeBox(false);
    }
  };

  return (
    <>
      {showQuestion ? (
        <div
          className="question-box"
          style={{
            height: "400px",
            width: "600px",
            backgroundColor: "transparent",
            fontFamily: "Oswald",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              color: "white",
              textAlign: "center",
              padding: "20px",
            }}
          >
            {" "}
            Do you want to input your own text into the translator or use one of
            our sample texts?
          </p>
          <p
            style={{ fontSize: "20px", color: "#ccdad1", textAlign: "center" }}
          >
            FYI, all of our sample texts are jokes provided by the JokeAPI 😂
          </p>
          <br></br>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={handleInputText}
              style={{ width: "100px", marginRight: "30px" }}
            >
              Use my own text
            </button>
            <button onClick={handleGetJoke} style={{ width: "100px" }}>
              Test the translator with a joke
            </button>
          </div>
          <br></br>
          <p
            style={{ fontSize: "20px", color: "#ccdad1", textAlign: "center" }}
          >
            Visit the JokeAPI{" "}
            <a style={{ color: "#ccdad1" }} href="https://jokeapi.dev/">
              here
            </a>
          </p>
        </div>
      ) : null}
      {inputText ? (
        <InputBox handleInputText={handleInputText}></InputBox>
      ) : null}
      {getJoke ? <JokeBox handleGetJoke={handleGetJoke}></JokeBox> : null}
    </>
  );
}

export default Question;
