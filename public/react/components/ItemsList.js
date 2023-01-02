import React from "react";
import { Item } from "./Item";

export const ItemsList = ({
  items,
  singlePageView,
  setSinglePageView,
  currentItem,
  setCurrentItem,
}) => {
  return (
    <>
      {singlePageView
        ? items.map((item, idx) => {
            return (
              item.id === currentItem && (
                <Item
                  item={item}
                  key={idx}
                  singlePageView={singlePageView}
                  setSinglePageView={setSinglePageView}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                />
              )
            );
          })
        : items.map((item, idx) => (
            <Item
              item={item}
              key={idx}
              singlePageView={singlePageView}
              setSinglePageView={setSinglePageView}
              currentItem={currentItem}
              setCurrentItem={setCurrentItem}
            />
          ))}
    </>
  );
};

// export default ItemsList
