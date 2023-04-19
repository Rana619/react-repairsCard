import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { IconButton, useMediaQuery } from '@material-ui/core';
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();

    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div className={classes.root} >
            dashboard
        </div>
    );
}
