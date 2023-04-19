import React from "react";
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/homePage/HomePage';
import { ConnectedRouter } from "connected-react-router";
import SearchPage from './components/searchPage/SearchPage';
import DealDetails from './components/dealDetails/Deal.Details';
import ScrollToTop from './components/commonComponents/ScrollTop';
import AdminAuth from "./components/auth/Admin.Auth";
import AdminRoute from "./components/router/Admin.Router";
import RouteNotExist from "./components/RouteNotExist";
import CarTypes from "./components/admin/CarTypes"
import CarCompany from "./components/admin/CarCompany"
import DealsManagement from "./components/admin/DealsManagement"
import Price from "./components/admin/Price"
import Shuttle from "./components/admin/Shuttle"
import OrderCompleted from "./components/admin/OrderCompleted";
import OrderScheduled from "./components/admin/OrderScheduled";
import OrderReceived from "./components/admin/OrderReceived";
import PrivacyPolicy from "./components/Privacy.Policy";
import './App.css';

function App(props) {

  return (
    <ConnectedRouter history={props.history}>
      <ScrollToTop />
      <Switch>
        {/* user routes */}
        <Route
          exact
          path="/"
          key="page1"
        >
          <HomePage />
        </Route>
        <Route
          exact
          path="/search/"
          key="page2"
        >
          <SearchPage />
        </Route>
        <Route
          exact
          path="/deal-details/:dealId"
          key="page3"
        >
          <DealDetails />
        </Route>
        <Route
          exact
          path="/privacy-policy"
          key="page4"
        >
          <PrivacyPolicy />
        </Route>
        <Route
          exact
          path="/terms-service"
          key="page4"
        >
          <PrivacyPolicy />
        </Route>





        {/* admin routes */}
        <Route
          exact
          path="/admin/join"
          key="page5"
        >
          <AdminAuth />
        </Route>
        <AdminRoute
          exact
          path="/admin/dashboard/car-types"
          header={"Car Types"}
          curOption={"categories"}
          curSubOption={"carTypes"}
          Component={CarTypes}
        />
        <AdminRoute
          exact
          path="/admin/dashboard/price"
          header={"Price"}
          curOption={"categories"}
          curSubOption={"price"}
          Component={Price}
        />
        <AdminRoute
          exact
          path="/admin/dashboard/car-company"
          header={"Car Company"}
          curOption={"categories"}
          curSubOption={"carCompany"}
          Component={CarCompany}
        />
        <AdminRoute
          exact
          path="/admin/dashboard/shuttle"
          header={"Shuttle"}
          curOption={"categories"}
          curSubOption={"shuttle"}
          Component={Shuttle}
        />
        <AdminRoute
          exact
          path="/admin/dashboard/deals-management"
          header={"Deals Management"}
          curOption={"dealsManagement"}
          curSubOption={""}
          Component={DealsManagement}
        />
        <AdminRoute
          exact
          path="/admin/dashboard/orders-received"
          header={"Received Orders"}
          curOption={"orders"}
          curSubOption={"received"}
          Component={OrderReceived}
        />
        <AdminRoute
          exact
          path="/admin/dashboard/orders-scheduled"
          header={"Scheduled Orders"}
          curOption={"orders"}
          curSubOption={"scheduled"}
          Component={OrderScheduled}
        />
        <AdminRoute
          exact
          path="/admin/dashboard/orders-completed"
          header={"Completed Orders"}
          curOption={"orders"}
          curSubOption={"completed"}
          Component={OrderCompleted}
        />


        {/* to handle unknown routes */}
        <Route
          exact
          key="page404"
          path="*"
        >
          <RouteNotExist />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}
export default App;