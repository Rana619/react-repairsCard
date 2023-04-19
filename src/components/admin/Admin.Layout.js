import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { IconButton, useMediaQuery } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import LessText from "../commonComponents/LessText";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Collapse from '@material-ui/core/Collapse';
import Skeleton from '@material-ui/lab/Skeleton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import mainLogo from "../svgs/mainLogo.svg"
import CommuteIcon from '@material-ui/icons/Commute';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import firebase from "firebase";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        fontFamily: `'Poppins', sans-serif`,
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    sideBar: {
        width: "250px",
        height: "100%",
        padding: "25px 15px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #dfdfdf",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        scrollbarWidth: "none",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    mainCont: {
        width: "calc(100% - 250px)",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    headerSty: {
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #dfdfdf",
        "& h3": {
            fontSize: "20px",
            marginLeft: "15px"
        },
        [theme.breakpoints.down('sm')]: {
            justifyContent: "space-between",
            "& h3": {
                fontSize: "18px",
                marginLeft: "0px"
            },
        }
    },
    bodyCont: {
        width: "100%",
        height: "calc(100% - 50px)",
        overflow: "hidden",
    },
    noAppBarBodyCont: {
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        scrollbarWidth: "none",
    },
    hamburgerCont: {
        width: "50px",
        height: "100%",
    },
    topLogoCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "60px",
        cursor: "pointer",
        "& h3": {
            fontSize: "18px",
            fontWeight: "600",
            marginLeft: "10px",
            transform: "scale(1, 1.1)",
        },
        "& h4": {
            fontSize: "15px",
            fontWeight: "450",
            marginLeft: "10px",
            color: "gray"
        },
        "& img": {
            height: "30px",
            width: "auto"
        }
    },
    addNewBtn: {
        width: "100%",
        fontSize: "16px",
        fontWeight: "510",
        borderRadius: "20px",
        padding: "5px 0px",
        display: "flex",
        marginBottom: "20px",
        alignItems: "center",
        cursor: "pointer",
        justifyContent: "center",
        backgroundColor: "#00c853",
        color: "white",
        border: "none",
        "&:hover": {
            backgroundColor: "#02b94e"
        }
    },
    mainOptionCont: {
        marginBottom: "3px"
    },
    singleMainOptionCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#4a4a4a",
        cursor: "pointer",
        padding: "6px 0px"
    },
    mainIconTitleCont: {
        display: "flex",
        alignItems: "center",
        "& h3": {
            fontSize: "15px",
            marginLeft: "10px",
            fontWeight: "510"
        }
    },
    subIconTitleCont: {
        display: "flex",
        alignItems: "center",
        padding: "3px 0px",
        "& h3": {
            fontSize: "14px",
            marginLeft: "3px",
            fontWeight: "490",
        }
    },
    mainOptionIcon: {
        height: "21px"
    },
    subOptionIcon: {
        fontSize: "18px"
    },
    arrowIcon: {
        fontSize: "22px",
        opacity: "0.5"
    },
    subOptionCont: {
        paddingLeft: "28px",
        marginTop: "2px",
        marginBottom: "10px"
    },
    singleSubOptionCont: {
        width: "100%",
        cursor: "pointer",
        color: "gray",
        "&:hover": {
            backgroundColor: "#f2f0f0"
        }
    },
    blockTextStyle: {
        width: "73%",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    },
    nameEmailCont: {
        marginLeft: "10px",
        "& h3": {
            fontSize: "16px",
            fontWeight: "510"
        },
        "& p": {
            fontSize: "12px",
            fontWeight: "400",
            color: "gray"
        }
    },
    avatarSty: {
        width: "35px",
        height: "35px",
    },
    infoCont: {
        borderTop: "1px solid #dedcdc",
        marginTop: "30px",
        display: "flex",
        paddingTop: "15px",
        alignItems: "center",
        justifyContent: "space-between",
    },
    btnCont: {
        padding: "0px 25px"
    },
    drawerPaper: {
        width: "240px",
        height: "100vh",
        paddingTop: "20px",
        padding: "25px 15px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        scrollbarWidth: "none"
    },
    loaderCont: {
        position: 'fixed',
        top: "0px",
        right: "0px",
        width: "100vw",
        height: "100vh",
        zIndex: "1000",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            paddingLeft: "0px",
        },
    },
}));

