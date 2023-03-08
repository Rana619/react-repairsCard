import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./Services";
import MainPhoto from "../svgs/MainPhoto.svg"
import tiresPhoto from "../svgs/tiresPhoto.svg"
import OilPhoto from "../svgs/OilPhoto.svg"
import ServicesPhoto from "../svgs/ServicesPhoto.svg"
import PartsPhoto from "../svgs/PartsPhoto.svg"
import image1 from "../svgs/Rectangle 81.svg"
import image2 from "../svgs/Rectangle 78.svg"


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 90px"
  },
  imgCont: {
    display: "flex",
    flexWrap:"wrap",
  },
  imgSty1: {
    height: "380px",
    width: "auto",
    marginRight: "25px",
    marginBottom: "25px",
   
   },
  imgSty2: {
    height: "300px",
    width: "auto",
    marginRight: "35px",
   
  },

}));


const DisCover = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Discover deals of every type</h2>
      <div className={classes.imgCont} >
        <img src={MainPhoto} className={classes.imgSty1} />
        <img src={tiresPhoto} className={classes.imgSty1} />
        <img src={OilPhoto} className={classes.imgSty2} />
        <img src={ServicesPhoto} className={classes.imgSty2} />
        <img src={PartsPhoto} className={classes.imgSty2} />
      </div>
      <Services
        type={"SEASON OF SAVINGS"}
        title={"Engine Services"}
        desc={"Phasellus tincidunt hendrerit mi id suscipit. Nullam elementum dictum ipsum, id dignissim eros. Sed iaculis convallis metus, at convallis dui ullamcorper eget. Nam ut aliquet diam. Nam tempor ullamcorper elit ac egestas. Pellentesque consequat interdum ex, volutpat accumsan massa sodales id."}
        btnText={"LEARN MORE"}
        img={image1}
      />
      <Services
        type={"SEASON OF SAVINGS"}
        title={"Best Washing Services"}
        desc={"Phasellus tincidunt hendrerit mi id suscipit. Nullam elementum dictum ipsum, id dignissim eros. Sed iaculis convallis metus, at convallis dui ullamcorper eget. Nam ut aliquet diam. Nam tempor ullamcorper elit ac egestas. Pellentesque consequat interdum ex, volutpat accumsan massa sodales id."}
        btnText={"LEARN MORE"}
        img={image2}
   />
    </div>
    
  );
}

export default DisCover;