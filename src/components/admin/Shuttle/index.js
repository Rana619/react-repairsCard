import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const Shuttle = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Shuttle
        </div>
    );
};
export default Shuttle;