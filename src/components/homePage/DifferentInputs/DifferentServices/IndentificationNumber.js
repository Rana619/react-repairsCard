import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    singleFullInput: {
        width: "100%",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            marginBottom: "20px",
        }
    },
    submitBtn: {
        width: "100%",
        padding: "10px 0px",
        backgroundColor: "#2A65FA",
        color: "white",
        "&:hover":{
            backgroundColor: "#0b4df5"
        }
    },
}));


const IdentificationNumber = (props) => {
    const classes = useStyles();

    const [vin, setVin] = useState("")
    const [desc, setDesc] = useState("")

    return (
        <form>
            <TextField
                id="outlined-basic"
                label="License Plate Number"
                placeholder="License Plate Number"
                variant="outlined"
                size="small"
                value={vin}
                onChange={(e) => { setVin(e.target.value) }}
                className={classes.singleFullInput}
            />

            <TextField
                id="outlined-multiline-static"
                placeholder="Enter Your Comments"
                label="Enter Your Comments"
                size="small"
                multiline
                rows={5}
                variant="outlined"
                value={desc}
                onChange={(e) => { setDesc(e.target.value) }}
                className={classes.singleFullInput}
            />

            <Button
                variant="contained"
                type="submit"
                className={classes.submitBtn}
            >
                Search
            </Button>

        </form>
    );
};
export default IdentificationNumber;