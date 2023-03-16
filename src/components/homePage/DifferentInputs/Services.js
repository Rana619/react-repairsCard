import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import License from "./DifferentServices/License";
import TireSize from "./DifferentServices/TireSize";
import IdentificationNumber from "./DifferentServices/IndentificationNumber";
import Vehicle from "./DifferentServices/Vehicle";

const useStyles = makeStyles((theme) => ({
    optionCont: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "-20px",
        marginLeft: "5px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        }
    },
    radiolabel: {
        fontSize: "14px",
        fontWeight: "500",
        [theme.breakpoints.down('xs')]: {
            fontSize: "12px",
            fontWeight: "500",
        }
    },
    servicesBodyCont: {
        marginTop: "50px",
        [theme.breakpoints.down('sm')]: {
            marginTop: "30px",
            width: "100%"
        }
    },
    singleRadio: {
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    }
}));


const Services = (props) => {
    const classes = useStyles();

    const [view, setView] = useState("licensePlate")

    const handleChangeRadio = (value) => {
        setView(value.target.value)
    }

    return (
        <>
            <FormControl
                component="fieldset"
                className={classes.singleRadio}
                style={{ marginTop: "20px" }}
            >
                <RadioGroup
                    className={classes.optionCont}
                    aria-label="gender"
                    name="gender1"
                    value={view}
                    onChange={handleChangeRadio}
                >
                    <FormControlLabel
                        className={classes.singleRadio}
                        value="licensePlate"
                        control={<Radio color="primary" />}
                        label={<p className={classes.radiolabel} >By License Plate</p>}
                    />
                    <FormControlLabel
                        className={classes.singleRadio}
                        value="tireSize"
                        control={<Radio color="primary" />}
                        label={<p className={classes.radiolabel} >By Tire Size</p>}
                    />
                    <FormControlLabel
                        className={classes.singleRadio}
                        value="byVIN"
                        control={<Radio color="primary" />}
                        label={<p className={classes.radiolabel} >By VIN</p>}
                    />
                    <FormControlLabel
                        className={classes.singleRadio}
                        value="byVehicle"
                        control={<Radio color="primary" />}
                        label={<p className={classes.radiolabel} >By Vehicle</p>}
                    />
                </RadioGroup>
            </FormControl>
            <div className={classes.servicesBodyCont} >
                {view === "licensePlate" && (<License />)}
                {view === "tireSize" && (<TireSize />)}
                {view === "byVIN" && (<IdentificationNumber />)}
                {view === "byVehicle" && (<Vehicle />)}
            </div>
        </>
    );
};
export default Services;