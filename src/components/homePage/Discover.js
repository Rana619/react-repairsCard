import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme, useMediaQuery } from "@material-ui/core";
import Services from "./Services";
import MainPhoto from "../svgs/MainPhoto.svg"
import tiresPhoto from "../svgs/tiresPhoto.svg"
import OilPhoto from "../svgs/OilPhoto.svg"
import ServicesPhoto from "../svgs/ServicesPhoto.svg"
import PartsPhoto from "../svgs/PartsPhoto.svg"
import image1 from "../svgs/Rectangle_81.svg"
import image2 from "../svgs/Rectangle_78.svg"
import ImageCont from "../commonComponents/ImageCont";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px 90px",
    [theme.breakpoints.down('md')]: {
      padding: "50px 40px",
    },
    [theme.breakpoints.down('sm')]: {
      padding: "50px 20px",
    },
    [theme.breakpoints.down('xs')]: {
      padding: "50px 10px",
    },
  },
  headerSty: {
    color: "#003C8A",
    fontSize: "35px",
    fontWeight: "700",
    marginBottom: "40px",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    }
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
  allImageCont: {
    width: "100%",
    height: "300px"
  },
  dotsCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0px 0px"
  },
  unSelectedDot: {
    fontSize: "20px",
    marginRight: "10px",
    color: "black"
  },
  selectedDot: {
    fontSize: "25px",
    marginRight: "10px",
    color: "#2A66FF"
  },
  smallImageCard: {
    width: "100%",
    height: "100%",
  }
}));


const DisCover = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [curPhoto, setCurPhoto] = useState(0)

  const isExMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <h2 className={classes.headerSty} >Discover deals of every type</h2> 
      {isExMobile ? (<div>
        <div className={classes.allImageCont} >
          {curPhoto === 0 && (
            <div className={classes.smallImageCard} >
              <ImageCont
                image={MainPhoto}
                topTag="BEST DEALS"
                heading="Maintenance"
                bottomLine="semper libero. Aenean"
              />
            </div>)}

          {curPhoto === 1 && (
            <div className={classes.smallImageCard} >
              <ImageCont
                image={tiresPhoto}
                topTag="BEST DEALS"
                heading="Maintenance"
                bottomLine="semper libero. Aenean"
              />
            </div>)}

          {curPhoto === 2 && (
            <div className={classes.smallImageCard} >
              <ImageCont
                image={OilPhoto}
                topTag="BEST DEALS"
                heading="Maintenance"
                bottomLine="semper libero. Aenean"
              />
            </div>)}

          {curPhoto === 3 && (
            <div className={classes.smallImageCard} >
              <ImageCont
                image={ServicesPhoto}
                topTag="BEST DEALS"
                heading="Maintenance"
                bottomLine="semper libero. Aenean"
              />
            </div>)}

          {curPhoto === 4 && (
            <div className={classes.smallImageCard} >
              <ImageCont
                image={PartsPhoto}
                topTag="BEST DEALS"
                heading="Maintenance"
                bottomLine="semper libero. Aenean"
              />
            </div>)}
        </div>
        <div className={classes.dotsCont} >
          {curPhoto === 0 ? (
            <FiberManualRecordIcon
              className={classes.selectedDot}
              onClick={() => { }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className={classes.unSelectedDot}
              onClick={() => { setCurPhoto(0) }}
            />
          )}
          {curPhoto === 1 ? (
            <FiberManualRecordIcon
              className={classes.selectedDot}
              onClick={() => { }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className={classes.unSelectedDot}
              onClick={() => { setCurPhoto(1) }}
            />
          )}
          {curPhoto === 2 ? (
            <FiberManualRecordIcon
              className={classes.selectedDot}
              onClick={() => { }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className={classes.unSelectedDot}
              onClick={() => { setCurPhoto(2) }}
            />
          )}
          {curPhoto === 3 ? (
            <FiberManualRecordIcon
              className={classes.selectedDot}
              onClick={() => { }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className={classes.unSelectedDot}
              onClick={() => { setCurPhoto(3) }}
            />
          )}
          {curPhoto === 4 ? (
            <FiberManualRecordIcon
              className={classes.selectedDot}
              onClick={() => { }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className={classes.unSelectedDot}
              onClick={() => { setCurPhoto(4) }}
            />
          )}
        </div>
      </div>) : (
        <div>
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
      )}
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