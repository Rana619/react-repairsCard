import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import homepageImage from "../svgs/homepageImage.svg"
import Framefree from "../svgs/Framefree.svg"
import unselectedMaintainers from "../svgs/unselectedMaintainence.svg"
import unselectedOilChange from "../svgs/unselectedOilChange.svg"
import unselectedParts from "../svgs/unselectedParts.svg"
import { useTheme, useMediaQuery } from "@material-ui/core";
import unselectedServices from "../svgs/unselectedServices.svg"
import unselectedTyres from "../svgs/unselectedTyres.svg"
import selectedParts from "../svgs/selectedParts.svg"
import selectedServices from "../svgs/selectedServices.svg"
import selectedTyres from "../svgs/selectedTyre.svg"
import Maintenance from "./DifferentInputs/Maintenance";
import OliChanges from "./DifferentInputs/Oli.Change";
import Services from "./DifferentInputs/Services";
import Parts from "./DifferentInputs/Parts";
import Tyres from "./DifferentInputs/Tyres";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "calc(100vh - 105px)",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            height: "auto",
        }
    },
    circleHome: {
        border: "90px solid #2A66FF",
        height: "50vw",
        width: "50vw",
        borderRadius: "50%",
        position: "absolute",
        top: "-150px",
        right: "-80px",
        [theme.breakpoints.down("sm")]: {
            height: "90vh",
            width: "90vh",
            top: "50px",
            left: "50vw",
        }
    },
    mainCont: {
        position: "relative",
        zIndex: "2",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.0)",
        zIndex: "2",
        paddingLeft: "100px",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "40px",
        },
        [theme.breakpoints.down("sm")]: {
            height: "auto",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "0px"
        },
    },
    header: {
        height: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "& > h3": {
            fontSize: "27px",
            fontWeight: "700",
            color: "#003C8A"
        },
        [theme.breakpoints.down("sm")]: {
            height: "250px",
            justifyContent: "center",
            "& > h3": {
                width: "260px",
                textAlign: "center",
                margin: "20px 0px"
            },
        },
        [theme.breakpoints.down("xs")]: {
            height: "120px"
        },
    },
    inputBox: {
        width: "60%",
        height: "97%",
        backgroundColor: "white",
        borderRadius: "10px",
        border: "1px solid #b2c3ec",
        [theme.breakpoints.down("md")]: {
            width: "65%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "70%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "62%",
        }
    },
    imgBox: {
        width: "37%",
        height: "97%",
        overflow: "hidden",
        backgroundImage: `url(${homepageImage})`,
        backgroundColor: "white",
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "50px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        [theme.breakpoints.down("md")]: {
            width: "30%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            height: "60vh",
            borderRadius: "40px"
        }
    },
    inputBoxAndImageCont: {
        width: "100%",
        height: "calc(100% - 100px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    contentCont: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: "linear-gradient(180deg, #174CD3 -15.76%, rgba(0, 0, 0, 0) 129.7%)",
        "&  h3": {
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "50px",
            transform: "scale(1, 1.2)",
            textAlign: "center",
            letterSpacing: "-0.02em",
            margin: "0px",
            color: "#FFFFFF"
        },
        [theme.breakpoints.down("md")]: {
            "&  h3": {
                fontWeight: "600",
                fontSize: "40px",
            },
        }
    },
    imageTextCont: {
        display: "flex",
        alignItems: "center",
        marginRight: "82px",
        "& > img": {
            height: "40px",
            width: "auto",
            marginLeft: "20px"
        },
        [theme.breakpoints.down("md")]: {
            marginRight: "20px",
        }
    },
    inputsTopCont: {
        display: "flex",
        alignItems: "center",
        marginTop: "25px",
        marginLeft: "30px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            width: "100%",
            marginLeft: "0px",
        }
    },
    singleOption: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginRight: "30px",
        "& div": {
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#EDF0F3",
            marginRight: "10px"
        },
        "& img": {
            width: "17px",
            height: "17px",
        },
        "& p": {
            color: "#2A66FF",
            fontSize: "15px"
        },
        [theme.breakpoints.down("md")]: {
            marginRight: "20px",
            "& div": {
                width: "25px",
                height: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#EDF0F3",
                marginRight: "7px"
            },
            "& img": {
                width: "15px",
                height: "15px",
            },
            "& p": {
                color: "#2A66FF",
                fontSize: "14px"
            },
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            justifyContent: "flex-start",
            margin: "0px",
        }
    },
    selectedSingleOption: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "30px",
        borderRadius: "15px",
        padding: "1px 10px 1px 0px",
        backgroundColor: "#e7ecf6",
        border: "1px solid #2A66FF",
        "& div": {
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            marginRight: "10px"
        },
        "& img": {
            width: "19px",
            margin: "0px",
            height: "19px",
        },
        "& p": {
            color: "#2A66FF",
            margin: "0px",
            fontWeight: "510",
            fontSize: "15px",
            marginBottom: "3px"
        },
        [theme.breakpoints.down("md")]: {
            marginRight: "20px",
            borderRadius: "12px",
            padding: "1px 7px 1px 0px",
            backgroundColor: "#e7ecf6",
            border: "1px solid #2A66FF",
            "& div": {
                width: "25px",
                height: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                marginRight: "7px"
            },
            "& img": {
                width: "15px",
                margin: "0px",
                height: "15px",
            },
            "& p": {
                color: "#2A66FF",
                margin: "0px",
                fontWeight: "510",
                fontSize: "15px",
                marginBottom: "3px"
            },
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            justifyContent: "flex-start",
            margin: "0px",
            marginBottom: "15px"
        }
    },
    inputBody: {
        marginTop: "20px",
        padding: "30px",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
        }
    },
    smOptionBox: {
        padding: "5px",
        border: "1px solid #2A66FF",
        borderRadius: "5px"
    },
    sectionInputCont: {
        width: "100%",
        padding: "10px",
        borderRadius: "15px",
        border: "1px solid rgba(42, 102, 255, 0.4)",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white"
    }
}));


