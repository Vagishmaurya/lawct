import React, { useEffect, useState } from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay,FreeMode,Navigation, Pagination}  from 'swiper/modules'
import ReactStars from "react-rating-stars-component"
import { apiConnector } from '../../services/apiconnector'
import { ratingsEndpoints } from '../../services/api'
import { FaStar } from 'react-icons/fa'
import lg from"../../assets/Images/passport_size.jpg"


const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]);
    const truncateWords = 15;


   


  return (
    <div className='text-richblack-800 mb-10 mt-5'>
        <div className='max-h-max max-w-maxContent'>
            <Swiper
            slidesPerView={window.innerWidth < 768 ? 1 : 4}
            spaceBetween={24}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2000,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className='w-screen'
            >

                
                   <div className=''>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        <SwiperSlide className='bg-velvet-100 text-silk-200 rounded-md shadow-xl flex flex-col justify-center items-center text-center '>
                            <img
                              src={lg}
                              alt='Profile Pic'
                              className='h-9 w-9 object-cover rounded-full mt-2'
                            />
                            <p>Vagish Maurya</p>
                            <p className='mt-2 mx-auto'>The Legal advice I get is straightforward and easy to understand, which is important for me. Using Legalkart has taken away a lot of stress when it comes to legal matters. I definitely recommend it to anyone looking for quick and reliable legal help."</p>
                            
                            <hr/>
                            
                            <p></p>
                            <ReactStars 
                                count={5}
                                value={4}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                            />
                        </SwiperSlide>
                        </div>
            </Swiper>
        </div>
    </div>
  )
}

export default ReviewSlider
