import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../commonComponents/Top.bar";
import Facility from "../commonComponents/Facility";
import DealDetailsBody from "./Deal.Details.Body";

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: "hidden",
        backgroundColor: "#ffffff"
    }
}));

const DealDetails = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar />
            <DealDetailsBody />
            <Facility />
        </div>
    );
};
export default DealDetails;