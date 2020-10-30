import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
    mainContainer: {
        display: "flex-inline",
        justifyContent: "space-between",
    },

    imageChangeContainer: {
        marginLeft: "20%",
        marginRight: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",

        [theme.breakpoints.down(700)]: {
            flexDirection: "column",
        },

        [theme.breakpoints.down(400)]: {
            marginLeft: "5%",
            marginRight: "5%",
        },
    },

    profileImageContainer: {
        height: "250px",
        width: "250px",
        borderRadius: "50%",

        [theme.breakpoints.down(700)] : {
            display: "flex-inline",
            width: "80%",
            height: "auto",
            marginLeft: "10%",
            marginRight: "10%",
        },

        [theme.breakpoints.down(400)] : {
            display: "flex-inline",
            width: "80%",
            height: "auto",
            marginLeft: "10%",
            marginRight: "10%",
        },
    },

    sideTextContainer: {
        marginLeft: "30px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",

        [theme.breakpoints.down(700)]: {
            marginLeft: "0px",
            marginTop: "30px",
        },
    },

    textContainer: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Ubuntu Mono",
        lineHeight: "30px",
        color: "#39347a",
        textAlign: "left",

        [theme.breakpoints.down(700)]: {
            fontSize: "18px",
            lineHeight: "25px",
            textAlign: "center",
        },

        [theme.breakpoints.down(500)]: {
            fontSize: "16px",
            lineHeight: "25px",
        },
    },

    imageButtonContainer: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",

        [theme.breakpoints.down(800)]: {
            flexDirection: "column",
        },
    },

    uploadImageContainer: {
        cursor: "pointer",
        marginRight: "10px",
        marginBottom: "10px",
    },

    ImagelabelContainer: {
        textAlign: "center",
        borderRadius: "20px",
        backgroundColor: "#c19999",
        color: "#302393",
        fontSize: "20px",
        fontWeight: "bold",
        width: "150px",
        padding: "10px",

        "&:hover": {
            opacity: "0.4",
        },

        [theme.breakpoints.down(700)]: {
            width: "70%",
            marginLeft: "15%",
        },

        [theme.breakpoints.down(350)]: {
            fontSize: "15px",
        },

        [theme.breakpoints.down(250)]: {
            fontSize: "12px",
        },
    },

    fieldContainer: {
        display: "flex-inline",
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "20px",

        [theme.breakpoints.down(700)]: {
            marginLeft: "5%",
            marginRight: "5%",
        },
    },

    buttonDivContainer: {
        marginTop: "20px",
        marginLeft: "20%",
        marginRight: "20%",

        [theme.breakpoints.down(700)]: {
            marginLeft: "5%",
            marginRight: "5%",
        },
    },

    buttonContainer: {
        cursor: "pointer",
        marginLeft: "30%",
        width: "40%",
        height: "40px",
        borderRadius: "20px",
        boxShadow: "5px 5px 5px #eee",
        backgroundColor: "#300eb7",
        color: "#dbcebc",
        fontSize: "14px",
        fontWeight: "bold",
        marginBottom: "30px",

        [theme.breakpoints.down(700)]: {
            marginLeft: "20%",
            marginRight: "20%",
            width: "60%",
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

    descriptionInputContainer: {
        width: "100%",
        height: "150px",
        fontSize: "16px",
        textColor: "black",
        textAlign: "left",
        borderRadius: "5px",
        resize: "none",
        boxShadow: "none",
        
        '&:focus': {
            opacity: "0.5",
        },
    },

    titleContainer: {
        fontFamily: "Ubuntu Mono",
        fontSize: "30px",
        fontWeight: "bold",
        color: "#502f84",
        marginTop: "20px",
        marginBottom: "20px",
        textAlign: "center",

        [theme.breakpoints.down(500)]: {
            fontSize: "20px",
            marginTop: "10%",
            marginBottom: "20px",
        },
    },

    errorContainer: {
        color: "#cc0033",
        marginTop: "5px",
    },
}));

export default style;
