//import React, { useState } from "react";
import classes from "./Movie.module.css";
import Navbar from "../Navbar/Navbar";
import Information from "./Information/Information";
import ReactPlayer from "react-player";

const spiderman = {
  name: "Spider-Man: Far from Home",
  image:
    "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/Spider-Man-FarFromHome-rating.jpg?itok=CGe-MMMn",
  genre: "Action/Adventure",
  year: "2019",
  time: "2h 10m",
  cast: "Tom Halland , Zendaya, Jake Gyllenhaal",
  summary:
    "Peter Parker's relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. ",
};

const Movie = (props) => {
  return (
    <div>
      <Navbar />
      <div className={classes.dual}>
        <Information inf={spiderman} />
        <div className={classes.player}>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=Nt9L1jCKGnE"
            className="react-player"
            autoplay="false"
            width="100%"
            height="70%"
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
