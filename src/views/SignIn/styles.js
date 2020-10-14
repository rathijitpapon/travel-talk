import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex-inline",
    justifyContent: "space-between",
    marginTop: "150px",
  },

  fieldContainer: {
    display: "flex-inline",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: "20px",

    [theme.breakpoints.down(700)]: {
      marginLeft: "10%",
      marginRight: "10%",
    },
  },

  buttonDivContainer: {
    marginTop: "20px",
    marginLeft: "30%",
    marginRight: "30%",

    [theme.breakpoints.down(700)]: {
      marginLeft: "10%",
      marginRight: "10%",
    },
  },

  buttonContainer: {
    cursor: "pointer",
    marginLeft: "35%",
    width: "30%",
    height: "40px",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px #eee",
    backgroundColor: "#300eb7",
    color: "#dbcebc",
    fontSize: "14px",
    fontWeight: "bold",

    [theme.breakpoints.down(700)]: {
      marginLeft: "25%",
      marginRight: "25%",
      width: "50%",
    },

    '&:hover': {
      opacity: "0.35",
    },
  },

  fieldTitleContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#0b244f",
    marginBottom: "5px",
  },

  inputContainer: {
    width: "100%",
    height: "30px",
    fontSize: "16px",
    textColor: "black",
    textAlign: "left",
    borderRadius: "5px",
    boxShadow: "none",
    
    '&:focus': {
      opacity: "0.5",
    },
  },

  titleContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "40px",
    fontWeight: "bold",
    color: "#502f84",
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",

    [theme.breakpoints.down(500)]: {
      fontSize: "30px",
      marginTop: "10%",
      marginBottom: "20px",
    },
  },

  navlinkContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#3d4adb",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "25px",
    textAlign: "center",

    '&:hover': {
      opacity: "0.4",
      textDecoration: "underline",
    },
  },

  errorContainer: {
    color: "#cc0033",
    marginTop: "5px",
  },
}));

export default style;
