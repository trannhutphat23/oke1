import './slide.css'
import Item from '../../item/item';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SlideContent = ({ title, item }) => {

    const navigate = useNavigate()

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    return (
        <div className="slide-container">
            <h3>{title}</h3>
            <div className="silde-content">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    breakpoints={{
                        1050: {
                            slidesPerView: 4,
                        },
                        800: {
                            slidesPerView: 3,
                        },
                        650: {
                            slidesPerView: 2,
                        },
                        500: {
                            slidesPerView: 2,
                        }
                    }}
                    modules={[Pagination, Navigation]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    className="mySwiper"
                >
                    {item?.map((value, index) =>
                        <SwiperSlide key={index}>
                            <Link to={`/i/${value?.id}/${value?.name}`} style={linkStyle} >
                                <Item
                                    name={value?.name}
                                    types={value?.type.name}
                                    price={value?.price}
                                    image={value?.images[0]}
                                />
                            </Link>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </div>
    );
}

export default SlideContent;

