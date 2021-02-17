import React from 'react'
import {Typography, Button, Divider } from '@material-ui/core'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import  Review from './Review'

const stripePromise = loadStripe('...')

const PaymentForm = ({ checkoutToken }) => {

    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{margin: '20px 0'}}>Payment Method</Typography>
            <Elements stripe={stripePromise}>

            </Elements>
        </>
    )
}

export default PaymentForm