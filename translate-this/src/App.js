import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import LoganGreeter from "./components/LoganGreeter";
import Footer from "./components/Footer";


function App() {
  const [showFooterButton, setShowFooterButton] = useState(true);
  const [showFooter, setShowFooter] = useState(false)


  const handleFooter = () => {
    if (showFooter) {
      setShowFooter(false)
      setShowFooterButton(true)
    } else {
      setShowFooterButton(false)
      setShowFooter(true)
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="main-box">
        <span className="border tl"></span>
        <span className="border tr"></span>
        <span className="border bl"></span>
        <span className="border br"></span>
        {showFooter ? (<Footer handleFooter={handleFooter}></Footer>) : (<LoganGreeter></LoganGreeter>)}
      </div>
      <div className="footer-box" style={{ marginTop: "80px", backgroundColor: "#CCDAD1",  position:"relative" }}>
        {showFooterButton ?
          (<button
            onClick={handleFooter}
            style={{
              fontFamily: "Oswald",
              width: "110px",
              height: "35px",
              color: "black",
              margin: "0",
              padding: "0",
            }}
          >
            Acknowledgments
          </button>) : (null)
        }
      </div>
    </div>
  );
}

export default App;
