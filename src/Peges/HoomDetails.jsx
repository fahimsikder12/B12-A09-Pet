import React, { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { Star } from "react-feather";
import { BsStarFill } from "react-icons/bs";

function HoomDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const [comment, setComment] = useState("");
  const [ratting, setRatting] = useState("");
  const [comments, setComments] = useState([]);

  //comment handle

  const revewtHandle = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };
  const handleRatingChange = (e) => {
    setRatting(e.target.value);
  };

  const onclickHandleComment = (e) => {
    e.preventDefault();
    const newComment = {
      ratting: ratting,
      comment: comment,
    };
    setComments((comments) => [...comments, newComment]);

    setRatting("");
    setComment("");
  };
console.log("Data from loader:", data);
console.log("Params ID:", id)

 const singleHome = data?.find(home => home?.id?.toString() === id);

 

  if (!id) {
    return <p className="text-center text-red-500 mt-10">No service ID provided</p>;
  }

  if (!singleHome) {
    return <p className="text-center text-red-500 mt-10">Service not found</p>;
  }


  return (
    <div>
      <Helmet>
        <title>{singleHome.serviceName} | Paws+Details</title>
      </Helmet>
      <div className="bg-gray-300 min-h-screen p-2">
        <div className="container mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
          <div className="lg:w-3/4">
            <h1 className="text-3xl font-bold text-blue-500 mb-4">
              {singleHome.serviceName}
            </h1>
            <img
              src={singleHome.banner}
              alt={singleHome.serviceName}
              className="  rounded-lg mb-4 w-[90%] h-[400px]"
            />
            <p className="text-lg text-gray-700 mb-4 font-semibold">
              {singleHome.description}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Subscription Price:</strong> ${singleHome.price}/month
              <br />
              <strong> Frequency:</strong> {singleHome.category}
              <br />
              <strong>Category:</strong> {singleHome.tech_category}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Features
              </h3>
              <p className="text-lg text-gray-700">
                {singleHome.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </p>
            </div>

            {/* Review Form */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
              <form>
                <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
                  <input
                    onChange={handleRatingChange}
                    type="number"
                    name="rating"
                    min="1"
                    max="5"
                    className="p-2 border rounded-md w-full lg:w-1/4 mb-4 lg:mb-0"
                    placeholder="Rating (1-5)"
                    required
                  />
                  <textarea
                    onChange={revewtHandle}
                    name="review"
                    rows="3"
                    className="p-2 border rounded-md w-full lg:w-3/4"
                    placeholder="Write your review..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={onclickHandleComment}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Submit Review
                </button>
              </form>
            </div>

            {/* Customer Reviews */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>

              <div className="mb-4">
                <div className="bg-gray-300 shadow-2xs p-6 rounded-xl">
                  <h1 className="font-bold text-xl">Review</h1>
                  <div>
                    <div className="text-lg">
                      {comments.map((text, index) => (
                        <div
                          key={index}
                          className=" bg-gray-100 m-1 rounded-xl px-3"
                        >
                          <p className="flex items-center gap-3">
                            <span className="font-semibold">Ratting : </span>{" "}
                            {text.ratting}{" "}
                            <BsStarFill
                              className="text-amber-500  "
                              size={20}
                            ></BsStarFill>
                          </p>
                          <p>
                            <span className="font-semibold">Review : </span>
                            {text.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoomDetails;
