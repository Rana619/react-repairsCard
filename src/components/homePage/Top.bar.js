import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from "@material-ui/core/styles";
import mainLogo from "../svgs/mainLogo.svg"

const useStyles = makeStyles((theme) => ({
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
        borderBottom: "0.8px solid #aabed4"
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
    }
}));


const TopBar = (props) => {
    const classes = useStyles();

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
                    <p>Home</p>
                    <p>About us</p>
                    <p>Affiliate</p>
                    <p>Help</p>
                </div>
                <div className={classes.rightBar} >
                    <p>Account</p>
                    <p>Login</p>
                    <p>Signup</p>
                    <button className={classes.btnSty} >
                        Book  An Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TopBar;