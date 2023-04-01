import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useNavigate } from 'react-router-dom';

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


const License = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [state, setState] = useState("")
    const [desc, setDesc] = useState("")
    const [license, setLicense] = useState("")


    const onSubmitFun = (e) => {
        e.preventDefault()

        const data = {
            type: "Services",
            subType: "By VIN",
            state,
            desc,
            license
        };
        const searchParams = new URLSearchParams(data);
        const url = "search/?" + searchParams;

        navigate(url)
    }


    return (
        <form className={classes.formCont} onSubmit={onSubmitFun} >
            <div className={classes.inputCont} >
                <TextField
                    id="outlined-basic"
                    label="License Plate Number"
                    placeholder="License Plate Number"
                    variant="outlined"
                    size="small"
                    value={license}
                    onChange={(e) => { setLicense(e.target.value) }}
                    className={classes.singleInput}
                />
                <Autocomplete
                    value={state}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === state
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="State"
                            label="State"
                        />
                    )}
                    onChange={(event, value) => { setState(value) }}
                    className={classes.singleInput}
                    size="small"
                />
            </div>
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
export default License;