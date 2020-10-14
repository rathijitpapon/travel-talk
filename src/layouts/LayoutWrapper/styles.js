import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
    mainContainer: {
        display: "flex-inline",
    },
    
    contentContainer: {
        backgroundColor: "#e8dada",
        width: "100%",
        overflowX: "hidden",
    },
    
    content: {
        marginTop: "100px",
        marginBottom: "50px"
    },
}));

export default style;