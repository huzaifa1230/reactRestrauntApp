import { useState } from "react";
import { list } from "../../public/list";
import MenuCard from "./MenuCard";

function MenuDetails() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(list);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = list.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const categories = [...new Set(filteredItems.map((item) => item.category))];

  return (
    <>
      <div className="flex flex-col  sm:flex-row justify-between m-8">
        <div className=" ">
          <h2 className="text-3xl  mb-4 sm:mb-0 sm:mr-4  text-center font-bold text-black">Our Menu</h2>
        </div>
        <div className="items-end  flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-400 rounded-l px-4 py-2 focus:outline-none text-black placeholder:text-black"
          />  
          <div className="pl-2">
            <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
              Search
            </button>
          </div>
        </div>
      </div>

      
      {filteredItems.length > 0 ? (
        <div className="pt-10 pl-12 ">
          {categories.map((category) => {
            const categoryItems = filteredItems.filter(
              (item) => item.category === category
            );
            if (categoryItems.length > 0) {
              return (
                <div key={category} >
                  <h2 className="m-8 text-2xl font-bold text-black">
                    {category}
                  </h2>
                  <div className="md:flex md:flex-wrap justify-center  ">
                    {categoryItems.map((item) => (
                      <div key={item.id} className="mb-5 md:mb-10  w-1/4">
                        <MenuCard item={item} />
                      </div>
                    ))}
                  </div>
                </div>


              );
            }
            return null;
          })}
        </div>
      ) : (
        <p className="m-8 text-xl text-black">No items found.</p>
      )}
    </>
  );
}

export default MenuDetails;
