import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Frames from './Components/Frames/Frames'
// import Navbar from './Components/Navbar/Navbar'

import { Products, Navbar, Cart, Checkout} from './Components'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder]= useState({})
    const [errorMessage, setErrorMessage]= useState('')

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const fetchCart = async() => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity)

        setCart(cart)
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {quantity} )

        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId)

        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty()

        setCart(cart)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.empty()

        setCart(newCart)
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
       try {
           const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

           setOrder(incomingOrder)
           refreshCart();

       } catch (error) {
           setErrorMessage(error.data.errror.message)
           
       }
    }
    
    useEffect(() => {
        fetchProducts()
        fetchCart()
    },[])

    console.log(cart)

    return (
        <Router>
            <div> 
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path='/shop'>
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Route>
                    <Route exact path='/cart'>
                        <Cart 
                            cart={cart} 
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        /> 
                    </Route>
                    <Route exat path='/checkout'>
                        {/* pass the cart as props to be used in checkout */}
                            <Checkout 
                                cart={cart}
                                order={order}
                                onCapatureCheckout={handleCaptureCheckout}
                                error={errorMessage}
                            />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default App