import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        padding: "8px 5px",
        alignItems: "center",
        justifyContent: "space-between",
        "& div": {
            display: "flex",
            alignItems: "center",
            width: "170px",
            "& h4": {
                fontSize: "14px",
                fontWeight: "400",
                marginLeft: "10px"
            }
        }
    },
}));


const ListItem = (props) => {
    const classes = useStyles();

    const { icon, text, colapseSideBar, selected, theme } = props

    return (
        <div className={classes.root} style={selected ? { backgroundColor: theme?.opacityColorD, borderRadius:"8px" } : {}} >
            {colapseSideBar ? icon : (<>
                <div>
                    {icon}
                    <h4>{text}</h4>
                </div>
                <ExpandMoreIcon />
            </>)}
        </div>
    );
};

export default ListItem;
