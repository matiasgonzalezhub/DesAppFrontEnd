import React from "react";
import {
  List,
  ListItem,
  Drawer,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import OrderIcon from "@material-ui/icons/ListAlt";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "160px",
  },
  drawerPaper: {
    marginTop: "65px",
  },
});

const SideBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  console.log(history);
  const itemslist = [
    { text: "Dashboard", icon: <HomeIcon />, onclick: () => history.push("/") },
    {
      text: "Pedidos",
      icon: <OrderIcon />,
      onclick: () => history.push("/Pedidos"),
    },
    {
      text: "Docentes",
      icon: <PeopleIcon />,
      onclick: () => history.push("/Docentes"),
    },
  ];
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        {itemslist.map((item, index) => {
          const { text, icon, onclick } = item;
          return (
            <ListItem button key={text} onClick={onclick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
export default withRouter(SideBar);
