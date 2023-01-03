import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList"
import { AddItem } from "./AddItem"

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [singlePageView, setSinglePageView] = useState(false);
  const [currentItem, setCurrentItem] = useState("");
  const [newItem, setNewItem] = useState({title: '', description: '', price: 0, category: '', image: ''})
  const [toggleForm, setToggleForm] = useState(false)

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

  const handleAddItemButton = () => {
    setToggleForm(true)
  }

  if(!toggleForm) {
    return (<main>
        <h1>Inventory App</h1>
        <h2>All Items</h2>
        <ItemsList
          items={items}
          singlePageView={singlePageView}
          setSinglePageView={setSinglePageView}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          />
        <button onClick={handleAddItemButton}>Add Item</button>
    </main>
  )}
  else if(toggleForm) {
    return (<main>
      <h1>Add Item</h1>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        toggleForm={toggleForm}
        setToggleForm={setToggleForm}
        fetchItems={fetchItems}
      />
    </main>
  )}
};
