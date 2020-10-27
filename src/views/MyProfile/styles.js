import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex-inline",
    justifyContent: "space-between",
  },

  profileContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "3%",
    marginTop: "20px",

    [theme.breakpoints.down(700)] : {
      display: "flex",
      flexDirection: "column",
    },
  },

  profileImageContainer: {
    height: "250px",
    width: "250px",
    borderRadius: "50%",

    [theme.breakpoints.down(700)] : {
      display: "flex-inline",
      width: "40%",
      height: "auto",
      marginLeft: "30%",
      marginRight: "30%",
    },

    [theme.breakpoints.down(400)] : {
      display: "flex-inline",
      width: "80%",
      height: "auto",
      marginLeft: "10%",
      marginRight: "10%",
    },
  },

  profileDescriptionContainer: {
    display: "flex-inline",
    justifyContent: "flex-start",
    marginTop: "10px",

    [theme.breakpoints.up(700)] : {
      marginLeft: "5%",
    },
  },

  nameContainer: {
    fontFamily: "Lato",
    fontSize: "40px",
    fontWeight: "bold",
    color: "#562727",
    marginTop: "20px",

    [theme.breakpoints.down(700)] : {
      textAlign: "center",
    },

    [theme.breakpoints.down(300)] : {
      fontSize: "25px",
    },

    [theme.breakpoints.up(700)] : {
      marginRight: "50px",
    },
  },

  descriptionContainer: {
    fontFamily: "Lato",
    fontSize: "17px",
    color: "#050a0c",
    marginTop: "10px",

    [theme.breakpoints.down(700)] : {
      textAlign: "center",
    },

    [theme.breakpoints.up(700)] : {
      marginRight: "50px",
    },
  },

  followContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "20px",

    [theme.breakpoints.down(700)] : {
      display: "flex",
      flexDirection: "column",
    },
  },

  followerContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "20px",
    color: "#094696",
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
      opacity: "0.4",
    },

    [theme.breakpoints.down(700)] : {
      textAlign: "center",
    },
  },

  followingContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "20px",
    color: "#094696",
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
      opacity: "0.4",
    },

    [theme.breakpoints.down(700)] : {
      textAlign: "center",
      marginTop: "10px",
    },

    [theme.breakpoints.up(700)] : {
      marginLeft: "10px",
    },
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "20px",

    [theme.breakpoints.down(700)] : {
      display: "flex",
      flexDirection: "column",
    },
  },

  followButtonContainer: {
    cursor: "pointer",
    width: "100px",
    height: "40px",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px #eee",
    backgroundColor: "#5186BF",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",

    [theme.breakpoints.down(700)]: {
      marginTop: "10px",
      marginLeft: "25%",
      marginRight: "25%",
      width: "50%",
    },

    '&:hover': {
      opacity: "0.35",
    },
  },

  messageButtonContainer: {
    cursor: "pointer",
    width: "100px",
    height: "40px",
    borderRadius: "20px",
    boxShadow: "5px 5px 5px #eee",
    backgroundColor: "#5186BF",
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",

    [theme.breakpoints.down(700)]: {
      marginLeft: "25%",
      marginRight: "25%",
      width: "50%",
    },

    [theme.breakpoints.up(700)]: {
      marginRight: "30px",
    },

    '&:hover': {
      opacity: "0.35",
    },
  },

  profileBottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",

    [theme.breakpoints.down(280)]: {
      display: "flex",
      flexDirection: "column",
    }
  },

  bottomButtonContainer: {
    width: "100%",
    height: "30px",
    backgroundColor: "lightgray",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "17px",
    borderRadius: "20px",

    [theme.breakpoints.down(280)]: {
      marginLeft: "5%",
      marginRight: "5%",
      width: "90%",
      marginTop: "5px",
    },

    "&:hover": {
      opacity: "0.5",
    },
  },

  popupContainer: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    maxHeight: "calc(100vh - 210px)",
  },

  popupItemContainer: {
    marginTop: "5px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: "Lato",

    [theme.breakpoints.down(200)]: {
      fontSize: "16px",
    },

    "&:hover": {
      backgroundColor: "lightblue",
    }
  },
}));

export default style;
