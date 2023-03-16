import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./Services";
import MainPhoto from "../svgs/MainPhoto.svg"
import tiresPhoto from "../svgs/tiresPhoto.svg"
import OilPhoto from "../svgs/OilPhoto.svg"
import ServicesPhoto from "../svgs/ServicesPhoto.svg"
import PartsPhoto from "../svgs/PartsPhoto.svg"
import image1 from "../svgs/Rectangle_81.svg"
import image2 from "../svgs/Rectangle_78.svg"
import ImageCont from "../commonComponents/ImageCont";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 90px"
  },
  imgCont: {

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
  headerSty: {
    color: "#003C8A",
    fontSize: "35px",
    fontWeight: "700",
    marginBottom: "20px"
  },
  firstLine: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  secondLine: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  f1Card: {
    width: "66%",
    height: "350px"
  },
  f2Card: {
    width: "32%",
    height: "350px"
  },
  s1Card: {
    width: "32%",
    height: "250px"
  },
  s2Card: {
    width: "32%",
    height: "250px"
  },
  s3Card: {
    width: "32%",
    height: "250px"
  },
}));


const DisCover = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.headerSty} >Discover deals of every type</h2>

      <div className={classes.imgCont} >
        <div className={classes.firstLine} >
          <div className={classes.f1Card} >
            <ImageCont
              image={MainPhoto}
              topTag="BEST DEALS"
              heading="Maintenance"
              bottomLine="semper libero. Aenean"
            />
          </div>
          <div className={classes.f2Card} >
            <ImageCont
              image={tiresPhoto}
              topTag="BEST DEALS"
              heading="Maintenance"
              bottomLine="semper libero. Aenean"
            />
          </div>
        </div>

        <div className={classes.secondLine} >
          <div className={classes.s1Card} >
            <ImageCont
              image={OilPhoto}
              topTag="BEST DEALS"
              heading="Maintenance"
              bottomLine="semper libero. Aenean"
            />
          </div>
          <div className={classes.s2Card} >
            <ImageCont
              image={ServicesPhoto}
              topTag="BEST DEALS"
              heading="Maintenance"
              bottomLine="semper libero. Aenean"
            />
          </div>
          <div className={classes.s3Card} >
            <ImageCont
              image={PartsPhoto}
              topTag="BEST DEALS"
              heading="Maintenance"
              bottomLine="semper libero. Aenean"
            />
          </div>
        </div>
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