import { useEffect, useState } from 'react';
import OrderItem from '../component/order-item';
import '../user-comp.css'
import PriceFormat from '../../../../Context/PriceFormat';
import moment from 'moment'

const OrderedItem = ({ item }) => {

    const [orderItem, setOrderItem] = useState([])

    useEffect(() => {
        fetch(`https://restapi.blueribbon.name.vn/api/order/` + item.id)
            .then((response) => response.json())
            .then(resJsonOrderItem => {
                setOrderItem(resJsonOrderItem.order.details)
            })
    }, [])

    console.log(orderItem)

    return (
        <div className="order-container">
            <div className="order-info">
                <p><b>ID:</b> {item.id}</p>
                <p><b>Date:</b> {moment(item.createdAt).format('DD-MM-YYYY')}</p>
                <p><b>Delivery:</b> {item.deliveryStatus}</p>
                <p><b>Payment:</b> {item.paymentStatus}</p>
                <p>
                    <b>Total: </b>
                    <PriceFormat>{item?.intoMoney}</PriceFormat>
                    VNĐ
                </p>
                <p><b>Phone:</b> {item?.phone}</p>
                {item?.address && (
                    <p><b>Address:</b> {item?.address}</p>
                )}
            </div>
            <div className="order-items">
                {orderItem.map((value, index) =>
                    <OrderItem
                        key={index}
                        item={value.productSize}
                        quantity={value}
                    />
                )}
            </div>
        </div>
    );
}

export default OrderedItem;