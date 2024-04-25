import './favourite.css'
import Item from '../item/item';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Favourite = () => {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function getItemInfomation(name, category, price) {
        navigate(`/Favourite/${name}`)
    }

    return (
        <div className="fav-container">
            <h3>Favourite</h3>
            <div className="fav-main">
                <Item
                    name={"Nike Dunk Low Retro 1 "}
                    category={"Basketball"}
                    price={"3,000,000"}
                    getItemInfomation={getItemInfomation}
                />
                <Item
                    name={"Nike Dunk Low Retro 2"}
                    category={"Basketball"}
                    price={"3,000,000"}
                    getItemInfomation={getItemInfomation}

                />
                <Item
                    name={"Nike Dunk Low Retro 3"}
                    category={"Basketball"}
                    price={"3,000,000"}
                    getItemInfomation={getItemInfomation}

                />
                <Item
                    name={"Nike Dunk Low Retro 4"}
                    category={"Basketball"}
                    price={"3,000,000"}
                    getItemInfomation={getItemInfomation}

                />
                <Item
                    name={"Nike Dunk Low Retro 5"}
                    category={"Basketball"}
                    price={"3,000,000"}
                    getItemInfomation={getItemInfomation}

                />
                <Item
                    name={"Nike Dunk Low Retro 6"}
                    category={"Basketball"}
                    price={"3,000,000"}
                    getItemInfomation={getItemInfomation}

                />
            </div>
        </div>
    );
}
export default Favourite;