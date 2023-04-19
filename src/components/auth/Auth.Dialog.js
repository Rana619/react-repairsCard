import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { IconButton, useMediaQuery } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from '@material-ui/core/Slide';
import { TextField, Button } from '@material-ui/core';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import signinup from "../svgs/signinupSvg.svg"
import image1 from "../svgs/tagSvg.svg"
import image2 from "../svgs/moneySvg.svg"
import { useDispatch } from "react-redux";
import image3 from "../svgs/mailBox.svg"
import CancelIcon from '@material-ui/icons/Cancel';
import * as yup from "yup";
import { Link } from "react-router-dom";
import {
    handleEmailPasswordSignup, handleEmailPasswordLogin,
    handleGoogleLogin, handleGoogleSignup, handleFacebookLogin,
    handleFacebookSignup
} from "./auth.utils"
import ClearIcon from '@material-ui/icons/Clear';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const signupSchema = yup.object().shape({
    fname: yup.string().min(2, 'First name should be 2 chars minimum.').max(50, 'First name should have less then 50 chars.').required("First name should be required"),
    lname: yup.string().max(50, 'Last name should have less then 50 chars.'),
    email: yup.string().email("Not a proper email").required("Mail id should be required"),
    password: yup.string().min(8, 'Too short - should be 8 chars minimum.').matches(passwordRules, { message: "Please create a stronger password" }).required("Password should be required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm password should be required"),
});

const signinSchema = yup.object().shape({
    email: yup.string().email("Not a proper email").required("Mail id should be required"),
    password: yup.string().min(8, 'Too short - should be 8 chars minimum.').matches(passwordRules, { message: "Please create a stronger password" }).required("Pssword should be required"),
});


