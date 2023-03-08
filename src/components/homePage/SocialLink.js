import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 
}));


const SocialLink = (props) => {
    const classes = useStyles();
    const {
        title,list
    } = props

    return (
        <div className={classes.root}>
            <diV className={classes.SocialLink}>
               <h3>{title}</h3>
               {list.map((item, i) => (
                       <div>{item}</div>
                    ))}
            </diV>
        </div>
    );
}
export default SocialLink;