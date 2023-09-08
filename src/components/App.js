import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";
import "../index.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  function handleClick() {
    setIsDark((isDark) => !isDark)

  }

  // Use the class name directly based on the isDark state
  const AppClassName = isDark ? "AppClassName" : "App";

  return (
    <div className= {AppClassName} style={{backgroundColor: isDark ? "black" : "white"}}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark ? "App dark" : "App Light"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
