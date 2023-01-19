import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        padding: "10px 20px 20px",
        borderRadius: "10px",
    },
    title: {
        fontSize: "24px",
        fontWeight: "450",
        marginBottom: "12px",
    },
    cardsCont: {
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
        }
    },
    progressbar: {
        background: "rgba(255, 255, 255, 0)",
        '& .MuiLinearProgress-bar': {
            backgroundColor: '#F9D61E',
        },
    },
    detailsCont: {
        width: "45%",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
        marginTop: "15px",
        paddingTop: "5px 0px",
        "& div": {
            padding: "4px 10px",
            "& h4": {
                fontSize: "13px",
                fontWeight: "400",
                opacity: "0.75",
            },
            "& h3": {
                fontSize: "13px",
                fontWeight: "400"
            },
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        }
    },
    scoreCont: {
        width: "50%",
        marginTop: "15px",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        }
    },
    barCont: {
        width: "100%",
        marginBottom: "9px",
        "& h3": {
            fontSize: "14px",
            fontWeight: "450",
            marginBottom: "4px"
        }
    },
    totalCont: {
        padding: "7px 15px",
        width: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        "& h2": {
            fontSize: "25px",
        },
        "& h4": {
            fontSize: "15px",
            fontWeight: "400",
        }
    },
    closeSty: {
        fontSize: "16px",
        fontWeight: "450",
        opacity: "0.75",
        margin: "12px 0px"
    },
    showFlex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "5px"
    }
}));


const ContactInfo = (props) => {
    const classes = useStyles();

    const { selectedUser, theme } = props
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")

    useEffect(() => {
        let name = selectedUser?.name || ""

        let nameArr = name.split(" ");

        let len = nameArr[0].length;
        let fLen = name.length
        let val = name.slice(len, fLen)
        setFName(nameArr[0])
        setLName(val)

    }, [selectedUser])

    function numberWithCommas(x) {
        if (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return 0;
        }
    }


    return (
        <div className={classes.root} style={{ backgroundColor: theme?.cardColor, color: theme?.color }} >
            <h3 className={classes.title} >Contact Info</h3>
            <div className={classes.cardsCont} >
                <div className={classes.detailsCont} style={{ backgroundColor: theme?.opacityColor }} >
                    <div style={{ borderBottom: `0.5px solid ${theme?.opacityColorD}` }} >
                        <h4>First Name</h4>
                        <h3>{fName}</h3>
                    </div>
                    <div style={{ borderBottom: `0.5px solid ${theme?.opacityColorD}` }} >
                        <h4>Last Name</h4>
                        <h3>{lName}</h3>
                    </div>
                    <div style={{ borderBottom: `0.5px solid ${theme?.opacityColorD}` }} >
                        <h4>Company</h4>
                        <h3>{selectedUser?.company?.name}</h3>
                    </div>
                    <div style={{ borderBottom: `0.5px solid ${theme?.opacityColorD}` }} >
                        <h4>Phone Number</h4>
                        <h3>{selectedUser?.phone}</h3>
                    </div>
                    <div style={{ border: "none" }} >
                        <h4>Work Email</h4>
                        <h3>{selectedUser?.email}</h3>
                    </div>
                </div>
                <div className={classes.scoreCont} >
                    <div className={classes.barCont} >
                        <div className={classes.showFlex} >
                            <h3>Deal Score</h3>
                            <h3>{selectedUser?.["Deal Score"]}</h3>
                        </div>
                        <LinearProgress variant="determinate" className={classes.progressbar} value={selectedUser?.["Deal Score"]} />
                    </div>
                    <div className={classes.barCont} >
                        <div className={classes.showFlex} >
                            <h3>Sentiment Score</h3>
                            <h3>{selectedUser?.["Sentiment Score"]}</h3>
                        </div>
                        <LinearProgress variant="determinate" className={classes.progressbar} style={{ color: "#F9D61E" }} value={selectedUser?.["Sentiment Score"]} />
                    </div>
                    <div className={classes.barCont} >
                        <div className={classes.showFlex} >
                            <h3>Engagement Score</h3>
                            <h3>{selectedUser?.["Engagement Score"]}</h3>
                        </div>
                        <LinearProgress variant="determinate" className={classes.progressbar} style={{ color: "#F9D61E" }} value={selectedUser?.["Engagement Score"]} />
                    </div>

                    <h2 className={classes.closeSty} >Predicted Close Date: Nov 24, 2022</h2>

                    <div className={classes.totalCont} style={{ border: `1px dashed ${theme?.opacityColorD}` }} >
                        <h2>${numberWithCommas(selectedUser?.totalOneMonthSales)}</h2>
                        <h4>Total Monthly Sales</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ContactInfo;
