import OrderedItem from "../Ordered/ordered-item";
import '../user-comp.css'

const Delivery = ({order}) => {

    return (
        <div className="container">
            <h1>DELIVERIED</h1>
            <div className="main">
                {order.filter(o => o.deliveryStatus === 'delivered').sort((a, b) => b.id - a.id).map((item, index) =>
                    <OrderedItem
                        key={index}
                        item={item}
                    />
                )}
            </div>
        </div>
    );
}

export default Delivery;