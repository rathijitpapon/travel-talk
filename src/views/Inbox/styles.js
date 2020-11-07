import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",

    marginLeft: "25%",
    marginRight: "25%",

    [theme.breakpoints.down(700)]: {
      marginLeft: "10%",
      marginRight: "10%",
    },

    [theme.breakpoints.down(500)]: {
      marginLeft: "5%",
      marginRight: "5%",
    },
  },

  nameDivContainer: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      width: "100%"
  },

  personContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "50px",
    padding: "10px",
    overflow: "hidden",
    
    marginBottom: "5px",
    cursor: "pointer",
    backgroundColor: "#C9AE99",
    borderRadius: "20px",

    "&:hover": {
        opacity: "0.3",
    }
  },

  profileIconContainer: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  },

  textContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: "3px",

    [theme.breakpoints.down(400)]: {
      marginTop: "8px",
  },
  },

  profileNameContainer: {
    fontFamily: "Lato",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#562727",
    
    whiteSpace: "nowrap",

    [theme.breakpoints.down(400)]: {
        fontSize: "15px",
    },
  },

  messageContainer: {
    fontFamily: "Lato",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#c637ac",
    marginTop: "5px",
    
    whiteSpace: "nowrap",

    [theme.breakpoints.down(400)]: {
        fontSize: "12px",
    },
  },

  messageDivContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "75%",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: "20px",
    backgroundColor: "black",
  },

  iconContainer: {
    height: "25%",
    width: "20%",
    marginLeft:  "40%",

    [theme.breakpoints.down(500)]: {
      height: "15%",
      width: "60%",
      marginLeft:  "20%",
    },
  },

  titleContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "45px",
    fontWeight: "bold",
    color: "#502f84",
    marginTop: "20px",
    textAlign: "center",

    [theme.breakpoints.down(500)]: {
      fontSize: "35px",
      marginTop: "10%",
      marginBottom: "10%",
    },
  },

  descriptionContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "17px",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#050a0c",
    textAlign: "center",
  },

  navlinkContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#3d4adb",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "30px",
    textAlign: "center",

    '&:hover': {
      opacity: "0.4",
      textDecoration: "underline",
    }
  },
}));

export default style;
