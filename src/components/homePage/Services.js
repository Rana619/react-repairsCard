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

    FirstPhoto :{
        height : "700px",
        width : "100%",
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

    return (
        <div className={classes.root}>
            <div className={classes.thirdBox}>
                <div className={classes.T_leftBox}>
                    <h3>SEASON OF SAVINGS</h3>
                    <h2>Long Term Warrinties</h2>
                    <h4>Phasellus tincidunt hendrerit mi id suscipit. Nullam elementum dictum ipsum, id dignissim eros. Sed iaculis convallis metus, at convallis dui ullamcorper eget. Nam ut aliquet diam. Nam tempor ullamcorper elit ac egestas. Pellentesque consequat interdum ex, volutpat accumsan massa sodales id.
                    </h4>
                    <button className={classes.btnJoin} >
                        JOIN TODAY!
                    </button>
                </div>
                <div className={classes.T_RightBox}>
             <img className={classes.FirstPhoto} src={FirstPhoto}></img>
                </div>
            </div>
        </div>
    );
}

export default Services;