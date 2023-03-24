import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

const useStyles = makeStyles((theme) => ({
    singleFilterLine: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& h3": {
            fontSize: "15px",
            fontWeight: "450"
        },
        "& h4": {
            fontSize: "15px",
            fontWeight: "450"
        },
        [theme.breakpoints.down("md")]: {
            "& h3": {
                fontSize: "13px",
            },
            "& h4": {
                fontSize: "13px",
            },
        }
    },
    checkAndArrowIcon: {
        width: "170px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            width: "155px", 
        }
    },
    checkAndTitleCont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    subCont: {
        paddingLeft: "25px"
    },
    header: {
        fontSize: "20px",
        fontWeight: "650",
        paddingBottom: "15px",
        marginBottom: "10px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.3)"
    },
    filterBoxPadding: {
        padding: "0px 15px 30px",
        [theme.breakpoints.down('md')]: {
            padding: "0px 5px 30px",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "0px 0px 30px",
        },
    }
}));

const SearchFilter = ({
    carType, setCarType, carCompany, setCarCompany,
    shuttle, setShuttle, changeState, setChangeState,
    prices, setPrices, allCarCompanies, setAllCarCompanies,
    allShuttleTypes, setAllShuttleTypes, allCarTypes,
    setAllCarTypes
}) => {
    const classes = useStyles();

    const openSub = (i) => {
        setChangeState(!changeState)
        let locData = [...carType];
        const openSub = locData[i]?.openSub;
        locData[i].openSub = !openSub

        setCarType(locData)
        setChangeState(!changeState)
    }

    const onClickMainCheckBox = (index) => {
        setChangeState(!changeState)
        let locData = [...carType];
        let boolVal = locData[index]?.selected

        let subArr = locData[index]?.subTypes
        let arr = []

        subArr.map((data) => {
            arr.push({
                ...data,
                selected: !boolVal
            })
        })

        locData[index].selected = !boolVal
        locData[index].subTypes = arr
        setCarType(locData)
        setChangeState(!changeState)
    }

    const onClickSubCheckBox = (mainIndex, subIndex) => {
        setChangeState(!changeState)
        let locData = [...carType];

        let locBoolVal = locData[mainIndex]?.subTypes[subIndex]?.selected
        locData[mainIndex].subTypes[subIndex].selected = !locBoolVal

        setCarType(locData)
        setChangeState(!changeState)
    }

    const onClickPrice = (index) => {
        setChangeState(!changeState)
        let locPrices = [...prices]
        locPrices[index].selected = !locPrices[index].selected;
        setPrices(locPrices)
        setChangeState(!changeState)
    }

    const onClickCarCompany = (i) => {
        setChangeState(!changeState)
        let locCarCompany = [...carCompany]
        locCarCompany[i].selected = !locCarCompany[i]?.selected
        setCarCompany(locCarCompany)
        setChangeState(!changeState)
    }

    const onClickShuttle = (i) => {
        setChangeState(!changeState)
        let locShuttle = [...shuttle]
        locShuttle[i].selected = !locShuttle[i]?.selected
        setShuttle(locShuttle)
        setChangeState(!changeState)
    }

    useEffect(() => {
        setChangeState(!changeState)
        let flag = true
        carType.map((data) => {
            if (data?.selected) {
                flag = false
            }
            data.subTypes.map((subData) => {
                if (subData?.selected) {
                    flag = false
                }
            })
        })
        setAllCarTypes(flag)
        setChangeState(!changeState)
    }, [carType])

    useEffect(() => {
        setChangeState(!changeState)
        let flag = true
        carCompany.map((data) => {
            if (data?.selected) {
                flag = false
            }
        })
        setAllCarCompanies(flag)
        setChangeState(!changeState)
    }, [carCompany])

    useEffect(() => {
        setChangeState(!changeState)
        let flag = true
        shuttle.map((data) => {
            if (data?.selected) {
                flag = false
            }
        })
        setAllShuttleTypes(flag)
        setChangeState(!changeState)
    }, [shuttle])

    const onClickAllCarCompanies = () => {
        setChangeState(!changeState)
        if (!allCarCompanies) {
            let locCarCompany = []
            carCompany.map((data) => {
                locCarCompany.push({
                    ...data,
                    selected: false
                })
            })
            setCarCompany(locCarCompany)
            setAllCarCompanies(true)
        }
        setChangeState(!changeState)
    }

    const onClickAllShuttle = () => {
        setChangeState(!changeState)
        if (!allShuttleTypes) {
            let locShuttle = []
            shuttle.map((data) => {
                locShuttle.push({
                    ...data,
                    selected: false
                })
            })
            setShuttle(locShuttle)
            setAllShuttleTypes(true)
        }
        setChangeState(!changeState)
    }

    const onClickAllCarTypes = () => {
        setChangeState(!changeState)
        if (!allCarTypes) {
            let dataArr = []
            carType.map((data) => {
                let arr = []
                data.subTypes.map((subData) => {
                    arr.push({
                        ...subData,
                        selected: false
                    })
                })

                dataArr.push({
                    ...data,
                    subTypes: arr,
                    selected: false
                })
            })
            setCarType(dataArr)
            setAllCarTypes(true)
        }
        setChangeState(!changeState)
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <div>
            <div className={classes.header} >
                Car Type
            </div>
            <div className={classes.filterBoxPadding} >
                <div className={classes.singleFilterLine} >
                    <div className={classes.checkAndArrowIcon} >
                        <div className={classes.checkAndTitleCont} >
                            {allCarTypes ? (
                                <Checkbox
                                    checked={allCarTypes}
                                    color="primary"
                                />
                            ) : (
                                <IndeterminateCheckBoxOutlinedIcon
                                    onClick={() => { onClickAllCarTypes() }}
                                    style={{ margin: "9px", color: "#2A66FF", cursor: "pointer" }}
                                />
                            )}
                            <h3 style={{ fontWeight: "500" }} >All Car Types</h3>
                        </div>
                        <div></div>
                    </div>
                    <h4 style={{ fontWeight: "500" }} >From</h4>
                </div>


                {carType.map((carTypeData, index) => {
                    if (carTypeData?.subTypes.length === 0) {
                        return (
                            <div className={classes.singleFilterLine} >
                                <div className={classes.checkAndArrowIcon} >
                                    <div className={classes.checkAndTitleCont} >
                                        <Checkbox
                                            checked={carTypeData?.selected}
                                            onChange={() => { onClickMainCheckBox(index) }}
                                            color="primary"
                                        />
                                        <h3>{carTypeData?.title}</h3>
                                    </div>
                                    <div></div>
                                </div>
                                <h4>$ {numberWithCommas(carTypeData?.cost)} Total</h4>
                            </div>
                        )
                    } else {
                        return (<div>
                            <div className={classes.singleFilterLine} >
                                <div className={classes.checkAndArrowIcon} >
                                    <div className={classes.checkAndTitleCont} >
                                        <Checkbox
                                            checked={carTypeData?.selected}
                                            onChange={() => { onClickMainCheckBox(index) }}
                                            color="primary"
                                        />
                                        <h3>{carTypeData?.title}</h3>
                                    </div>
                                    {carTypeData?.openSub ? (
                                        <ExpandLessIcon
                                            onClick={() => { openSub(index) }}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    ) : (
                                        <ExpandMoreIcon
                                            onClick={() => { openSub(index) }}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    )}
                                </div>
                                <h4>$ {numberWithCommas(carTypeData?.cost)} Total</h4>
                            </div>
                            <Collapse in={carTypeData?.openSub} >
                                <div className={classes.subCont} >
                                    {carTypeData?.subTypes && carTypeData?.subTypes.map((subData, i) => (
                                        <div className={classes.singleFilterLine} >
                                            <div className={classes.checkAndArrowIcon} >
                                                <div className={classes.checkAndTitleCont} >
                                                    <Checkbox
                                                        checked={subData?.selected}
                                                        onChange={() => { onClickSubCheckBox(index, i) }}
                                                        color="primary"
                                                    />
                                                    <h3>{subData?.title}</h3>
                                                </div>
                                                <div></div>
                                            </div>
                                            <h4>$ {numberWithCommas(subData?.cost)} Total</h4>
                                        </div>
                                    ))}
                                </div>
                            </Collapse>
                        </div>)
                    }
                })}
            </div>


            <div className={classes.header} >
                Price
            </div>
            <div className={classes.filterBoxPadding} >
                {prices.map((price, index) => (
                    <div className={classes.singleFilterLine} >
                        <div className={classes.checkAndArrowIcon} >
                            <div className={classes.checkAndTitleCont} >
                                <Checkbox
                                    checked={price?.selected}
                                    onChange={() => { onClickPrice(index) }}
                                    color="primary"
                                />
                                <h3>{price?.title}</h3>
                            </div>
                            <div></div>
                        </div>
                        <h4>{price?.price}</h4>
                    </div>
                ))}
            </div>


            <div className={classes.header} >
                Car Company
            </div>
            <div className={classes.filterBoxPadding} >
                <div className={classes.singleFilterLine} >
                    <div className={classes.checkAndArrowIcon} >
                        <div className={classes.checkAndTitleCont} >
                            {allCarCompanies ? (
                                <Checkbox
                                    checked={allCarCompanies}
                                    color="primary"
                                />
                            ) : (
                                <IndeterminateCheckBoxOutlinedIcon
                                    onClick={() => { onClickAllCarCompanies() }}
                                    style={{ margin: "9px", color: "#2A66FF", cursor: "pointer" }}
                                />
                            )}
                            <h3 style={{ fontWeight: "500" }} >All Car Companies</h3>
                        </div>
                        <div></div>
                    </div>
                    <h4 style={{ fontWeight: "500" }} >From</h4>
                </div>

                {carCompany.map((data, index) => (
                    <div className={classes.singleFilterLine} >
                        <div className={classes.checkAndArrowIcon} >
                            <div className={classes.checkAndTitleCont} >
                                <Checkbox
                                    checked={data?.selected}
                                    onChange={() => { onClickCarCompany(index) }}
                                    color="primary"
                                />
                                <h3>{data?.title}</h3>
                            </div>
                            <div></div>
                        </div>
                        <h4>$ {numberWithCommas(data?.cost)} Total</h4>
                    </div>
                ))}
            </div>


            <div className={classes.header} >
                Shuttle
            </div>
            <div className={classes.filterBoxPadding} >
                <div className={classes.singleFilterLine} >
                    <div className={classes.checkAndArrowIcon} >
                        <div className={classes.checkAndTitleCont} >
                            {allShuttleTypes ? (
                                <Checkbox
                                    checked={allShuttleTypes}
                                    color="primary"
                                />
                            ) : (
                                <IndeterminateCheckBoxOutlinedIcon
                                    onClick={() => { onClickAllShuttle() }}
                                    style={{ margin: "9px", color: "#2A66FF", cursor: "pointer" }}
                                />
                            )}
                            <h3 style={{ fontWeight: "500" }} >All Shuttle Types</h3>
                        </div>
                        <div></div>
                    </div>
                    <h4 style={{ fontWeight: "500" }} >From</h4>
                </div>

                {shuttle.map((data, index) => (
                    <div className={classes.singleFilterLine} >
                        <div className={classes.checkAndArrowIcon} >
                            <div className={classes.checkAndTitleCont} >
                                <Checkbox
                                    checked={data?.selected}
                                    onChange={() => { onClickShuttle(index) }}
                                    color="primary"
                                />
                                <h3>{data?.title}</h3>
                            </div>
                            <div></div>
                        </div>
                        <h4>$ {numberWithCommas(data?.cost)} Total</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default SearchFilter;