import React from 'react';
 
const CustomerReviews = () => {
  const reviews = [
    {
      img: "https://i.ibb.co/rRWtpJgr/images-2.jpg",
      name: "Smart Paws Care - Riyad, Dhaka",
      feedback: "Amazing winter coat fitting service! Got perfect fit for my German Shepherd. Very professional service.",
      rating: 5
    },
    {
      img: "https://i.ibb.co/r2bGyYZ9/images-3.jpg",
      name: "Paws Lover - Tania, Chittagong",
      feedback: "Got 24/7 support for my cat's emergency at midnight. Quick response and effective treatment.",
      rating: 4
    },
    {
      img: "https://i.ibb.co/7tQ1hhgn/images-5.jpg",
      name: "Busy Mom - Afsana, Sylhet",
      feedback: "Thanks for the winter nutrition planning. They made diet plan for my puppy, now it's very healthy.",
      rating: 4
    },
    {
      img: "https://i.ibb.co/KjmknkMr/download.jpg",
      name: "Paws Doctor - Arafat, London",
      feedback: "Loved the paw treatment in seasonal grooming for my Labrador. They use winter-safe products.",
      rating: 4
    }
  ];

  return (
    <div className="bg-gray-100 py-10  mx-6 shadow-2xl my-4 rounded-xl ">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">What Our Customers Say's</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto px-3">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className='bg-gray-300 rounded-full p-1 w-fit'><img className='w-[50px] rounded-full' src={review.img}  /></div>
            <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
            <p className="text-yellow-500 mb-2">
           {'⭐'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
            </p>
            <p className="text-gray-700">{review.feedback}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
