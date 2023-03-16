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
            color :"#001F3F",
            margin: "10px 0px"
        },
        "& h4": {
            textAlign: "center",
            color :"#001F3F",
            fontSize : "14px",
            fontWeight: "450"
    }
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
