import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './item_display.css'
import Item from '../item/item';
import { AppContext } from '../../Context/AppContext';
import DisplaySide from './display-side';
import Display from './display';

const ItemDisplay = () => {
    const { nikeSide, sportSide } = useContext(AppContext)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (params.id === 'nikes') params.id = 'Explore Nike'


    const [isSort, setIsSort] = useState(false)
    const [isFilter, setIsFilter] = useState(false)
    const [buttonText, setButtonText] = useState('Sort By')

    function sortText(event) {
        setButtonText(event.currentTarget.querySelector('p').textContent)
    }

    function showSort() {
        if (isSort) setIsSort(false)
        else setIsSort(true)
    }

    function showFilter() {
        if (isFilter) setIsFilter(false)
        else setIsFilter(true)
    }

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    function choseType(event) {
        const liText = event.currentTarget.querySelector('p').textContent
        if (params.id === 'Explore Nike') navigate(`/giay/nikes/${liText}`)
        if (params.id === 'sport') navigate(`/giay/sport/${liText}`)
        if (params.id === 'jordan') {
            if (liText === 'Low Top')
                navigate(`/giay/jordan/Low`)
            if (liText === 'Mid Top')
                navigate(`/giay/jordan/Mid`)
            if (liText === 'High Top')
                navigate(`/giay/jordan/High`)
        }

    }

    return (
        <div className="display-container">
            <div className="display-header">
                <div className="display-title">
                    <h3>{params.id.toUpperCase()}</h3>
                </div>
                <div className="button-container">
                    <div className="button-header res-side" onClick={showFilter}>
                        <div className="button-context">
                            <p>Filter</p>
                            <FontAwesomeIcon icon={faFilter} />
                        </div>
                        {isFilter && (
                            <ul className="button-dropdown">
                                {params.id === 'jordan' && (
                                    <>
                                        <li onClick={choseType}><p>Low Top</p></li>
                                        <li onClick={choseType}><p>Mid Top</p></li>
                                        <li onClick={choseType}><p>High Top</p></li>
                                    </>
                                )}

                                {params.id === 'Explore Nike' && (
                                    <>
                                        {nikeSide.map((value, index) => (
                                            <li key={index} onClick={choseType}>
                                                <p>{value}</p>
                                            </li>
                                        ))}
                                    </>
                                )}

                                {params.id === 'sport' && (
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
                    </div>
                    <div className="button-header" onClick={showSort}>
                        <div className="button-context">
                            <p>{buttonText}</p>
                            <FontAwesomeIcon icon={faSort} />
                        </div>
                        {isSort && (
                            <ul className="button-dropdown">
                                <li onClick={sortText}><p>Low to High</p></li>
                                <li onClick={sortText}><p>High to Low</p></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="display-content">
                <DisplaySide
                    tag={params.id}
                />
                <Display
                    sortBtn={buttonText}
                />
            </div>
        </div>
    );
}

export default ItemDisplay;