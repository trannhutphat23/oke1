import './checkout-item.css'
import img_shoe from '../../../asset/Images/img-shoe.jpg'
import PriceFormat from '../../../Context/PriceFormat';

const CheckoutItem = ({ item }) => {
    return (
        <div className="checkout-item">
            <img
                className="checkout-img"
                src={item.item.image}
                alt="shoe"
            />
            <div className="checkout-item-detail">
                <p className="item-name">{item.item.name}</p>
                <p className="item-category">{item.item.type}</p>
                <div className="checkout-item-content">
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
                <p className="item-price">
                    <PriceFormat>
                        {item.item.price}
                    </PriceFormat>
                    VNĐ</p>
            </div>
        </div>
    );
}

export default CheckoutItem;