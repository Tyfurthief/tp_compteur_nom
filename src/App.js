import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Names from "./Names";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleClickPlus = () => {
    setCount(count + 1);
    setIsError(false);
  };

  const handleClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setIsError(true);
    };
  };

  return (
    <BrowserRouter>
      <nav className="App-navigation">
        <Link to="/counter">Compteur</Link>
        <Link to="/names">Générateur de noms</Link>
      </nav>
      <Routes>
        <Route path="/counter" element={<Counter isErrorProps={isError} countProps={count} onClickPlus={handleClickPlus} onClickMinus={handleClickMinus} />} />
        <Route path="/names" element={<Names />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;