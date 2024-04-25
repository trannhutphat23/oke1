import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './item_display.css'
import Item from '../item/item';
import { AppContext } from '../../Context/AppContext';
import DisplaySide from './display-side';

const Display = ({ sortBtn }) => {
    const { jordan, nike, sport } = useContext(AppContext)
    const params = useParams()
    const navigate = useNavigate()

    const [products, setProducts] = useState([])

    if (params.id === 'nikes') params.id = 'Explore Nike'

    useEffect(() => {
        setProducts([])
        if (params.id === 'jordan') setProducts(jordan)
        if (params.id === 'Explore Nike') setProducts(nike)
        if (params.id === 'sport') setProducts(sport)
    }, [params.id])

    useEffect(() => {
        switch (sortBtn) {
            case 'Low to High':
                var temp = products.sort((a, b) => a.price - b.price)
                console.log(products)
                setProducts(temp)
                navigate(params)
                break;
            case 'High to Low':
                var temp = products.sort((a, b) => b.price - a.price)
                console.log(products)
                setProducts(temp)
                navigate(params)
                break;
            case 'Sort By': {
                if (params.id === 'jordan') setProducts(jordan)
                if (params.id === 'Explore Nike') setProducts(nike)
                if (params.id === 'sport') setProducts(sport)
                navigate(params)
            }

            default:
                break;
        }
    }, [sortBtn])


    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    return (

        <div className="display-main">
            {params.cate ? (
                products.map((value, index) => {
                    var isMatch
                    if (params.id === 'jordan') isMatch = (value.name.toUpperCase()).includes(params.cate.toUpperCase())
                    else isMatch = (value.type.name.toUpperCase()).includes(params.cate.toUpperCase())
                    if (isMatch) {
                        return (
                            <Link to={`/i/${value.id}/${value.name}`} style={linkStyle} key={index}>
                                <Item
                                    name={value.name}
                                    types={value.type.name}
                                    price={value.price}
                                    image={value.images[0]}
                                />
                            </Link>
                        );
                    }
                })

            ) : (
                <>
                    {products.map((value, index) => (
                        <Link to={`/i/${value.id}/${value.name}`} style={linkStyle} key={index}>
                            <Item
                                name={value.name}
                                types={value.type.name}
                                price={value.price}
                                image={value.images[0]}
                            />
                        </Link>
                    ))}
                </>
            )}
        </div>

    );
}

export default Display;