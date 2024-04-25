import './item_display.css'
import Item from '../item/item';
import { useParams, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/AppContext';

const SearchDisplay = () => {

    const params = useParams()
    const { products } = useContext(AppContext)
    const [searchProduct, setSearchProduct] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
        var tempArr = []
        for (let index = 0; index < products.length; index++) {
            const searchInfo = params.content.toUpperCase()
            const productName = products[index].name.toUpperCase()
            const isMatch = productName.includes(searchInfo)
            if (isMatch) tempArr.push(products[index])
        }
        setSearchProduct(tempArr)
    }, [params.content]);

    console.log(searchProduct)

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    return (
        <div className="fav-container">
            <h3>Search of "{params.content}"</h3>
            {searchProduct.length !== 0 ? (
                <div className="fav-main">
                    {searchProduct.map((value, index) =>
                        <Link to={`/i/${value.id}/${value.name}`} style={linkStyle} key={index}>
                            <Item
                                name={value.name}
                                types={value.type.name}
                                price={value.price}
                                image={value.images[0]}
                            />
                        </Link>
                    )}
                </div>
            ) : (
                <div className="none-found">
                    <p>No items found!</p>
                </div>
            )}
        </div>
    );
}
export default SearchDisplay;