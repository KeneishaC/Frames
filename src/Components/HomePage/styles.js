import { makeStyles  } from '@material-ui/core/styles'
import Image from '../../assets/landing.jpg'

export default makeStyles(() => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center' , 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        // height: '25vh',
        // width: 'calc(20vw * 0.54 - 2%)',
        // borderRadius: 8,
        // display: 'flex',
        // marginLeft: '10px',
        // marginTop: '10px'
    },
    media: {
        color: '#a5aaa2f',
        paddingTop: '8%', //or 16:9
    },
}))