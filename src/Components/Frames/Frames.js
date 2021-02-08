import React from 'react'
import Grid from  '@material-ui/core'



const frames = [
    { id: 1, name: 'cat-eye', description: 'cat-eye glasses', price: '$150'},
    { id: 2, name: 'round', description: 'round glasses', price: '$150'}
]

const Frames = () => {
    <main>
        <Grid container justify='center' spacing={4}>
            {frames.map((product) => (
                <Grid item key={frames.id} xs={12} sm={6}md={4} lg={3}>
                    <Frame frame={frame} />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Frames