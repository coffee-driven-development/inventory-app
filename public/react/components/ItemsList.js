import React, {useEffect} from "react";
import { Item } from "./Item";

export const ItemsList = ({
  item,
  setSelectedPage,
  setCurrentItem,
}) => {

  const handleClick = () => {
    setSelectedPage("Single Item")
    setCurrentItem(item)
  }

  return (
    <>
      <p onClick={handleClick} className='item-list'>{item.title}</p>
    </>
  );
};
