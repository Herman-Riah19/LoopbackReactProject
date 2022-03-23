import { title } from "../style"
import imagesStyles from "./imagesStyles"
const CardUserStyle = {
    card: {
        maxWidth: '250px',
        height: '120px',
        backgroundColor: 'transparent',
    },
    ...imagesStyles,
    imgCard: {
        maxWidth: '70px',
        height: '70px',
        marginTop: '5px',
        marginLeft: '5px',
        cover: 'hidden'
    },
    cardTitle: {
        ...title,
    }
}

export default CardUserStyle