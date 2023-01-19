import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import CallIcon from '@material-ui/icons/Call';
import { BsFillChatDotsFill, BsFillCalendarEventFill } from "react-icons/bs";
import EmailIcon from '@material-ui/icons/Email';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "200px",
        padding: "0px 15px",
        display: "flex",
        borderRadius: "10px",
        flexDirection: "column",
        justifyContent: "space-around",
        marginTop: "20px"
    },
    topBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& h3": {
            fontWeight: "450"
        },
        "& div": {
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            padding: "4px",
            borderRadius: "12px",
            "& div": {
                width: "7px",
                height: "6px",
                marginLeft: "7px",
                borderRadius: '50%',
                backgroundColor: "#E0BC3B"
            }
        }
    },
    avatarCont: {
        display: "flex",
        alignItems: "center",
    },
    btnCont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& div": {
            padding: "4px 8px"
        }
    },
    nameCont: {
        paddingLeft: "10px",
        "& h3": {
            fontWeight: "450",
            marginBottom: "5px"
        },
        "& h5": {
            fontSize: "10px",
            fontWeight: "400"
        }
    }
}));


const ProfileCard = (props) => {
    const classes = useStyles();

    const { selectedUser, theme } = props

    return (
        <div className={classes.root} style={{ backgroundColor: theme?.cardColor, color: theme?.color }} >
            <div className={classes.topBar} >
                <h3>Profile</h3>
                <div style={{ backgroundColor: theme?.opacityColor }} >
                    Lead <div></div>
                </div>
            </div>
            <div className={classes.avatarCont} >
                <Avatar src={selectedUser?.url} style={{ width: "65px", height: "65px" }} />
                <div className={classes.nameCont} >
                    <h3>{selectedUser?.name}</h3>
                    <h5>{selectedUser?.email}</h5>
                </div>
            </div>

            <div className={classes.btnCont}>
                <div style={{ borderRight: `1px solid ${theme?.opacityColorD}`, backgroundColor: theme?.opacityColor, paddingLeft: "12px", borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px" }} >
                    <CallIcon style={{ color: theme?.color, fontSize: "17px" }} />
                </div>
                <div style={{ borderRight: `1px solid ${theme?.opacityColorD}`, backgroundColor: theme?.opacityColor }} >
                    <BsFillChatDotsFill style={{ color: theme?.color, fontSize: "16px" }} />
                </div>
                <div style={{ borderRight: `1px solid ${theme?.opacityColorD}`, backgroundColor: theme?.opacityColor }} >
                    <EmailIcon style={{ color: theme?.color, fontSize: "17px" }} />
                </div>
                <div style={{ borderRight: `1px solid ${theme?.opacityColorD}`, backgroundColor: theme?.opacityColor }} >
                    <LocalOfferIcon style={{ color: theme?.color, fontSize: "17px" }} />
                </div>
                <div style={{ borderRight: `1px solid ${theme?.opacityColorD}`, backgroundColor: theme?.opacityColor }} >
                    <BsFillCalendarEventFill style={{ color: theme?.color, fontSize: "15px" }} />
                </div>
                <div style={{ borderRight: `1px solid ${theme?.opacityColorD}`, backgroundColor: theme?.opacityColor }} >
                    <GroupAddIcon style={{ color: theme?.color, fontSize: "17px" }} />
                </div>
                <div style={{ backgroundColor: theme?.opacityColor, paddingLeft: "12px", borderTopRightRadius: "12px", borderBottomRightRadius: "12px" }} >
                    <MoreHorizIcon style={{ color: theme?.color, fontSize: "17px" }} />
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
