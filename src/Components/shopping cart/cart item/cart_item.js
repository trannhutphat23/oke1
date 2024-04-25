import './cart_item.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import PriceFormat from '../../../Context/PriceFormat';

const CartItem = ({ item, size, quantity, isSelected, onSelect, onDelete }) => {

    function handleSelectChange(e) {
        if (e.target.checked) {
            onSelect(true);
        } else {
            onSelect(false);
        }
    }

    return (
        <div className="cart-item-container">
            <img
                className="item-img"
                src={item.image}
                alt="shoe"
            />
            <div className="cart-item-detail">
                <div className="detail">
                    <div className="detail-header">
                        <p>{item.name}</p>
                        <p>
                            <PriceFormat>
                                {item.price}
                            </PriceFormat>
                            VNĐ</p>
                    </div>
                    <div className="detail-mid">
                        <p>{item.type}</p>
                        <input type="checkbox"
                            checked={isSelected}
                            onChange={handleSelectChange}
                        />
                    </div>
                    <div className="detail-content">
                        <p>Size: {size}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default CartItem;