import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./Services";
import SecLogo from "../svgs/SecLogo.svg"
import WheelPhoto from "../svgs/WheelPhoto.svg"
import EnginePhoto from "../svgs/EnginePhoto.svg"
import FirstPhoto from "../svgs/FirstPhoto.svg"
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
    SecondBox: {
        backgroundColor: 'white',
        borderRadius: "30px",
        border: "0.8px solid #2A66FFB2",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center"
        }
    },
    S_leftBox: {
        width: "50%",
        height: "400px",
        borderRadius: "36px",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
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
        },
        [theme.breakpoints.down("md")]: {
            width: "40%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginLeft: "0px",
            padding: "15px 20px 10px",
            "& h2": {
                fontSize: "20px",
            },
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
    bestServicesCardCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        margin: "100px 0px 70px",
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