import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));


const AmountCont = (props) => {
    const classes = useStyles();

    const { } = props

    return (
        <div className={classes.root}>
            <div>doller</div>
            <div>
                <h3>Last Purchase: $180 | Center Table on 25.11.2022</h3>
                <h5>Total purchases in the last 30 days: $1,680</h5>
            </div>
        </div>
    );
};
export default AmountCont;
