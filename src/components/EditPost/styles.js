import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex-inline",
    justifyContent: "space-between",
    marginTop: "5px",
    marginLeft: "5%",
    marginRight: "5%",
    padding: "10px",
    backgroundColor: "#ddb396",
    borderRadius: "20px",

    [theme.breakpoints.down(600)]: {
      marginLeft: "3%",
      marginRight: "3%",
    },
  },

  expandPostContainer: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "#eddede",
    padding: "10px",
    borderRadius: "25px",
  },

  profileContainer: {
    display: "flex",
    marginBottom: "10px",
  },

  profileNameContainer: {
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
  },

  profileImageContainer: {
    height: "45px",
    width: "45px",
    borderRadius: "50%",

    '&:hover': {
      opacity: "0.4",
    },
  },

  addpostContainer: {
    marginLeft: "10px",
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#3F3E3C",
    cursor: "pointer",
    textDecoration: "none",
    width: "100%",

    '&:hover': {
      opacity: "0.4",
      textDecoration: "underline",
    },

    [theme.breakpoints.down(400)]: {
        fontSize: "18px",
        marginTop: "15px",
      },
  },

  postInputContainer: {
      display: "flex-inline",
      justifyContent: "space-between",
      padding: "10px",
  },

  titleInputContainer: {
      width: "96%",
      height: "40px",
      borderRadius: "20px",
      fontFamily: "Ubuntu Mono",
      fontSize: "20px",
      padding: "2%",
  },

  descriptionInputContainer: {
    width: "96%",
    height: "100px",
    borderRadius: "20px",
    fontFamily: "Ubuntu Mono",
    fontSize: "18px",
    padding: "2%",
    resize: "none",
    overflowY: "auto",
  },

  postImageContainer: {
    maxHeight: "400px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
    borderRadius: "10px",

    [theme.breakpoints.down(600)]: {
      maxHeight: "300px",
      },
  },

  fieldContainer: {
    display: "flex-inline",
    marginBottom: "15px",
  },

  errorContainer: {
    color: "#cc0033",
    marginTop: "5px",
  },

  uploadImageContainer: {
    cursor: "pointer",
    width: "30%",
    marginLeft: "35%",
    height: "40px",
    borderRadius: "20px",
    backgroundColor: "#c19999",
    color: "#302393",
    fontSize: "20px",
    fontWeight: "bold",

    '&:hover': {
      opacity: "0.5",
    },

    [theme.breakpoints.down(700)]: {
      width: "50%",
      marginLeft: "25%",
    },

    [theme.breakpoints.down(350)]: {
      fontSize: "15px",
    },

    [theme.breakpoints.down(250)]: {
      fontSize: "12px",
    },
  },

  ImagelabelContainer: {
    textAlign: "center",
    marginTop: "7px",

    [theme.breakpoints.down(450)]: {
      marginTop: "9px",
    },

    [theme.breakpoints.down(320)]: {
      marginTop: "3px",
    },
  },

  ImageButtonContainer: {
    cursor: "pointer",
    width: "49%",
    marginLeft: "5%",
    marginRight: "5%",
    height: "40px",
    borderRadius: "20px",
    backgroundColor: "#c19999",
    color: "#390356",
    fontSize: "20px",
    fontWeight: "bold",

    '&:hover': {
      opacity: "0.35",
    },

    [theme.breakpoints.down(700)]: {
      marginLeft: "1%",
      marginRight: "1%",
    },

    [theme.breakpoints.down(500)]: {
      fontSize: "18px",
    },

    [theme.breakpoints.down(430)]: {
      fontSize: "17px",
    },

    [theme.breakpoints.down(300)]: {
      fontSize: "15px",
    },
  },

  buttonDivContainer: {
    marginTop: "20px",
    
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  buttonContainer: {
    cursor: "pointer",
    width: "49%",
    marginLeft: "5%",
    marginRight: "5%",
    height: "40px",
    borderRadius: "20px",
    boxShadow: "2px 2px 2px #eee",
    backgroundColor: "#300eb7",
    color: "#dbcebc",
    fontSize: "20px",
    fontWeight: "bold",

    '&:hover': {
      opacity: "0.35",
    },

    [theme.breakpoints.down(700)]: {
      marginLeft: "1%",
      marginRight: "1%",
    },

    [theme.breakpoints.down(350)]: {
      fontSize: "15px",
    },
  },
}));

export default style;
