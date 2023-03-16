import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footerItems: {
        width: "250px",
        display: "flex",
        flexWrap: "wrap",
        "& div": {
            width: "120px",
            fontSize: "14px",
            fontWeight: "450",
            margin: "5px 0px"
        }
    },
    socialLink: {
        "& h3": {
            marginBottom: "25px"
        }
    }
}));


const SocialLink = (props) => {
    const classes = useStyles();
    const {
        title, list
    } = props

    return (
        <div className={classes.socialLink}>
            <h3>{title}</h3>
            <div className={classes.footerItems} >
                {list.map((item, i) => (
                    <div>{item}</div>
                ))}
            </div>
        </div>
    );
}
export default SocialLink;