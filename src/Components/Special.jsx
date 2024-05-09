// import React from 'react'

import Card from "./Card";
import { list } from "../../public/list";

function Special() {
  const feature = list.filter((item) => item.type === "feature");
  return (
    <>
      <h2 className="text-3xl font-bold mt-12 text-black text-center ">
        Our Specialities
      </h2>
      <div className=" pt-10 pl-6 md:pl-4 md:flex md:flex-wrap justify-center">
        {feature.map((item) => (
          <div className="mb-5 md:mb-10 w-1/3 ">
            <Card key={item.id} item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Special;
