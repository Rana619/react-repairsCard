import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CheckIcon from '@material-ui/icons/Check';
import PersonIcon from '@material-ui/icons/Person';
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "25px",
        width: "100%",
        borderRadius: "10px",
        [theme.breakpoints.down('xs')]: {
            padding: "15px",
        }
    },
    topCont: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingBottom: "20px",
        marginBottom: "20px",
        borderRadius: "1px solid gray",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            justifyContent: "center",
        }
    },
    imageCont: {
        width: "34%",
        height: "130px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        [theme.breakpoints.down('md')]: {
            width: "28%",
            height: "120px",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        }
    },
    nameCont: {
        width: "30%",
        padding: "10px 20px",
        [theme.breakpoints.down('md')]: {
            width: "33%",
            padding: "10px",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        }
    },
    feturesCont: {
        width: "33%",
        padding: "10px 20px",
        [theme.breakpoints.down('md')]: {
            width: "36%",
            padding: "10px",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
        }
    },
    bottomCont: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: "#E7EDFF",
        borderRadius: "15px",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            justifyContent: "center",
        }
    },
    dateCont: {
        width: "43%",
        padding: "20px 30px",
        "& p": {
            fontSize: "14px",
            color: "gray",
            marginBottom: "5px"
        },
        "& h3": {
            marginBottom: "5px"
        },
        "& h4": {
            fontSize: "14px",
            fontWeight: "450"
        },
        [theme.breakpoints.down('md')]: {
            width: "48%",
            padding: "20px",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            marginTop: "10px"
        }
    },
    fCont: {
        display: "flex",
        alignItems: "center",
        marginTop: "30px",
        "& div": {
            display: "flex",
            alignItems: "center",
            marginRight: "20px"
        },
        "& p": {
            fontSize: "15px",
            fontWeight: "450",
            margin: "0px",
            marginLeft: "6px"
        }
    },
    featureCont: {
        display: "flex",
        alignItems: "center",
        marginTop: "5px",
        "& p": {
            margin: "0px",
            marginLeft: "10px",
            fontSize: "14px",
            fontWeight: "400"
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: "15px"
        }
    },
}));

const DetailsCard = ({ cardData }) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.topCont} >
                <div className={classes.imageCont} style={{ backgroundImage: `url(${cardData?.photo})` }} >
                </div>
                <div className={classes.nameCont} >
                    <h3>{cardData?.title}</h3>
                    <p>{cardData?.unField2}</p>
                    <div className={classes.fCont} >
                        <div>
                            <PersonIcon />
                            <p>{cardData?.people}</p>
                        </div>
                        <div>
                            <LocalMallIcon />
                            <p>{cardData?.bag}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.feturesCont} >
                    <div className={classes.featureCont} >
                        <CheckIcon style={{ color: "#00AA00", fontSize: "20px" }} />
                        <p>Free Cancellation</p>
                    </div>
                    <div className={classes.featureCont} >
                        <CheckIcon style={{ color: "#00AA00", fontSize: "20px" }} />
                        <p>Pay at Pick-up</p>
                    </div>
                    <div className={classes.featureCont} >
                        <CheckIcon style={{ color: "#00AA00", fontSize: "20px" }} />
                        <p>Unlimited mileage</p>
                    </div>
                    <div className={classes.featureCont} >
                        <CheckIcon style={{ color: "#00AA00", fontSize: "20px" }} />
                        <p>Online Check in</p>
                    </div>
                </div>
            </div>
            <div className={classes.bottomCont} >
                <div className={classes.dateCont} >
                    <p>PICK-UP</p>
                    <h3>Tue, Jan 10, 2023 12:00 PM</h3>
                    <h4>Vero Beach Regional Airport (VRB) Hours of Operation</h4>
                </div>
                <div className={classes.dateCont} >
                    <p>PICK-UP</p>
                    <h3>Tue, Jan 10, 2023 12:00 PM</h3>
                    <h4>Vero Beach Regional Airport (VRB) Hours of Operation</h4>
                </div>
            </div>
        </Paper>
    );
};
export default DetailsCard;