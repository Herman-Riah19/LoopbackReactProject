import { container, title, grayColor } from "./style";

const homeStyle = {
    container: {
        zIndex: "12",
        color: "white",
        ...container
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "white",
        textDecoration: "none"
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "1000px",
        margin: "10px auto 0",
        color: "white"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "30px",
        borderRadius: "6px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    stats: {
        color: grayColor[0],
        display: "inline-flex",
        fontSize: "12px",
        lineHeight: "22px",
        "& svg": {
          top: "4px",
          width: "16px",
          height: "16px",
          position: "relative",
          marginRight: "3px",
          marginLeft: "3px",
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
          top: "4px",
          fontSize: "16px",
          position: "relative",
          marginRight: "3px",
          marginLeft: "3px",
        },
      },
      cardCategory: {
        color: grayColor[0],
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0",
    },
    cardTitle: {
        color: grayColor[2],
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
          color: grayColor[1],
          fontWeight: "400",
          lineHeight: "1",
        },
    },
}

export default homeStyle;