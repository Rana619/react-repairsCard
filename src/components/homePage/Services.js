import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FirstPhoto from "../svgs/FirstPhoto.svg"

const useStyles = makeStyles((theme) => ({
    thirdBox: {
        backgroundColor: '#d7ddea',
        borderRadius: "36px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "750px",
        margin: "60px 60px 0px 0px"
    },
    T_leftBox: {
        width: "45%",
        height: "700px",
        borderRadius: "36px",

    },
    T_RightBox: {

        width: "45%",
        height: "700px",
        borderRadius: "36px",
    },

    FirstPhoto: {
        height: "700px",
        width: "100%",
    },

    btnJoin: {
        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "15px",
        padding: "8px 13px",
        borderRadius: "5px",
        border: "none",
    },
}));


const Services = (props) => {
    const classes = useStyles();
    const {
        type, title, desc, btnText, img
    } = props

    return (
        <div className={classes.root}>
            <div className={classes.thirdBox}>
                <div className={classes.T_leftBox}>
                    <h3>{type}</h3>
                    <h2>{title}</h2>
                    <h4>{desc}</h4>
                    <button className={classes.btnJoin} >{btnText}</button>
                </div>
                <div className={classes.T_RightBox}>
                    <img className={classes.FirstPhoto} src={img} />
                </div>
            </div>
        </div>
    );
}

export default Services;