import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import unselectedMaintainers from "../svgs/unselectedMaintainence.svg"
import unselectedOilChange from "../svgs/unselectedOilChange.svg"
import unselectedParts from "../svgs/unselectedParts.svg"
import unselectedServices from "../svgs/unselectedServices.svg"
import { useTheme, useMediaQuery } from "@material-ui/core";
import unselectedTyres from "../svgs/unselectedTyres.svg"
import selectedParts from "../svgs/selectedParts.svg"
import selectedServices from "../svgs/selectedServices.svg"
import selectedTyres from "../svgs/selectedTyre.svg"
import { TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import SearchFilter from "../commonComponents/SearchFilter";
import { filterData } from "../filterData"
import SearchResult from "./Search.Result";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: "hidden",
    },
    optionAndInputCont: {
        padding: "20px 100px",
        backgroundColor: "#ebebeb",
        position: "relative",
        zIndex: "9",
        [theme.breakpoints.down("md")]: {
            padding: "15px 20px",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "15px 40px",
        },
        [theme.breakpoints.down('xs')]: {
            padding: "10px",
        },
    },
    inputsTopMainCont: {
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar": {
            display: "none"
        },
    },
    inputsTopCont: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        [theme.breakpoints.down("md")]: {
            width: "588px"
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
            justifyContent: "flex-start",
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
            justifyContent: "flex-start",
        }
    },
    inputCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column"
        }

    },
    licensePlateInput: {
        width: "14%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginBottom: "10px"
        }
    },
    vinInput: {
        width: "26%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginBottom: "10px"
        }
    },
    vechicleInput: {
        width: "14%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginBottom: "10px"
        }
    },
    commentsInput: {
        width: "33%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginBottom: "10px"
        }
    },
    searchBtn: {
        width: "60px",
        backgroundColor: "#2A65FA",
        color: "white",
        "&:hover": {
            backgroundColor: "#0b4df5"
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
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
    contentBody: {
        padding: "30px 100px",
        [theme.breakpoints.down("md")]: {
            padding: "15px 20px",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "15px 40px",
        },
        [theme.breakpoints.down('xs')]: {
            padding: "10px",
        },
    },
    filterAndCardCont: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    filterCont: {
        width: "29%",
        [theme.breakpoints.down("md")]: {
            width: "32%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "0px",
            overflow: "hidden",
        }
    },
    cardsCont: {
        width: "66%",
        [theme.breakpoints.down("md")]: {
            width: "63%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    header: {
        fontSize: "20px",
        fontWeight: "650",
        paddingBottom: "15px",
        marginBottom: "10px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)"
    },
    movileHeader: {
        display: "flex",
        alignItems: "center",
        "& div": {
            display: "flex",
            alignItems: "center",
            border: "1px solid #2A65FA",
            borderRadius: "15px",
            padding: "3px 10px",
            marginRight: "15px",
            color: "#2A65FA"
        },
        "& span": {
            marginTop: "-4px"
        }
    }
}));

const SearchBody = (props) => {
    const classes = useStyles();
    const theme = useTheme()
    const location = useLocation()
    const params = queryString.parse(location.search);

    const [showPage, setShowPage] = useState("")
    const [license, setLicense] = useState("")
    const [vin, setVIN] = useState("")
    const [vehicle, setVehicle] = useState("")
    const [comment, setComment] = useState("")
    const [carType, setCarType] = useState([])
    const [carCompany, setCarCompany] = useState([])
    const [shuttle, setShuttle] = useState([])
    const [prices, setPrices] = useState([])
    const [allCarTypes, setAllCarTypes] = useState(true)
    const [allCarCompanies, setAllCarCompanies] = useState(true)
    const [allShuttleTypes, setAllShuttleTypes] = useState(true)
    const [changeState, setChangeState] = useState(false)
    const [opneFilter, setOpneFilter] = useState(false)


    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        setShowPage(params?.type)
    }, [params])

    useEffect(() => {
        const carTypeData = filterData?.carType
        let carTypeFilter = []

        carTypeData.map((data) => {
            const subType = data?.subTypes
            let arr = []
            subType.map((subData) => {
                arr.push({
                    title: subData?.title,
                    cost: subData?.cost,
                    selected: false
                })
            })

            carTypeFilter.push({
                title: data?.title,
                cost: data?.cost,
                selected: false,
                openSub: false,
                subTypes: arr
            })
        })
        setCarType(carTypeFilter)


        const carCompanyData = filterData?.carCompany
        let carCompanyFilter = []

        carCompanyData.map((data) => {
            carCompanyFilter.push({
                title: data?.title,
                cost: data?.cost,
                selected: false,
            })
        })
        setCarCompany(carCompanyFilter)


        const shuttleData = filterData?.shuttle
        let shuttleFilter = []

        shuttleData.map((data) => {
            shuttleFilter.push({
                title: data?.title,
                cost: data?.cost,
                selected: false,
            })
        })
        setShuttle(shuttleFilter)

        const pricesFilter = [
            {
                title: "$",
                low: 0,
                up: 50,
                price: "$ 0-50 Total",
                selected: false,
            },
            {
                title: "$$",
                low: 51,
                up: 100,
                price: "$ 51-100 Total",
                selected: false,
            },
            {
                title: "$$$",
                low: 101,
                up: 200,
                price: "$ 101-200 Total",
                selected: false,
            },
            {
                title: "$$$$",
                low: 200,
                price: "$ 200 + Total",
                selected: false,
            }
        ]
        setPrices(pricesFilter)
    }, [filterData])


    return (
        <div className={classes.root} >
            <div className={classes.optionAndInputCont} >

                <div className={classes.inputsTopMainCont} >
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
                        label="Vehicle Identification Number"
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
                        {isMobile ? "Search" : <SearchIcon />}
                    </Button>
                </div>
            </div>
            {/* <div className={classes.circleHome} ></div> */}
            <div className={classes.contentBody} >
                <div className={classes.filterAndCardCont} >
                    <div className={classes.filterCont} >
                        <SearchFilter
                            carType={carType}
                            setCarType={setCarType}
                            carCompany={carCompany}
                            setCarCompany={setCarCompany}
                            shuttle={shuttle}
                            setShuttle={setShuttle}
                            changeState={changeState}
                            setChangeState={setChangeState}
                            prices={prices}
                            setPrices={setPrices}
                            allCarCompanies={allCarCompanies}
                            setAllCarCompanies={setAllCarCompanies}
                            allShuttleTypes={allShuttleTypes}
                            setAllShuttleTypes={setAllShuttleTypes}
                            allCarTypes={allCarTypes}
                            setAllCarTypes={setAllCarTypes}
                            opneFilter={opneFilter}
                            setOpneFilter={setOpneFilter}
                        />
                    </div>
                    <div className={classes.cardsCont} >
                        {isMobile ? (<div className={classes.movileHeader} >
                            <div style={{ backgroundColor: "#e2e2f4" }} >
                                <span style={{ marginRight: "5px" }} >Sort By </span>
                                <ExpandMoreIcon />
                            </div>
                            <div onClick={() => { setOpneFilter(true) }} >
                                <FilterListIcon />
                                <span style={{ marginLeft: "5px" }} >All Filters</span>
                            </div>
                        </div>) : (
                            <div className={classes.header} >
                                Sort By:
                            </div>

                        )}

                        <SearchResult
                            carType={carType}
                            carCompany={carCompany}
                            shuttle={shuttle}
                            changeState={changeState}
                            prices={prices}
                            allCarCompanies={allCarCompanies}
                            allShuttleTypes={allShuttleTypes}
                            allCarTypes={allCarTypes}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchBody;