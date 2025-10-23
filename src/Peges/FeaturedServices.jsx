import React from "react";

function FeaturedServices() {
  return (
    <div>
      <section className="mx-6">
        <h2 className="text-4xl font-bold mb-4 text-center py-4">
          {" "}
          Featured Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">
                24/7 Emergency Veterinary Support
              </h3>
              <p>
                Round-the-clock emergency care for your pets during the harsh
                winter months.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-lg shadow">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">
                Seasonal Grooming & Health Check
              </h3>
              <p>
                Special winter grooming and health checkup to keep your pet in
                top condition.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">
                Winter Wellness Package
              </h3>
              <p>
                Comprehensive grooming and health checkup designed for winter season.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-lg shadow">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">
                Custom Winter Coat Fitting
              </h3>
              <p>
                Professionally fitted winter coats and sweaters tailored for your pet's breed and size.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedServices;
