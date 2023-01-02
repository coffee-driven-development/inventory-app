import React, { useEffect, useState } from "react";
import apiURL from "../api";

export const Item = ({ item }) => {
  const [singlePageView, setSinglePageView] = useState(false);
  const [showItem, setShowItem] = useState(true);

  const fetchItem = async (id) => {
    try {
      const res = await fetch(`${apiURL}/items/${id}`);
      const data = await res.json();
      console.log(data);
      setShowItem(data);
      // TODO: handle state
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
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.name} />
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.category}</p>
          <button onClick={handleBackButton}>Back to Wiki List</button>
        </>
      ) : (
        <h3 onClick={showSinglePageView}>Item</h3>
      )}
    </>
  );
};
