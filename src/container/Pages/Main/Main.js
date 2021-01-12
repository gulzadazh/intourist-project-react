import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import video from '../Videos/video1.mp4';
import img from '../img/map1.png'

const useStyles = makeStyles((theme) => ({
  main: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    // position: "fixed",
    zIndex: -1

  },
  mainFutures: {
  },
  futures: {
    display: "flex",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "120%",
    marginTop: "80px",
    flexDirection: "column",
    padding: "0 150px"
  }
}));
const Main = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainFutures}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <video src={video} autoPlay loop muted className={classes.main} />
        </div>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1>ADVENTURE AWAITS</h1>
        <h2>What are you waiting for?</h2>
      </div> */}
      <div className={classes.futures}>
        <h3 style={{fontWeight: "bolder"}}>Discover Kyrgyzstan with us</h3>
        <p>
        From vast steppes to celestial mountains, from ancient cities along the
        Great Silk Road to impressive modern architecture in Bishkek, from nomadic
        culture to soviet heritage, there is much to discover in the five ‘stans’
        that constitute the region known as Central Asia. The region boasts a population
   of 8 million people and its area is nearly as big as the European Union.</p>
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
        <img src={img}/>
      </div>
    </>
  );
};

export default Main;