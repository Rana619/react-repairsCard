import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DetailsCard from "./Details.Card";
import { useParams } from "react-router-dom";
import { carDataArr } from "../dummyData"
import DriverInformationCard from "./Driver.Information.Card";
import SummaryChargesCard from "./SummaryCharges.Card";
import { Paper } from "@material-ui/core";
import Contact from "./Contact";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Review from "./Review";


const useStyles = makeStyles((theme) => ({
    root: {
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
    topText: {
        width: "450px",
        fontSize: "22px",
        fontWeight: "450"
    },
    cardsMainCont: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: "30px"
    },
    leftSide: {
        width: "58%"
    },
    rightSide: {
        width: "39%"
    },
    greenCard: {
        padding: "15px 35px",
        backgroundColor: "#D4FFD4",
        borderRadius: "10px",
        "& p": {
            fontSize: "15px",
            fontWeight: "400"
        },
        "& h3": {
            fontSize: "17px"
        }
    },
    ntext: {
        fontSize: "14px",
        fontWeight: "450",
        marginTop: "30px"
    },
    payCont: {
        padding: "25px",
        marginTop: "30px",
        borderRadius: "10px",
        "& h3": {
            fontSize: "22px",
            marginBottom: "8px"
        }
    },
    addSeats: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 25px",
        fontSize: "18px",
        marginTop: "30px",
        borderRadius: "10px",
    },
    importantInfoCont: {
        padding: "25px",
        paddingLeft: "50px",
        borderRadius: "10px",
        marginTop: "30px",
        "& h3": {
            marginLeft: "-25px",
            fontSize: "22px",
            marginBottom: "20px"
        },
        "& li": {
            fontSize: "14px"
        }
    },
    tcText: {
        marginTop: "60px",
        fontSize: "14px",
        fontWeight: "500",
        "& a": {
            color: "black"
        }
    },
    btnComp: {
        width: "100%",
        marginTop: "40px",
        backgroundColor: "#00AA00",
        padding: "15px",
        borderRadius: "5px",
        color: "white",
        border: "none",
        fontWeight: "700"
    }
}));

const DealDetailsBody = (props) => {
    const classes = useStyles();
    const { dealId } = useParams();

    const [cardData, setCardData] = useState({})

    console.log(dealId)
    console.log(cardData)

    useEffect(() => {
        carDataArr.map((data) => {
            console.log(data?._id)
            if (data?._id == dealId) {
                setCardData(data)
            }
        })
    }, [carDataArr])


    return (
        <div className={classes.root}>
            <p className={classes.topText} >
                <b>Alomost Done!</b> Enter your details and complete your booking now.
            </p>

            <div className={classes.cardsMainCont} >
                <div className={classes.leftSide} >
                    <DetailsCard
                        cardData={cardData}
                    />
                    <DriverInformationCard />
                    <Paper elevation={3} className={classes.payCont} >
                        <h3>Payment</h3>
                        <h4>No need to pay today!</h4>
                    </Paper>
                    <Contact />

                    <Paper elevation={3} className={classes.addSeats} >
                        <h3>Add Child Seats and Special Requests <span style={{ fontWeight: "450" }} >(Optional)</span></h3>
                        <NavigateNextIcon />
                    </Paper>

                    <Review />

                    <Paper elevation={3} className={classes.importantInfoCont} >
                        <h3>Important Information</h3>
                        <ul>
                            <li>ReviewAge Restrictions.</li>
                            <li>The driver must present a valid driver's license and credit or debit card at the counter in his/her name. The use of a debit card may be subject to certain restrictions, or not permitted at some locations. Review the location's policy for details.</li>
                            <li>Review the location's policy for possible age or local renter restrictions.</li>
                            <li>Rental car free cancellation available. See Booking Conditions (this link opens in a modal dialog) for the full partner policy.</li>
                        </ul>
                    </Paper>

                    <p className={classes.tcText} >By selecting Complete Booking you agree to the <a href="#" >Booking Conditions (this link opens in a modal dialog), Rental Car Policy and Rules, Terms and Conditions, and Privacy Policy.</a></p>


                    <button className={classes.btnComp} >
                        COMPLETE  BOOKING
                    </button>

                </div>
                <div className={classes.rightSide} >
                    <div className={classes.greenCard} >
                        <p>Keep up the good work!</p>
                        <h3>You're on your way to getting a great deal.</h3>
                    </div>
                    <SummaryChargesCard />

                    <p className={classes.ntext} >Prices in INR. Prices include all <a>taxes and fees</a></p>
                    <p className={classes.ntext} style={{ marginTop: "10px" }} >Payment of 382.45 USD will be made in Budget Rent a Car's local currency at the time of rental. The INR estimates provided are based on the current exchange rate. Budget Rent a Car will determine the final total.</p>
                </div>
            </div>
        </div>
    );
};
export default DealDetailsBody;