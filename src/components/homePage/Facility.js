import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Importance from "./Importance";
import SocialLink from "./SocialLink";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles((theme) => ({

   Facility: {
      backgroundColor: 'white',
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      height: "300px",
   },

   Social: {
      backgroundColor: '#F7F7F7',
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      height: "300px",

   },

   Copy: {
      backgroundColor: '#001832',
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      height: "60px",

      "& h3": {
         color: "white",
         fontFamily: "inter",
         fontStyle: "normal",
         fontSize: "13px",
         fontWeight: "450",
         display: "flex",
         alignItems: "center",

      }
   },

}));



const Facility = (props) => {
   const classes = useStyles();


   return (
      <div className={classes.root}>
         <hr></hr>
         <div className={classes.Facility}>
            <Importance
                icon={<CalendarTodayIcon  />}
               title={"FLEXIBLE BOOKINGS"}
               desc={"Plans change. That’s why we offer free cancellation on most hotels & rental cars."}
            />
            <Importance
               icon={<CalendarTodayIcon  />}
               title={"INCREDIBLE DEALS"}
               desc={"Check out with confidence. Priceline members always get our best price."}
            />
            <Importance
              icon={<CalendarTodayIcon  />}
               title={"NO FLIGHT? NO PROBLEM"}
               desc={"Bundle hotel & rental car deals to build your perfect getaway. No airtime required."}
            />
            <Importance
              icon={<CalendarTodayIcon  />}
               title={"HELP 24/7"}
               desc={"We’re always here for you – reach us 24 hours a day, 7 days a week."}
            />
         </div>
         <div className={classes.Social}>
            <SocialLink
               title={"Our Services"}
               list={["Tires","Parts","Services","Oil Changes","Maintanance"]}

            />
            <SocialLink
               title={"Quick Links"}
               list={["About us","Affiliate","Help","Account","Login","Signup"]}
            />
            <SocialLink
               title={"Connect with Repairs Card"}
               list={["For IOS","For Android","For Android","Twitter","Instagram"]}
            />
         </div>
         <div className={classes.Copy}>
            <h3>Copyright © 2022 Repairs Card, All Rights Reserved.</h3>
         </div>
      </div>
   );
}

export default Facility;