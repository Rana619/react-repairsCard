import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { SlNote } from "react-icons/sl";
import LaunchIcon from '@material-ui/icons/Launch';
import { FaFilter } from "react-icons/fa";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "calc(100% - 232px)",
        padding: "0px 15px",
        borderRadius: "10px",
        marginTop: "20px",
        [theme.breakpoints.down('sm')]: {
            height: "calc(100vh - 300px)",
        }
    },
    userCont: {
        display: "flex",
        padding: "10px 0px",
        cursor: "pointer"
    },
    topbar: {
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& div": {
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }
    },
    allUserCont: {
        height: "calc(100% - 75px)",
        width: "100%",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        scrollbarWidth: "none",
    },
    infoCont: {
        paddingLeft: "10px",
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


const ContactCont = (props) => {
    const classes = useStyles();

    const { allUser, theme, setSelectedUser } = props

    return (
        <div className={classes.root} style={{ backgroundColor: theme?.cardColor, color: theme?.color }} >
            <div className={classes.topbar} >
                <h3>Pepole</h3>
                <div>
                    <SlNote style={{ opacity: "0.4" }} />
                    <LaunchIcon style={{ fontSize: "19px", opacity: "0.4" }} />
                    <FaFilter style={{ fontSize: "15px", opacity: "0.4" }} />
                    <MoreVertIcon style={{ fontSize: "19px", opacity: "0.4" }} />
                </div>
            </div>
            <div className={classes.allUserCont} >
                {allUser.map((user) => (<div className={classes.userCont} onClick={() => { setSelectedUser(user) }} >
                    <Avatar src={user.url} />
                    <div className={classes.infoCont} >
                        <h3>{user?.name}</h3>
                        <h5>{user?.email}</h5>
                    </div>
                </div>))}
            </div>
        </div>
    );
};
export default ContactCont;
