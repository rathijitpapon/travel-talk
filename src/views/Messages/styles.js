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
    textDecoration: "none",
    
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
}));

export default style;
