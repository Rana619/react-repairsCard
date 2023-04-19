import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const OrderCompleted = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            OrderCompleted
        </div>
    );
};
export default OrderCompleted;