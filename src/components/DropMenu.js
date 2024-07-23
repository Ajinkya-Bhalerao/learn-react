import React, { useState } from "react";
import ItemList from "./ItemList";

const DropMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const res = props.eachMenu;
  return (
    <div>
      <h2
        id="accordion-collapse-heading-1"
        className="shadow-lg my-4 rounded-2xl"
      >
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700  rounded-t-xl gap-3 mb-2"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
          onClick={toggleAccordion}
        >
          <span className="text-20">{res?.card?.card?.title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${isOpen ? "bg-[#ededd5] rounded-2xl mb-2" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 bg-white shadow-lg rounded-2xl">
          {res?.card?.card?.itemCards
            ? res?.card?.card?.itemCards.map((item) => (
                <ItemList
                  key={item?.card?.info.id}
                  itemDes={item?.card?.info}
                />
              ))
            : res?.card?.card?.categories.map((item, idx) => (
                <div key={idx}>
                  <span className="font-bold">{item.title}</span>

                  {item.itemCards.map((itemCard) => (
                    <ItemList
                      key={itemCard?.card?.info.id}
                      itemDes={itemCard?.card?.info}
                    />
                  ))}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
