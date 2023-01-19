import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rightSide: {
        display: "flex",
        alignItems: "center",
    },
    notiCont: {
        padding: "5px 7px",
        borderRadius: "5px",
        marginLeft: "10px"
    },
    avatarSty: {
        borderRadius: "5px",
        width: "35px",
        height: "35px",
        marginLeft: "10px"
    },
    leftSide: {
        "& h4": {
            fontSize: "10px",
            fontWeight: "400"
        },
        "& h3": {
            fontSize: "18px",
            fontWeight: "500"
        }
    }
}));


const TopBar = (props) => {
    const classes = useStyles();
    const myTheme = useTheme()
    const { theme } = props

    const isSmall = useMediaQuery(myTheme.breakpoints.down("sm"));

    return (
        <>
            <div className={classes.root} >
                <div className={classes.leftSide} >
                    <h4>Marketing CRM</h4>
                    <h3>CRM</h3>
                </div>
                <div className={classes.rightSide} >
                    {isSmall ? null : (
                        <FormControl size="small" style={{ width: "200px", backgroundColor: theme?.cardColor, borderRadius: "10px" }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"><SearchIcon style={{ color: theme?.color }} /></InputAdornment>}
                                labelWidth={0}
                                inputProps={{
                                    style: {
                                        color: theme?.color
                                    }
                                }}
                                placeholder={"Search"}
                            />
                        </FormControl>
                    )}
                    <div
                        className={classes.notiCont}
                        style={{ backgroundColor: theme?.cardColor, color: theme?.color }}
                    ><NotificationsIcon /></div>
                    <Avatar
                        className={classes.avatarSty}
                        variant="square"
                        src={"https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=594&q=80"}
                    ></Avatar>
                </div>
            </div>
            {isSmall ? (
                <FormControl size="small" style={{ width: "100%", marginTop: "15px", backgroundColor: theme?.cardColor, borderRadius: "10px" }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start"><SearchIcon style={{ color: theme?.color }} /></InputAdornment>}
                        labelWidth={0}
                        inputProps={{
                            style: {
                                color: theme?.color
                            }
                        }}
                        placeholder={"Search"}
                    />
                </FormControl>
            ) : null}
        </>
    );
};

export default TopBar;
