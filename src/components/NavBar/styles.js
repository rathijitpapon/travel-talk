import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
    container: {
        display: "flex-inline",
        background: "#454442",
        position: "fixed",
        width: "100%",
        margin: "0",
      },

      mainContainer: {
        display: "flex",
        justifyContent: "space-between",
      },

      leftContainer: {
        display: "flex",
        justifyContent: "flex-start",
      },

      rightContainer: {
        display: "flex",
        justifyContent: "flex-start",
      },

      logoContainer: {
        display: "flex",
        cursor: "pointer",
        textDecoration: "none",
        marginLeft: "30px",

        '&:hover': {
            opacity: "0.5",
          },
      },

      iconContainer: {
        height: "60px",
        width: "100px",
        marginTop: "1%",
        marginBottom: "1%",
        
        [theme.breakpoints.down(400)] : {
            display: "none",
        },
      },

      titleContainer: {
        fontFamily: "Ubuntu Mono",
        fontSize: "35px",
        fontWeight: "bold",
        color: "#EBE4E0",
        marginTop: "6%",

        [theme.breakpoints.down(450)] : {
            fontSize: "35px",
            marginTop: "8%",
        },

        [theme.breakpoints.down(430)] : {
          fontSize: "25px",
          marginTop: "11%",
        },

        [theme.breakpoints.down(400)] : {
          fontSize: "25px",
          marginTop: "18%",
        },
      },

      menuIconContainer: {
        cursor: "pointer",
        marginTop: "25%",
        marginBottom: "25%",
        marginLeft: "30px",
        marginRight: "30px",

        '&:hover': {
            opacity: "0.3",
          },

        [theme.breakpoints.up(800)] : {
            display: "none",
        },
      },

      menuItemWrapper: {
        display: "flex-inline",
        padding: "0px 0px 10px 0px",

        [theme.breakpoints.up(800)] : {
            padding: "0px 0px 0px 0px",
        },
        
        [theme.breakpoints.up(800)] : {
            display: "none",
        },
      },

      menuItemContainer: {
        fontFamily: "Ubuntu Mono",
        fontSize: "25px",
        fontWeight: "bold",
        color: "#EBE4E0",
        textAlign: "center",
        marginBottom: "3%",
        cursor: "pointer",
        textDecoration: "none",

        '&:hover': {
            opacity: "0.5",
          },

        [theme.breakpoints.up(800)] : {
            padding: "0px 0px 0px 0px",
        },
      },

      optionContainer: {
        display: "flex",
        marginRight: "30px",

        [theme.breakpoints.down(800)] : {
            display: "none",
        },
      },

      itemContainer: {
        fontFamily: "Ubuntu Mono",
        fontSize: "25px",
        fontWeight: "bold",
        color: "#EBE4E0",
        cursor: "pointer",
        textDecoration: "none",
        marginTop: "7%",
        marginBottom: "7%",
        marginLeft: "30px",

        '&:hover': {
            opacity: "0.5",
          },
      },
}));

export default style;
