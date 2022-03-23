import { grayColor, primaryBoxShadow, successCardHeader } from "../style"

const cardProduct = {
    cardTheme: {
        backgroundColor: 'transparent'
    },
    cardBody: {
        backgroundColor: 'transparent',
        height: '100%',
    },
    imageFluid: {
        maxWidth: "100%",
        height: "auto",
    },
    cardFooter: {
        ...primaryBoxShadow,
        borderRadius: '10px',
    },
    title: {
        fontFamily: '"Kotta One", sans-serif',
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '-10px',
        marginLeft: '-10px'
    },
    categories: {
        fontFamily: '"Poppins", sans-serif',
        fontSize: '10px',
        marginLeft: '-10px',
        '@media(maxWidth: 758px)': {
            display: 'none'
        }
    },
    price: {
        fontFamily: '"Kotta One", sans-serif',
        fontSize: '10px',
        margin: '5px',
        color: grayColor
    },
    downloadBtn: {
        ...successCardHeader,
        height: '25px',
        width: '25px',
        margin: '10px',
        fontSize: '12px'
    }
}

export default cardProduct