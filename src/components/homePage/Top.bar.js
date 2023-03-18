import React, { useState } from "react";
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, useMediaQuery, ButtonBase } from "@material-ui/core";
import mainLogo from "../svgs/mainLogo.svg"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        zIndex: "9"
    },
    topTBar: {
        backgroundColor: '#2A66FF',
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "10px 0px",
        justifyContent: "center",
        "& h3": {
            display: "flex",
            fontSize: "13px",
            fontWeight: "450",
            alignItems: "center",
            margin: "0px 15px"
        },
        [theme.breakpoints.down('xs')]: {
            "& h3": {
                display: "none"
            },
        }
    },
    icontSty: {
        fontSize: "17px",
        marginBottom: "-5px",
        marginRight: "7px"
    },
    topMBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottom: "0.8px solid #aabed4",
        backgroundColor: "white",
        padding: "10px 0px",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-between",
            padding: "10px 20px"
        }
    },
    leftBar: {
        display: "flex",
        alignItems: "center",
        color: "#001F3F",
        "& p": {
            padding: "2px 10px",
            marginRight: "20px",
            fontSize: "15px",
            fontWeight: "500",
        },
        "& h3": {
            marginLeft: "3px",
            marginRight: "25px"
        }
    },
    rightBar: {
        display: "flex",
        alignItems: "center",
        "& p": {
            padding: "2px 10px",
            marginRight: "20px",
            fontSize: "15px",
            fontWeight: "500",
            color: "#2A65FD"
        }
    },
    logoSty: {
        width: "30px",
        height: "auto"
    },
    btnSty: {
        backgroundColor: "#2A66FF",
        color: "white",
        fontSize: "15px",
        padding: "8px 13px",
        borderRadius: "5px",
        border: "none"
    },
    drawerPaper: {
        width: "50vw",
        height: "100vh",
        paddingTop: "20px",
        display: "flex",
        alignItems: "center",
        color: "#2E73F8",
        flexDirection: "column",
    },
    logoInDrawer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoInDrawerAndClose: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%"
    },
    navDrawerBtn: {
        padding: "10px",
        fontSize: "17px",
        marginRight: "20px",
        color: "#2A65FD",
        textDecoration: "none",
        [theme.breakpoints.down("sm")]: {
            margin: "5px 0px",
        },
    },
}));


const TopBar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [openNav, setOpenNav] = useState()

    const handleDrawerToggle = () => {
        setOpenNav(!openNav)
    }

    return (
        <div className={classes.root}>
            <div className={classes.topTBar} >
                <h3><EmailIcon className={classes.icontSty} /> info@webmail.com</h3>
                <h3><RoomIcon className={classes.icontSty} /> 15/A, Nest Tower, NYC</h3>
                <h3><PhoneIcon className={classes.icontSty} /> GET SUPPORT  -  123-456-789-10</h3>
            </div>
            <div className={classes.topMBar} >
                <div className={classes.leftBar} >
                    <img className={classes.logoSty} src={mainLogo} alt="logo" />
                    <h3>RepairsCard</h3>
                    {isMobile ? null : (<>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Affiliate</p>
                        <p>Help</p>
                    </>)}
                </div>
                <div className={classes.rightBar} >
                    {isMobile ? (
                        <MenuIcon
                            style={{ color: "#2A66FF", cursor: "pointer" }}
                            onClick={() => { setOpenNav(true) }}
                        />
                    ) : (<>
                        <p>Account</p>
                        <p>Login</p>
                        <p>Signup</p>
                        <button className={classes.btnSty} >
                            Book  An Appointment
                        </button>
                    </>)}
                </div>
            </div>

            <Drawer
                variant="temporary"
                anchor={"right"}
                open={openNav}
                onClose={handleDrawerToggle}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}
            >
                <div className={classes.logoInDrawerAndClose} style={{ marginBottom: "20px" }} >
                    <div className={classes.logoInDrawer} >
                    </div>
                    <CloseIcon
                        onClick={() => { setOpenNav(false) }}
                        style={{ fontSize: "25px", cursor: "pointer" }}
                    />
                </div>
                <ButtonBase className={classes.navDrawerBtn}>
                    Home
                </ButtonBase>
                <ButtonBase className={classes.navDrawerBtn}>
                    About us
                </ButtonBase>
                <ButtonBase className={classes.navDrawerBtn}>
                    Affiliate
                </ButtonBase>
                <ButtonBase className={classes.navDrawerBtn}>
                    Help
                </ButtonBase>
                <ButtonBase className={classes.navDrawerBtn}>
                    Account
                </ButtonBase>
                <ButtonBase className={classes.navDrawerBtn}>
                    Login
                </ButtonBase>
                <ButtonBase className={classes.navDrawerBtn}>
                    Signup
                </ButtonBase>
                <button className={classes.btnSty} style={{ marginTop: "20px" }} >
                    Book  An Appointment
                </button>
            </Drawer>
        </div>
    );
};
export default TopBar;