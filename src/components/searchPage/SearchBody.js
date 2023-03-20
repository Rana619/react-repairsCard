import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import unselectedMaintainers from "../svgs/unselectedMaintainence.svg"
import unselectedOilChange from "../svgs/unselectedOilChange.svg"
import unselectedParts from "../svgs/unselectedParts.svg"
import unselectedServices from "../svgs/unselectedServices.svg"
import unselectedTyres from "../svgs/unselectedTyres.svg"
import selectedParts from "../svgs/selectedParts.svg"
import selectedServices from "../svgs/selectedServices.svg"
import selectedTyres from "../svgs/selectedTyre.svg"
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    optionAndInputCont: {
        padding: "20px 100px",
        backgroundColor: "#ebebeb",
        position: "relative",
        zIndex: "9",
        [theme.breakpoints.down("md")]: {
            padding: "15px 40px",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "10px"
        }
    },
    inputsTopCont: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            width: "100%",
            marginLeft: "0px",
        }
    },
    selectedSingleOption: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "30px",
        borderRadius: "15px",
        padding: "1px 10px 1px 0px",
        backgroundColor: "#e7ecf6",
        border: "1px solid #2A66FF",
        "& div": {
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            marginRight: "10px"
        },
        "& img": {
            width: "19px",
            margin: "0px",
            height: "19px",
        },
        "& p": {
            color: "#2A66FF",
            margin: "0px",
            fontWeight: "510",
            fontSize: "15px",
            marginBottom: "3px"
        },
        [theme.breakpoints.down("md")]: {
            marginRight: "20px",
            borderRadius: "12px",
            padding: "1px 7px 1px 0px",
            backgroundColor: "#e7ecf6",
            border: "1px solid #2A66FF",
            "& div": {
                width: "25px",
                height: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                marginRight: "7px"
            },
            "& img": {
                width: "15px",
                margin: "0px",
                height: "15px",
            },
            "& p": {
                color: "#2A66FF",
                margin: "0px",
                fontWeight: "510",
                fontSize: "15px",
                marginBottom: "3px"
            },
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            justifyContent: "flex-start",
            margin: "0px",
            marginBottom: "15px"
        }
    },
    singleOption: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginRight: "30px",
        "& div": {
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#EDF0F3",
            marginRight: "10px"
        },
        "& img": {
            width: "17px",
            height: "17px",
        },
        "& p": {
            color: "#2A66FF",
            fontSize: "15px"
        },
        [theme.breakpoints.down("md")]: {
            marginRight: "20px",
            "& div": {
                width: "25px",
                height: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#EDF0F3",
                marginRight: "7px"
            },
            "& img": {
                width: "15px",
                height: "15px",
            },
            "& p": {
                color: "#2A66FF",
                fontSize: "14px"
            },
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            justifyContent: "flex-start",
            margin: "0px",
        }
    },
    inputCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    licensePlateInput: {
        width: "14%"
    },
    vinInput: {
        width: "26%"
    },
    vechicleInput: {
        width: "14%"
    },
    commentsInput: {
        width: "33%"
    },
    searchBtn: {
        width: "60px",
        backgroundColor: "#2A65FA",
        color: "white",
        "&:hover": {
            backgroundColor: "#0b4df5"
        }
    },
    input: {
        backgroundColor: "#FFFFFF"
    },
    circleHome: {
        border: "90px solid #2A66FF",
        height: "50vw",
        width: "50vw",
        borderRadius: "50%",
        position: "absolute",
        top: "-335px",
        right: "-435px",
        [theme.breakpoints.down("sm")]: {
            height: "90vh",
            width: "90vh",
            top: "50px",
            left: "50vw",
        }
    },
}));

const SearchBody = (props) => {
    const classes = useStyles();


    const [showPage, setShowPage] = useState("Parts")
    const [license, setLicense] = useState("")
    const [vin, setVIN] = useState("")
    const [vehicle, setVehicle] = useState("")
    const [comment, setComment] = useState("")

    return (
        <div>
            <div className={classes.optionAndInputCont} >
                <div className={classes.inputsTopCont} >
                    <div
                        className={showPage === "Tyres" ? classes.selectedSingleOption : classes.singleOption}
                        onClick={() => { setShowPage("Tyres") }}
                    >
                        <div>
                            {showPage === "Tyres" ? (
                                <img src={selectedTyres} />
                            ) : (
                                <img src={unselectedTyres} />
                            )}
                        </div>
                        <p>Tyres</p>
                    </div>
                    <div
                        className={showPage === "Parts" ? classes.selectedSingleOption : classes.singleOption}
                        onClick={() => { setShowPage("Parts") }}
                    >
                        <div>
                            {showPage === "Parts" ? (
                                <img src={selectedParts} />
                            ) : (
                                <img src={unselectedParts} />
                            )}
                        </div>
                        <p>Parts</p>
                    </div>
                    <div
                        className={showPage === "Services" ? classes.selectedSingleOption : classes.singleOption}
                        onClick={() => { setShowPage("Services") }}
                    >
                        <div>
                            {showPage === "Services" ? (
                                <img src={selectedServices} />
                            ) : (
                                <img src={unselectedServices} />
                            )}
                        </div>
                        <p>Services</p>
                    </div>
                    <div
                        className={showPage === "OliChanges" ? classes.selectedSingleOption : classes.singleOption}
                        onClick={() => { setShowPage("OliChanges") }}
                    >
                        <div>
                            <img src={unselectedOilChange} />
                        </div>
                        <p>Oli Changes</p>
                    </div>
                    <div
                        className={showPage === "Maintenance" ? classes.selectedSingleOption : classes.singleOption}
                        onClick={() => { setShowPage("Maintenance") }}
                    >
                        <div>
                            <img src={unselectedMaintainers} />
                        </div>
                        <p>Maintenance</p>
                    </div>
                </div>

                <div className={classes.inputCont} >
                    <TextField
                        id="outlined-basic"
                        label="License Plate"
                        placeholder="License Plate"
                        variant="outlined"
                        size="small"
                        value={license}
                        InputProps={{ className: classes.input }}
                        onChange={(e) => { setLicense(e.target.value) }}
                        className={classes.licensePlateInput}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Vehicle Identification Number (VIN)"
                        placeholder="Vehicle Identification Number (VIN)"
                        variant="outlined"
                        size="small"
                        value={vin}
                        InputProps={{ className: classes.input }}
                        onChange={(e) => { setVIN(e.target.value) }}
                        className={classes.vinInput}
                    />
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
                                placeholder="Vehicle"
                                label="Vehicle"
                            />
                        )}
                        onChange={(event, value) => { setVehicle(value) }}
                        className={classes.vechicleInput}
                        style={{ backgroundColor: "white" }}
                        size="small"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Enter Your Comments"
                        placeholder="Enter Your Comments"
                        variant="outlined"
                        size="small"
                        InputProps={{ className: classes.input }}
                        value={comment}
                        onChange={(e) => { setComment(e.target.value) }}
                        className={classes.commentsInput}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        className={classes.searchBtn}
                    >
                        <SearchIcon />
                    </Button>
                </div>





            </div>

            <div className={classes.circleHome} ></div>

        </div>
    );
};
export default SearchBody;