import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [singlePageView, setSinglePageView] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
      console.log(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main className="main-container">
      <h1>Inventory App</h1>
      <h2>All things 🔥</h2>
      <ItemsList
        items={items}
        singlePageView={singlePageView}
        setSinglePageView={setSinglePageView}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </main>
  );
};
