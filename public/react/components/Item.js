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

  // const handleDelete=async(currentItemID)=>{
  //   try {
  //     const requestOptions = {
  //         method: 'DELETE',
  //         headers: {'Content-Type': 'application/JSON'}
  //     }
  //     const response = await fetch(`${apiURL}/items/${currentItemID}`, requestOptions)
  //     setSelectedPage("Main View")
  //   } catch (err) {
  //     console.log("Oh no an error! ", err);
  //   }
  // }

  const handleBackButton = async () => {
    setSelectedPage("Main View");
  };


  return (
      <>
          <h3>{currentItem.title}</h3>
          <img src={currentItem.image} alt={currentItem.name} className="image" />
          <p>{currentItem.description}</p>
          <p>{currentItem.price}</p>
          <p>{currentItem.category}</p>
          <button onClick={handleDelete} value={currentItemID}>Delete</button>
          <button onClick={handleBackButton}>Back to Items List</button>
      </>
  );
};
