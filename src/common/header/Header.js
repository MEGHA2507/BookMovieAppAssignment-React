import React, { Fragment } from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import { useState } from "react";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
//import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import { FormControl, InputLabel, Input } from "@material-ui/core";

Modal.setAppElement("#root");

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography component={"div"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
  },
}));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Header() {
  let loggedIn = false; // later this variable will be dependent on access token
  let releaseMovie = true;

  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [loginForm, setloginForm] = useState([
    {
      id: 0,
      username: "",
      password: "",
    },
  ]);

  function inputChangeHandler(e) {
    const state = loginForm;
    console.log(e.target.value);
    state[e.target.name] = e.target.value;

    setloginForm({ ...loginForm, ...state });
    console.log(loginForm);
  }

  function loginHandler() {
    console.log("state at login", loginForm);

    setloginForm({
      id: 0,
      username: "",
      password: "",
    });
    setIsOpen(false);
  }

  function registerHandler() {
    setIsOpen(false);
  }

  function bookShowBtnHandler() {
    if (loggedIn === true) {
      console.log(window.location.href);
      window.location.href = window.location.href + "api/v1/" + "bookshow/id";
    } else {
      setIsOpen(true);
    }
  }

  const { username, password } = loginForm;

  return (
    <Fragment>
      <div className="header-container">
        <img className="logo-img" src={logo} alt="logo"></img>
        <div className="header-btn-container">
          {releaseMovie ? (
            <Button
              variant="contained"
              color="primary"
              onClick={bookShowBtnHandler}
            >
              Book Show
            </Button>
          ) : (
            ""
          )}
          {loggedIn ? (
            <Button variant="contained" onClick={toggleModal}>
              Login
            </Button>
          ) : (
            <Button variant="contained">Logout</Button>
          )}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={customStyles}
            contentLabel="My dialog"
          >
            <div>
              <div className={classes.root}>
                <Paper position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                    aria-label="simple tabs example"
                  >
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                  </Tabs>
                </Paper>

                <TabPanel value={value} index={0}>
                  <FormControl>
                    <InputLabel htmlFor="username">Username*</InputLabel>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      aria-describedby="my-helper-text"
                      required
                      onChange={inputChangeHandler}
                    />
                  </FormControl>

                  <br />
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="password">Password*</InputLabel>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      required
                      aria-describedby="my-helper-text"
                      onChange={inputChangeHandler}
                    />
                  </FormControl>

                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={loginHandler}
                  >
                    Login
                  </Button>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <FormControl>
                    <InputLabel htmlFor="firstname">Firstname*</InputLabel>
                    <Input id="firstname" aria-describedby="my-helper-text" />
                  </FormControl>
                  <br />
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="lastname">Lastname*</InputLabel>
                    <Input id="lastname" aria-describedby="my-helper-text" />
                  </FormControl>
                  <br />
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="email">Email*</InputLabel>
                    <Input
                      id="email"
                      type="email"
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <br />
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="password">Password*</InputLabel>
                    <Input
                      id="password"
                      type="password"
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <br />
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="contact">Contact No.*</InputLabel>
                    <Input
                      id="contact"
                      type="phone"
                      aria-describedby="my-helper-text"
                    />
                  </FormControl>
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={registerHandler}
                  >
                    Register
                  </Button>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </Fragment>
  );
}
