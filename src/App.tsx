import "./App.css";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          alt="img"
          style={{ width: "70px", height: "70px", marginRight: "20px" }}
        />
        <h1>Crypto Folio</h1>
      </header>
    </div>
  );
}

export default App;
