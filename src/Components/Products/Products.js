import React from 'react'
import {Grid} from  '@material-ui/core'

import Product from '../Product/Product'
import useStyles from './styles'
const products = [
    { id: 1, name: 'cat-eye', description: 'cat-eye glasses', price: '$150', image: 'https://image.ebdcdn.com/image/upload/c_fill,e_sharpen:70,f_auto,h_400,q_85,w_800/v1/product/frame/gray/pl7306_0.jpg'},
    { id: 2, name: 'round', description: 'round glasses', price: '$150', image: 'https://cdn.shopify.com/s/files/1/0081/4075/0948/products/LF32AC3OPT_2_720x.jpg?v=1574436476'}
]

const Products = () => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={products.id} xs={12} sm={6}md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products