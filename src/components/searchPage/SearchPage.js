import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "../commonComponents/Top.bar";
import Facility from "../commonComponents/Facility";
import SearchBody from "./SearchBody";


const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: "hidden",
        backgroundColor: "#ffffff"
    }
}));

const SearchPage = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar />
            <SearchBody />
            <Facility />
        </div>
    );
};
export default SearchPage;