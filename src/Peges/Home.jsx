 import React from 'react'
import Slider from './Slider/Slider'
import { useLoaderData } from 'react-router'
import SubscriptMail from '../Subscription/SubscriptMail';
import Testimonial from './CustomerReviews';
import FeaturedServices from './FeaturedServices';
 import { Helmet } from 'react-helmet-async';
 
 function Home() {

  const data = useLoaderData();
 
   return (
     <>
     <Helmet>
            <title>Home </title>
        </Helmet>
     <Slider></Slider>
      <h1 className='text-4xl font-bold text-center py-8  shadow-2xl text-shadow-2xs bg-gray-200   '>upcomming Subscription</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  py-2'>
    {
     Array.isArray(data) && data.map((products,index)=><>
      <SubscriptMail key={index} products={products} ></SubscriptMail>
      </>)
     }
    </div>

    <Testimonial></Testimonial>
    <FeaturedServices></FeaturedServices>
     
     </>
   )
 }
 
 export default Home