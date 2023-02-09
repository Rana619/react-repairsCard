import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./Top.bar";
import InputHomePage from "./Input.Home.Page";


const useStyles = makeStyles((theme) => ({

}));


const HomePage = (props) => {
    const classes = useStyles();

    const { } = props

    return (
        <div className={classes.root}>
            <TopBar />
            <InputHomePage />
        </div>
    );
};
export default HomePage;