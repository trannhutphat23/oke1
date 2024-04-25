import './order-item.css'
import img_shoe from '../../../../asset/Images/img-shoe.jpg'
import PriceFormat from '../../../../Context/PriceFormat';

const OrderItem = ({ item, quantity }) => {
    console.log(item)
    return (
        <div className="cart-item-container">
            <img
                className="item-img"
                src={item.product.images[0]}
                alt="shoe"
            />
            <div className="cart-item-detail">
                <div className="detail">
                    <div className="detail-header">
                        <p>{item.product.name}</p>
                        <p>
                            <PriceFormat>
                                {item.product.price}
                            </PriceFormat>
                            VNĐ</p>
                    </div>
                    <p>{item.product.type.name}</p>
                    <div className="detail-content">
                        <p>Size: {item.size}</p>
                        <p>Quantity: {quantity.quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;