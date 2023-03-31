import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "25px",
        marginTop: "30px",
        "& h3": {
            fontSize: "22px",
            marginBottom: "15px"
        }
    },
    inputCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
}));

const Contact = (props) => {
    const classes = useStyles();

    const [countryCode, setCountryCode] = useState("+1")

    return (
        <Paper elevation={3} className={classes.root}>
            <h3>Contact</h3>

            <TextField
                id="outlined-basic"
                label="Email Address *"
                variant="outlined"
                style={{ width: "100%", marginBottom: "15px" }}
            />

            <div className={classes.inputCont} >
                <TextField
                    id="outlined-basic"
                    label="Country Code *"
                    variant="outlined"
                    value={countryCode}
                    onChange={(e) => { setCountryCode(e.target.value) }}
                    InputProps={{
                        endAdornment: <InputAdornment position="end" > <CheckCircleIcon style={{ color: "#00AA00" }} /> </InputAdornment>
                    }}
                    style={{ width: "33%" }}
                />
                <TextField
                    id="outlined-basic"
                    label="Mobile Phone Number *"
                    variant="outlined"
                    style={{ width: "65%" }}
                />
            </div>
        </Paper>
    );
};
export default Contact;