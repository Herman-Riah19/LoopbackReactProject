/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @mui components
import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
// core components
import styles from "../../style/jss/component/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            &save;
            Best application for your digital art value
          </span>
      </div>
    </footer>
  );
}
