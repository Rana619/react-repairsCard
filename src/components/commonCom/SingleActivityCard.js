import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "10px",
        position: "relative",
        width: "45%",
        marginTop: "25px",
        marginRight: "18px",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginRight: "0px",
        }
    },
    iconCont: {
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        position: "absolute",
        top: "-15px",
        left: "15px"
    }
}));


const SingleActivityCard = (props) => {
    const classes = useStyles();

    const { theme, icon, content } = props


    return (
        <div className={classes.root} style={{ backgroundColor: theme?.opacityColor, color: theme?.color }} >
            <div className={classes.iconCont} style={{ backgroundColor: theme?.opacityColorD }} >
                {icon}
            </div>
            {content}
        </div>
    );
};
export default SingleActivityCard;
