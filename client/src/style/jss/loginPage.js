import { container, primaryColor } from "./style"
const profilePageStyle = {
    container: {
        ...container,
        zIndex: "2",
        position: "relative",
        paddingTop: "20vh",
        color: "#FFFFFF",
        paddingBottom: "200px",
    },
    pageHeader: {
        minHeight: "100vh",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)",
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""',
        },
        "& footer li a,& footer li a:hover,& footer li a:active": {
            color: "#FFFFFF",
        },
        "& footer": {
            position: "absolute",
            bottom: "0",
            width: "100%",
        },
    },
    cardHeader: {
        backgroundColor: primaryColor,
        minHeight: '100px',
        height: '100%',
        textAlign: "center",
        '& .css-1qvr50w-MuiTypography-root': {
            fontFamily: '"Cookie", cursive',
            color: '#fff !important',
            fontSize: '30px'
        }
    }
}

export default profilePageStyle