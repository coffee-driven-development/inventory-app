import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const Item = ({ setSelectedPage, currentItem }) => {
  const handleBackButton = async () => {
    setSelectedPage("Main View");
  };

  return (
    <>
      <div className="itemsList-container">
        <h3>{currentItem.title}</h3>
        <img src={currentItem.image} alt={currentItem.name} className="image" />
        <p>{currentItem.description}</p>
        <p>{currentItem.price}</p>
        <p>{currentItem.category}</p>
        <button onClick={handleBackButton}>Back to Items List</button>
      </div>
    </>
  );
};
