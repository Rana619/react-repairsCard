import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    thirdBox: {
        background: "#d2ddf8",
        borderRadius: "30px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "60px 0px",
        padding: "20px",
    },
    T_leftBox: {
        width: "45%",
        height: "600px",
        borderRadius: "36px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: "100px",
        "& h3": {
            color: "#2A66FF",
            fontWeight: "510",
            fontSize: "14px",
        },
        "& h2": {
            color: "#001F3F",
            fontWeight: "600",
            fontSize: "35px",
            marginBottom: "20px"
        },
        "& p": {
            color: "#001F3F",
            fontWeight: "490",
            fontSize: "15px",
        }
    },
    btnJoin: {
        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "13px",
        padding: "12px 30px",
        borderRadius: "5px",
        border: "none",
        marginTop: "30px"
    },
    T_RightBox: {
        width: "40%",
        height: "600px",
        borderRadius: "30px",
    }
}));


const Services = (props) => {
    const classes = useStyles();
    const { type, title, desc, btnText, img } = props

    return (
        <div className={classes.thirdBox}>
            <div className={classes.T_leftBox}>
                <h3>{type}</h3>
                <h2>{title}</h2>
                <p>{desc}</p>
                <button className={classes.btnJoin} >{btnText}</button>
            </div>
            <div className={classes.T_RightBox} style={{ backgroundImage: `url(${img})` }} >
            </div>
        </div>
    );
}
export default Services;