import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Mask from "../svgs/Mask.png"

const useStyles = makeStyles((theme) => ({
    fourthBox: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: "200px 0px 50px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "center"
        }
    },
    F_leftBox: {
        width: "55%",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    F_RightBox: {
        width: "45%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 100px",
        "& h2": {
            fontSize: "30px",
            fontWeight: "700",
            marginBottom: "20px",
            textAlign: "center"
        },
        "& h3": {
            fontSize: "14px",
            fontWeight: "490",
            marginBottom: "20px",
            textAlign: "center"
        },
        [theme.breakpoints.down('sm')]: {  
            width: "100%",
            padding: "0px 50px",
        },
        [theme.breakpoints.down('xs')]: {
            padding: "0px 20px",
        },
    },
    imageSty: {
        width: "100%",
        height: "auto",
        position: "relative",
        zIndex: "3"
    },
    btnExp: {
        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "15px",
        padding: "15px 30px",
        borderRadius: "5px",
        fontSize: "12px",
        border: "none"
    },
    circleSty: {
        width: "300px",
        height: "300px",
        border: "70px solid #2A66FF",
        borderRadius: "50%",
        position: "absolute",
        top: "-40px",
        right: "0px",
        zIndex: "2",
        [theme.breakpoints.down('xs')]: {
            width: "170px",
            height: "170px",
            border: "40px solid #2A66FF",
        }
    }
}));


const ExperienceCard = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.fourthBox}>
            <div className={classes.F_leftBox}>
                <img className={classes.imageSty} src={Mask}></img>
                <div className={classes.circleSty} ></div>
            </div>

            <div className={classes.F_RightBox}>
                <h2>Introducing Repairs Card  Experiences</h2>
                <h3>Nam ut aliquet diam. Nam tempor ullamcorper elit ac egestas. Pellentesque consequat interdum ex, volutpat accumsan massa sodales id.</h3>
                <button className={classes.btnExp} >
                    EXPLORE NOW
                </button>
            </div>
        </div>
    );
}
export default ExperienceCard;