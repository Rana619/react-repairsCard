import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const OrderReceived = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            OrderReceived
        </div>
    );
};
export default OrderReceived;