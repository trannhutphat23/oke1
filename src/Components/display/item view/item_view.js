import './item_view.css'
import React, { useEffect, useState, useContext } from 'react';
import clsx from 'clsx';
import { AppContext } from '../../../Context/AppContext';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import PriceFormat from '../../../Context/PriceFormat';


const ItemView = () => {
    const params = useParams();
    const { cart, setCart } = useContext(AppContext)

    const [product, setProduct] = useState({})
    const [mainImg, setMainImg] = useState()
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [isEditable, setIsEditable] = useState(false);

    const [textAlert, setTextAlert] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get product (using useParams to get id in url)
    useEffect(() => {
        fetch('https://restapi.blueribbon.name.vn/api/product' + '/' + params.id)
            .then((response) => response.json())
            .then(resJson => {
                setProduct(resJson.product)
            })
    }, [params])

    // Set main image
    useEffect(() => {
        if (product.images && product.images.length > 0) {
            setMainImg(product.images[0]);
        }
    }, [product.images]);

    function changeMainImage(e) {
        // Replace main image with the clicked side image
        setMainImg(e.target.src)
    }

    function choseSize(event) {
        var sizeTable = document.querySelector('.detail-size')
        sizeTable.classList.remove('alert-size')
        setTextAlert(false)
        const listItem = event.currentTarget;
        const allListItems = document.querySelectorAll('ul li');

        // Remove the "chose" class from all <li> elements
        allListItems.forEach(item => {
            item.classList.remove('chose');
        });

        // Add the "chose" class to the clicked <li> element
        listItem.classList.add('chose');
        setSize(event.currentTarget.querySelector('p').textContent)
    }

    function AddToBag() {
        var sizeTable = document.querySelector('.detail-size')
        if (size === '') {
            setTextAlert(true)
        }
        else {
            setTextAlert(false)
            var item = {
                name: product.name,
                type: product.type?.name,
                price: product.price * quantity,
                image: product.images[0]
            }
            var temp = {
                id: params.id,
                productSize: product.sizes.find(s => s.size === Number(size)),
                item: item,
                size: size,
                quantity: quantity
            }
            const existingItemIndex = cart.findIndex((cartItem) => {
                return (
                    cartItem.item.name === item.name &&
                    cartItem.item.type === item.type &&
                    cartItem.size === size
                );
            });

            if (existingItemIndex !== -1) {
                // If the item already exists, update the quantity
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].quantity += quantity;
                setCart(updatedCart);
            } else {
                // If the item doesn't exist, add it to the cart
                setCart([...cart, temp]);
                toast.success('Product added to cart')
            }
        }
    }


    function incQuantity() {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    function decQuantity() {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    }

    function handleInputChange(event) {
        const newQuantity = parseInt(event.target.value, 10) || 0;
        setQuantity(newQuantity);
    }

    function handleInputChange(event) {
        setQuantity(event.target.value);
    }

    function handleInputBlur() {
        setIsEditable(false);
        if (quantity == '0') setQuantity(1)
        else setQuantity(parseInt(quantity, 10));
    }


    return (
        <div className="itemview-container-main">
            <div className="itemview-container">
                <div className="image-container">
                    <div className="image-side">
                        {product.images?.map((image, index) => (
                            <img
                                key={index}
                                className="img-side"
                                src={image}
                                alt="side image"
                                onClick={changeMainImage}
                            />
                        ))}
                    </div>
                    <div className="image-main">
                        <img
                            className="img-main"
                            src={mainImg}
                            alt="side image"
                        />
                    </div>
                </div>
                <div className="detail-container">
                    <div className="detail-content">
                        <p className="item-name">{product.name}</p>
                        <p className="item-category">{product.type?.name}</p>
                        <p className="item-price">
                            <PriceFormat>
                                {product.price}
                            </PriceFormat>
                            VNĐ</p>
                    </div>
                    <div className={
                        clsx(
                            'detail-size',
                            {
                                'alert-size': textAlert,
                            }
                        )

                    }>
                        <p>Select Size</p>
                        <ul className="size-table">
                            {product.sizes?.sort((a, b) => a.size - b.size).map((value, index) =>
                                <li
                                    key={index}
                                    onClick={choseSize}
                                    className=''
                                >
                                    <p>{value.size}</p>
                                </li>
                            )}
                        </ul>
                        {textAlert && (
                            <p>Please select a size.</p>
                        )}
                    </div>
                    <div className='detail-quantity'>
                        <p>Select Quantity</p>
                        <div className='quantity-selector'>
                            <button onClick={decQuantity}>
                                <p>-</p>
                            </button>
                            <input
                                type='text'
                                value={quantity}
                                onChange={handleInputChange}
                                onFocus={() => setIsEditable(true)}
                                onBlur={handleInputBlur}
                                readOnly={!isEditable}
                            />
                            <button onClick={incQuantity}>
                                <p>+</p>
                            </button>
                        </div>
                    </div>
                    <div className="detail-button">
                        <button className="add-bag" onClick={AddToBag}>
                            <p>Add to Bag</p>
                        </button>

                    </div>
                </div>
            </div>
            <div className="description">
                <div className='des-title'>
                    <h2>[2hand] Giày Thể Thao Nam {product.name} - GIÀY CŨ CHÍNH HÃNG BLUE RIBBON</h2>
                    <p>- Condition: 9.5/10.</p>
                    <p>- Giá tiền của sản phẩm sẽ phụ thuộc vào độ mới của từng đôi</p>
                    <p>Lưu ý: Các bạn trước khi đặt nên nhắn cho shop để xem ảnh chi tiết hoặc video đôi đó nhé, vì mỗi đôi giày secondhand sẽ có ngoại hình khác nhau.</p>
                </div>
                <p className="mt-5">{product.description}</p>
            </div>
        </div>
    );
}

export default ItemView;