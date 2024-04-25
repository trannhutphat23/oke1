import React, { useContext, useState, useEffect } from 'react';
import CartItem from './cart item/cart_item';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import './cart.css'
import PriceFormat from '../../Context/PriceFormat';

const Cart = () => {

    const navigate = useNavigate()
    const { cart, setCart, bag, setBag, subTotal, setSubTotal } = useContext(AppContext)

    const [seletedCartItems, setSeletedCartItems] = useState([])
    const [isCheckoutClicked, setIsCheckoutClicked] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setBag(seletedCartItems)
        setSubTotal(seletedCartItems.reduce((prev, curr) => prev + curr.item.price, 0))
        setIsCheckoutClicked(false)
    }, [seletedCartItems])

    
    function handleSelect(cartItem, checked) {
        if (checked) {
            setSeletedCartItems(prev => [...prev, cartItem])
        } else {
            setSeletedCartItems(prev => prev.filter(_cartItem => _cartItem.productSize._id !== cartItem.productSize._id))
        }
    }
    
    function isSelected(cartItem) {
        const item = seletedCartItems.find((_cartItem) => _cartItem.productSize._id === cartItem.productSize._id)
        if (item) {
            return true
        }
        return false
    }
    
    function handleDelete() {
        setCart(prev => prev.filter(_cartItem => !seletedCartItems.includes(_cartItem)))
        setSeletedCartItems([])
    }

    function handleDeleteOne(cartItem) {
        setCart(prev => prev.filter(_cartItem => _cartItem.productSize._id !== cartItem.productSize._id))
        setSeletedCartItems(prev => prev.filter(_cartItem => _cartItem.productSize._id !== cartItem.productSize._id))
    }

    function GotoCheckout() {
        setIsCheckoutClicked(true)
        if (subTotal !== 0) {
            navigate("/Checkout")
        }
    }

    return (
        <div className="cart-container">
            <div className="cart">
                <div className="title">
                    <h3>Bag</h3>
                    {subTotal !== 0 && (
                        <p onClick={handleDelete}>Delete</p>
                    )}
                </div>
                <div className="cart-main">
                    {cart.map((value, index) =>
                        <CartItem
                            key={value.productSize._id}
                            item={value.item}
                            size={value.size}
                            quantity={value.quantity}
                            isSelected={isSelected(value)}
                            onSelect={(checked) => handleSelect(value, checked)}
                            onDelete={() => handleDeleteOne(value)}
                        />
                    )}
                </div>
            </div>
            <div className="summary">
                <h3>Summary</h3>
                <div className="summary-main">
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Subtotal</p>
                            <p>
                                <PriceFormat>
                                    {subTotal}
                                </PriceFormat>
                                VNĐ</p>
                        </div>
                        <div className="summary-content">
                            <p>Estimated Delivery & Handling</p>
                            {subTotal !== 0 ? (
                                <p>250,000 VNĐ</p>
                            ) : (
                                <p>0 VNĐ</p>
                            )}
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Total</p>
                            {subTotal !== 0 ? (
                                <p>
                                    <PriceFormat>
                                        {subTotal + 250000}
                                    </PriceFormat>
                                    VNĐ</p>
                            ) : (
                                <p>0 VNĐ</p>
                            )}
                        </div>
                    </div>
                    {seletedCartItems.length === 0 && isCheckoutClicked && (
                        <p className="alert-text">Please select at least one item.</p>
                    )}
                    <button className="summary-button" onClick={GotoCheckout}>
                        <p>Checkout</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Cart;