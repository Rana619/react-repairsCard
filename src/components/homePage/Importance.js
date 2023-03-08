import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px 90px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
        "& h3": {
            textAlign: "center",
            color :"#001F3F",
            fontStyle :"poppins",
        },

        "& h4": {
            textAlign: "center",
            color :"#001F3F",
            fontStyle :"poppins",
            fontSize : "15px"
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
