import "../styles.css";
import { useState, useEffect } from "react";
import TranslatorJoke from "./TranslatorJoke";
import LoadingGif from "../assets/Loading.gif"

//This component allows users to generate a joke (or multiple) from the JokeAPI and saves the most recent joke generated when user presses "Translate"
function JokeBox(props) {
  //State management
  const [showJokeBox, setShowJokeBox] = useState(true)
  const [loading, setLoading] = useState(false);
  const [jokeInput, setJokeInput] = useState("");

  //When user presses Translate button the most recent generated joke is saved to localStorage
  function saveInput() {
    var val = localStorage.getItem("input")
    if (val) {
      localStorage.clear()
    } else {
      localStorage.setItem("input", jokeInput)
      handleJokeBox()
    }
  }
  //Toggles display of this component
  function handleJokeBox() {
    if (showJokeBox) {
      setShowJokeBox(false)
    } else {
      setShowJokeBox(true)
    }
  }

  //When user presses "Fetch Joke" button, this function calls the JokeAPI and returns one *appropriate* joke
  async function fetchJoke() {
    try {
      setLoading(true);
      let response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&format=txt&type=single')
      let data = await response.text()
      setJokeInput(data)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  if (showJokeBox) {
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
            }}>
            <div style={{ width: "300px", wordWrap: "break-word" }}>
              <p style={{ fontSize: "20px" }}>{jokeInput}</p>
            </div>
            <div><button
              onClick={fetchJoke}
              style={{ fontFamily: "Oswald", width: "110px", height: "35px" }}
            >
              Fetch Joke
            </button></div>
            {jokeInput ? (
              <div><button
                onClick={saveInput}
                style={{ fontFamily: "Oswald", width: "110px", height: "35px" }}
              >
                Translate it!
              </button></div>) : (null)}
            <div>
              <button
                onClick={props.handleGetJoke}
                style={{ fontFamily: "Oswald", width: "110px", height: "35px" }}
              >
                Go Back
              </button>
            </div>
          </div>)}
      </>
    );
  } else {
    return (<TranslatorJoke handleJokeBox={handleJokeBox}></TranslatorJoke>)
  }
}
export default JokeBox;
