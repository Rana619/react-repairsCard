import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CheckIcon from '@material-ui/icons/Check';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "10px",
        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        width: "100%",
        marginTop: "25px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column"
        }
    },
    leftPart: {
        width: "28%",
        paddingRight: "20px",
        "& img": {
            width: "100%",
            height: "auto",
            marginBottom: "15px"
        },
        "& h3": {
            fontSize: "24px",
            fontWeight: "650"
        },
        "& p": {
            fontSize: "20px",
            fontWeight: "400",
            marginBottom: "20px"
        },
        "& div": {
            width: "110px",
            fontSize: "16px",
            fontWeight: "550",
            display: "flex",
            borderRadius: "15px",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px 0px",
            backgroundColor: "#c8d5f5",
            color: "#2A66FF"
        },
        [theme.breakpoints.down("md")]: {
            paddingRight: "5px",
            "& h3": {
                fontSize: "22px"
            },
            "& p": {
                fontSize: "18px"
            },
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    },
    midPart: {
        width: "44%",
        padding: "0px 15px",
        borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
        borderRight: "1px solid rgba(0, 0, 0, 0.2)",
        "& h3": {
            fontSize: "20px",
            fontWeight: "550"
        },
        "& p": {
            fontSize: "16px",
            fontWeight: "450",
            marginTop: "7px"
        },
        [theme.breakpoints.down("md")]: {
            padding: "0px 5px",
            "& h3": {
                fontSize: "17px"
            },
            "& p": {
                fontSize: "14px"
            },
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            border: "none",
            margin: "15px 0px"
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
    aCont: {
        backgroundColor: "black",
        borderRadius: "50%",
        fontSize: "13px",
        padding: "0px 6px 3px",
        color: "white"
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
        }
    },
    rightPart: {
        width: "28%",
        paddingLeft: "20px",
        "& h3": {
            fontSize: "18px",
            fontWeight: "500",
            color: "#00AA00",
            marginBottom: "12px"
        },
        [theme.breakpoints.down("md")]: {
            paddingLeft: "5px",
            "& h3": {
                fontSize: "14px",
            },
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }
    },
    singLockCont: {
        width: "100%",
        padding: "7px 11px",
        borderRadius: "10px",
        backgroundColor: "#2A65FA",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "15px",
        "& p": {
            fontSize: "16px",
            fontWeight: "700"
        },
        [theme.breakpoints.down("md")]: {
            padding: "7px",
            "& p": {
                fontSize: "11px",
            },
        },
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            "& p": {
                fontSize: "14px",
            },
        },
    },
    saleCont: {
        padding: "0px 0px 2px",
        backgroundColor: "#FF591F",
        color: "white",
        textAlign: "center",
        borderRadius: "13px",
        width: "55px",
        fontWeight: "600",
        fontSize: "18px",
        marginBottom: "30px"
    },
    realPrice: {
        fontSize: "21px",
        fontWeight: "450",
        marginBottom: "4px",
        [theme.breakpoints.down("md")]: {
            fontSize: "19px",
        }
    },
    price: {
        fontSize: "30px",
        color: "#00AA00",
        [theme.breakpoints.down("md")]: {
            fontSize: "23px",
        }
    },
    payBtn: {
        width: "100%",
        textAlign: "center",
        fontSize: "23px",
        fontWeight: "600",
        borderRadius: "15px",
        backgroundColor: "#00AA00;",
        border: "none",
        color: "white",
        marginTop: "15px",
        padding: "5px 0px"
    }
}));

const Card = ({ cardData }) => {
    const classes = useStyles();



    return (
        <div className={classes.root} >
            <div className={classes.leftPart} >
                <img src={cardData?.photo} />

                <h3>{cardData?.title}</h3>
                <p>{cardData?.unField2}</p>

                {cardData?.isFeatured && (
                    <div>FEATURED</div>
                )}
            </div>
            <div className={classes.midPart} >
                <h3>{cardData?.name}</h3>
                <p>{cardData?.name}</p>

                <div className={classes.fCont} >
                    <div>
                        <PersonIcon />
                        <p>{cardData?.people}</p>
                    </div>
                    <div>
                        <LocalMallIcon />
                        <p>{cardData?.bag}</p>
                    </div>
                    <div>
                        <span className={classes.aCont} >A</span>
                        <p>{cardData?.unField1}</p>
                    </div>
                </div>

                <div style={{ marginTop: "55px" }} >
                    {cardData?.features.map((feature) => (<div className={classes.featureCont} >
                        <CheckIcon style={{ color: "#00AA00", fontSize: "20px" }} />
                        <p>{feature}</p>
                    </div>))}
                </div>

            </div>
            <div className={classes.rightPart} >
                <div className={classes.singLockCont} >
                    <LockIcon style={{ marginRight: "10px" }} />
                    <p>Sign In To Unlock VIP Savings</p>
                </div>

                <h3>FREE CANCELLATION</h3>
                <div className={classes.saleCont} >Sale</div>

                <div className={classes.realPrice} >
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: "500",
                            marginRight: "5px"
                        }}
                    >$</span>
                    <span style={{ textDecoration: "line-through" }} ><b>{cardData?.realPrice}</b> Total</span>
                </div>

                <div className={classes.price} >
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: "500",
                            position: "relative",
                            top: "-10px",
                            marginRight: "3px"
                        }}
                    >$</span>
                    <b>{cardData?.price}</b>
                    Total
                </div>

                <button className={classes.payBtn} >
                    Pay Later
                </button>
            </div>
        </div>
    );
};
export default Card;