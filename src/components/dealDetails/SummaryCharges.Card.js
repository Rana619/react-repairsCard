import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        borderRadius: "10px",
        marginTop: "30px"
    },
    text1Cont: {
        padding: "25px",
        fontSize: "22px",
        fontWeight: "700",
        borderBottom: "1px solid gray",
        [theme.breakpoints.down('xs')]: {
            padding: "15px",
        }
    },
    text2Cont: {
        padding: "25px",
        borderBottom: "1px solid gray",
        color: "#001F3F",
        fontWeight: "450",
        "& div": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px"
        },
        [theme.breakpoints.down('xs')]: {
            padding: "15px",
        }
    },
    text4Cont: {
        padding: "25px",
        "& div": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px"
        },
        [theme.breakpoints.down('xs')]: {
            padding: "15px",
        }
    },
    text3Cont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 25px",
        borderBottom: "1px solid gray",
        color: "#00AA00",
        [theme.breakpoints.down('xs')]: {
            padding: "15px",
        }
    },
    lineThroughText: {
        color: "#E50000",
        textDecoration: "line-through"
    }
}));

const SummaryChargesCard = (props) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.text1Cont} >
                Summary of Charges
            </div>

            <div className={classes.text2Cont} >
                <div>
                    <p>1 week x ₹25012.60</p>
                    <p>₹25012.60</p>
                </div>
                <div style={{ marginBottom: "0px" }} >
                    <p>Taxes and fees</p>
                    <p>₹6627.50</p>
                </div>
            </div>

            <div className={classes.text3Cont} >
                <h3>Due Now</h3>
                <h3>₹0</h3>
            </div>

            <div className={classes.text3Cont} style={{ color: "#001F3F", }} >
                <p>Due at Pick-up</p>
                <p>₹31640.10</p>
            </div>

            <div className={classes.text4Cont} >
                <div>
                    <div></div>
                    <p className={classes.lineThroughText} >was ₹34911.24</p>
                </div>
                <div>
                    <h3>Total Cost</h3>
                    <h3>₹31640.10</h3>
                </div>
            </div>
        </Paper>
    );
};
export default SummaryChargesCard;