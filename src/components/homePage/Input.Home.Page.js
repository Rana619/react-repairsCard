import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "calc(100vh - 105px)",
        position: "relative",
        overflow: "hidden",
    },
    circleHome: {
        border: "80px solid #2A66FF",
        height: "450px",
        width: "450px",
        borderRadius: "50%",
        position: "absolute",
        top: "-115px",
        right: "-80px"
    },
    mainCont: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.0)",
        zIndex: "2",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
    inputBox: {
        width: "60%",
        height: "90%",
        backgroundColor: "white"
    },
    imgBox: {
        width: "30%",
        height: "90%",
        backgroundColor: "white"
    }
}));


const InputHomePage = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.circleHome} ></div>
            <div className={classes.mainCont} >
                <div className={classes.inputBox} ></div>
                <div className={classes.imgBox} ></div>
            </div>
        </div>
    );
};
export default InputHomePage;