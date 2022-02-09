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
    margin: theme.spacing,
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
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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
      width: 250,
    },
  },
};

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const itemData = [
  {
    img: movieImg,
    title: "new moon",
    author: "author",
  },
  {
    img: movieImg,
    title: "harry potter",
    author: "author",
  },
  {
    img: movieImg,
    title: "baby's day out",
    author: "author",
  },
  {
    img: movieImg,
    title: "money hiest",
    author: "author",
  },
  {
    img: movieImg,
    title: "zero",
    author: "author",
  },
  {
    img: movieImg,
    title: "pushpa",
    author: "author",
  },
  {
    img: movieImg,
    title: "pushpa",
    author: "author",
  },
  {
    img: movieImg,
    title: "pushpa",
    author: "author",
  },
];

const releaseitemData = [
  {
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa2",
    releaseDate: "10/02/2021",
  },
  {
    img: movieImg,
    title: "pushpa",
    releaseDate: "09/02/2021",
  },
  {
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
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  console.log(props);

  return (
    <Fragment>
      <div className="home-header">Upcoming Movies</div>

      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={6}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className="upcoming-movies">
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
                <Link to={`/movie/${item.id}`}>
                  <ImageListItem key={item.img} className="releasedMovies">
                    <img src={item.img} alt={item.title} />

                    <ImageListItemBar
                      title={item.title}
                      subtitle={`Release Date : ${item.releaseDate}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                        ></IconButton>
                      }
                    />
                  </ImageListItem>
                </Link>
              ))}
            </ImageList>
          </div>
        </div>

        <div className="movie-filter-container">
          <Card className={movieFilterClasses.root}>
            <CardContent>
              <Typography variant="h5" component="h2" color="">
                FIND MOVIES BY:
              </Typography>
              <Typography
                className={movieFilterClasses.pos}
                color="textSecondary"
              ></Typography>
              <Typography variant="body2" component="p">
                <FormControl>
                  <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
                  <Input id="movie-name" aria-describedby="my-helper-text" />
                </FormControl>

                {/* <FormControl className={classesForGenre.formControl}>
                  <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
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
                </FormControl> */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
