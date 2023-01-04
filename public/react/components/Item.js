import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const Item = ({
  setSelectedPage,
  currentItem,
}) => {

  const currentItemID = currentItem.id

  const handleDelete=async(currentItemID)=>{
    const res = await fetch(`${apiURL}/items/${currentItemID}`, {
      method: "DELETE"
    })
    setSelectedPage("Main View")
  }

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
