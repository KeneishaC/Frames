import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import {commerce} from '../../lib/commerce'
import useStyles from './styles';
import AddressForm from '../CheckoutForm/AddressForm'
import PaymentForm from '../CheckoutForm/PaymentForm'

const steps = ['Shipping adress', 'Payment Details']


const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const classes = useStyles()

    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    //generate a token for the countries and checkout

    useEffect(() => {
        const generateToken = async () => {
            try{
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart' })

                setCheckoutToken(token)
            } catch(error){

            }
        }

        generateToken()

    }, [cart])

        const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
        const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    const next = (data) => {
        setShippingData(data)

        nextStep();
    }

    let Confrimation = () => order.customer ? (
        <>
            <div>
                <Typography variant='h5'>Thank you for your purchase, firstName lastName </Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'>Order ref: ref</Typography>
                <br />
                <Button  component={Link} to='/shop' variant='outlined' type='button'>Return to Shopping</Button>
            </div>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />

        </div>
    ) 

    if(error){
        <>
            <Typography variant='h5'>Error:{error}</Typography>
            <br />
            <Button  component={Link} to='/shop' variant='outlined' type='button'>Return to Shopping</Button>

        </>
    }


    const Form = () => activeStep ===0
        ? <AddressForm checkoutToken={checkoutToken} next={next}/>
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} />

    return (
        <>
            <div className={classes.toolbar} />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4' align='center'>Checkout</Typography>
                        <Stepper activeStep={0} className={classes.stepper}>
                            {steps.map((step) =>
                                <Step>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            )}
                        </Stepper>
                        {activeStep === steps.length ? <Confrimation /> : checkoutToken && <Form />}
                    </Paper> 
                </main>



        </>
    )
}

export default Checkout