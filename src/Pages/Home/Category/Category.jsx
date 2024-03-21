
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div className='container mx-auto hidden md:block'>
            <section className=' mb-12 '>
                <SectionTitle heading={"Order Online"} subHeading={"From 11.00am to 10.00pm"}></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={12}
                    // centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "

                >
                    <SwiperSlide className=''>
                        <img src={slide1} alt="" className='rounded-lg relative blur-[2px]' />
                        <h3 className='text-3xl  text-black absolute bottom-4 translate-x-20 bg-gray-100 p-2 rounded uppercase'>Salads</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" className='rounded-lg relative blur-[2px]' />
                        <h3 className='text-3xl  text-black absolute bottom-4 translate-x-20 bg-gray-100 p-2 rounded uppercase'>Pizza</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" className='rounded-lg relative blur-[2px]' />
                        <h3 className='text-3xl  text-black absolute bottom-4 translate-x-20 bg-gray-100 p-2 rounded uppercase'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" className='rounded-lg relative blur-[2px]' />
                        <h3 className='text-3xl  text-black absolute bottom-4 translate-x-20 bg-gray-100 p-2 rounded uppercase'>Cake</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" className='rounded-lg relative blur-[2px]' />
                        <h3 className='text-3xl  text-black absolute bottom-4 translate-x-20 bg-gray-100 p-2 rounded uppercase'>Salads</h3>
                    </SwiperSlide>


                </Swiper>
            </section>
        </div >
    );
};

export default Category;