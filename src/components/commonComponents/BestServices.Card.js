import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        height: "450px",
        backgroundColor: "#eef1f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            marginBottom: "90px",
            width: "100%",
            borderRadius: "30px"
        }
    },
    innerCard: {
        backgroundColor: "white",
        borderRadius: "25px",
        width: "90%",
        height: "100%",
        marginTop: "-130px",
        overflow: "hidden"
    },
    imageCont: {
        width: "100%",
        height: "65%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    imageTagSty: {
        backgroundColor: "#87e1f4a8",
        borderRadius: "7px",
        height: "55px",
        width: "270px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& h3": {
            fontSize: "23px",
            fontWeight: "700"
        }
    },
    detailsCont: {
        padding: "20px",
        paddingRight: "215px",
        "& h5": {
            color: "#2A66FF"
        },
        "& h3": {
            fontSize: "25px",
            marginBottom: "10px"
        },
        "& p": {
            fontSize: "15px",
            fontWeight: "400",
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: "120px",
        },
        [theme.breakpoints.down('xs')]: {
            paddingRight: "50px",
        },
    }
}));


const BestServicesCard = ({ card, image, imageTag, textTag, heading, text }) => {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
            style={card === "left" ? {
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px"
            } : {
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px"
            }}
        >
            <div className={classes.innerCard} >
                <div className={classes.imageCont}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className={classes.imageTagSty} >
                        <h3>{imageTag}</h3>
                    </div>
                </div>
                <div className={classes.detailsCont} >
                    <h5>{textTag}</h5>
                    <h3>{heading}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>

    );
}
export default BestServicesCard;