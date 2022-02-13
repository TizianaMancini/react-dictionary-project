import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary 📚</header>

        <Dictionary defaultKeyword="karate" />
      </div>
      <footer className="App-footer">
        <small>
          Coded by{" "}
          <a
            href="www.linkedin.com/in/tiziana-mancini Tiziana Mancini using"
            target="_blank"
            rel="noreferrer"
          >
            Tiziana Mancini
          </a>{" "}
          using{" "}
          <a
            href="https://github.com/TizianaMancini/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced code
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://hopeful-agnesi-017cd9.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </small>
      </footer>
    </div>
  );
}
