import React from 'react'
import {Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import  Review from './Review'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const PaymentForm = ({ checkoutToken, backStep }) => {

    const hanleSubmit =(event, elements, stripe) => {
        event.prventDefault();
        if(!stripe || !elements) return 
        const cardElement = elements.getElement(CardElement)

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })

        if(error) {
            console.log(error)
        } else {
            const orderData = {
                line_items: checkoutToken.live.lineitems,
                customer: { firstname: shippingData.FirstName, lastname: shippingData.lastName, email: shippingData.email },
                shipping: { 
                    name: 'Primary', 
                    street: shippingData.address1, 
                    town_city: shippingData.city,
                    county_state: shippingData.shippingSubdivision,
                    postal_zip_code: shippingData.zip,
                    country: shippingData.shippingCountry
                }
            }
        }

    }

    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>Payment Method</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e)=> hanleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /><br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button variant='outlined' onClick={backStep}>BACK</Button>
                                    <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                                        //takes token from items in cart to get full price
                                        Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                                    </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm