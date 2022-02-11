import React, { Fragment } from "react";
import "./Home.css";

import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import movieImg from "../../assets/movie.jpg";
import { Link } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";

import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",

    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const useStylesReleaseMovies = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const cardStyles = makeStyles((theme) => ({
  root: {
    minWidth: 240,
    maxWidth: 240,
    margin: theme.spacing(1),
    color: theme.palette.primary.light,
    fontSize: 12,
    fontWeight: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const useStylesGenre = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 200,
    maxWidth: 200,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const useStylesArtist = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 200,
    maxWidth: 200,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 240,
    },
  },
};

const dateStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    margin: theme.spacing(1),
    width: 200,
  },
}));

const enddateStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: 200,
  },
}));

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const artistNames = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const itemData = [
  { id: 0, img: movieImg, title: "new moon", author: "author" },
  {
    id: 1,
    img: movieImg,
    title: "harry potter",
    author: "author",
  },
  {
    id: 2,
    img: movieImg,
    title: "baby's day out",
    author: "author",
  },
  {
    id: 3,
    img: movieImg,
    title: "money hiest",
    author: "author",
  },
  {
    id: 4,
    img: movieImg,
    title: "zero",
    author: "author",
  },
  {
    id: 5,
    img: movieImg,
    title: "pushpa",
    author: "author",
  },
  {
    id: 6,
    img: movieImg,
    title: "pushpa",
    author: "author",
  },
  {
    id: 7,
    img: movieImg,
    title: "pushpa",
    author: "author",
  },
];

const releaseitemData = [
  {
    id: 0,
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    id: 1,
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    id: 2,
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    id: 3,
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    id: 4,
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    id: 5,
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    id: 6,
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    id: 7,
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    id: 8,
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    id: 9,
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
];

export default function Home(props) {
  const classes = useStyles();
  const classesReleasedMovies = useStylesReleaseMovies();
  const movieFilterClasses = cardStyles();

  const classesForGenre = useStylesGenre();
  const classesForArtist = useStylesArtist();
  const theme = useTheme();
  const classesForReleaseDate = dateStyle();
  const classesForReleaseEndDate = enddateStyle();
  const [personName, setPersonName] = React.useState([]);
  const [artistsName, setArtistName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleArtistsChange = (event) => {
    setArtistName(event.target.value);
  };

  console.log(props);

  return (
    <Fragment>
      <div className="home-header">Upcoming Movies</div>

      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={6}>
          {itemData.map((item) => (
            <ImageListItem key={item.id} className="upcoming-movies">
              <img src={item.img} alt={item.title} />

              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  ></IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <div className="homepage-movie-filter-container">
        <div className="relese-movie-container">
          <div className={classesReleasedMovies.root}>
            <ImageList className={classesReleasedMovies.imageList} cols={4}>
              {releaseitemData.map((item) => (
                // <Link
                //   to={`/api/v1/movie/${item.id}`}

                // >
                <ImageListItem key={item.id} className="releasedMovies">
                  <Link to={`/api/v1/movie/${item.id}`}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="movie-img"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={`Release Date : ${item.releaseDate}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                        ></IconButton>
                      }
                    ></ImageListItemBar>
                  </Link>
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>

        <div className="movie-filter-container">
          <Card className={movieFilterClasses.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                FIND MOVIES BY:
              </Typography>
              <Typography
                className={movieFilterClasses.pos}
                color="textSecondary"
              ></Typography>
              <Typography variant="body2" component="div">
                {/* Movie name */}
                <FormControl>
                  <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
                  <Input id="movie-name" aria-describedby="my-helper-text" />
                </FormControl>

                {/* Genre */}
                <FormControl className={classesForGenre.formControl}>
                  <InputLabel id="demo-mutiple-checkbox-label">
                    Genre
                  </InputLabel>
                  <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Artist */}
                <FormControl className={classesForArtist.formControl}>
                  <InputLabel id="demo-mutiple-checkbox-label">
                    Artists
                  </InputLabel>
                  <Select
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-checkbox"
                    multiple
                    value={artistsName}
                    onChange={handleArtistsChange}
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {artistNames.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={artistsName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Release start Date */}
                <form className={classesForReleaseDate.container} noValidate>
                  <TextField
                    id="releaseDate"
                    label="Release Date Start"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classesForReleaseDate.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>

                {/* Release end Date */}
                <form className={classesForReleaseEndDate.container} noValidate>
                  <TextField
                    id="releaseEndDate"
                    label="Release End Start"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classesForReleaseEndDate.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>

                {/* apply button */}
                <div className="apply-btn-container">
                  <Button
                    variant="contained"
                    className="apply-btn"
                    color="primary"
                  >
                    Apply
                  </Button>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
