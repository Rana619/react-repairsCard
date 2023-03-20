import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& h3": {
            textAlign: "center",
            color: "#001F3F",
            margin: "10px 0px"
        },
        "& h4": {
            textAlign: "center",
            color: "#001F3F",
            fontSize: "14px",
            fontWeight: "450"
        },
        [theme.breakpoints.down('md')]: {
            width: "25%",
            padding: "0px 20px 30px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "50%",
            padding: "0px 70px 50px"
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    }
}));


const Importance = (props) => {
    const classes = useStyles();
    const {
        icon, title, desc
    } = props

    return (
        <div className={classes.root}>
            {icon}
            <h3>{title}</h3>
            <h4>{desc}</h4>
        </div>
    );
}
export default Importance;