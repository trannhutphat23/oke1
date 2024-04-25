import React, { useContext, useState, useEffect } from 'react';
import './home.css'
import nike_40yrs from '../../asset/Video/nike_40yrs.mp4'
import nike_sale from '../../asset/Video/nike_sale.mp4'
import nike_sport from '../../asset/Video/nike_sport.mp4'
import nike_clothing from '../../asset/Video/nike_clothing.mp4'
import SeasonContent from './season content/season';
import SlideContent from './slide content/slide';
import { AppContext } from '../../Context/AppContext';
import News from '../News/News';

function Home() {

    const { sport, nike, sportSide, nikeSide } = useContext(AppContext)
    const [iconic, setIconic] = useState([])
    const [SSport, setSSport] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        //sport
        var tempSport = []
        for (let k = 0; k < sportSide.length; k++) {
            var sideQuantity = -1
            var sideIndex
            for (let i = 0; i < sport.length; i++) {
                var tempQuantity = -1
                if (sport[i].type.name == sportSide[k]) {
                    for (let j = 0; j < sport[i].sizes.length; j++) {
                        if (tempQuantity < sport[i].sizes[j].saledQuantity) {
                            tempQuantity = sport[i].sizes[j].saledQuantity
                        }
                    }
                }
                if (sideQuantity < tempQuantity) {
                    sideQuantity = tempQuantity
                    sideIndex = sport[i]
                }
            }
            tempSport.push(sideIndex)
        }
        setSSport(tempSport)

        //iconic
        var tempIconic = []
        for (let k = 0; k < nikeSide.length; k++) {
            var sideQuantity = -1
            var sideIndex
            for (let i = 0; i < nike.length; i++) {
                var tempQuantity = -1
                const temp = nike[i].type.name
                const isMatch = temp.includes(nikeSide[k])
                if (isMatch) {
                    for (let j = 0; j < nike[i].sizes.length; j++) {
                        if (tempQuantity < nike[i].sizes[j].saledQuantity) {
                            tempQuantity = nike[i].sizes[j].saledQuantity
                        }
                    }
                }
                if (sideQuantity < tempQuantity) {
                    sideQuantity = tempQuantity
                    sideIndex = nike[i]
                }
            }
            tempIconic.push(sideIndex)
        }
        setIconic(tempIconic)

    }, [sport, sportSide, nike, nikeSide])

    return (
        <div className="home-container">

            <SeasonContent
                videoUrl={nike_40yrs}
                tilte={"Air Force 1"}
                content={"Join Forces: Celebrating 40 Years of Force"}
                link={'/giay/nikes/%20Air%20Force'}
            />

            <SlideContent
                title={"Always Iconic"}
                item={iconic}
            />

            <SeasonContent
                videoUrl={nike_clothing}
                tilte={"Believe In More"}
                content={"Be yourself and show the world your personality"}
                link={'/giay/jordan'}
            />

            <SlideContent
                title={"Shop By Sport"}
                item={SSport}
            />

            <SeasonContent
                videoUrl={nike_sport}
                tilte={"Find Your Passion"}
                content={"Let's Nike go with you on your jouney"}
                link={'/giay/sport'}
            />
            <News />
        </div>
    );
}

export default Home;