const InputHomePage = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [showPage, setShowPage] = useState("Tyres")

    return (
        <div className={classes.root}>
            <div className={classes.circleHome} ></div>
            <div className={classes.mainCont} >
                <div className={classes.header} >
                    <h3>Professional & Relaible Services</h3>
                </div>

                {isMobile ? (
                    <div className={classes.imgBox} >
                        <div className={classes.contentCont} >
                            <div className={classes.imageTextCont} >
                                <h3>HASSLE</h3>
                                <img src={Framefree} />
                            </div>
                            <div>
                                <h3>REPAIR</h3>
                            </div>
                        </div>
                    </div>
                ) : null}

                {isMobile ? (<div style={{ width: "90%" }} >

                    <div className={classes.inputsTopCont} >
                        <div className={classes.sectionInputCont} >
                            <div
                                className={showPage === "Tyres" ? classes.selectedSingleOption : classes.singleOption}
                                onClick={() => { setShowPage("Tyres") }}
                            >
                                <div>
                                    {showPage === "Tyres" ? (
                                        <img src={selectedTyres} />
                                    ) : (
                                        <img src={unselectedTyres} />
                                    )}
                                </div>
                                <p>Tyres</p>
                            </div>
                            {showPage === "Tyres" && (<Tyres />)}
                        </div>

                        <div className={classes.sectionInputCont} >
                            <div
                                className={showPage === "Parts" ? classes.selectedSingleOption : classes.singleOption}
                                onClick={() => { setShowPage("Parts") }}
                            >
                                <div>
                                    {showPage === "Parts" ? (
                                        <img src={selectedParts} />
                                    ) : (
                                        <img src={unselectedParts} />
                                    )}
                                </div>
                                <p>Parts</p>
                            </div>

                            {showPage === "Parts" && (<Parts />)}
                        </div>

                        <div className={classes.sectionInputCont} >
                            <div
                                className={showPage === "Services" ? classes.selectedSingleOption : classes.singleOption}
                                onClick={() => { setShowPage("Services") }}
                            >
                                <div>
                                    {showPage === "Services" ? (
                                        <img src={selectedServices} />
                                    ) : (
                                        <img src={unselectedServices} />
                                    )}
                                </div>
                                <p>Services</p>
                            </div>

                            {showPage === "Services" && (<Services />)}
                        </div>

                        <div className={classes.sectionInputCont} >
                            <div
                                className={showPage === "OliChanges" ? classes.selectedSingleOption : classes.singleOption}
                                onClick={() => { setShowPage("OliChanges") }}
                            >
                                <div>
                                    <img src={unselectedOilChange} />
                                </div>
                                <p>Oli Changes</p>
                            </div>

                            {showPage === "OliChanges" && (<OliChanges />)}
                        </div>

                        <div className={classes.sectionInputCont} >
                            <div
                                className={showPage === "Maintenance" ? classes.selectedSingleOption : classes.singleOption}
                                onClick={() => { setShowPage("Maintenance") }}
                            >
                                <div>
                                    <img src={unselectedMaintainers} />
                                </div>
                                <p>Maintenance</p>
                            </div>

                            {showPage === "Maintenance" && (<Maintenance />)}
                        </div>


                    </div>


                </div>) : (
                    <div className={classes.inputBoxAndImageCont} >
                        <div className={classes.inputBox} >
                            <div className={classes.inputsTopCont} >
                                <div
                                    className={showPage === "Tyres" ? classes.selectedSingleOption : classes.singleOption}
                                    onClick={() => { setShowPage("Tyres") }}
                                >
                                    <div>
                                        {showPage === "Tyres" ? (
                                            <img src={selectedTyres} />
                                        ) : (
                                            <img src={unselectedTyres} />
                                        )}
                                    </div>
                                    <p>Tyres</p>
                                </div>
                                <div
                                    className={showPage === "Parts" ? classes.selectedSingleOption : classes.singleOption}
                                    onClick={() => { setShowPage("Parts") }}
                                >
                                    <div>
                                        {showPage === "Parts" ? (
                                            <img src={selectedParts} />
                                        ) : (
                                            <img src={unselectedParts} />
                                        )}
                                    </div>
                                    <p>Parts</p>
                                </div>
                                <div
                                    className={showPage === "Services" ? classes.selectedSingleOption : classes.singleOption}
                                    onClick={() => { setShowPage("Services") }}
                                >
                                    <div>
                                        {showPage === "Services" ? (
                                            <img src={selectedServices} />
                                        ) : (
                                            <img src={unselectedServices} />
                                        )}
                                    </div>
                                    <p>Services</p>
                                </div>
                                <div
                                    className={showPage === "OliChanges" ? classes.selectedSingleOption : classes.singleOption}
                                    onClick={() => { setShowPage("OliChanges") }}
                                >
                                    <div>
                                        <img src={unselectedOilChange} />
                                    </div>
                                    <p>Oli Changes</p>
                                </div>
                                <div
                                    className={showPage === "Maintenance" ? classes.selectedSingleOption : classes.singleOption}
                                    onClick={() => { setShowPage("Maintenance") }}
                                >
                                    <div>
                                        <img src={unselectedMaintainers} />
                                    </div>
                                    <p>Maintenance</p>
                                </div>
                            </div>
                            <div className={classes.inputBody} >
                                {showPage === "Maintenance" && (<Maintenance />)}
                                {showPage === "OliChanges" && (<OliChanges />)}
                                {showPage === "Services" && (<Services />)}
                                {showPage === "Parts" && (<Parts />)}
                                {showPage === "Tyres" && (<Tyres />)}
                            </div>
                        </div>
                        <div className={classes.imgBox} >
                            <div className={classes.contentCont} >
                                <div className={classes.imageTextCont} >
                                    <h3>HASSLE</h3>
                                    <img src={Framefree} />
                                </div>
                                <div>
                                    <h3>REPAIR</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default InputHomePage;