export default function AdminLayout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const dispatch = useDispatch()

    const { noTopBar, header, curOption, curSubOption } = props
    const { user } = useSelector((state) => state.auth);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState(false)
    const [openOrder, setOpenOrder] = useState(false)


    const [openNetworks, setOpenNetworks] = useState(false)
    const [openSalesInvoices, setOpenSalesInvoices] = useState(false)
    const [openExpenseBills, setOpenExpenseBills] = useState(false)

    const isMdSmall = useMediaQuery(theme.breakpoints.down("sm"));


    useEffect(() => {
        if (curOption === "categories") {
            setOpenCategories(true)
        } else if (curOption === "orders") {
            setOpenOrder(true)
        } else if (curOption === "MainItem4") {
            setOpenNetworks(true)
        } else if (curOption === "MainItem6") {
            setOpenSalesInvoices(true)
        } else if (curOption === "MainItem7") {
            setOpenExpenseBills(true)
        }
    }, [curOption, curSubOption])

    const logout = () => {
        firebase.auth().signOut()
            .then(function () {
                dispatch({
                    type: "REMOVE_AUTH_USER",
                });

                localStorage.removeItem("token");
            })
            .catch(function (error) {
                console.log(error);
            });
    };



    const sideBarCont = <>
        <div>
            <div
                className={classes.topLogoCont}
                onClick={() => { history.push("/") }}
            >
                <img src={mainLogo} />
                <div>
                    <h3>RepairsCard</h3>
                    <h4>Admin Dashboard</h4>
                </div>
            </div>


            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { history.push("/admin/dashboard/deals-management") }}
                    style={curOption === "dealsManagement" ? { color: "#2A66FF" } : {}}
                >
                    <div className={classes.mainIconTitleCont} >
                        <LocalMallIcon className={classes.mainOptionIcon} />
                        <h3>Deals Management</h3>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { setOpenCategories(!openCategories) }}
                >
                    <div className={classes.mainIconTitleCont} >
                        <CommuteIcon className={classes.mainOptionIcon} />
                        <h3>Categories</h3>
                    </div>
                    {openCategories ? (
                        <MdKeyboardArrowUp className={classes.arrowIcon} />
                    ) : (
                        <MdKeyboardArrowDown className={classes.arrowIcon} />
                    )}
                </div>
                <Collapse in={openCategories} collapsedSize={0}>
                    <div className={classes.subOptionCont} >
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { history.push("/admin/dashboard/car-types") }}
                            style={curSubOption === "carTypes" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Car Types</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { history.push("/admin/dashboard/price") }}
                            style={curSubOption === "price" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Price</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { history.push("/admin/dashboard/car-company") }}
                            style={curSubOption === "carCompany" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Car Company</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { history.push("/admin/dashboard/shuttle") }}
                            style={curSubOption === "shuttle" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Shuttle</h3>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { setOpenOrder(!openOrder) }}
                >
                    <div className={classes.mainIconTitleCont} >
                        <ShoppingCartIcon className={classes.mainOptionIcon} />
                        <h3>Orders</h3>
                    </div>
                    {openOrder ? (
                        <MdKeyboardArrowUp className={classes.arrowIcon} />
                    ) : (
                        <MdKeyboardArrowDown className={classes.arrowIcon} />
                    )}
                </div>
                <Collapse in={openOrder} collapsedSize={0}>
                    <div className={classes.subOptionCont} >
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { history.push("/admin/dashboard/orders-received") }}
                            style={curSubOption === "received" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Received</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { history.push("/admin/dashboard/orders-scheduled") }}
                            style={curSubOption === "scheduled" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Scheduled</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { history.push("/admin/dashboard/orders-completed") }}
                            style={curSubOption === "completed" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>completed</h3>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>


            {/* <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { setOpenFinancialStatements(!openFinancialStatements) }}
                >
                    <div className={classes.mainIconTitleCont} >
                        <img src={optionIcon} className={classes.mainOptionIcon} />
                        <h3>Main Item 3</h3>
                    </div>
                    {openFinancialStatements ? (
                        <MdKeyboardArrowUp className={classes.arrowIcon} />
                    ) : (
                        <MdKeyboardArrowDown className={classes.arrowIcon} />
                    )}
                </div>
                <Collapse in={openFinancialStatements} collapsedSize={0}>
                    <div className={classes.subOptionCont} >
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item1" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 1</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item2" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 2</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item3" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 3</h3>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { setOpenNetworks(!openNetworks) }}
                >
                    <div className={classes.mainIconTitleCont} >
                        <img src={optionIcon} className={classes.mainOptionIcon} />
                        <h3>Main Item 4</h3>
                    </div>
                    {openNetworks ? (
                        <MdKeyboardArrowUp className={classes.arrowIcon} />
                    ) : (
                        <MdKeyboardArrowDown className={classes.arrowIcon} />
                    )}
                </div>
                <Collapse in={openNetworks} collapsedSize={0}>
                    <div className={classes.subOptionCont} >
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item1" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 1</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item2" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 2</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item3" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 3</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item4" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 4</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item5" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 5</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item6" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 6</h3>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { }}
                    style={curOption === "MainItem5" ? { color: "#2A66FF" } : {}}
                >
                    <div className={classes.mainIconTitleCont} >
                        <img src={optionIcon} className={classes.mainOptionIcon} />
                        <h3>Main Item 5</h3>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { setOpenSalesInvoices(!openSalesInvoices) }}
                >
                    <div className={classes.mainIconTitleCont} >
                        <img src={optionIcon} className={classes.mainOptionIcon} />
                        <h3>Main Item 6</h3>
                    </div>
                    {openSalesInvoices ? (
                        <MdKeyboardArrowUp className={classes.arrowIcon} />
                    ) : (
                        <MdKeyboardArrowDown className={classes.arrowIcon} />
                    )}
                </div>
                <Collapse in={openSalesInvoices} collapsedSize={0}>
                    <div className={classes.subOptionCont} >
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item1" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 1</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item2" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 2</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item3" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 3</h3>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { setOpenExpenseBills(!openExpenseBills) }}
                >
                    <div className={classes.mainIconTitleCont} >
                        <img src={optionIcon} className={classes.mainOptionIcon} />
                        <h3>Main Item 7</h3>
                    </div>
                    {openExpenseBills ? (
                        <MdKeyboardArrowUp className={classes.arrowIcon} />
                    ) : (
                        <MdKeyboardArrowDown className={classes.arrowIcon} />
                    )}
                </div>
                <Collapse in={openExpenseBills} collapsedSize={0}>
                    <div className={classes.subOptionCont} >
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item1" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 1</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item2" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 2</h3>
                            </div>
                        </div>
                        <div
                            className={classes.singleSubOptionCont}
                            onClick={() => { }}
                            style={curSubOption === "Item3" ? { color: "#2A66FF" } : {}}
                        >
                            <div className={classes.subIconTitleCont} >
                                <h3>Item 3</h3>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className={classes.mainOptionCont} >
                <div
                    className={classes.singleMainOptionCont}
                    onClick={() => { }}
                    style={curOption === "MainItem8" ? { color: "#2A66FF" } : {}}
                >
                    <div className={classes.mainIconTitleCont} >
                        <img src={optionIcon} className={classes.mainOptionIcon} />
                        <h3>Main Item 8</h3>
                    </div>
                    <div></div>
                </div>
            </div> */}
        </div>
        <div className={classes.infoCont} >
            <div className={classes.blockTextStyle} >
                {user?.displayPicture?.thumbUrl ? (
                    <Avatar
                        src={user?.displayPicture?.thumbUrl}
                        className={classes.avatarSty}
                    />
                ) : (<>{user?.displayPicture?.url ? (
                    <Avatar
                        src={user?.displayPicture?.url}
                        className={classes.avatarSty}
                    />
                ) : (
                    <Avatar
                        src={"https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-users-icon-design-png-image_1014936.jpg"}
                        className={classes.avatarSty}
                    />
                )}</>)}

                <div className={classes.nameEmailCont} >
                    {user?.displayName || user?.email ? (<>
                        <h3>
                            <LessText limit={12} string={user?.displayName} />
                        </h3>
                        <p>
                            <LessText limit={15} string={user?.email} />
                        </p>
                    </>) : (<>
                        <Skeleton variant="text" style={{ width: "170px", height: "30px" }} />
                        <Skeleton variant="text" style={{ width: "150px", height: "15px", marginTop: "-6px" }} />
                    </>)}
                </div>
            </div>

            <IconButton
                onClick={logout}
            >
                <ExitToAppIcon />
            </IconButton>
        </div>
    </>


    return (
        <div className={classes.root}>
            <div className={classes.sideBar} >
                {sideBarCont}
            </div>

            <Drawer
                variant="temporary"
                anchor={"left"}
                open={mobileOpen}
                onClose={() => { setMobileOpen(false) }}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}
            >
                {sideBarCont}
            </Drawer>

            <div className={classes.mainCont} >
                {noTopBar ? (
                    <div className={classes.noAppBarBodyCont} >
                        {props.children}
                    </div>
                ) : (<>
                    <div className={classes.headerSty} >
                        {isMdSmall && (
                            <div className={classes.hamburgerCont} >
                                <IconButton
                                    style={{ padding: "7px" }}
                                    onClick={() => { setMobileOpen(!mobileOpen) }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </div>
                        )}
                        <h3>{header}</h3>
                        <div className={classes.hamburgerCont} ></div>
                    </div>
                    <div className={classes.bodyCont} >
                        {props.children}
                    </div>
                </>)}
            </div>
        </div>
    );
}