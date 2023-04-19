import firebase from "firebase";
import Api from "../../helper/Api";

export const firebaseLoginHelper = async (firebaseUser, dispatch) => {
    let { uid } = firebaseUser;

    const token = await firebase.auth().currentUser.getIdToken(true);
    localStorage.setItem("token", token);
    localStorage.setItem("loggedInFirebaseUId", uid);
    console.log(token, ' yeh aa rha token')

    Api.post("signin/", { firebaseUid: uid })
        .then((user) => {
            console.log("Returned user from backend: ", user);
            dispatch({
                type: "SET_AUTH_USER",
                user: user?.data,
            });
        });
};

export const firebaseSignupHelper = async (firebaseUser, dispatch, displayNameParam) => {
    let { uid, email, displayName } = firebaseUser;
    displayName = displayName || displayNameParam;

    const token = await firebase.auth().currentUser.getIdToken(true);
    localStorage.setItem("token", token);
    localStorage.setItem("loggedInFirebaseUId", uid);
    console.log(token, ' yeh aa rha token')

    await Api.post("signup/", {
        firebaseUid: uid,
        email,
        displayName,
    })
        .then((user) => {
            console.log("Returned user from backend: ", user);
            dispatch({
                type: "SET_AUTH_USER",
                user: user?.data,
            });
        });
};

export const firebaseAdminLoginHelper = async (firebaseUser, dispatch) => {
    let { uid } = firebaseUser;

    const token = await firebase.auth().currentUser.getIdToken(true);
    localStorage.setItem("token", token);
    localStorage.setItem("loggedInFirebaseUId", uid);
    console.log(token, ' yeh aa rha token')

    Api.post("admin/signin", { firebaseUid: uid })
        .then((user) => {
            console.log("Returned user from backend: ", user);
            dispatch({
                type: "SET_AUTH_USER",
                user: user?.data,
            });
        });
};

export const firebaseAdminSignupHelper = async (firebaseUser, dispatch, displayNameParam, secretKey = "") => {
    let { uid, email, displayName } = firebaseUser;
    displayName = displayName || displayNameParam;

    const token = await firebase.auth().currentUser.getIdToken(true);
    localStorage.setItem("token", token);
    localStorage.setItem("loggedInFirebaseUId", uid);
    console.log(token, ' yeh aa rha token')

    await Api.post("admin/signup", {
        firebaseUid: uid,
        email,
        displayName,
        secretKey
    })
        .then((user) => {
            console.log("Returned user from backend: ", user);
            dispatch({
                type: "SET_AUTH_USER",
                user: user?.data,
            });
        });
};

export const handleGoogleLogin = (dispatch, isAdmin = false) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log(result, " is the authenticated user ", result.user);
                    if (isAdmin) {
                        firebaseAdminLoginHelper(result.user, dispatch)
                    } else {
                        firebaseLoginHelper(result.user, dispatch);
                    }
                })
                .catch((e) => {
                    console.log(e, " is the firebase error");
                });
        });
};

export const handleFacebookLogin = (dispatch, isAdmin = false) => {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log(result, " is the authenticated user ", result.user);
                    if (isAdmin) {
                        firebaseAdminLoginHelper(result.user, dispatch)
                    } else {
                        firebaseLoginHelper(result.user, dispatch);
                    }
                })
                .catch((e) => {
                    console.log(e, " is the firebase error");
                });
        });
};

export const handleEmailPasswordLogin = async (dispatch, email, password, setErr, isAdmin = false) => {
    try {
        const auth = firebase.auth();
        await auth.signInWithEmailAndPassword(email, password)
            .then(async (result) => {
                console.log(result);
                if (isAdmin) {
                    await firebaseAdminLoginHelper(result.user, dispatch)
                } else {
                    await firebaseLoginHelper(result.user, dispatch);
                }
                return true
            })
            .catch((e) => {
                setErr(true)
                return false
            });
    } catch (err) {
        console.log(err)
        return false
    }
};

export const handleFacebookSignup = (dispatch, isAdmin = false, secretKey = " ") => {
    const provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            firebase.auth().signInWithPopup(provider)  
                .then((result) => {
                    console.log(result, " is the authenticated user ", result.user);
                    if (isAdmin) {
                        firebaseAdminSignupHelper(result.user, dispatch, " ", secretKey)
                    } else {
                        firebaseSignupHelper(result.user, dispatch, " ");
                    }
                })
                .catch((e) => {
                    console.log(e, " is the firebase error");
                });
        });
};

export const handleGoogleSignup = (dispatch, isAdmin = false, secretKey = " ") => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    console.log(result, " is the authenticated user ", result.user);
                    if (isAdmin) {
                        firebaseAdminSignupHelper(result.user, dispatch, " ", secretKey)
                    } else {
                        firebaseSignupHelper(result.user, dispatch, " ");
                    }
                })
                .catch((e) => {
                    console.log(e, " is the firebase error");
                });
        });
};

export const handleEmailPasswordSignup = (dispatch, email, password, displayNameParam, isAdmin = false, secretKey = " ") => {
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result);
            if (isAdmin) {
                firebaseAdminSignupHelper(result.user, dispatch, displayNameParam, secretKey)
            } else {
                firebaseSignupHelper(result.user, dispatch, displayNameParam);
            }
        })
        .catch((e) => {
            console.log(e, " is the firebase error");
        });
};