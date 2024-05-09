// import React from "react";

function MenuCard({ item }) {
  return (
    <div className="card w-56  bg-gray-600 shadow-xl flex  ">
      <figure>
        <img src={item.img} />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-2xl ">{item.name}</h2>
        <p className="">{item.desc}</p>
        <p className="w-50 text-center font-bold text-2xl text-black">
          Rs. {item.price}
        </p>
      </div>
    </div>
  );
}

export default MenuCard;
