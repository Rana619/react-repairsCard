import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { carDataArr } from "../dummyData"
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    }
}));

const SearchResult = ({
    carType, carCompany, shuttle, changeState, prices,
    allCarCompanies, allShuttleTypes, allCarTypes
}) => {
    const classes = useStyles();

    const [results, setResults] = useState([])

    useEffect(() => {
        let locResults = []
        let selectedCarTypes = []
        let selectedShuttleTypes = []
        let selectedCarCompanies = []
        let lowerLimit = -1;
        let uperLimit = null;
        let flagNoUp = false

        carType.map((type) => {
            const subType = type?.subTypes || []
            subType.map((subType) => {
                if (subType.selected) {
                    selectedCarTypes.push(subType?.title)
                }
            })
        })

        carCompany.map((company) => {
            if (company?.selected) {
                selectedCarCompanies.push(company?.title)
            }
        })

        shuttle.map((sut) => {
            if (sut?.selected) {
                selectedShuttleTypes.push(sut?.title)
            }
        })

        prices.map((price) => {
            if (price?.selected) {
                if (price?.low < lowerLimit || lowerLimit === -1) {
                    lowerLimit = price?.low
                }

                if (price?.up) {
                    if (price?.up > uperLimit) {
                        uperLimit = price?.up
                    }
                } else {
                    flagNoUp = true;
                }
            }
        })

        if (flagNoUp) {
            uperLimit = null
        }


        console.log(selectedCarTypes)
        console.log(selectedShuttleTypes)
        console.log(selectedCarCompanies)
        console.log(lowerLimit)
        console.log(uperLimit)









        if (allCarCompanies && allShuttleTypes && allCarTypes) {
            locResults = [...carDataArr]
        } else if (!allCarCompanies && allShuttleTypes && allCarTypes) {
            carDataArr.map((data) => {
                if (uperLimit) {
                    if (selectedCarCompanies.includes(data?.carCompany) && data?.price >= lowerLimit && data?.price <= uperLimit) {
                        locResults.push(data)
                    }
                } else {
                    if (selectedCarCompanies.includes(data?.carCompany) && data?.price >= lowerLimit) {
                        locResults.push(data)
                    }
                }
            })
        } else if (allCarCompanies && !allShuttleTypes && allCarTypes) {
            carDataArr.map((data) => {
                if (uperLimit) {
                    if (selectedShuttleTypes.includes(data?.shuttle) && data?.price >= lowerLimit && data?.price <= uperLimit) {
                        locResults.push(data)
                    }
                } else {
                    if (selectedShuttleTypes.includes(data?.shuttle) && data?.price >= lowerLimit) {
                        locResults.push(data)
                    }
                }
            })
        } else if (allCarCompanies && allShuttleTypes && !allCarTypes) {
            carDataArr.map((data) => {
                if (uperLimit) {
                    if (selectedCarTypes.includes(data?.subCarType) && data?.price >= lowerLimit && data?.price <= uperLimit) {
                        locResults.push(data)
                    }
                } else {
                    if (selectedCarTypes.includes(data?.subCarType) && data?.price >= lowerLimit) {
                        locResults.push(data)
                    }
                }
            })
        } else if (allCarCompanies && !allShuttleTypes && !allCarTypes) {
            carDataArr.map((data) => {
                if (uperLimit) {
                    if (selectedCarTypes.includes(data?.subCarType) && selectedShuttleTypes.includes(data?.shuttle) && data?.price >= lowerLimit && data?.price <= uperLimit) {
                        locResults.push(data)
                    }
                } else {
                    if (selectedCarTypes.includes(data?.subCarType) && selectedShuttleTypes.includes(data?.shuttle) && data?.price >= lowerLimit) {
                        locResults.push(data)
                    }
                }
            })
        } else if (!allCarCompanies && !allShuttleTypes && allCarTypes) {
            carDataArr.map((data) => {
                if (uperLimit) {
                    if (selectedCarCompanies.includes(data?.carCompany) && selectedShuttleTypes.includes(data?.shuttle) && data?.price >= lowerLimit && data?.price <= uperLimit) {
                        locResults.push(data)
                    }
                } else {
                    if (selectedCarCompanies.includes(data?.carCompany) && selectedShuttleTypes.includes(data?.shuttle) && data?.price >= lowerLimit) {
                        locResults.push(data)
                    }
                }
            })
        } else if (!allCarCompanies && allShuttleTypes && !allCarTypes) {
            carDataArr.map((data) => {
                if (uperLimit) {
                    if (selectedCarCompanies.includes(data?.carCompany) && selectedCarTypes.includes(data?.subCarType) && data?.price >= lowerLimit && data?.price <= uperLimit) {
                        locResults.push(data)
                    }
                } else {
                    if (selectedCarCompanies.includes(data?.carCompany) && selectedCarTypes.includes(data?.subCarType) && data?.price >= lowerLimit) {
                        locResults.push(data)
                    }
                }
            })
        } else if (!allCarCompanies && !allShuttleTypes && !allCarTypes) {
            carDataArr.map((data) => {
                if (uperLimit) {
                    if (selectedCarCompanies.includes(data?.carCompany) && selectedShuttleTypes.includes(data?.shuttle) && selectedCarTypes.includes(data?.subCarType) && data?.price >= lowerLimit && data?.price <= uperLimit) {
                        locResults.push(data)
                    }
                } else {
                    if (selectedCarCompanies.includes(data?.carCompany) && selectedShuttleTypes.includes(data?.shuttle) && selectedCarTypes.includes(data?.subCarType) && data?.price >= lowerLimit) {
                        locResults.push(data)
                    }
                }
            })
        }

        setResults(locResults)
    }, [carType, carCompany, shuttle, changeState, prices,
        allCarCompanies, allShuttleTypes, allCarTypes])


    console.log(results)

    return (
        <div className={classes.root} >
            {results.map((result) => (
                <Card cardData={result} />
            ))}
        </div>
    );
};
export default SearchResult;