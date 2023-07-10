import "../styles.css";
import { useState, useEffect } from "react";
import LoadingGif from "../assets/Loading.gif"
const apiKey = process.env.REACT_APP_API_KEY;

//This component allows users to translate their submitted input into a language of their choice
function TranslatorInput(props) {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("");
  const [translatedInput, setTranslatedInput] = useState("");

  //Gets user's saved input (if they have submitted input) from localStorage
  useEffect(() => {
    var userInput = localStorage.getItem("input");
    if (userInput) {
      setInput(userInput);
    }
  }, [input]);

   //Changes the language based on what user selects in dropdown
  function handleLanguage(event) {
    setLanguage(event.target.value);
  }

  //If user has chosen a language and has a saved input, this function submits a post request to the LibreTransate api and generates a translation from English into language of user's choice
  async function translateInput() {
    if (input !== "" && language !== "") {
      try {
        setLoading(true);
        const res = await fetch("https://libretranslate.de/translate", {
          method: 'POST',
          body: JSON.stringify({
            q: `${input}`,
            source: "auto",
            target: language,
            api_key: apiKey
          }),
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
          }
        });
        const data = await res.json();
        setTranslatedInput(data.text);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  }


  return (
    <div
      style={{
        marginTop: "5px",
        fontFamily: "Oswald",
        fontColor: "#38302e",
        height: "400px",
        width: "600px",
        backgroundColor: "transparent",
        textAlign: "center",
      }}
    >
      {input ? (
        <div style={{ marginTop: "20px" }}>
          <p style={{ fontSize: "24px", textDecoration: "underline" }}>
            Your input:
          </p>
          <p>{input}</p>
        </div>
      ) : null}

      <div style={{ marginTop: "20px", fontFamily: "Oswald" }}>
        <select onChange={handleLanguage} style={{ height: "30px", textAlign: "center" }}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="pt">Portuguese</option>
          <option value="ur">Urdu</option>
          <option value="te">Telugu</option>
          <option value="nl">Dutch</option>
          <option value="tl">Tagalog</option>
          <option value="id">Indonesian</option>
          <option value="bn">Bengali</option>
          <option value="ar">Arabic</option>
          <option value="de">German</option>
          <option value="mr">Marathi</option>
          <option value="ja">Japanese</option>
        </select>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={translateInput}
          style={{ fontFamily: "Oswald", width: "130px", height: "40px", backgroundColor: "#6f6866", color: "white" }}
        >
          Translate!
        </button>
      </div>
      {loading ? (
        <img style={{ marginTop: "20px" }} src={LoadingGif}></img>) : (null)}
      {translatedInput ? (
        <div>{translatedInput}</div>) : (null)}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={props.handleInputBox}
          style={{ fontFamily: "Oswald", width: "130px", height: "40px", backgroundColor: "#6f6866", color: "white" }}
        >
          Go Back/Change Input
        </button>
      </div>
    </div>
  );
}
export default TranslatorInput;
