import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
     Facility :{
        backgroundColor: 'white',
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "300px",
     }, 

     Social :{
        backgroundColor: '#F7F7F7',
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "300px",
     },

     Copy :{
        backgroundColor: '#001832',
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "60px",
     
     "& h3" :{
        color :"white",
        fontFamily :"inter",
      fontStyle : "normal",
        fontSize: "13px",
        fontWeight: "450",
        display : "flex",
        alignItems : "center",
       
     }
    },
     
}));



const Facility = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <hr></hr>
              <div className={classes.Facility}>
                <div className={classes.Flex}></div>
                <div className={classes.Deals}></div>
                <div className={classes.Problem}></div>
                <div className={classes.Help}></div>
              </div>
              <div className={classes.Social}>
               
              </div>
              <div className={classes.Copy}>
               <h3>Copyright © 2022 Repairs Card, All Rights Reserved.</h3>
              </div>
        </div>
    );
}

export default Facility;