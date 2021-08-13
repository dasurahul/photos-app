import React from "react";
import Photo from "./Photo";

const Photos = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Photo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Photos;
