import React, { useState } from "react";
import data from "./data";
import List from "./List";

import "./styles.css";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setPeople([]);
          }}
        >
          Clear All
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setPeople(data);
          }}
        >
          Reset All
        </button>
      </section>
    </main>
  );
}

export default App;
