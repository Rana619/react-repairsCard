import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./Services";
import MainPhoto from "../svgs/MainPhoto.svg"
import tiresPhoto from "../svgs/tiresPhoto.svg"
import OilPhoto from "../svgs/OilPhoto.svg"
import ServicesPhoto from "../svgs/ServicesPhoto.svg"
import PartsPhoto from "../svgs/PartsPhoto.svg"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "50px 90px"
    },
      FirstBox:{
        backgroundColor: 'white',
        borderRadius: "33px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "500px",
        margin: "60px 10px 0px 0px",
        
      },
      main :{
        width: "61%",
        height: "450px",
        borderRadius: "36px",
      },
      MainPhoto :{
        width :"100%",
        height : "450px"
      },
      tires:{
        width: "35%",
        height: "450px",
       borderRadius: "36px",
      },
      tiresPhoto:{
        height :"450px",
        width:"100%",
      },

      SecBox :{
        backgroundColor: 'white',
        borderRadius: "36px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "350px",
        margin: "10px 60px 0px 0px", 
      },
      Oil :{
        width: "30%",
        height: "350px",
       
        borderRadius: "36px",
      },
      OilPhoto:{
        width: "100%",
        height : "350px",
      },
      Services :{
        width: "30%",
        height: "350px",
       
        borderRadius: "36px",
      },
        ServicesPhoto:{
            width: "100%",
        height : "350px",
      },
       PartsPhoto:{
        width : "100%",
        height : "350px",
      },
      Part:{
        width:"35%",
        height: "4350px",
       
        borderRadius: "36px",
      }

}));


const DisCover = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <h2>Discover deals of every type</h2>
           <div className={classes.FirstBox}>
            <div className={classes.main}>
            <img className={classes.MainPhoto} src={MainPhoto}></img>
            </div>
            <div className={classes.tires}>  
            <img className={classes.tiresPhoto} src={tiresPhoto}></img>
            </div>
           </div>
           <div className={classes.SecBox}>
            <div className={classes.Oil}>
            <img className={classes.OilPhoto} src={OilPhoto}></img>
            </div>
            <div className={classes.Services}>
            <img className={classes.ServicesPhoto} src={ServicesPhoto}></img>
            </div>
            <div className={classes.Parts}>
            <img className={classes.PartsPhoto} src={PartsPhoto}></img>
            </div>
           </div>


           <Services/>
           <Services/>


        
        </div>
    );
}

export default DisCover;