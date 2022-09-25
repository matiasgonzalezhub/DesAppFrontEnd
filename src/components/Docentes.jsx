import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: "100px",
    height: "100vh",
  },
}));

function Docentes() {
    const { marginTop } = useStyles();
    
  return <div className={marginTop}> Docentes </div>;
}

export default Docentes;
