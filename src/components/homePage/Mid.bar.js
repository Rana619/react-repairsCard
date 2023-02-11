import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./Services";
import SecLogo from "../svgs/SecLogo.svg"
import SecPhoto from "../svgs/SecPhoto.svg"
import WheelPhoto from "../svgs/WheelPhoto.svg"
import EnginePhoto from "../svgs/EnginePhoto.svg"
import FirstPhoto from "../svgs/FirstPhoto.svg"

const useStyles = makeStyles((theme) => ({

    root: {
        padding: "50px 90px"
    },
    firstBox: {
        backgroundColor: '#d7ddea',
        borderRadius: "36px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "400px",


    },
    f_leftBox: {
        width: "47%",
        height: "400px",
        backgroundColor: "white",
        marginBottom: "80px",
        borderRadius: "36px",
    },

    f_RightBox: {
        width: "47%",
        height: "400px",
        backgroundColor: "white",
        marginBottom: "80px",
        borderRadius: "36px",
    },
    SecondBox: {
        backgroundColor: 'white',
        borderRadius: "36px",
        borderWidth: "0.8px",
        borderStyle: "solid",
        borderColor: "#2A66FFB2",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "500px",
        margin: "60px 60px 0px 0px"
    },
    S_leftBox: {
        width: "50%",
        height: "450px",
        borderRadius: "36px",
    },
    WheelPhoto: {
        width: "100%",
        height: "350px",
    },
    EnginePhoto: {
        width: "100%",
        height: "350px",
    },

    SecLogo: {
        height: "450px",
        width: "100%",
    },
    S_RightBox: {
        width: "45%",
        height: "450x",
        backgroundColor: "white",
        borderRadius: "36px",
        "& h2": {
            fontFamily: "poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "30px",
            color: "001F3F",
        }

    },
    btnGet: {

        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "15px",
        padding: "8px 13px",
        borderRadius: "5px",
        border: "none"
    },


    fourthBox: {
        backgroundColor: 'white',
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "600px",
        margin: "60px 60px 0px 0px"
    },
    F_RightBox: {
        width: "45%",
        height: "400px",
        backgroundColor: "white",
        "& h3": {
            fontFamily: "poppins",
            color: "#001F3F",

        }

    },
    F_leftBox: {
        width: "54%",
        height: "400px",
        backgroundColor: "green"

    },

    SecPhoto: {
        width: "100%",
    },
    btnExp: {
        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "15px",
        padding: "8px 13px",
        borderRadius: "5px",
        border: "none",
    }


}));


const Midbar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.firstBox}>
                <div className={classes.f_leftBox}>
                    <img className={classes.WheelPhoto} src={WheelPhoto}></img>
                </div>
                <div className={classes.f_RightBox}>
                    <img className={classes.EnginePhoto} src={EnginePhoto}></img>
                </div>
            </div>
            <div className={classes.SecondBox}>
                <div className={classes.S_leftBox}>
                    <img className={classes.SecLogo} src={SecLogo}></img>
                </div>
                <div className={classes.S_RightBox}>
                    <h2>We Realize That You Lead A
                        Busy Life, So We Have Made
                        It Easy For You To Drop Of
                        Your Vehicle 24/7.</h2>
                    <button className={classes.btnGet} >
                        GET ESTIMATE
                    </button>
                </div>
            </div>
            <Services
                type={"SEASON OF SAVINGS"}
                title={"Long Term Warrinties"}
                desc={"Phasellus tincidunt hendrerit mi id suscipit. Nullam elementum dictum ipsum, id dignissim eros. Sed iaculis convallis metus, at convallis dui ullamcorper eget. Nam ut aliquet diam. Nam tempor ullamcorper elit ac egestas. Pellentesque consequat interdum ex, volutpat accumsan massa sodales id."}
                btnText={"JOIN TODAY!"}
                img={FirstPhoto}
            />
            <div className={classes.fourthBox}>
                <div className={classes.F_leftBox}>
                    <img className={classes.SecPhoto} src={SecPhoto}></img>
                </div>
                <div className={classes.F_RightBox}>
                    <h2>
                        Introducing Repairs Card  Experiences</h2>
                    <h3>Nam ut aliquet diam. Nam tempor ullamcorper elit ac egestas. Pellentesque consequat interdum ex, volutpat accumsan massa sodales id.</h3>
                    <button className={classes.btnExp} >
                        EXPLORE NOW
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Midbar;