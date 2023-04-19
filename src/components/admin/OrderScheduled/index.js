import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const OrderScheduled = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            OrderScheduled
        </div>
    );
};
export default OrderScheduled;