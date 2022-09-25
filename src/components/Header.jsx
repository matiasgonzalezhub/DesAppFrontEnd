import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#ADD8B5",
  },
  marginLeft: {
    marginLeft: "95%",
  },
}));

function Header() {
  const { header, marginLeft } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar>
        {femmecubatorLogo}{" "}
        <Stack direction="row" spacing={2} className={marginLeft}>
          <Avatar src="/broken-image.jpg" />
        </Stack>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" >
      UnaHur     
    </Typography>
  );
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>     
    </header>
  );
}

export default Header;
