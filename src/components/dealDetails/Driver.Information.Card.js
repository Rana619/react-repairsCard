import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import { useParams } from "react-router-dom";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "25px",
        width: "100%",
        borderRadius: "10px",
        marginTop: "30px"
    },
    topCont: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "25px",
        "& h3": {
            fontSize: "22px"
        },
        "& p": {
            fontSize: "14px"
        },
        "& h4": {
            fontSize: "17px",
            fontWeight: "600",
            color: "#2A66FF"
        }
    }
}));

const DriverInformationCard = (props) => {
    const classes = useStyles();
    const { dealId } = useParams();


    const [cState, setCState] = useState("United Series")

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.topCont} >
                <div>
                    <h3>Driver Information</h3>
                    <p>Must match Driver's License</p>
                </div>

                <h4>Under 25?</h4>
            </div>

            <TextField
                id="outlined-basic"
                label="First Name *"
                variant="outlined"
                style={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
                id="outlined-basic"
                label="Last Name *"
                variant="outlined"
                style={{ width: "100%", marginBottom: "15px" }}
            />
            <TextField
                id="outlined-basic"
                label="Drivers License Issued By *"
                variant="outlined"
                value={cState}
                InputProps={{
                    endAdornment: <InputAdornment position="end" > <CheckCircleIcon style={{ color: "#00AA00" }} /> </InputAdornment>
                }}
                style={{ width: "100%", marginBottom: "15px" }}
            />
        </Paper>
    );
};
export default DriverInformationCard;