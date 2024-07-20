import React, { useState } from "react";

const DropMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const res = props.eachMenu;
  return (
    <div >
      <h2 id="accordion-collapse-heading-1" className="bg-[#ededd5] rounded-2xl">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700  rounded-t-xl gap-3 mb-2"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
          onClick={toggleAccordion}
        >
          <span>{res?.card?.card?.title}</span>
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
        <div className="p-5 border rounded-2xl">
          <ul>
            <li>
              <ul className="list-decimal">
                {res?.card?.card?.itemCards ? (
                  res?.card?.card?.itemCards.map((item) => (
                    <li key={item?.card?.info.id}>
                      {item?.card?.info.name} - Rs.
                      {item?.card?.info.defaultPrice / 100 ||
                        item?.card?.info.price / 100}
                    </li>
                  ))
                ) : (
                  <ul>
                    {res?.card?.card?.categories.map((item, idx) => (
                      <li key={idx}>
                        <span className="font-bold">{item.title}</span>
                        <ul>
                          {item.itemCards.map((itemCard) => (
                            <li key={itemCard?.card?.info?.id}>
                              {itemCard?.card?.info?.name} - Rs.
                              {itemCard?.card?.info?.defaultPrice / 100 ||
                                itemCard?.card?.info?.price / 100}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;


