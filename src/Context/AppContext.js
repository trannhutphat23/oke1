import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [productTypes, setProductTypes] = useState([]) //product types (includes sport types and nike types)
    const [products, setProducts] = useState([]) //product

    const [jordan, setJordan] = useState([]) //jordan shoes
    const [nike, setNike] = useState([]) //nike shoes
    const [sport, setSport] = useState([]) //sport shoes
    const [cart, setCart] = useState([]) //cart
    const [bag, setBag] = useState([]) //bag (get item to checkout)
    const [subTotal, setSubTotal] = useState(0) //bag total
    const [customer, setCustomer] = useState(null) //customer

    const [sportSide, setSportSide] = useState([]) //sport types
    const [nikeSide, setNikeSide] = useState([]) // nike types
    const [newInfo, setNewInfo] = useState([])

    useEffect(() => {
        //Get product type 
        fetch(`https://restapi.blueribbon.name.vn/api/product-type`)
            .then((response) => response.json())
            .then(resJsonProductTypes => {
                var tempNike = []
                var tempSport = []
                for (let index = 0; index < resJsonProductTypes.productTypes.length; index++) {
                    const types = resJsonProductTypes.productTypes[index].name
                    const IsNike = types.includes('Nike')
                    if (IsNike) {
                        const modifiedTypes = types.replace('Nike', '');
                        tempNike.push(modifiedTypes);
                    }
                    else if (types !== 'Jordan') tempSport.push(types)
                }
                setProductTypes(resJsonProductTypes.productTypes)
                setNikeSide(tempNike)
                setSportSide(tempSport)
            })

        //Get product 
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
            })

    }, [])


    return <AppContext.Provider value={{
        productTypes,
        products,
        cart, setCart,
        bag, setBag,
        subTotal, setSubTotal,
        nikeSide, sportSide,
        customer, setCustomer,
        jordan, nike, sport,
        newInfo, setNewInfo
    }}>
        {children}
    </AppContext.Provider>
}