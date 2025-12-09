import React, { useContext } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import reviews from '../utils/reviews';
import Rating from '../component/Rating';
import { omor } from '../context/ThemeContext';

const Testimonials = () => {
  const {isDarkMode} = useContext(omor)
  return (
    <section className='max-w-screen-2xl container mx-auto md:py-6 my-28 px-4 md:px-8'>
        <div className='flex mb-14 flex-col justify-center items-center mx-auto'>
            <div className='space-y-5'>
                <h6 className='text-amber-500 uppercase text-center'>Testimonials</h6>
                <h5 className='text-3xl text-center md:text-5xl font-semibold'>Our Client Reviews</h5>
            </div>

            
        </div>

        {/* review cards swiper */}
            <div>
                <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            reviews.map((item, index) => (
                <SwiperSlide key={index} className='bg-no-repeat bg-cover bg-center rounded-lg' style={{backgroundImage: `url(${item.coverImg})`}}>
                  <div className='md:h-[547px] h-[400px] flex justify-center items-center mb-4'>
                      <div className={`mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative`}>
                        <img className='size-20 absolute -top-10 ring-2 ring-amber-500 object-cover rounded-full left-1/2 -translate-x-1/2' src={item.image} alt="" />
                        <div className={`mt-16 text-center ${isDarkMode ? "text-black":""}`}>
                           <h3 className='text-lg font-semibold'>{item.name}</h3>
                           <p className='mb-3 dark:text-black'>Verified Customer</p>
                           <p className='text-gray-500 mb-4'>{item.review}</p>
                           <div className='w-full mx-auto mb-2 flex items-center justify-center text-center'>
                            <Rating rating={item.rating}/>
                           </div>
                        </div>
                      </div>
                      
                  </div>
                </SwiperSlide>
            ))
        }
        
      </Swiper>
            </div>
    </section>
  )
}

export default Testimonials