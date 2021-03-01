import { makeStyles  } from '@material-ui/core/styles'


export default makeStyles(() => ({
    root: {
        minheight: '100vh',
        backgroundImage: 'url(/assets/landing.png)'
    },
    media: {
        paddingTop: '50.25%', //or 16:9
    },
}))