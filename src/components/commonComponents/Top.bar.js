import React, { useState } from "react";
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, useMediaQuery, ButtonBase, Button } from "@material-ui/core";
import mainLogo from "../svgs/mainLogo.svg"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import { useHistory } from "react-router-dom";
import AuthDialog from "../auth/Auth.Dialog";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

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
        justifyContent: "space-between",
        borderBottom: "0.8px solid #aabed4",
        backgroundColor: "white",
        padding: "10px 100px",
        [theme.breakpoints.down("md")]: {
            padding: "10px 40px",
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-between",
            padding: "10px"
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
            cursor: "pointer",
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
            cursor: "pointer",
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
    collapseCont: {
        position: "absolute",
        top: "40px",
        width: "170px",
        backgroundColor: "white",
        left: "0px",
    },
    subCont: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "10px 0px 0px",
        marginTop: "-6px",
        "& .MuiButton-root": {
            width: "100%",
            paddingTop: "4px",
            paddingBottom: "4px",
            marginBottom: "6px",
            paddingLeft: "15px"
        },
        "& .MuiButton-label": {
            color: "gray",
            fontSize: "15px",
            textTransform: "capitalize",
            display: "flex",
            justifyContent: "flex-start"
        }
    },
}));


const TopBar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const history = useHistory();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { user } = useSelector((state) => state.auth);

    const [openNav, setOpenNav] = useState()
    const [openDialog, setOpenDialog] = useState(false)
    const [signPage, setSignPage] = useState("signin")
    const [isSignin, setIsSignin] = useState(false)
    const [openSubCont, setOpenSubCont] = useState(false)

    const handleClose = () => {
        setOpenDialog(false)
    }

    const handleDrawerToggle = () => {
        setOpenNav(!openNav)
    }

    const logout = () => {
        firebase.auth().signOut()
            .then(function () {
                dispatch({
                    type: "REMOVE_AUTH_USER",
                });

                localStorage.removeItem("token");
            })
            .catch(function (error) {
                console.log(error);
            });
    };





    return (
        <div className={classes.root}>
            <div className={classes.topTBar} >
                <h3><EmailIcon className={classes.icontSty} /> info@webmail.com</h3>
                <h3><RoomIcon className={classes.icontSty} /> 15/A, Nest Tower, NYC</h3>
                <h3><PhoneIcon className={classes.icontSty} /> GET SUPPORT  -  123-456-789-10</h3>
            </div>
            <div className={classes.topMBar} >
                <div className={classes.leftBar} >
                    <div
                        onClick={() => { history("/") }}
                        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                    >
                        <img className={classes.logoSty} src={mainLogo} alt="logo" />
                        <h3>RepairsCard</h3>
                    </div>

                    {isMobile ? null : (<>
                        <p onClick={() => { history("/") }} >Home</p>
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
                        {user?._id ? (
                            <div style={{ position: 'relative' }} >
                                <p onClick={() => { setOpenSubCont(!openSubCont) }} >
                                    {user?.displayName}
                                    {openSubCont ? (
                                        <KeyboardArrowUpIcon style={{ marginLeft: "5px", marginBottom: "-7px" }} />
                                    ) : (
                                        <KeyboardArrowDownIcon style={{ marginLeft: "5px", marginBottom: "-7px" }} />
                                    )}
                                </p>
                                <div className={classes.collapseCont} >
                                    <Collapse in={openSubCont} collapsedSize={0}>
                                        <div className={classes.subCont} >
                                            <Button
                                                onClick={() => { setOpenSubCont(false) }}
                                            >Account</Button>
                                            <Button
                                                onClick={() => { setOpenSubCont(false) }}
                                            >Orders</Button>
                                            <Button
                                                onClick={() => {
                                                    setOpenSubCont(false)
                                                    logout()
                                                }}
                                            >Log Out</Button>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        ) : (<>
                            <p onClick={() => {
                                setIsSignin(true)
                                setOpenDialog(true)
                            }} >Login</p>
                            <p onClick={() => {
                                setIsSignin(false)
                                setOpenDialog(true)
                            }} >Signup</p>
                        </>)}
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
                <ButtonBase
                    className={classes.navDrawerBtn}
                    onClick={() => {
                        setIsSignin(true)
                        setOpenDialog(true)
                    }}
                >
                    Login
                </ButtonBase>
                <ButtonBase
                    className={classes.navDrawerBtn}
                    onClick={() => {
                        setIsSignin(false)
                        setOpenDialog(true)
                    }}
                >
                    Signup
                </ButtonBase>
                <button className={classes.btnSty} style={{ marginTop: "20px" }} >
                    Book  An Appointment
                </button>
            </Drawer>

            <AuthDialog
                openDialog={openDialog}
                handleClose={handleClose}
                isSignin={isSignin}
                setIsSignin={setIsSignin}
            />
        </div>
    );
};
export default TopBar;