import React from "react";
import { Helmet } from "react-helmet-async";

function AbutBox() {
  return (
    <div>
      <Helmet>
        <title>AboutBox </title>
      </Helmet>
      <div className="bg-gray-300 flex flex-col justify-center">
        <div className=" w-[90%] bg-blue-500 rounded-2xl shadow-2xl    mx-auto my-[50px]">
          <h1 className="font-bold text-gray-100 text-4xl text-center items-center  pt-[1%]">
            Welcome
          </h1>

          <h1 className="font-semibold text-white text-xl text-center items-center py-6">
            "Paws Care offers professional grooming, winter clothing, and
            wellness services to keep your pets happy and healthy.
            <br /> Trust us for personalized care tailored to your pet's needs."{" "}
          </h1>
        </div>

        {/* out mition ? */}
        <div className="text-center rounded-xl bg-gray-200 w-[90%] mx-auto my-4">
          <h2 className="font-bold text-3xl py-3 shadow-2xl">
            Our Mission and Objectives:
          </h2>
        </div>
        <div className="w-[90%] bg bg-blue-200 mx-auto p-4 rounded-2xl">
          <ol>
            <li className="m-2 bg-gray-200 rounded-xl p-3 text-xl font-semibold">
              1 : Provide high-quality, breed-specific winter clothing and
              accessories.
            </li>
            <li className="m-2 bg-gray-200 rounded-xl p-3 text-xl font-semibold">
              2 :Offer professional grooming services to protect pets' skin and
              coat in cold weather.
            </li>
            <li className="m-2 bg-gray-200 rounded-xl p-3 text-xl font-semibold">
              3 : Promote overall pet health and wellness through seasonal
              check-ups and advice.
            </li>
            <li className="m-2 bg-gray-200 rounded-xl p-3 text-xl font-semibold">
              4 : Create a safe and enjoyable winter experience for pets and
              their owners.
            </li>
          </ol>
        </div>

        {/* out service  */}
        <h2 className="text-4xl font-bold text-indigo-600 text-center p-8">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 m-4">
          <div className="card card-body bg-white">
            <h2 className="text-2xl font-bold text-indigo-600 text-center">
              Winter Coat Fitting Service
            </h2>

            <ol>
              <li>
                <p className="text-lg">Breed-specific coat measurements</p>
                <li>
                  <p className="text-lg"> Custom fitting adjustments</p>
                </li>
                <li>
                  <p className="text-lg">
                    Weather-appropriate material selection
                  </p>
                </li>
              </li>
            </ol>
            <button className="btn btn-primary text-center">Show About</button>
          </div>
          <div className="card card-body bg-white">
            <h2 className="text-2xl font-bold text-indigo-600 text-center">
              Seasonal Grooming & Maintenance
            </h2>

            <p className="text-lg">Winter-safe shampoo treatment</p>

            <p className="text-lg">Paw protection and moisturizing</p>

            <p className="text-lg">Coat conditioning for cold</p>
            <button className="btn btn-primary text-center">Show About</button>
          </div>
          <div className="card card-body bg-white">
            <h2 className="text-2xl font-bold text-indigo-600 text-center">
              Winter Nutrition & Diet Planning
            </h2>

            <p className="text-lg">Cold weather calorie adjustment</p>

            <p className="text-lg">Immunity boosting supplements</p>

            <p className="text-lg">Seasonal food recommendations</p>
            <button className="btn btn-primary text-center">Show About</button>
          </div>
          <div className="card card-body bg-white">
            <h2 className="text-2xl font-bold text-indigo-600 text-center">
              24/7 Emergency Veterinary Support
            </h2>

            <p className="text-lg">Immediate medical assistance</p>

            <p className="text-lg">Emergency hotline availability</p>

            <p className="text-lg">Qualified vet on-call service</p>
            <button className="btn btn-primary text-center">Show About</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbutBox;
