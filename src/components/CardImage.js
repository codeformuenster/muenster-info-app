import React from "react";
import clsx from "clsx";
import CardMedia from "@material-ui/core/CardMedia";
import Spinner from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  isLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const CardImage = ({ image, className, title }) => {
  const classes = useStyles();

  const [theImage, setTheImage] = React.useState(null);

  React.useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setTheImage(image);
      };
    } else {
      setTheImage(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAC+0lEQVR4nO3VoQ0CQQAAwauBJr++rwOBoIcXHySG5JOjhltDSEaMX7fj+rwmAKwavw4A4D8ZCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQjP19TABYZSAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQDK28z4BYJWBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAMm4PR8TAFYZCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAydjO+wSAVQYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJAYCQGIgACQGAkBiIAAkBgJAYiAAJGN/HxMAVhkIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJAYCACJgQCQGAgAiYEAkBgIAImBAJCM6/OaALDKQABIDASAxEAASAwEgMRAAEgMBIDEQABIDASAxEAASAwEgMRAAEgMBIDEQABIDASAxEAASAwEgMRAAEgMBIDEQABIDASAxEAASAwEgMRAAEgMBIDEQABIDASAxEAASAwEgMRAAEgMBIDEQABIDASAxEAASAwEgMRAAEgMBIDEQABIDASAxEAASL7hFrW0PRypewAAAABJRU5ErkJggg=="
      );
    }
  }, [image]);

  return theImage === null ? (
    <CardMedia className={clsx(className, classes.isLoading)}>
      <Spinner />
    </CardMedia>
  ) : (
    <CardMedia className={className} image={theImage} title={title} />
  );
};

export default CardImage;
