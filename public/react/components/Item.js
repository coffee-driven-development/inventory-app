import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const Item = ({
  item,
  singlePageView,
  setSinglePageView,
  setCurrentItem,
}) => {
  const fetchItem = async () => {
    try {
      const res = await fetch(`${apiURL}/items/${item.id}`);
      const data = await res.json();
      console.log(data.id);
      setCurrentItem(data.id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const showSinglePageView = () => {
    fetchItem();
    setSinglePageView(!singlePageView);
  };

  const handleBackButton = async () => {
    setSinglePageView(!singlePageView);
  };

  return (
    <>
      {singlePageView ? (
        <>
          <div className="item-container">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.name} className="image" />
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button onClick={handleBackButton}>Back to Items List</button>
          </div>
        </>
      ) : (
        <h3 onClick={showSinglePageView}>{item.title}</h3>
      )}
    </>
  );
};
