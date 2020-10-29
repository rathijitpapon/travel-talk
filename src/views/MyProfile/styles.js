import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex-inline",
    justifyContent: "space-between",
  },

  profileContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "5%",
    width: "93%",
    marginTop: "20px",

    [theme.breakpoints.down(700)] : {
      display: "flex",
      flexDirection: "column",
    },

    [theme.breakpoints.down(600)] : {
      marginLeft: "3%",
      width: "95%",
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

  editPostContainer: {
    marginTop: "30px",
    width: "100%",
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
    marginLeft: "5%",
    marginRight: "5%",

    [theme.breakpoints.down(600)]: {
      marginLeft: "3%",
      marginRight: "3%",
    },

    [theme.breakpoints.down(280)]: {
      display: "flex",
      flexDirection: "column",
    }
  },

  bottomButtonContainer: {
    width: "49%",
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

  photosContainer: {
    display: "flex-start",
    flexDirection: "row",
    marginLeft: "4%",
    marginTop: "40px",
    width: "92%",

    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
    },

    [theme.breakpoints.down(600)]: {
      marginLeft: "2%",
      marginTop: "40px",
      width: "93%",
    },
  },

  photosItemContainer: {
    width: "32%",
    borderRadius: "10px",
    marginLeft: "1%",
    marginBottom: "15px",

    [theme.breakpoints.down(900)]: {
      width: "100%",
      marginBottom: "15px",
    },
  },

  popupContainer: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    maxHeight: "calc(100vh - 210px)",
    padding: "10px",
  },

  popupItemContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "5px",

    [theme.breakpoints.down(400)]: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "10px",
    },
  },

  popupProfileIconContainer: {
    height: "45px",
    width: "45px",
    borderRadius: "50%",

    '&:hover': {
      opacity: "0.4",
    },
  },

  popupProfileNameContainer: {
    marginLeft: "10px",
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3F3E3C",
    cursor: "pointer",
    textDecoration: "none",

    '&:hover': {
      opacity: "0.4",
      textDecoration: "underline",
    },

    [theme.breakpoints.down(400)]: {
      fontSize: "16px",
      marginLeft: "0%",
      marginTop: "5px",
    },
  },
}));

export default style;
