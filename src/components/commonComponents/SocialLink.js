import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footerItems: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        "& div": {
            width: "120px",
            fontSize: "14px",
            fontWeight: "450",
            margin: "5px 0px"
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-between",
            "& div": {
                width: "100px",
            },
        }
    },
    socialLink: {
        width: "250px",
        marginBottom: "30px",
        "& h3": {
            marginBottom: "25px"
        },
        [theme.breakpoints.down('xs')]: {
            "& h3": {
                marginBottom: "25px",
                textAlign: "center",
            },
        }
    }
}));


const SocialLink = (props) => {
    const classes = useStyles();
    const { title, list } = props

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