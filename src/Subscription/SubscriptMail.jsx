import React from "react";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router";

function SubscriptMail({ products }) {
  const { tech_category, frequency, name, price } = products;
  return (
    <div className="card w-[90%] max-w-sm mx-auto bg-[#F3F4F6] rounded-xl overflow-hidden shadow-lg hover:shadow-xl   border border-gray-200">
      <figure className="relative overflow-hidden group ">
        <img
          src={products.banner}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={products.name}
        />
        <div className="absolute top-4 right-4 bg-[#3B82F6] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
          {tech_category}
        </div>
      </figure>

      <div className="card-body p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-xl font-bold text-gray-800 line-clamp-1">
            {name}
          </h2>
          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-sm font-semibold">
            ${price}
          </span>
        </div>

        <div className="flex items-center text-gray-600">
          <CiCalendar size={23} />

          {frequency}
        </div>

        <div className="card-actions pt-4  ">
          <Link
            to={`/homeDetails/${products.id}`}
            className=" w-full bg-gradient-to-r bg-[#3B82F6] hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
          >
            View Details
            <div className="mx-3">
              {" "}
              <FaArrowRight />
            </div>
          </Link>

          
        </div>
      </div>
    </div>
  );
}

export default SubscriptMail;
