import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        borderRadius: "35px",
        position: "relative",
        overflow: "hidden"
    },
    overLay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
        "& h4": {
            backgroundColor: "#00AA00",
            padding: "1px 30px",
            borderRadius: "8px",
            color: "white",
            fontSize: "14px",
            fontWeight: "500"
        },
        "& h3": {
            fontSize: "35px",
            fontWeight: "700",
            color: "white",
            margin: "10px 0px"
        },
        "& p": {
            fontSize: "14px",
            fontWeight: "600",
            color: "white"
        }
    }
}));


const ImageCont = ({ image, topTag, heading, bottomLine }) => {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className={classes.overLay} >
                <h4>{topTag}</h4>
                <h3>{heading}</h3>
                <p>{bottomLine}</p>
            </div>
        </div>
    );
}
export default ImageCont;