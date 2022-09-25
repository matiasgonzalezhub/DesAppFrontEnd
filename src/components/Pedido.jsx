import React from "react";
import { Icon, makeStyles } from "@material-ui/core";

import {
  Box,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  IconButton,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      //margin: "right",
      margin: "8px",
      height:"240px"
    },
  },
}));

function Pedido() {
  const { root } = useStyles();

  return (
    <Box className={root}>
      <Card style={{ backgroundColor: "#b4e0bc" }}>
        <CardActionArea>
          <CardHeader
            style={{ textAlign: "left" }}
            avatar={
              <Avatar>
                1
              </Avatar>
            }
            title="Pedido N°1"
            subheader="Fecha : 10/10/2022"
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardMedia
            style={{ paddingTop: "3%" }}
            image="./media/background.png"
            title="Background image"
          />
          <CardContent style={{ textAlign: "left" }}>
            <p>
              <strong>Laboratorio : </strong> 1
            </p>
            <p>
              <strong>Edificio:</strong> Malvinas
            </p>
            <p>
              <strong>Docente : </strong>Juan Perez
            </p>
            <p>
              <strong>Estado :</strong>Aceptado
            </p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Pedido;
