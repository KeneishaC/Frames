import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = (checkoutToken) => {
    <>
        <Typography variant='h6' gutterBottom>Order Summary</Typography>
        <List disablePadding>
            {checkoutToken.live.line_items.map((product) => (
                <ListItem style={{padding: '10px 0'}} key={product.name}>
                    <ListItem  primary={product.name}  secondary={`Quantity: ${product.quantity}`}/>
                    <Typography variant='bpdy2'>{product.line_total.formatted_with_symbol}</Typography>
                </ListItem>
            ))}
            <ListItem style={{padding: '10px 0'}}>
                <ListItemText primary='Total'/>
                <Typography variant='subtitle 1' style={{fontWeight: 700}}>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>

    </>
}

export default Review