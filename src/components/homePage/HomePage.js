import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../commonComponents/Top.bar";
import InputHomePage from "./Input.Home.Page";
import Midbar from "./Mid.bar";
import DisCover from "./Discover";
import Facility from "../commonComponents/Facility";

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: "hidden",
        backgroundColor: "#fbfbfb"
    }
}));

const HomePage = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar />
            <InputHomePage />
            <Midbar />
            <DisCover />
            <Facility />
        </div>
    );
};
export default HomePage;