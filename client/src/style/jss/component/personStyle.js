import { container } from "../style"
import imagesStyles from "./imagesStyles"

const personStyle = {
    ...container,
    ...imagesStyles,
    title: {
        fontFamily: "'Martel Sans', sans serif",
        fontSize: '36px',
        textTransform: 'Capitalize',
        textDecoration: 'bold',
    },
    followerBtn: {
        fontSize: '14px',
        height: '20px',
        textAlign: 'left',
        '& img': {
            maxWidth: '25px',
            width: '100%',
            margin: "0 auto"
        },
        '& span': {
            fontSize: '25px'
        }
    },
    addFollowingBtn: {
        maxHeight: '30px',
        height: '100%',
        fontSize: '30px',
        '& img': {
            maxWidth: '15px',
            height: 'auto'
        },
        '& h2': {
            fontSize: '15px',
            fontWeight: 'bold',
        }
    }
}

export default personStyle