import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleActivityCard from "./SingleActivityCard";
import EmailIcon from '@material-ui/icons/Email';
import { BsFillChatDotsFill } from "react-icons/bs";
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        padding: "10px 20px 20px",
        borderRadius: "10px",
    },
    title: {
        fontSize: "22px",
        fontWeight: "450",
        marginBottom: "12px",
    },
    cardsCont: {
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        display: "flex",
        flexWrap: "wrap",
    },
    cardCont: {
        padding: "20px 15px 10px",
        "& p": {
            fontSize: "12px",
            fontWeight: "400",
        }
    },
    namedateCont: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& h3": {
            fontSize: "13px",
            fontWeight: "450"
        },
        "& p": {
            fontSize: "12px",
            opacity: "0.5"
        }
    },
    imgNameCont: {
        display: "flex",
        alignItems: "center",
        padding: "20px 15px 10px"
    },
    namePhCont: {
        width: "calc(100% - 40px)",
        paddingLeft: "10px"
    }
}));


const ContactActivity = (props) => {
    const classes = useStyles();
    const { theme } = props

    return (
        <div className={classes.root} style={{ backgroundColor: theme?.cardColor, color: theme?.color }} >
            <h3 className={classes.title} >Contact Activity</h3>
            <div className={classes.cardsCont} >
                <SingleActivityCard
                    theme={theme}
                    icon={<EmailIcon style={{ color: "#F04F29", fontSize: "16px" }} />}
                    content={<div className={classes.cardCont} >
                        <div className={classes.namedateCont} >
                            <h3>Guy Hawkins</h3>
                            <p>05.12.2022</p>
                        </div>
                        <p style={{ opacity: "0.75" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at ut mauris amet nec. Nunc ut neque venenatis tincidunt erat aliquet.</p>
                    </div>}
                />
                <SingleActivityCard
                    theme={theme}
                    icon={<BsFillChatDotsFill style={{ color: "#F04F29", fontSize: "16px" }} />}
                    content={<div className={classes.cardCont} >
                        <div className={classes.namedateCont} >
                            <h3>Jacob Jones</h3>
                            <p>05.12.2022</p>
                        </div>
                        <p style={{ opacity: "0.75" }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non at ut mauris amet nec. Nunc ut neque venenatis tincidunt erat aliquet.</p>
                    </div>}
                />
                <SingleActivityCard
                    theme={theme}
                    icon={<CallIcon style={{ color: "#F04F29", fontSize: "16px" }} />}
                    content={<div className={classes.imgNameCont} >
                        <Avatar style={{ width: "28px", height: "28px" }} src={"https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} />
                        <div className={classes.namePhCont} >
                            <div className={classes.namedateCont} >
                                <h3>Jacob Jones</h3>
                                <p>05.12.2022</p>
                            </div>
                            <p style={{ fontSize: "12px", opacity: "0.75" }} >011 222 33 44</p>
                        </div>
                    </div>}
                />

            </div>
        </div>
    );
};
export default ContactActivity;
