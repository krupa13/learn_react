import { useState } from "react";
import ItemCard from "./ItemCard";
const RestuarantCategory = ({ data, showItems, onShow }) => {

  const handleClick = () => {
    onShow();
  }

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          {showItems === false ? <span>⬆️</span> : <span>⬇️</span>}
        </div>

          {showItems && <ItemCard items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestuarantCategory;
