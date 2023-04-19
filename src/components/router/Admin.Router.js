import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminLayout from "../admin/Admin.Layout";


const AdminRoute = ({ Component, noTopBar, header, curOption, curSubOption, path, ...rest }) => {
    const { user } = useSelector((state) => state.auth);

    return (
        <Route
            {...rest}
            render={(props) =>
                user && user?._id && user?.userType === "Admin" ? (
                    <AdminLayout
                        noTopBar={noTopBar}
                        header={header}
                        curOption={curOption}
                        curSubOption={curSubOption}
                    >
                        <Component {...rest} />
                    </AdminLayout>
                ) : (
                    <Redirect
                        to={{ pathname: "/admin/join", state: { from: props.location } }}
                    />
                )
            }
            key={path}
        />
    )
};
export default AdminRoute;