
import FoodCard from '../../../components/FoodCard/FoodCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// to do: Apply pagination here 

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (<>


        <div className='my-12'>


            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 lg:px-0 '>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}></FoodCard>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    </>
    );
};

export default OrderTab;