const initialState = {
    user: null,
    userProfile: null,
    loggedIn: localStorage.getItem("token") ? true : false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "AddAuth":
            return {
                ...state,
                ...action.payload,
            };

        case "SET_AUTH_USER":
            return {
                ...state,
                user: action.user,
                loggedIn: true,
            };

        case "REMOVE_AUTH_USER":
            return initialState;

        default:
            return state;
    }
};
