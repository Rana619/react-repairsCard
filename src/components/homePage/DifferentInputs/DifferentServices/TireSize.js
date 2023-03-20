import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    auto3Sty: {
        width: "32%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginBottom: "20px",
        }
    }
}));


const TireSize = (props) => {
    const classes = useStyles();

    const [width, setWidth] = useState("")
    const [aspect, setAspect] = useState("")
    const [rim, setRim] = useState("")
    const [desc, setDesc] = useState("")

    return (
        <form>
            <div className={classes.inputCont} >
                <Autocomplete
                    value={width}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === width
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Width"
                            label="Width"
                        />
                    )}
                    onChange={(event, value) => { setWidth(value) }}
                    className={classes.auto3Sty}
                    size="small"
                />
                <Autocomplete
                    value={aspect}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === aspect
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Aspect"
                            label="Aspect"
                        />
                    )}
                    onChange={(event, value) => { setAspect(value) }}
                    className={classes.auto3Sty}
                    size="small"
                />
                <Autocomplete
                    value={rim}
                    options={["item1", "item2", "item3"]}
                    getOptionLabel={(option) => { return option }}
                    getOptionSelected={(option) => {
                        return option === rim
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            style={{ margin: "0px" }}
                            margin="normal"
                            variant="outlined"
                            placeholder="Rim"
                            label="Rim"
                        />
                    )}
                    onChange={(event, value) => { setRim(value) }}
                    className={classes.auto3Sty}
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
export default TireSize;