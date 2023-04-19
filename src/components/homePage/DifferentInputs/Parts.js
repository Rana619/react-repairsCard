import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    inputCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "0px",
        }
    },
    singleInput: {
        width: "48%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginBottom: "20px",
        }
    },
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
        "&:hover": {
            backgroundColor: "#0b4df5"
        }
    },
    formCont: {
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    }
}));


const Parts = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const [license, setLicense] = useState("")
    const [VIN, setVIN] = useState("")
    const [vehicle, setVehicle] = useState("")
    const [desc, setDesc] = useState("")

    const onSubmitFun = (e) => {
        e.preventDefault()
        const data = {
            type: "Parts",
            license,
            VIN,
            vehicle,
            desc
        };
        const searchParams = new URLSearchParams(data);
        const url = "search/?" + searchParams;

        history.push(url)
    }

    return (
        <form className={classes.formCont} onSubmit={onSubmitFun} >
            <div className={classes.inputCont} >
                <TextField
                    id="outlined-basic"
                    label="License Plate"
                    placeholder="License Plate"
                    variant="outlined"
                    size="small"
                    value={license}
                    onChange={(e) => { setLicense(e.target.value) }}
                    className={classes.singleInput}
                />
                <Autocomplete
                    value={VIN}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === VIN
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Ex: Business"
                        />
                    )}
                    onChange={(event, value) => { setVIN(value) }}
                    className={classes.singleInput}
                    size="small"
                />
            </div>

            <Autocomplete
                value={vehicle}
                options={["item1", "item2", "item3"]}
                getOptionLabel={(option) => { return option }}
                getOptionSelected={(option) => {
                    return option === vehicle
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        style={{ margin: "0px" }}
                        margin="normal"
                        variant="outlined"
                        label="Vehicle"
                        placeholder="Vehicle"
                    />
                )}
                onChange={(event, value) => { setVehicle(value) }}
                className={classes.singleFullInput}
                size="small"
            />
            <TextField
                id="outlined-multiline-static"
                placeholder="Enter Your Comments"
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
export default Parts;