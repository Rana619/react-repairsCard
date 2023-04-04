import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Paper, TextField } from "@material-ui/core";
import StarRateIcon from '@material-ui/icons/StarRate';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "25px",
        marginTop: "30px",
        borderRadius: "10px",
        [theme.breakpoints.down('xs')]: {
            padding: "15px",
        }
    },
    topBar: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    reviewRatingCont: {
        "& h3": {
            fontSize: "22px"
        },
        "& h2": {
            fontSize: "25px",
            color: "#FA852D"
        },
        "& p": {
            fontSize: "16px",
            color: "gray"
        },
        [theme.breakpoints.down('xs')]: {
            "& h3": {
                fontSize: "20px"
            },
        }
    },
    ratingStarCont: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start"
        }
    },
    starsCont: {
        display: "flex",
        margin: "0px 5px",
        marginBottom: "-2px",
        color: "#FA852D"
    },
    btn: {
        border: "none",
        color: "white",
        padding: "10px 15px",
        borderRadius: "5px",
        backgroundColor: "#2A65FA",
        fontSize: "14px",
        fontWeight: "600",
    },
    singleReviewCont: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        "& h3": {
            fontSize: "16px"
        },
        "& p": {
            fontSize: "14px",
            color: "gray"
        },
        "& h4": {
            fontSize: "14px",
            color: "gray",
            fontWeight: "500"
        }
    },
    starSty: {
        fontSize: "20px",
        marginRight: "-5px"
    },
    reviewText: {
        fontSize: "14px",
        marginTop: "5px"
    },
    likeCont: {
        display: "flex",
        alignItems: "center",
        color: "gray",
        marginTop: "10px",
        "& p": {
            marginLeft: "10px"
        }
    },
    replyCont: {
        paddingLeft: "50px",
        marginTop: "20px",
        borderLeft: "3px solid #c2c0c0",
        "& h3": {
            fontSize: "16px",
            marginBottom: "15px"
        },
        "& p": {
            fontSize: "14px"
        }
    },
    allReviewsCont: {
        width: "100%",
        height: "550px",
        overflowY: "auto",
        overflowX: "hidden",
    }
}));

const Review = (props) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.topBar} >
                <div className={classes.reviewRatingCont} >
                    <h3>Customer Reviews</h3>
                    <div className={classes.ratingStarCont} >
                        <div style={{ display: "flex", alignItems: "center" }} >
                            <h2>5.0</h2>
                            <div className={classes.starsCont} >
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                                <StarRateIcon />
                            </div>
                        </div>
                        <p>16 reviews</p>
                    </div>
                </div>
                <button className={classes.btn} >Write  a Review</button>
            </div>


            <div className={classes.allReviewsCont} >
                <div className={classes.singleReviewCont} >
                    <Avatar src={"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} />
                    <div style={{ marginLeft: "10px" }}>
                        <h3>Mitch Oison</h3>
                        <p>1 reviews</p>
                        <div style={{ display: "flex", alignItems: "center" }} >
                            <div className={classes.starsCont} style={{ marginLeft: "0px" }} >
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                            </div>
                            <h4>2 Weeks Ago</h4>
                        </div>
                    </div>
                </div>
                <p className={classes.reviewText} >
                    Maecenas at est sed velit accumsan dictum. Vestibulum lobortis faucibus nisl quis sodales. Nam justo augue, lacinia vel nisi tincidunt, vestibulum porttitor nulla.Aliquam quis porta risus, et tristique orci. Nulla ac purus euismod, facilisis nunc id, consequat mauris. Curabitur volutpat tellus id odio feugiat fringilla. Praesent at dolor velit..... More.
                </p>
                <div className={classes.likeCont} >
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className={classes.replyCont} >
                    <h3>Response From The  Owner</h3>
                    <p> Nulla ac purus euismod, facilisis nunc id, consequat mauris. Curabitur volutpat tellus id odio feugiat fringilla. Praesent at dolor velit.</p>
                </div>


                <div className={classes.singleReviewCont} style={{ marginTop: "40px" }} >
                    <Avatar src={"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} />
                    <div style={{ marginLeft: "10px" }}>
                        <h3>Ivana Cajina</h3>
                        <p>1 reviews</p>
                        <div style={{ display: "flex", alignItems: "center" }} >
                            <div className={classes.starsCont} style={{ marginLeft: "0px" }} >
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                            </div>
                            <h4>3 Weeks Ago</h4>
                        </div>
                    </div>
                </div>
                <p className={classes.reviewText} >
                    Maecenas at est sed velit accumsan dictum. Vestibulum lobortis faucibus nisl quis sodales. Nam justo augue, lacinia vel nisi tincidunt, vestibulum porttitor nulla.Aliquam quis porta risus, et tristique orci. Nulla ac purus euismod, facilisis nunc id, consequat mauris. Curabitur volutpat tellus id odio feugiat fringilla. Praesent at dolor velit..... More.
                </p>
                <div className={classes.likeCont} >
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className={classes.replyCont} >
                    <h3>Response From The  Owner</h3>
                    <p> Nulla ac purus euismod, facilisis nunc id, consequat mauris. Curabitur volutpat tellus id odio feugiat fringilla. Praesent at dolor velit.</p>
                </div>

                <div className={classes.singleReviewCont} style={{ marginTop: "40px" }} >
                    <Avatar src={"https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} />
                    <div style={{ marginLeft: "10px" }}>
                        <h3>Seth Doyle</h3>
                        <p>2 reviews</p>
                        <div style={{ display: "flex", alignItems: "center" }} >
                            <div className={classes.starsCont} style={{ marginLeft: "0px" }} >
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                                <StarRateIcon className={classes.starSty} />
                            </div>
                            <h4>4 Weeks Ago</h4>
                        </div>
                    </div>
                </div>
                <p className={classes.reviewText} >
                    Maecenas at est sed velit accumsan dictum. Vestibulum lobortis faucibus nisl quis sodales. Nam justo augue, lacinia vel nisi tincidunt, vestibulum porttitor nulla.Aliquam quis porta risus, et tristique orci. Nulla ac purus euismod, facilisis nunc id, consequat mauris. Curabitur volutpat tellus id odio feugiat fringilla. Praesent at dolor velit..... More.
                </p>
            </div>
        </Paper>
    );
};
export default Review;