import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  mainContainer: {
    display: "flex-inline",
    justifyContent: "space-between",
    marginTop: "50px",
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

  profileContainer: {
    display: "flex",
  },

  profileImageContainer: {
    height: "40px",
    width: "40px",
    borderRadius: "50%",

    '&:hover': {
      opacity: "0.4",
    },
  },

  profileNameContainer: {
    marginLeft: "10px",
    marginTop: "7px",
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

  titleContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#502f84",
    marginTop: "10px",
    marginBottom: "20px",
    textAlign: "left",

    [theme.breakpoints.down(600)]: {
      fontSize: "20px",
    },
  },

  postImageContainer: {
    marginBottom: "5px",
    maxHeight: "60%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
    borderRadius: "10px",

    [theme.breakpoints.down(600)]: {
      maxHeight: "300px",
      },
  },

  postDescriptionContainer: {
    marginBottom: "15px",
    fontSize: "18px",
    lineHeight: "27px",
    fontColor: "#D8D5D3",

    [theme.breakpoints.down(600)]: {
        fontSize: "15px",
        lineHeight: "24px",
      },
  },

  reactContainer: {
    display: "flex",
    justifyContent: "space-between",
  },

  reactItemContainer: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "20px",
    backgroundColor: "#d8c6ba",
    width: "100%",
    marginRight: "5px",
  },

  reactIconContainer: {
    margin: "auto",
    fontSize: "40px",
    cursor: "pointer",

    [theme.breakpoints.down(600)]: {
      fontSize: "25px",
    },

    "&:hover": {
      opacity: "0.25",
    }
  },

  reactCountContainer: {
    fontFamily: "Ubuntu Mono",
    fontSize: "30px",
    margin: "auto",
    textAlign: "center",
    cursor: "pointer",

    [theme.breakpoints.down(600)]: {
      fontSize: "20px",
    },

    [theme.breakpoints.down(200)]: {
      fontSize: "15px",
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
