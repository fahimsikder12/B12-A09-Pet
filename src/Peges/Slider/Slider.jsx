import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <div className="w-full h-[400px] relative">
      {/* Custom arrows */}
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        <button ref={prevRef} className="text-white bg-black p-2 rounded-full">
          <FaArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <button ref={nextRef} className="text-white bg-black p-2 rounded-full">
          <FaArrowRight size={24} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}//
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={true}
        speed={800}
        className="h-full"
      >
        <SwiperSlide>
          <div>
          <div>
          <img 
            src={"https://www.shutterstock.com/image-photo/applying-paw-ointment-balm-on-600nw-2542653247.jpg"}
            className="w-full h-full object-cover relative"
          />
          <div className='absolute flex flex-col  left-[20%] w-[60%] font-bold top-[30%] pl-5 '>
          <h1 className='md:text-4xl text-2xl text-gray-800  pb-5 text-center'>Keep your pets warm and healthy this winter</h1>
        <div>
          <button className='btn btn-primary mx-auto md:right-[45%] right-[25%] absolute'>Click Details</button>
        </div>
          </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>


        <div>
          <div>
          <img 
            src={"https://lagunabeachvet.com/wp-content/uploads/2023/11/lbvmc-keeping-your-furry-friend-warm.jpg"}
            className="w-full h-full object-cover relative"
          />
          <div className='absolute flex flex-col  left-[20%] w-[60%] font-bold top-[30%] pl-5 '>
          <h1 className='md:text-4xl text-2xl text-gray-800  pb-5 text-center '>Winter special grooming for your furry friends</h1>
        <div>
          <button className='btn btn-primary mx-auto md:right-[45%] right-[25%]  absolute'>Click Details</button>
        </div>
          </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>


        <div>
          <div>
          <img 
            src={"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
            className="w-full h-full object-cover relative"
          />
          <div  className='absolute flex flex-col  left-[20%] w-[60%] font-bold top-[30%] pl-5 '>
          <h1 className='md:text-4xl text-2xl text-gray-800  pb-5 text-center'>" Winter coats and sweaters for all breeds ".</h1>
        <div>
          <button className='btn btn-primary mx-auto md:right-[45%] right-[25%]  absolute'>Click Details</button>
        </div>
          </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
