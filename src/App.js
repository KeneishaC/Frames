import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
// import Frames from './Components/Frames/Frames'
// import Navbar from './Components/Navbar/Navbar'

import { Products, Navbar} from './Components'

const App = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div> 
            <Navbar />
            <Products products={products}/>
        </div>

    )
}

export default App