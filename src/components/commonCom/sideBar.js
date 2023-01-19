import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "./List.Item";
import { HiSpeakerphone, HiDatabase, HiLightBulb } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa";
import { BsFillCalendarEventFill, BsTools, BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaStickyNote, FaPuzzlePiece } from "react-icons/fa";
import MarkunreadIcon from '@material-ui/icons/Markunread';
import { IoMdChatbubbles } from "react-icons/io";
import { AiTwotoneSetting } from "react-icons/ai";
import AppsIcon from '@material-ui/icons/Apps';
import logo from "../../icons/logo 1.svg"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';
import { IoSpeedometer } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        padding: "0px 22px",
        position: "relative",
    },
    divider: {
        height: "1px",
        margin: "7px 0px",
        opacity: "0.15"
    },
    logoCont: {
        paddingTop: "15px",
        paddingLeft: "2px",
        marginBottom: "10px",
        width: "55px",
        overflow: "hidden",
    },
    logoTextCont: {
        display: "flex",
        alignItems: "center",
        "& h3": {
            fontSize: "19px",
            fontWeight: "400",
            marginLeft: "10px"
        }
    },
    clsBtn: {
        borderRadius: "8px 0px 0px 8px",
        position: "absolute",
        right: "0px",
        top: "20px",
        padding: "5px 2px"
    },
    themeCont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& p": {
            marginRight: "20px",
            fontSize: "18px"
        }
    },
    emptyHeight: {
        height: "60px",
        marginBottom: "10px",
        [theme.breakpoints.down('sm')]: {
            height: "10px",
        }
    }
}));


const SideBar = (props) => {
    const classes = useStyles();
    const myTheme = useTheme()
    const { theme, setTheme, colapseSideBar, setColapseSideBar } = props
    const [themeSwitch, setThemeSwitch] = useState(false)

    const isSmall = useMediaQuery(myTheme.breakpoints.down("sm"));

    const handelThemeChange = (val) => {
        setThemeSwitch(val)
        if (val) {
            setTheme({
                cardColor: "#ffffff",
                bgColor: "#E2E2E2",
                color: "#000000",
                opacityColor: "rgba(0, 0, 0, 0.1)",
                opacityColorD: "rgba(0, 0, 0, 0.3)",
            })
        } else {
            setTheme({
                cardColor: "#152436",
                bgColor: "#000000",
                color: "#FFFFFF",
                opacityColor: "rgba(255, 255, 255, 0.1)",
                opacityColorD: "rgba(255, 255, 255, 0.3)",
            })
        }
    }


    return (
        <div className={classes.root} style={{ backgroundColor: theme?.cardColor, color: theme?.color }} >
            {isSmall ? null : (
                <div className={classes.clsBtn} style={{ backgroundColor: theme?.opacityColor }} onClick={() => { setColapseSideBar(!colapseSideBar) }} >
                    <DoubleArrowIcon style={colapseSideBar ? { fontSize: "15px", transform: "rotate(0deg)", color: theme?.color } : { fontSize: "15px", transform: "rotate(180deg)", color: theme?.color }} />
                </div>
            )}

            {colapseSideBar ? (<div className={classes.emptyHeight} ></div>) : (
                <div className={classes.logoTextCont} >
                    <div className={classes.logoCont} >
                        <img src={logo} style={{ height: "40px" }} />
                    </div>
                    <h3>Graphics Design</h3>
                </div>
            )}

            <ListItem
                icon={<IoSpeedometer style={{ fontSize: "20px" }} />}
                text={"Dashboard"}
                colapseSideBar={colapseSideBar}
                theme={theme}
                selected={true}
            />
            <ListItem
                icon={<HiSpeakerphone style={{ fontSize: "20px" }} />}
                text={"Marketing"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<FaCreditCard style={{ fontSize: "20px" }} />}
                text={"Payments"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<HiDatabase style={{ fontSize: "19px" }} />}
                text={"Business Operations"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<HiLightBulb style={{ fontSize: "30px" }} />}
                text={"Done-For-You- Grow & Expand"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />

            <div className={classes.divider} style={{ backgroundColor: theme?.color }} >
            </div>

            <ListItem
                icon={<BsFillCalendarEventFill style={{ fontSize: "16px" }} />}
                text={"Calendar"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<FaStickyNote style={{ fontSize: "19px" }} />}
                text={"Notes"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<MarkunreadIcon style={{ fontSize: "20px" }} />}
                text={"Inbox"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<IoMdChatbubbles style={{ fontSize: "20px" }} />}
                text={"Chat"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />

            <div className={classes.divider} style={{ backgroundColor: theme?.color }} >
            </div>

            <ListItem
                icon={<BsTools style={{ fontSize: "17px" }} />}
                text={"Tool Box"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<FaPuzzlePiece style={{ fontSize: "20px" }} />}
                text={"Integrations"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<AppsIcon style={{ fontSize: "20px" }} />}
                text={"Apps"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />

            <div className={classes.divider} style={{ backgroundColor: theme?.color }} >
            </div>

            <ListItem
                icon={<BsFillMenuButtonWideFill style={{ fontSize: "17px" }} />}
                text={"Menu Configuration"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />
            <ListItem
                icon={<AiTwotoneSetting style={{ fontSize: "20px" }} />}
                text={"Settings"}
                colapseSideBar={colapseSideBar}
                theme={theme}
            />

            <div className={classes.themeCont} >
                {colapseSideBar ? null : <p>{themeSwitch ? "Light" : "Dark"}</p>}
                <FormControlLabel
                    style={{ width: "30px" }}
                    control={<Switch color="primary" checked={themeSwitch} onChange={(e) => { handelThemeChange(e.target.checked) }} name="checkedA" />}
                />
            </div>
        </div>
    );
};

export default SideBar;