const useStyles = makeStyles((theme) => ({
    container: {
        padding: "0px",
        position: "relative",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        scrollbarWidth: "none",
    },
    mainCont: {
        width: "700px",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            width: "350px",
            flexDirection: "column",
            overflowY: "auto",
        },
        [theme.breakpoints.down('xs')]: {
            width: "290px",
            flexDirection: "column",
            overflowY: "auto",
        }
    },
    leftSide: {
        width: "50%",
        height: "675px",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    signupCont: {
        width: "100%",
        height: "100%",
        padding: "25px",
        [theme.breakpoints.down("xs")]: {
            padding: "25px 10px 25px",
        },
    },
    signinCont: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        zIndex: "10000",
        padding: "25px",
        backgroundColor: "white",
        [theme.breakpoints.down("xs")]: {
            padding: "25px 10px 25px",
        },
    },
    rightSide: {
        width: "50%",
        height: "675px",
        backgroundColor: "#E8F2FF",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "70px 30px 20px",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "450px",
            padding: "50px 30px 20px",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "30px 10px 20px",
        },
    },
    rigthHeader: {
        margin: "25px 0px",
        color: "#004599"
    },
    divider: {
        width: "100%",
        height: "2px",
        marginBottom: "50px",
        backgroundColor: "#c7c5c5"
    },
    image: {
        width: "70px",
        height: "auto"
    },
    imageTextCont: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        justifyContent: "space-between",
        "& img": {
            width: "23px",
            height: "auto",
            marginRight: "25px"
        },
        "& p": {
            fontSize: "14px",
            fontWeight: "500"
        }
    },
    element: {
        width: "100%",
    },
    header: {
        marginBottom: "20px",
        fontSize: "23px",
        fontWeight: "500"
    },
    orCont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0px 20px",
        "& div": {
            width: "80px",
            height: "1px",
            backgroundColor: "#c7c5c5"
        },
        "& p": {
            fontSize: "14px",
            color: "gray"
        },
        [theme.breakpoints.down("xs")]: {
            "& div": {
                width: "50px",
                height: "1px",
                backgroundColor: "#c7c5c5"
            },
        }
    },
    btnInnerCont: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        "& p": {
            marginLeft: "40px"
        }
    },
    googleBtn: {
        width: "100%",
        marginBottom: "10px",
        border: "1px solid gray",
        "& .MuiButton-label": {
            display: "block",
            paddingLeft: "20px",
            textTransform: "capitalize"
        }
    },
    facebookBtn: {
        width: "100%",
        marginBottom: "10px",
        backgroundColor: "#1877F2",
        color: "white",
        "&:hover": {
            backgroundColor: "#066ef3"
        },
        "& .MuiButton-label": {
            display: "block",
            paddingLeft: "20px",
            textTransform: "capitalize"
        }
    },
    appleBtn: {
        width: "100%",
        marginBottom: "10px",
        backgroundColor: "black",
        color: "white",
        "&:hover": {
            backgroundColor: "black"
        },
        "& .MuiButton-label": {
            display: "block",
            paddingLeft: "20px",
            textTransform: "capitalize"
        }
    },
    createBtn: {
        width: "100%",
        marginBottom: "10px",
        marginTop: "10px",
        color: "white",
        backgroundColor: "#47A216",
        "&:hover": {
            backgroundColor: "#47A216",
        },
        "& .MuiButton-label": {
            textTransform: "capitalize"
        }
    },
    textSty: {
        fontSize: "14px",
        color: "gray",
        "& a": {
            textDecoration: "none",
            color: "#1877F2",
            cursor: "pointer",
        }
    },
    mailBoxCont: {
        padding: "3px 6px 5px",
        borderRadius: "50%",
        backgroundColor: "#1877F2",
        marginRight: "25px",
        "& img": {
            width: "16px"
        }
    },
    closeCont: {
        position: "absolute",
        top: "0px",
        zIndex: "100000",
        right: "0px"
    },
    errorText: {
        color: "red",
        marginTop: "0px",
        marginBottom: "8px",
        fontSize: "12px"
    },
    emptyDiv: {
        marginTop: "0px",
        marginBottom: "10px",
        color: "gray",
        fontSize: "12px"
    },
    userNotCont: {
        width: "100%",
        height: "40px",
        marginBottom: "25px",
        borderRadius: "5px",
        padding: "0px 12px",
        backgroundColor: "rgba(255,0,0,0.2)",
        color: "#3c3232",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& p": {
            fontSize: "14px"
        }
    },
    linkStyle: {
        textDecoration: "none",
        color: "blue",
    },
    termsCont: {
        position: "absolute",
        bottom: "20px",
        left: "30px"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AuthDialog(props) {
    const { openDialog, handleClose, isSignin, setIsSignin } = props
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();

    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const [loginMail, setLoginMail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [signupFName, setSignupFName] = useState("")
    const [signupLName, setSignupLName] = useState("")
    const [signupMail, setSignupMail] = useState("")
    const [signupPassword, setSignupPassword] = useState("")
    const [signupCPassword, setSignupCPassword] = useState("")
    const [loginErrorObj, setLoginErrorObj] = useState({})
    const [signupErrorObj, setSignupErrorObj] = useState({})
    const [noUserExist, setNoUserExist] = useState(false)


    useEffect(() => {
        setLoginErrorObj({});
    }, [loginMail, loginPassword]);

    useEffect(() => {
        setSignupErrorObj({});
    }, [signupFName, signupLName, signupMail, signupPassword]);

    const userNotFoundErr = () => {
        console.log("user not exist")
        setNoUserExist(true)
    }

    const onSignupSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            fname: signupFName,
            lname: signupLName,
            email: signupMail,
            password: signupPassword,
            confirmPassword: signupCPassword
        };

        await signupSchema
            .validate(formData, { abortEarly: false })
            .then(async (data) => {
                const displayName = `${signupFName} ${signupLName}`
                await handleEmailPasswordSignup(dispatch, signupMail, signupPassword, displayName);
            })
            .catch((err) => {
                console.log(err)
                let errorArr = err?.inner;
                let obj = {};
                errorArr && errorArr.length > 0 && errorArr.map((err) => {
                    obj[err?.path] = err?.message;
                });
                setSignupErrorObj(obj);
            });

        handleClose()
    };

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: loginMail,
            password: loginPassword
        };

        await signinSchema
            .validate(formData, { abortEarly: false })
            .then(async (data) => {
                const val = await handleEmailPasswordLogin(dispatch, loginMail, loginPassword, userNotFoundErr)
                // .then((data) => {
                console.log(val)
                if (val) {
                    handleClose()
                }
                // })
                // .catch((err) => {
                //     console.log(err)
                // })
            })
            .catch((err) => {
                let errorArr = err?.inner || [];
                let obj = {};
                errorArr && errorArr.length > 0 && errorArr.map((err) => {
                    obj[err?.path] = err?.message;
                });
                setLoginErrorObj(obj);
            });
    };


    return (
        <Dialog
            open={openDialog}
            onClose={handleClose}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{ style: { maxWidth: "90vw" } }}
        >
            <DialogContent className={classes.container} style={{ padding: "0px" }} >
                <div className={classes.mainCont} >
                    <div className={classes.leftSide}>
                        <form className={classes.signupCont} onSubmit={onSignupSubmit} >
                            <h3 className={classes.header} >Sign Up</h3>
                            <Button className={classes.googleBtn}
                                onClick={(el) => {
                                    handleGoogleSignup(dispatch)
                                    handleClose()
                                }}
                            >
                                <div className={classes.btnInnerCont} >
                                    <FcGoogle style={{ fontSize: "20px" }} />
                                    <p>Sign Up With Google</p>
                                </div>
                            </Button>
                            <Button className={classes.facebookBtn}
                                onClick={() => {
                                    handleFacebookSignup(dispatch)
                                    handleClose()
                                }}
                            >
                                <div className={classes.btnInnerCont} >
                                    <BsFacebook style={{ fontSize: "20px" }} />
                                    <p>Sign Up With Facebook</p>
                                </div>
                            </Button>
                            {/* <Button className={classes.appleBtn} >
                                <div className={classes.btnInnerCont} >
                                    <BsApple style={{ fontSize: "20px" }} />
                                    <p>Sign Up With Apple</p>
                                </div>
                            </Button> */}
                            <div className={classes.orCont} >
                                <div></div>
                                <p>or Register with email</p>
                                <div></div>
                            </div>
                            <TextField
                                id="outlined-basic"
                                label="First Name"
                                placeholder="Enter First Name"
                                variant="outlined"
                                size="small"
                                value={signupFName}
                                onChange={(e) => { setSignupFName(e.target.value) }}
                                className={classes.element}
                            />
                            {signupErrorObj?.fname ? (
                                <p className={classes.errorText} >{signupErrorObj?.fname}</p>
                            ) : (
                                <div className={classes.emptyDiv} ></div>
                            )}
                            <TextField
                                id="outlined-basic"
                                label="Last Name"
                                placeholder="Enter Last Name"
                                variant="outlined"
                                size="small"
                                value={signupLName}
                                onChange={(e) => { setSignupLName(e.target.value) }}
                                className={classes.element}
                            />
                            {signupErrorObj?.lname ? (
                                <p className={classes.errorText} >{signupErrorObj?.lname}</p>
                            ) : (
                                <div className={classes.emptyDiv} ></div>
                            )}
                            <TextField
                                id="outlined-basic"
                                label="Email Address"
                                placeholder="Enter Email Address"
                                variant="outlined"
                                size="small"
                                value={signupMail}
                                onChange={(e) => { setSignupMail(e.target.value) }}
                                className={classes.element}
                            />
                            {signupErrorObj?.email ? (
                                <p className={classes.errorText} >{signupErrorObj?.email}</p>
                            ) : (
                                <div className={classes.emptyDiv} ></div>
                            )}
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                placeholder="Enter Password"
                                variant="outlined"
                                size="small"
                                value={signupPassword}
                                onChange={(e) => { setSignupPassword(e.target.value) }}
                                className={classes.element}
                            />
                            {signupErrorObj?.password ? (
                                <p className={classes.errorText} >{signupErrorObj?.password}</p>
                            ) : (
                                <p className={classes.emptyDiv} >
                                    *Must contain at least one uppercase, one lowercase, one numerical character and one special character. Minimum 8 characters.
                                </p>
                            )}
                            <TextField
                                id="outlined-basic"
                                label="Confirm Password"
                                placeholder="Enter Password Again"
                                variant="outlined"
                                size="small"
                                value={signupCPassword}
                                onChange={(e) => { setSignupCPassword(e.target.value) }}
                                className={classes.element}
                            />
                            {signupErrorObj?.confirmPassword ? (
                                <p className={classes.errorText} >{signupErrorObj?.confirmPassword}</p>
                            ) : (
                                <div className={classes.emptyDiv} ></div>
                            )}
                            <Button className={classes.createBtn} type="submit" >Create  Account</Button>
                            <p className={classes.textSty} >Already have an account? <a
                                onClick={() => { setIsSignin(true) }}
                            >Login</a></p>
                        </form>
                        <Slide direction="right" in={isSignin} mountOnEnter unmountOnExit>
                            <form className={classes.signinCont} onSubmit={onLoginSubmit} >
                                <h3 className={classes.header} >Sign In</h3>
                                <Button className={classes.googleBtn}
                                    onClick={(el) => {
                                        handleGoogleLogin(dispatch)
                                        handleClose()
                                    }}
                                >
                                    <div className={classes.btnInnerCont} >
                                        <FcGoogle style={{ fontSize: "20px" }} />
                                        <p>Sign In With Google</p>
                                    </div>
                                </Button>
                                <Button
                                    className={classes.facebookBtn}
                                    onClick={() => {
                                        handleFacebookLogin(dispatch)
                                        handleClose()
                                    }}
                                >
                                    <div className={classes.btnInnerCont} >
                                        <BsFacebook style={{ fontSize: "20px" }} />
                                        <p>Sign In With Facebook</p>
                                    </div>
                                </Button>
                                {/* <Button className={classes.appleBtn} >
                                    <div className={classes.btnInnerCont} >
                                        <BsApple style={{ fontSize: "20px" }} />
                                        <p>Sign In With Apple</p>
                                    </div>
                                </Button> */}
                                <div className={classes.orCont} >
                                    <div></div>
                                    <p>or Sign In With email</p>
                                    <div></div>
                                </div>
                                {noUserExist && (
                                    <div className={classes.userNotCont} >
                                        <p>Incorrect mail id or password</p>
                                        <ClearIcon
                                            style={{
                                                fontSize: "20px",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => { setNoUserExist(false) }}
                                        />
                                    </div>
                                )}
                                <TextField
                                    id="outlined-basic"
                                    label="Email Address"
                                    placeholder="Enter Email Address"
                                    variant="outlined"
                                    size="small"
                                    value={loginMail}
                                    onChange={(e) => { setLoginMail(e.target.value) }}
                                    className={classes.element}
                                />
                                {loginErrorObj?.email ? (
                                    <p className={classes.errorText} >{loginErrorObj?.email}</p>
                                ) : (
                                    <div className={classes.emptyDiv} ></div>
                                )}
                                <TextField
                                    id="outlined-basic"
                                    label="Password"
                                    placeholder="Enter Password"
                                    variant="outlined"
                                    size="small"
                                    value={loginPassword}
                                    onChange={(e) => { setLoginPassword(e.target.value) }}
                                    className={classes.element}
                                />
                                {loginErrorObj?.password ? (
                                    <p className={classes.errorText} >{loginErrorObj?.password}</p>
                                ) : (
                                    <div className={classes.emptyDiv} ></div>
                                )}
                                <Button className={classes.createBtn} type="submit" >Sign In</Button>
                                <p className={classes.textSty} >Don't have an Account? <a
                                    onClick={() => { setIsSignin(false) }}
                                >Create Account</a></p>
                            </form>
                        </Slide>
                    </div>
                    <div className={classes.rightSide} >
                        <img src={signinup} className={classes.image} />
                        <h3 className={classes.rigthHeader} >{isSignin ? "Why Sign In ?" : "Why Sign Up ?"}</h3>
                        <div className={classes.divider} ></div>
                        <div className={classes.imageTextCont} >
                            <img src={image1} />
                            <p>Always Have Access To Our Best Deals And Prices.</p>
                        </div>
                        <div className={classes.imageTextCont} >
                            <img src={image2} />
                            <p>Get Closer To The Next VIP Tier With Every Trip.</p>
                        </div>
                        <div className={classes.imageTextCont} >
                            <div className={classes.mailBoxCont} >
                                <img src={image3} style={{ marginRight: "0px" }} />
                            </div>
                            <p>Save Even More With Exclusive Discounts - You’ve Earnd Them!</p>
                        </div>
                        <div className={classes.termsCont} >
                            By signing up, you agree to the{" "}
                            <Link className={classes.linkStyle} target="_blank" to="/terms-service">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link className={classes.linkStyle} target="_blank" to="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                    <IconButton
                        className={classes.closeCont}
                        onClick={handleClose}
                    >
                        <CancelIcon
                            style={{
                                fontSize: "30px",
                                color: "#CF3149"
                            }}
                        />
                    </IconButton>
                </div>
            </DialogContent>
        </Dialog>
    );
}