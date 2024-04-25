import './navbar.css'
import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faBagShopping, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../../Context/AppContext';
import golo from '../../asset/Images/golo.jpg'
import blueribbon from '../../asset/Images/blueribbon2.jpg'
import jordan from '../../asset/Images/jordan.png'

const Navbar = () => {

    const { nikeSide, sportSide, customer } = useContext(AppContext)
    const navigate = useNavigate()

    const [isHover, setIsHover] = useState(false)
    const [bar, setBar] = useState(false)
    const [btnHover, setBtnHover] = useState('')
    const [message, setMessage] = useState('');

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    function handleOnHover(event) {
        const liText = event.currentTarget.textContent;
        setBtnHover(liText)
        setIsHover(true)
    }

    function handleOutHover() {
        setIsHover(false)
    }

    function choseType(event) {
        const liText = event.currentTarget.querySelector('p').textContent
        if (btnHover === 'Explore Nike') navigate(`/d/nikes/${liText}`)
        if (btnHover === 'Shop by Sport') navigate(`/d/sport/${liText}`)
    }

    function handleChange(event) {
        setMessage(event.target.value);
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleSearch()
            if (bar) handleBar()
        }
    };

    function handleSearch() {
        if (message !== '') {
            navigate(`/tim-kiem/${message}`)
            if (bar) handleBar()
        }
    }


    function handleBar() {
        setBar(!bar)
    }

    function BarNavigate(link) {
        handleBar()
        navigate(`/giay/${link}`)
    }

    return (
        <div className="navbar-container">
            <div className="header" onMouseEnter={handleOutHover}>
                {!customer ?
                    <div className="login" >
                        <Link to="/dang-ky" style={linkStyle}>
                            <p>Đăng ký</p>
                        </Link>
                        <p>|</p>
                        <Link to="/dang-nhap" style={linkStyle}>
                            <p>Đăng nhập</p>
                        </Link>
                    </div> :
                    <Link to="/tai-khoan" style={linkStyle}>
                        <div className="is-login">
                            <p>{'Hi, ' + customer?.name}</p>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </Link>
                }
            </div>
            <div className="navbar">
                <div className='ok'>
                    <img
                        className="logo rounded-full"
                        src={golo}
                        alt='logo'
                    />
                </div>
                <div className="nav-section">
                    <ul className="nav-selection">
                        <Link to="/trang-chu" style={linkStyle}>
                            <li>Trang chủ</li>
                        </Link>
                        <Link to="/giay/jordan" style={linkStyle}>
                            <li onMouseEnter={handleOutHover}>Jordan</li>
                        </Link>
                        <Link to="/giay/nikes" style={linkStyle}>
                            <li onMouseEnter={handleOnHover} >Khám phá NIKE</li>
                        </Link>
                        <Link to="/giay/sport" style={linkStyle}>
                            <li onMouseEnter={handleOnHover} >Thể thao</li>
                        </Link>
                        <Link to="/shop-giay-secondhand-blue-ribbon" style={linkStyle}>
                            <li>Giới thiệu</li>
                        </Link>
                    </ul>
                    <div className="nav-search" onMouseEnter={handleOutHover}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleSearch} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            value={message}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="nav-other" onMouseEnter={handleOutHover}>

                        <Link to="/gio-hang">
                            <FontAwesomeIcon icon={faBagShopping} className="bag-icon other-icon" />
                        </Link>
                    </div>
                </div>
                <FontAwesomeIcon icon={faBars} className='bar-icon' onClick={handleBar} />
            </div>
            {isHover && (
                <ul className="navbar-hover"
                    onMouseLeave={handleOutHover}
                >
                    {btnHover === 'Khám phá NIKE' && (
                        <>
                            {nikeSide.map((value, index) => (
                                <li key={index} onClick={choseType}>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </>
                    )}

                    {btnHover === 'Thể thao' && (
                        <>
                            {sportSide.map((value, index) => (
                                <li key={index} onClick={choseType}>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            )}

            {bar && (

                <ul className="navbar-bar">
                    <li>
                        <div className='bar-container'>
                            <div className="nav-search-bar">
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="search-icon"
                                    onClick={handleSearch}
                                />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    value={message}
                                    onChange={handleChange}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="nav-other">

                                <Link to="/gio-hang">
                                    <FontAwesomeIcon icon={faBagShopping} className="bag-icon other-icon" onClick={handleBar} />
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li onClick={() => BarNavigate('jordan')}><p>Jordan</p></li>
                    <li onClick={() => BarNavigate('nikes')}><p>Khám phá NIKE</p></li>
                    <li onClick={() => BarNavigate('sport')}><p>Thế thao</p></li>
                </ul>
            )}
        </div>
    );
}

export default Navbar;
