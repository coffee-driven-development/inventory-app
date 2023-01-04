import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const Item = ({
  setSelectedPage,
  currentItem,
  fetchItems
}) => {

  const currentItemID = currentItem.id

  const fetchDelete=async(currentItemID)=>{
    const res = await fetch(`${apiURL}/items/${currentItemID}`, {
      method: "DELETE"
    })
    const data = await res.json()
    fetchItems()
    setSelectedPage("Main View")
  }

  const handleDelete = (e) => {
    fetchDelete(e.target.value)
  }

  const handleBackButton = async () => {
    setSelectedPage("Main View");
  };


  return (
      <>
          <h3 className="single-item-header">{currentItem.title}</h3>
          <div className="item-content">
            <img src={currentItem.image} alt={currentItem.name} className="image" />
            <p className="price">${currentItem.price}</p>
            <p className="single-item"><span className="bold">Description: </span>{currentItem.description}</p>
            <p className="single-item"><span className="bold">Category: </span>{currentItem.category}</p>
          </div>
          <div className="buttons-div">
            <button onClick={handleDelete} value={currentItemID} className='button-59'>Delete</button>
            <button onClick={handleBackButton} className='button-59'>Back to Items List</button>
          </div>
      </>
  );
};
