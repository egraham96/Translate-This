import "../styles.css";
import { useState, useEffect } from "react";
import TranslatorJoke from "./TranslatorJoke";
import LoadingGif from "../assets/Loading.gif"

function JokeBox(props) {
const [showJokeBox, setShowJokeBox] = useState (true)
const [loading, setLoading] = useState(false);
const [jokeInput, setJokeInput] = useState("");

function saveInput() {
    var val = localStorage.getItem("input")
    if(val){
      localStorage.clear()
    }else {
      localStorage.setItem("input", jokeInput)
      handleJokeBox()
    }
}

function handleJokeBox() {
    if (showJokeBox){
        setShowJokeBox(false)
    }else{
        setShowJokeBox(true)
    }
}

async function fetchJoke() {
    try{
        setLoading(true);
        let response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&format=txt&type=single')
        let data = await response.text()
        setJokeInput(data)
        setLoading(false)
    } catch(err) {
                console.log(err);
            }
    }

  if(showJokeBox){
  return (
    <>
    {loading? (
    <div
    style={{
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      height: "400px",
      width: "600px",
      fontFamily: "Oswald",
    }}>
        <img src={LoadingGif}>
            </img>
            </div>):(
    <div
      style={{
        display:"flex",
        alignItems:"center",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "400px",
        width: "600px",
        backgroundColor: "transparent",
        fontFamily: "Oswald",
      }}>
        <div style={{width: "300px", wordWrap: "break-word"}}>
            <p style={{fontSize: "20px"}}>{jokeInput}</p>
        </div>
     <div><button
          onClick={fetchJoke}
          style={{ fontFamily: "Oswald", width: "110px", height: "35px" }}
        >
        Fetch Joke
        </button></div>
        {jokeInput? (
        <div><button
          onClick={saveInput}
          style={{ fontFamily: "Oswald", width: "110px", height: "35px" }}
        >
        Translate it!
        </button></div>): (null)}
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
