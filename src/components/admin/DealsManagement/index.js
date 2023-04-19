import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const DealsManagement = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            DealsManagement
        </div>
    );
};
export default DealsManagement;