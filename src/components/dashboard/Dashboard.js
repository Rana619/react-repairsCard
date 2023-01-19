import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../commonCom/sideBar";
import TopBar from "../commonCom/TopBar";
import { contacts } from "../../local.data"
import ProfileCard from "../commonCom/ProfileCard";
import ContactCont from "../commonCom/ContactCont";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ContactInfo from "../commonCom/ContactInfo";
import ContactActivity from "../commonCom/ContactActivity";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
    },
    sideBar: {
        width: "300px",
        height: "100vh"
    },
    contBody: {
        width: "calc(100% - 300px)",
        height: "100vh",
        overflowY: "auto"
    },
    mainCont: {
        padding: "20px",
        [theme.breakpoints.down('sm')]: {
            padding: "10px",
        }
    },
    cardsCont: {
        width: "100%",
        height: "calc(100vh - 35px)",
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        }
    },
    leftSide: {
        width: "250px",
        [theme.breakpoints.down('sm')]: {
            width: "calc(100% - 25px)",
        }
    },
    rightSide: {
        width: "calc(100% - 300px)",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    rightTop: {
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        borderRadius: "10px",
    },
    moneyCont: {
        height: "30px",
        width: "32px",
        paddingTop: "4px",
        paddingLeft: "1px",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        borderRadius: "50%",
    },
    textCont: {
        marginLeft: "10px",
        "& h3": {
            fontSize: "16px",
            fontWeight: "450",
            marginBottom: "2px"
        },
        "& h5": {
            fontSize: "10px",
            fontWeight: "400",
            opacity: "0.75"
        }
    }
}));


const Dashboard = (props) => {
    const classes = useStyles();
    const myTheme = useTheme()
    const [theme, setTheme] = useState({
        cardColor: "#152436",
        bgColor: "#000000",
        color: "#FFFFFF",
        opacityColor: "rgba(255, 255, 255, 0.1)",
        opacityColorD: "rgba(255, 255, 255, 0.3)",
    })
    const [colapseSideBar, setColapseSideBar] = useState()
    const [allUser, setAllUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({})

    const isSmall = useMediaQuery(myTheme.breakpoints.down("sm"));

    useEffect(() => {
        setAllUsers(contacts)
        setSelectedUser(contacts[0])
    }, [contacts])

    function numberWithCommas(x) {
        if (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return 0;
        }
    }

    useEffect(() => {
        if (isSmall) {
            setColapseSideBar(true)
        } else {
            setColapseSideBar(false)
        }
    }, [isSmall])


    return (
        <div className={classes.root}>
            <div
                className={classes.sideBar}
                style={colapseSideBar ? { width: "65px", } : { width: "300px", }}
            >
                <SideBar
                    theme={theme}
                    colapseSideBar={colapseSideBar}
                    setColapseSideBar={setColapseSideBar}
                    setTheme={setTheme}
                />
            </div>
            <div
                className={classes.contBody}
                style={isSmall ?
                    {
                        width: "calc(100% - 65px)",
                        backgroundColor: theme?.bgColor,
                        color: theme?.color
                    } :
                    colapseSideBar ?
                        {
                            width: "calc(100% - 65px)",
                            backgroundColor: theme?.bgColor,
                            color: theme?.color
                        }
                        :
                        {
                            width: "calc(100% - 300px)",
                            backgroundColor: theme?.bgColor,
                            color: theme?.color
                        }}
            >
                <div className={classes.mainCont} >
                    <TopBar theme={theme} />
                    <div className={classes.cardsCont} >
                        <div className={classes.leftSide} >
                            <ProfileCard selectedUser={selectedUser} theme={theme} />
                            <ContactCont allUser={allUser} theme={theme} setSelectedUser={setSelectedUser} />
                        </div>
                        <div className={classes.rightSide} >
                            <div className={classes.rightTop} style={{ backgroundColor: theme?.cardColor, color: theme?.color }} >
                                <div className={classes.moneyCont} style={{ backgroundColor: theme?.opacityColor }} ><AttachMoneyIcon style={{ color: "#F04F29" }} /></div>
                                <div className={classes.textCont} >
                                    <h3>Last Purchase: ${numberWithCommas(selectedUser?.lastPurchase)} | Center Table on 25.11.2022</h3>
                                    <h5>Total purchases in the last 30 days: ${numberWithCommas(selectedUser?.totalOneMonthPurchase)}</h5>
                                </div>
                            </div>

                            <ContactInfo selectedUser={selectedUser} theme={theme} />
                            <ContactActivity theme={theme} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
