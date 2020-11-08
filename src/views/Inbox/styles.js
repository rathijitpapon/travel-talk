import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginLeft: "15%",
    marginRight: "15%",

    [theme.breakpoints.down(700)]: {
      marginLeft: "8%",
      marginRight: "8%",
    },

    [theme.breakpoints.down(500)]: {
      marginLeft: "3%",
      marginRight: "3%",
    },
  },

  nameDivContainer: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      width: "70%",
      marginBottom: "20px",
      padding: "1%",
      position: "absolute",
      height: "220px",

      [theme.breakpoints.down(700)]: {
        width: "84%",
      },
  
      [theme.breakpoints.down(500)]: {
        width: "94%",
      },
  },

  profileImageContainer: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginRight: "30px",

    [theme.breakpoints.down(400)]: {
      width: "80px",
      height: "80px",
    },

    "&:hover": {
      opacity: "0.4",
    },
  },

  profileNameContainer: {
    fontFamily: "Lato",
    fontSize: "25px",
    fontWeight: "bold",
    color: "#562727",
    // whiteSpace: "nowrap",
    marginTop: "30px",
    textAlign: "center",
    textDecoration: "none",

    [theme.breakpoints.down(400)]: {
      marginTop: "25px",
        fontSize: "18px",
    },

    "&:hover": {
      opacity: "0.4",
    },
  },

  messageBoxContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: "20px",
    padding: "1%",
    width: "70%",
    position: "absolute",
    bottom: "0",
    height: "100px",

    [theme.breakpoints.down(700)]: {
      width: "84%",
    },

    [theme.breakpoints.down(500)]: {
      width: "94%",
    },
  },

  inputContainer: {
    width: "65%",
    height: "40%",
    borderRadius: "20px",
    fontFamily: "Ubuntu Mono",
    fontSize: "18px",
    padding: "2%",
    resize: "none",
    overflowY: "auto",
    marginRight: "10px",
  },

  sendButtonContainer: {
    cursor: "pointer",
    width: "23%",
    height: "30%",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "20px",
    backgroundColor: "#300eb7",
    color: "#dbcebc",
    fontFamily: "Lato",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "1.5%",

    '&:hover': {
      opacity: "0.35",
    },

    [theme.breakpoints.down(400)]: {
      fontSize: "15px",
      paddingTop: "8px",
      width: "21%",
    },

    [theme.breakpoints.down(300)]: {
      marginTop: "12px",
      paddingTop: "6px",
      width: "18%",
    },
  },

  messageDivContainer: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "69%",
    padding: "1%",
    position: "absolute",
    top: "220px",
    bottom: "120px",

    [theme.breakpoints.down(700)]: {
      width: "83%",
    },

    [theme.breakpoints.down(500)]: {
      width: "93%",
    },

    [theme.breakpoints.down(400)]: {
      top: "200px",
    },
  },

  messageSubContainer: {
    // minHeight: "calc(100vh - 400px)",
    backgroundColor: "#C9AE99",
    borderRadius: "10px",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    padding: "10px",

    webkit_scrollbar: {
      width: "0px",
      background: "transparent",
    },
  },

  messageContainer: {
    fontFamily: "Lato",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#c637ac",
    marginBottom: "10px",
    
    whiteSpace: "nowrap",

    // [theme.breakpoints.down(400)]: {
    //     fontSize: "15px",
    // },
  },
}));

export default style;
