import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const Price = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Price
        </div>
    );
};
export default Price;