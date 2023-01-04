import React, { useState, useEffect } from "react";
import { ItemsList } from "./ItemsList"
import { AddItem } from "./AddItem"

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Item } from "./Item";

export const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [newItem, setNewItem] = useState({title: '', description: '', price: 0, category: '', image: ''})
  const [selectedPage, setSelectedPage] = useState("Main View")

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
    setSelectedPage("Add Item")
  }

  if(selectedPage === "Main View") {
    return (<main>
        <h1 className="align-header">Inventory App</h1>
        <h2 className="align-header">All Items</h2>
        <div className="button-location">
          <button onClick={handleAddItemButton} className='button-59'>Add Item</button>
        </div>
        <br></br><hr></hr>
        <div className="form-page-style">
          {items.map((item, idx) => <ItemsList
            item={item}
            key={idx}
            setSelectedPage={setSelectedPage}
            setCurrentItem={setCurrentItem}
            />)}
        </div>
    </main>
  )}
  else if (selectedPage === "Add Item") {
    return (<main>
      <h1 className="align-header">Inventory App</h1>
      <h2 className="align-header">Add Items</h2>
      <hr></hr>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </main>
  )}

  else if (selectedPage === "Single Item") {
    return(<main>
        <h1 className="align-header">Inventory App</h1>
        <h2 className="align-header">{currentItem.title}</h2>
        <hr></hr>
      <Item
        setSelectedPage={setSelectedPage}
        currentItem={currentItem}
      />
    </main>
  )}
};
