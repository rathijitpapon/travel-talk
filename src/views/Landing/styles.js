import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex-inline",
    justifyContent: "space-between",
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
