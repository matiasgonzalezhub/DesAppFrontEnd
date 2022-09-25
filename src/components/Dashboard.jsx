import React from "react";
import { makeStyles } from "@material-ui/core";
import Pedido from "./Pedido"

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: "100px",
    height: "100vh",
    marginLeft:"250px"
  }
}));

function Dashboard() {
  const { marginTop } = useStyles();

  return <div className={marginTop}> Dashboard </div>;
}

export default Dashboard;
