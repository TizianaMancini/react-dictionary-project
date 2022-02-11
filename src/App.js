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
        <small>Coded by Tiziana Mancini</small>
      </footer>
    </div>
  );
}
