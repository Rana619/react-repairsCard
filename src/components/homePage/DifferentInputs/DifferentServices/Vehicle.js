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
    single4Input: {
        width: "22%",
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
}));


const Vehicle = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [year, setYear] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [submodel, setsubmodel] = useState("")
    const [desc, setDesc] = useState("")


    const onSubmitFun = (e) => {
        e.preventDefault()
        const data = {
            type: "Services",
            subType: "By Vehicle",
            year,
            make,
            model,
            submodel,
            desc,
        };
        const searchParams = new URLSearchParams(data);
        const url = "search/?" + searchParams;

        navigate(url)
    }


    return (
        <form onSubmit={onSubmitFun} >
            <div className={classes.inputCont} >
                <Autocomplete
                    value={year}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === year
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Year"
                            label="Year"
                        />
                    )}
                    onChange={(event, value) => { setYear(value) }}
                    className={classes.single4Input}
                    size="small"
                />
                <Autocomplete
                    value={make}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === make
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Make"
                            label="Make"
                        />
                    )}
                    onChange={(event, value) => { setMake(value) }}
                    className={classes.single4Input}
                    size="small"
                />
                <Autocomplete
                    value={model}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === model
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Model"
                            label="Model"
                        />
                    )}
                    onChange={(event, value) => { setModel(value) }}
                    className={classes.single4Input}
                    size="small"
                />
                <Autocomplete
                    value={submodel}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === submodel
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Submodel"
                            label="Submodel"
                        />
                    )}
                    onChange={(event, value) => { setsubmodel(value) }}
                    className={classes.single4Input}
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
export default Vehicle;