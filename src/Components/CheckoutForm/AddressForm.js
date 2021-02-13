import React, {useState} from 'react'
import { InputLabel, Select, MennuItem, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'

import { commerce } from '../../lib/commerce'

import FormInput from '../CheckoutForm/CustomTextField'

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')

    const methods = useForm()

    const fetchShippingCountries = async(checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId) 

        setShippingCountries(countries)
    }

    return (
        <> 
            <Typography variant='h6' gutterBottom> Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name' />
                        <FormInput required name='lastName' label='Last name' />
                        <FormInput required name='address1' label='Address' />
                        <FormInput required name='email' label='Email' />
                        <FormInput required name='city' label='City' />
                        <FormInput required name='zip' label='Zip /Postal code' />
                        <Grid item={xs} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MennuItem key={} value={} >
                                    Select me
                                </MennuItem>
                            </Select>
                        </Grid>
                        <Grid item={xs} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MennuItem key={} value={} >
                                    Select me
                                </MennuItem>
                            </Select>
                        </Grid>
                        <Grid item={xs} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MennuItem key={} value={} >
                                    Select me
                                </MennuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
            
        </>
    )
}

export default AddressForm