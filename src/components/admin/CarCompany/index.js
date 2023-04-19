import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const CarCompany = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Car Company
        </div>
    );
};
export default CarCompany;