import React from 'react'
import apiURL from '../api';

export function singleItem({inventoryData, setInventoryData, fetchItems}){

  const handleClick=()=>{
    setInventoryData(null)
  }

  const fetchDelete = async (slug) => {
    
    const res = await fetch(`${apiURL}/item/${slug}`, {
      method: "DELETE"
    });
    const data = await res.json();
    fetchPages();
    setInventoryData(null);
  }

  const handleDelete = (e) => {
    
    fetchDelete(e.target.value)
  }

  return (
    <>
      <h1>{inventoryData.title}</h1>
      <p><b>Image:</b> {inventoryData.image}</p>
      <p><b>Price:</b> {inventoryData.price}</p>
      <p><b>Description:</b> {inventoryData.description}</p>
      <p><b>Category:</b> {inventoryData.category}</p>
      <button onClick={handleDelete} value={inventoryData.slug}>Delete</button>
      <button onClick={handleClick}>Back to Wiki List</button>

    </>
  )
}