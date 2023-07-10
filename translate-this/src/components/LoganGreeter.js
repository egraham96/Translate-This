import "../styles.css";
import { useState } from "react";
import Logan from "../assets/Logan.png";
import Question from "./Question";


function LoganGreeter() {
  const [showLogan, setShowLogan] = useState(true);

  const handleLogan = () => {
    if (showLogan){
    setShowLogan(false)
     } else {
      setShowLogan(true)
  };
}

      return (
        <>
      {showLogan ? (
        <div>
          <img
            src={Logan}
            style={{
              height: "400px",
              width: "600px",
              margin: "0 auto",
              padding: "0px"
            }}
          ></img>
          <br></br>
          <br></br>
          <button
            onClick={handleLogan}
            style={{
              display: "block",
              margin: "0 auto",
              fontFamily: "Oswald",
              fontSize: "20px",
              fontWeight: "600",
              width: "150px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            Let's get started!
          </button>
        </div>
      ) : (
        <Question></Question>
      )}
    </>
  );
}

export default LoganGreeter;
