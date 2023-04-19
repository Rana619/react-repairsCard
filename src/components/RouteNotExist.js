import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const RouteNotExist = (props) => {
    const history = useHistory();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const curUrl = window.location.href
        if (curUrl.includes("/admin")) {
            if (user) {
                if (user?.userType === "Admin") {
                    history.push("/admin/dashboard/deals-management")
                } else {
                    history.push("/")
                }
            } else {
                history.push("/admin/join")
            }
        } else {
            history.push("/")
        }
    }, [user])

    return (<></>);
}
export default RouteNotExist;