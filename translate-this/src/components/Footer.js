import "../styles.css";
import Prime from "../assets/Prime.png"

//Footer component
function Footer(props) {
  return (
    <div
      style={{
        marginTop: "5px",
        fontFamily: "Oswald",
        fontColor: "#38302e",
        height: "400px",
        width: "600px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "24px", textDecoration: "underline" }}>Acknowledgments:</p>
      <img src={Prime} style={{ height: "100px", width: "100px", marginTop: "5px" }}></img>
      <p>
        Photo of Logan found{" "}
        <a
          style={{ color: "#CCDAD1" }}
          href="https://www.eatingwell.com/article/8051294/are-logan-paul-prime-drinks-healthy-dietitian-review/"
        >
          here
        </a>
      </p>
      <p>
        Photo of Prime found{" "}
        <a
          style={{ color: "#CCDAD1" }}
          href="https://www.google.com/search?sxsrf=AB5stBitVzjDGyJmYTrWV50XTawh5sik1Q:1688717476295&q=prime+drink&tbm=isch&sa=X&ved=2ahUKEwjItbPqkvz_AhWCAjQIHbOvDPQQ0pQJegQIDRAB&biw=1440&bih=654&dpr=2#imgrc=ViIFmpctggNHlM"
        >
          here
        </a>
      </p>
      <p>
        Speech bubbles added with help from{" "}
        <a style={{ color: "#CCDAD1" }} href="https://phraseit.net/">
          here
        </a>
      </p>
      <p>
        Border design and source code found{" "}
        <a
          style={{ color: "#CCDAD1" }}
          href="https://codepen.io/jadlimcaco/pen/ExjGrqJ"
        >
          here
        </a>
      </p>
      <br></br>
      <p>
        Created by Emma Graham for Aview International in July 2023
      </p>
      <p>
        <a style={{ color: "#CCDAD1" }} href="https://github.com/egraham96">
          My GitHub
        </a>
      </p>
      <p>
        <a
          style={{ color: "#CCDAD1" }}
          href="https://www.linkedin.com/in/emmag96/"
        >
          My LinkedIn
        </a>
      </p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={props.handleFooter}
          style={{ fontFamily: "Oswald", width: "110px", height: "35px" }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
export default Footer;
