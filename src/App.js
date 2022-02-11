import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>

        <Dictionary />
      </div>
      <footer className="App-footer">
        <small>
          Coded by Tiziana Mancini using{" "}
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
