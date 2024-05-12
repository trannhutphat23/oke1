import React, { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './item_display.css'
import Item from '../item/item';
import { AppContext } from '../../Context/AppContext';
import DisplaySide from './display-side';


const Display = ({ sortBtn }) => {

    const {products,  jordan, nike, sport, setJordan, setNike, setSport, setProducts } = useContext(AppContext)
    const params = useParams()
    const navigate = useNavigate()

    const [productss, setProductss] = useState([])

    if (params.id === 'nikes') params.id = 'Explore Nike'

    function fetchData(){
        fetch(`https://restapi.blueribbon.name.vn/api/product`)
            .then((response) => response.json())
            .then(resJsonProducts => {
                var tempJordan = []
                var tempNike = []
                var tempSport = []
                for (let index = 0; index < resJsonProducts.products.length; index++) {
                    const types = resJsonProducts.products[index].type.name
                    const IsNike = types.includes('Nike')
                    if (types === 'Jordan') tempJordan.push(resJsonProducts.products[index])
                    else if (IsNike) tempNike.push(resJsonProducts.products[index])
                    else tempSport.push(resJsonProducts.products[index])
                }
                setJordan(tempJordan)
                setNike(tempNike)
                setSport(tempSport)
                setProducts(resJsonProducts.products)
                console.log(resJsonProducts.products)
            })
    }

    useEffect(() => {
        fetchData()
        
    }, [])

    useEffect(() => {
        setProductss([])
        if (params.id === 'jordan') setProductss(jordan)
        if (params.id === 'Explore Nike') setProductss(nike)
        if (params.id === 'sport') setProductss(sport)
    }, [])

    useEffect(() => {
        switch (sortBtn) {
            case 'Low to High':
                var temp = products.sort((a, b) => a.price - b.price)
                console.log(products)
                setProductss(temp)
                navigate(params)
                break;
            case 'High to Low':
                var temp = products.sort((a, b) => b.price - a.price)
                console.log(products)
                setProductss(temp)
                navigate(params)
                break;
            case 'Sort By': {
                if (params.id === 'jordan') setProductss(jordan)
                if (params.id === 'Explore Nike') setProductss(nike)
                if (params.id === 'sport') setProductss(sport)
                navigate(params)
                break;
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