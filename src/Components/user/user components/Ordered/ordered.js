import OrderedItem from "./ordered-item";
import '../user-comp.css'

const Ordered = ({order}) => {

    return (
        <div className="container">
            <h1>ORDER</h1>
            <div className="main">
                {order.filter(o => o.deliveryStatus === 'pending').sort((a, b) => b.id - a.id).map((item, index) =>
                    <OrderedItem
                        key={index}
                        item={item}
                    />
                )}
            </div>
        </div>
    );
}

export default Ordered;