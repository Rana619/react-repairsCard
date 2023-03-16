import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./Services";
import SecLogo from "../svgs/SecLogo.svg"
import Mask from "../svgs/Mask.png"
import WheelPhoto from "../svgs/WheelPhoto.svg"
import EnginePhoto from "../svgs/EnginePhoto.svg"
import FirstPhoto from "../svgs/FirstPhoto.svg"
import Ellipse from "../svgs/Ellipse.svg"
import BestServicesCard from "../commonComponents/BestServices.Card";
import ExperienceCard from "./Experience.Card";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px 90px",
        [theme.breakpoints.down('md')]: {
            padding: "50px 40px",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "50px 20px",
        },
        [theme.breakpoints.down('xs')]: {
            padding: "50px 10px",
        },
    },
    firstBox: {
        backgroundColor: '#b8ccfe',
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
        borderRadius: "30px",
        border: "0.8px solid #2A66FFB2",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "20px"
    },
    S_leftBox: {
        width: "50%",
        height: "400px",
        borderRadius: "36px",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center"
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
        width: "30%",
        height: "400x",
        backgroundColor: "white",
        borderRadius: "30px",
        marginLeft: "60px",
        "& h2": {
            fontWeight: "650",
            fontSize: "27px",
            color: "001F3F",
            marginBottom: "30px"
        }
    },
    btnGet: {
        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "15px",
        padding: "15px 30px",
        borderRadius: "5px",
        fontSize: "12px",
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& h2": {
            fontFamily: "poppins",
            fontWeight: "600px",
            fontSize: "47px",
            fontStyle: "normal",
            color: "#001F3F",
            lineheight: "57px",
            textAlign: "center"

        },
        "& h3": {
            fontFamily: "poppins",
            fontWeight: "200px",
            fontSize: "20px",
            fontStyle: "normal",
            color: "#001F3F",
            lineheight: "30px",
            textAlign: "center",
        }

    },
    F_leftBox: {
        width: "54%",
        height: "400px",

    },

    Mask: {
        width: "100%",
    },
    btnExp: {
        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "15px",
        padding: "8px 13px",
        borderRadius: "5px",
        border: "none",
    },





    bestServicesCardCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: "100px 0px 30px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "center"
        }
    }

}));


const Midbar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bestServicesCardCont} >
                <BestServicesCard
                    card="left"
                    image={WheelPhoto}
                    imageTag={"WHEEL ADJUSTMENT"}
                    textTag={"BEST SERVICE"}
                    heading={"Wheel Adjustment"}
                    text={"We are always help to make one of the best adjustment service"}
                />
                <BestServicesCard
                    card="right"
                    image={EnginePhoto}
                    imageTag={"ENGINE SERVICE"}
                    textTag={"BEST SERVICE"}
                    heading={"Engine Service"}
                    text={"We are always help to make one of the best adjustment service"}
                />
            </div>

            <div className={classes.SecondBox}>
                <div className={classes.S_leftBox}
                    style={{ backgroundImage: `url(${SecLogo})` }}
                >
                </div>
                <div className={classes.S_RightBox}>
                    <h2>We Realize That You Lead A
                        Busy Life, So We Have Made
                        It Easy For You To Drop Of
                        Your <span style={{ color: "#2A66FF" }} >Vehicle 24/7.</span> </h2>
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

            <ExperienceCard />
        </div>

    );
}

export default Midbar;