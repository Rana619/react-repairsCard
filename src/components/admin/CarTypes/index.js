import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const CarTypes = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            CarTypes
        </div>
    );
};
export default CarTypes;