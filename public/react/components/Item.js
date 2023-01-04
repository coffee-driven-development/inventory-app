import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const Item = ({
  setSelectedPage,
  currentItem,
}) => {

  const handleBackButton = async () => {
    setSelectedPage("Main View");
  };

  return (
      <>
          <h3 className="single-item-header">{currentItem.title}</h3>
          <img src={currentItem.image} alt={currentItem.name} className="image single-item" />
          <p className="single-item">{currentItem.description}</p>
          <p className="single-item">{currentItem.price}</p>
          <p className="single-item">{currentItem.category}</p>
          <button onClick={handleBackButton} className='button-59'>Back to Items List</button>
      </>
  );
};
